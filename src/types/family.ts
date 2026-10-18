export type FamilyRelationship =
  | 'avo'
  | 'avoa'
  | 'pai'
  | 'mae'
  | 'tio'
  | 'tia'
  | 'marido'
  | 'esposa'
  | 'filho'
  | 'filha'
  | 'enteado'
  | 'enteada'
  | 'neto'
  | 'neta'
  | 'primo'
  | 'prima'
  | 'nucleo'
  | 'outro'
  | 'outra';

export interface FamilyMember {
  id: string;
  name: string;
  relationship: FamilyRelationship;
  photo?: string;
  description?: string;
  birthYear?: number;
  deathYear?: number;
  children?: FamilyMember[];
}

export interface FamilyGroup {
  id: string;
  title: string;
  description?: string;
  members: FamilyMember[];
}

export const relationshipLabels: Record<FamilyRelationship, string> = {
  avo: 'Avô',
  avoa: 'Avó',
  pai: 'Pai',
  mae: 'Mãe',
  tio: 'Tio',
  tia: 'Tia',
  marido: 'Marido',
  esposa: 'Esposa',
  filho: 'Filho',
  filha: 'Filha',
  enteado: 'Enteado',
  enteada: 'Enteada',
  neto: 'Neto',
  neta: 'Neta',
  primo: 'Primo',
  prima: 'Prima',
  nucleo: 'Núcleo familiar',
  outro: '',
  outra: '',
};

export const relationshipIcons: Record<FamilyRelationship, string> = {
  avo: '👴🏻',
  avoa: '👵🏻',
  pai: '👨‍🦱',
  mae: '👩‍🦰',
  tio: '👨‍🦱',
  tia: '👩‍🦰',
  marido: '🧔',
  esposa: '👰',
  filho: '🧑‍🦱',
  filha: '👩‍🦱',
  enteado: '🧑‍🦱',
  enteada: '👩‍🦱',
  neto: '👦',
  neta: '👧',
  primo: '🧑‍🦱',
  prima: '👩‍🦱',
  nucleo: '❤️',
  outro: '👨‍🦱',
  outra: '👩‍🦰',
};
