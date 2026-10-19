export type HobbyCategory =
  | 'criatividade'
  | 'cultura'
  | 'tecnologia'
  | 'bem-estar'
  | 'lazer';

export type HobbyAccent = 'terracotta' | 'sage' | 'gold' | 'plum' | 'blue';

export interface Hobby {
  id: string;
  title: string;
  category: HobbyCategory;
  icon: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image?: string;
  accent: HobbyAccent;
  featured: boolean;
}
