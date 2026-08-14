import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { contentSlug, sortContents } from '../lib/content';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async () => {
  const articles = sortContents(await getCollection('conteudos', ({ data }) => !data.draft));
  const items = articles
    .map((entry) => {
      const link = `${site.url}/conteudos/${contentSlug(entry)}/`;

      return `<item>
        <title>${escapeXml(entry.data.title)}</title>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${entry.data.publishedAt.toUTCString()}</pubDate>
        <description>${escapeXml(entry.data.description)}</description>
      </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Conteúdos INFINICOM</title>
        <link>${site.url}/conteudos/</link>
        <description>Conteúdos sobre conectividade, gestão e telecomunicações para empresas.</description>
        <language>pt-BR</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
