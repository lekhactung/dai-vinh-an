export type PostCategory =
  | "tin-doanh-nghiep"
  | "kien-thuc-sat-thep"
  | "thong-tin-san-pham"
  | "cong-trinh"
  | "tin-nganh";

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: PostCategory;
  categoryLabel: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  featured?: boolean;
}
