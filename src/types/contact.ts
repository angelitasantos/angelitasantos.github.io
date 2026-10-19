export type ContactType =
  | 'email'
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'website'
  | 'other';

export interface Contact {
  id: string;
  title: string;
  type: ContactType;
  icon: string;
  value: string;
  url?: string;
  description: string;
  featured: boolean;
  copyable: boolean;
}
