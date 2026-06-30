import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const routes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/routes' }),
  schema: z.object({
    title: z.string(),
    distance_km: z.number(),
    duration_days: z.number(),
    region: z.string(),
    difficulty: z.enum(['easy', 'moderate', 'challenging', 'epic']),
    type: z.string(),
    hero_image: z.string().default('/images/routes/placeholder.jpg'),
    key_stops: z.array(z.string()).default([]),
    tips: z.array(z.string()).default([]),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    end_date: z.string().optional(),
    location: z.string(),
    meeting_point: z.string(),
    departure_time: z.string(),
    distance_km: z.number(),
    status: z.enum(['upcoming', 'past']),
    hero_image: z.string().default('/images/events/placeholder.jpg'),
    whatsapp_link: z.string().optional(),
    recap_slug: z.string().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.string(),
    type: z.enum(['story', 'video']),
    excerpt: z.string(),
    hero_image: z.string().default('/images/stories/placeholder.jpg'),
    youtube_url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { routes, events, stories };
