import type { HobbyCategory } from '../types';

export type HobbyFilter = 'todos' | HobbyCategory;

export interface HobbyFilterOption {
  value: HobbyFilter;
  label: string;
}

export const HOBBY_CATEGORY_LABELS: Record<HobbyCategory, string> = {
  criatividade: 'Criatividade',
  cultura: 'Cultura',
  tecnologia: 'Tecnologia',
  'bem-estar': 'Bem-estar',
  lazer: 'Lazer',
};

export const HOBBY_FILTERS: HobbyFilterOption[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'criatividade', label: 'Criatividade' },
  { value: 'cultura', label: 'Cultura' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'bem-estar', label: 'Bem-estar' },
  { value: 'lazer', label: 'Lazer' },
];

export const HOBBIES_PAGE_TITLE = 'Hobbies | Angelita Santos';
