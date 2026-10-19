import { actionLabels, type ContactCardProps } from './ContactCard.types';

function ContactCard({ contact, isCopied, onCopy }: ContactCardProps) {
  return (
    <article className={`contact-card ${contact.featured ? 'contact-card-featured' : ''}`}>
      <div className='contact-card-icon' aria-hidden='true'>{contact.icon}</div>

      <div className='contact-card-content'>
        <h2>{contact.title}</h2>
        <p className='contact-value'>{contact.value}</p>
        <p className='contact-description'>{contact.description}</p>
      </div>

      <div className='contact-card-actions'>
        {contact.url && (
          <a className='contact-link' href={contact.url} target={contact.type === 'email' ? undefined : '_blank'}
            rel={contact.type === 'email' ? undefined : 'noreferrer'}>
            {actionLabels[contact.type]}
            <span aria-hidden='true'>↗</span>
          </a>
        )}

        {contact.copyable && (
          <button className='copy-contact-button' type='button' onClick={() => onCopy(contact)}>
            {isCopied ? 'Copiado!' : 'Copiar'}
            <span aria-hidden='true'>{isCopied ? '✓' : '⧉'}</span>
          </button>
        )}
      </div>
    </article>
  );
}

export default ContactCard;
