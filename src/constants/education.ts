import type { Education, EducationLevel } from '../types';

export type EducationFilter = 'todos' | EducationLevel;

export interface EducationFilterOption {
  value: EducationFilter;
  label: string;
}

export const EDUCATION_PAGE_TITLE = 'Educação | Angelita Santos';

export const EDUCATION_STATUS_LABELS: Record<
  Education['status'],
  string
> = {
  concluido: 'Concluído',
  'em-andamento': 'Em andamento',
  pausado: 'Pausado',
  planejado: 'Planejado',
};

export const EDUCATION_STATUS_CLASS_NAMES: Record<
  Education['status'],
  string
> = {
  concluido: 'badge--success',
  'em-andamento': 'badge--warning',
  pausado: 'badge--paused',
  planejado: 'badge--neutral',
};

export const EDUCATION_LEVEL_LABELS: Record<
  Education['level'],
  string
> = {
  tecnico: 'Técnico',
  graduacao: 'Graduação',
  'pos-graduacao': 'Pós-graduação',
  curso: 'Curso',
  certificacao: 'Certificação',
  workshop: 'Workshop',
};

export const EDUCATION_FILTERS: EducationFilterOption[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'graduacao', label: 'Graduação' },
  { value: 'pos-graduacao', label: 'Pós-graduação' },
  { value: 'curso', label: 'Cursos' },
  { value: 'certificacao', label: 'Certificações' },
  { value: 'workshop', label: 'Workshops' },
];

export const EDUCATION_MONTHS = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
] as const;
