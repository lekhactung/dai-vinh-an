export interface Specification {
  label: string;
  value: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  images: string[];
  specifications: Specification[];
  brands?: string[];
  standard?: string;
  applications: string[];
  featured?: boolean;
}
