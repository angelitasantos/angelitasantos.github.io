import type { Contact } from '../../types';

export interface ContactCardProps {
  contact: Contact;
  isCopied: boolean;
  onCopy: (contact: Contact) => void;
}

export const actionLabels: Record<Contact['type'], string> = {
  email: 'Enviar e-mail',
  github: 'Abrir GitHub',
  linkedin: 'Abrir LinkedIn',
  instagram: 'Abrir Instagram',
  website: 'Acessar página',
  other: 'Acessar link',
};
