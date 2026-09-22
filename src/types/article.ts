export interface ArticleSection {
  heading?: string;
  headingEn?: string;
  content: string;
  contentEn?: string;
  bulletPoints?: string[];
  bulletPointsEn?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  date: string;
  isoDate: string;
  author: string;
  authorRole: string;
  authorRoleEn: string;
  readTime: string;
  category: "Market Trends" | "Quality Standards" | "Industry Insight" | "Commodities";
  categoryLabel: string;
  thumbnail: string;
  featured?: boolean;
  content: string;
  contentEn?: string;
  keyTakeaways?: string[];
  keyTakeawaysEn?: string[];
  sections?: ArticleSection[];
}
