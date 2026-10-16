export type SectionId =
  | 'hobbies'
  | 'academica'
  | 'profissional'
  | 'projetos'
  | 'familia'
  | 'literatura'
  | 'contato';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  icon: string;
  path: string;
  locked: boolean;
}
