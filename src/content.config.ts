import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contentDirectory =
	process.env.NODE_ENV === 'production'
		? './src/content/blog'
		: process.env.PRIVATE_DRAFTS_DIR || './src/content/blog';

const blog = defineCollection({
	// Local preview can read from a private directory; production always reads the public content folder.
	loader: glob({ base: contentDirectory, pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(['website-development', 'finance', 'daily-life']),
			draft: z.boolean().default(false),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
