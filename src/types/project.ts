export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  repositoryUrl?: string;
  projectUrl?: string;
  image?: string;
  category: string;
  featured: boolean;
  status: 'concluido' | 'em-andamento' | 'arquivado';
  links?: ProjectLink[];
}
