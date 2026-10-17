export type ProfessionalExperienceType =
  | 'clt'
  | 'pj'
  | 'freelancer'
  | 'estagio'
  | 'voluntariado'
  | 'projeto-pessoal';

export interface ProfessionalExperience {
  id: string;
  company: string;
  role: string;
  type: ProfessionalExperienceType;
  startDate: string;
  endDate?: string;
  current: boolean;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies?: string[];
  skills?: string[];
  logo?: string;
  visibleInPublicSummary: boolean;
}
