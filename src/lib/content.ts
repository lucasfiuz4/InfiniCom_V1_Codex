import type { CollectionEntry } from 'astro:content';

export const categorySlugs: Record<string, string> = {
  Conectividade: 'conectividade',
  Gestão: 'gestao',
};

export function contentSlug(entry: CollectionEntry<'conteudos'>) {
  return entry.id.replace(/\.(md|mdx)$/i, '');
}

export function categorySlug(category: string) {
  return categorySlugs[category] ?? category.toLocaleLowerCase('pt-BR');
}

export function formatContentDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
}

export function readingTime(body: string) {
  const words = body
    .replace(/[#*_>`\[\]()!-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min de leitura`;
}

export function sortContents(entries: CollectionEntry<'conteudos'>[]) {
  return [...entries].sort(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
      a.data.title.localeCompare(b.data.title, 'pt-BR'),
  );
}
