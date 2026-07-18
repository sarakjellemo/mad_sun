export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  coverImageAlt: string;
  href: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  coverImage: string;
  coverImageAlt: string;
  readingTime: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  linkedIn?: string;
}
