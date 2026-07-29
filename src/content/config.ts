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
    embedProvider: z.enum(["render", "itch"]).default("render"),
    embedNote: z.string().optional(),
    coverImage: z.string().optional(),
    screenshots: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    privateProject: z.boolean().default(false),
    // Posição no grid — menor primeiro. Projetos sem order vão para o fim.
    order: z.number().default(999),
    tags: z.array(z.string()).default([]),
    files: z.object({
      encoding: z.literal("utf8")
    }).optional()
  }),
});

export const collections = { projects };
