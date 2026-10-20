export type BookStatus = 'publicado' | 'em-escrita' | 'planejado' | 'rascunho';

export type BookGenre = 'antologia' | 'romance' | 'conto';

export interface BookLinks {
  amazon?: string;
  wattpad?: string;
  goodreads?: string;
  other?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  cover?: string;
  genre: string;
  publicationYear?: number;
  synopsis: string;
  status: BookStatus;
  featured: boolean;
  links?: BookLinks;
}
