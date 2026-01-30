import { defineCollection, z } from "astro:content";

const pocs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    repo: z.string().url(),
    repoName: z.string(),
    category: z.string(),
    industries: z.array(z.string()).default([]),
    capabilities: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    updatedAt: z.string().optional(),
  }),
});

export const collections = { pocs };
