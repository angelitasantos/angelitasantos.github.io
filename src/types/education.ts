export type EducationStatus =
  | 'concluido'
  | 'em-andamento'
  | 'pausado'
  | 'planejado';

export type EducationLevel =
  | 'tecnico'
  | 'graduacao'
  | 'pos-graduacao'
  | 'curso'
  | 'certificacao'
  | 'workshop';

export interface Education {
  id: string;
  course: string;
  institution: string;
  level: EducationLevel;
  status: EducationStatus;
  startDate?: string;
  endDate?: string;
  description?: string;
  skills?: string[];
  certificateUrl?: string;
  image?: string;
}
