export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  published: boolean;
  tags: string[];
  cover?: string;
  body: string;
  metadata: { readingTime: number; wordCount: number };
  excerpt?: string;
}

export interface Project {
  title: string;
  description: string;
  slug: string;
  date: string;
  published: boolean;
  featured: boolean;
  tags: string[];
  cover?: string;
  url?: string;
  repository?: string;
  body: string;
}
