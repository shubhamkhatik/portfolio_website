export interface SocialHighlight {
  id: number;
  platform: "linkedin" | "twitter";
  title: string;
  description: string;
  url: string;
  date: string;
  engagement?: string;
}

