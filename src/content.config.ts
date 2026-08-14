import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const conteudos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conteudos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      category: z.enum(['Conectividade', 'Gestão']),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      keyPoints: z.array(z.string()).min(2).max(4),
      relatedSolution: z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
        cta: z.string(),
      }),
    }),
});

export const collections = { conteudos };
