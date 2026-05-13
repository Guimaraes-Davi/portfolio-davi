import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["finalizado", "em-andamento", "futuro"]),
    shortDescription: z.string().max(160),
    description: z.string(),
    stack: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    embedUrl: z.string().optional(),
    embeddable: z.boolean().default(false),
    coverImage: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    privateProject: z.boolean().default(false),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
