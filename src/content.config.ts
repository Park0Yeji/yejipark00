import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project = single source of truth.
// Listing cards AND the detail page are both generated from these.
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(), // descriptive label, e.g. "Research Project"
    category: z.enum(["Academic Project", "Design Project", "Toy Project"]),
    axis: z.string().optional(), // research axis tag (next-generation / seamless & fluid / user-context-attuned)
    theme: z.string().optional(), // short research theme shown as the orange card tag
    badge: z.string().optional(), // small venue badge on the card, e.g. "ETRA 2025"
    year: z.string(),
    order: z.number(), // display order (lower = first / more recent)
    featured: z.boolean().default(false),
    image: z.string(),
    gallery: z.array(z.string()).default([]),
    venue: z.string().optional(),
    authors: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    summary: z.string(),
  }),
});

export const collections = { works };
