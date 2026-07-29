import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");
  // Ordem manual via campo `order` do frontmatter — menor primeiro
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function getProjectUrl(slug: string): string {
  return `/projetos/${slug}`;
}

