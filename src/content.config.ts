import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
});

const houseplant = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/houseplant' }),
  schema: articleSchema,
});

const succulent = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/succulent' }),
  schema: articleSchema,
});

const gardening = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gardening' }),
  schema: articleSchema,
});

export const collections = { houseplant, succulent, gardening };
