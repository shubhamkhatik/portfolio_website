export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  slug: string;
  path: string;
  published_at: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  cover_image: string | null;
  social_image: string | null;
  positive_reactions_count: number;
  comments_count: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
    profile_image_90: string;
  };
}

const DEVTO_API_BASE = "https://dev.to/api/articles";
const USERNAME = "shubhamkhatik";

export async function getDevToArticles(): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      `${DEVTO_API_BASE}?username=${USERNAME}&per_page=10`,
      { next: { revalidate: 86400 } } // ISR: revalidate every 24 hours
    );

    if (!res.ok) {
      throw new Error(`Dev.to API error: ${res.status}`);
    }

    const articles: DevToArticle[] = await res.json();
    return articles;
  } catch (error) {
    console.error("Failed to fetch Dev.to articles:", error);
    return [];
  }
}
