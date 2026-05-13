import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllProjects(): Promise<CollectionEntry<"projects">[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => {
    // Featured first, then by startDate descending
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    return b.data.startDate.getTime() - a.data.startDate.getTime();
  });
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function getProjectUrl(slug: string): string {
  return `/projetos/${slug}`;
}

