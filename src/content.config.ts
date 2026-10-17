import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    siteTitle: z.string(),
    siteDescription: z.string(),
    contactEmail: z.string(),
    contactTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    contactDescription: z.string(),
    contactFormSubmit: z.string(),
    contactFormSuccess: z.string(),
    contactFormError: z.string(),
    contactFields: z.array(
      z.object({
        name: z.string(),
        label: z.string(),
        type: z.enum(['Parasts lauks', 'E-pasta lauks', 'Ziņas lauks']),
      })
    ),
    heroKicker: z.string(),
    heroTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    heroDescription: z.string(),
    projectsTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    projectsLink: z.string(),
    blogTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    blogDescription: z.string(),
    blogLink: z.string(),
    blogReadMoreTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    blogAllPosts: z.string(),
    exploreNextTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    ctaTitle: z.object({ lead: z.string(), main: z.string().optional() }),
    ctaLink: z.string(),
    partnersLabel: z.string(),
    navLinksLeft: z.array(
		z.object({ 
			section: z.enum(['Sākums', 'Darbi', 'Klade', 'Sazināties']), 
			label: z.string() 
		})
	),
    navLinksRight: z.array(
		z.object({ 
			section: z.enum(['Sākums', 'Darbi', 'Klade', 'Sazināties']), 
			label: z.string()
		})
	),
    footerHeadline: z.object({ lead: z.string(), muted: z.string().optional() }),
    footerLargeText: z.string(),
    footerBrand: z.string(),
    footerBackToTop: z.string(),
    socialLinksLeft: z.array(
      z.object({
        href: z.string(),
        label: z.string(),
        type: z.enum(['Instagram', 'Youtube']),
        color: z.enum(['Melns', 'Zils']),
      })
    ),
    socialLinksRight: z.array(
      z.object({
        href: z.string(),
        label: z.string(),
        type: z.enum(['Instagram', 'Youtube']),
        color: z.enum(['Melns', 'Zils']),
      })
    ),
  }),
});

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
