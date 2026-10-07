import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		thumbnail: z.string(),
		titleImage: z.string(),
		hoverVideoUrl: z.string().optional(),
		youtubeId: z.string().optional(),
		year: z.string(),
		datetime: z.coerce.date().default(() => new Date()),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		thumbnail: z.string(),
		titleImage: z.string(),
		datetime: z.coerce.date().default(() => new Date()),
	}),
});

export const collections = { projects, blog };
