
export type Language = 'en' | 'fr' | 'it' | 'de';

export interface Product {
  id: string;
  nameKey: string;
  subtitleKey: string;
  descriptionKeys: string[];
  featuresKeys: string[];
  ageRange: string;
  image: string;
  price?: string;
}

export interface NavLink {
  nameKey: string;
  path: string;
}
