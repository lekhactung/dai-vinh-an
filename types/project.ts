export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  type: string;
  products: string[];
  description: string;
  images: string[];
  year?: number;
  featured?: boolean;
}
