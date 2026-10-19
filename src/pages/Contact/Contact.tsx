import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/Contact/ContactCard';
import { contacts } from '../../data/contacts/contacts';
import type { Contact } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Contact.css';

function Contact() {
  useDocumentTitle('Contato | Angelita Santos');

  const [copiedContactId, setCopiedContactId] = useState<string | null>(null);
  const featuredContacts = contacts.filter((contact) => contact.featured);

  const primaryContact =
    contacts.find((contact) => contact.type === 'email') ?? contacts[0];

  async function handleCopy(contact: Contact): Promise<void> {
    try {
      await navigator.clipboard.writeText(contact.value);

      setCopiedContactId(contact.id);

      window.setTimeout(() => {
        setCopiedContactId(null);
      }, 2000);
    } catch {
      setCopiedContactId(null);
    }
  }

  return (
    <main className='contact-page'>
      <header className='contact-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span> Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Vamos conversar</p>

        <h1>Entre em<span>contato</span></h1>

        <p className='contact-introduction'>
          Você pode me encontrar pelos canais abaixo para conversar sobre
          projetos, tecnologia, literatura, experiências profissionais ou novas
          possibilidades.
        </p>
      </header>

      {primaryContact && (
        <section className='contact-featured-area'>
          <div className='contact-featured-icon' aria-hidden='true'>
            {primaryContact.icon}
          </div>

          <div>
            <p className='hero-eyebrow'>Canal principal</p>

            <h2>{primaryContact.title}</h2>

            <p>{primaryContact.value}</p>
          </div>

          <div className='contact-featured-actions'>
            {primaryContact.url && (
              <a className='primary-button' href={primaryContact.url}>
                Enviar mensagem<span aria-hidden='true'>→</span>
              </a>
            )}

            {primaryContact.copyable && (
              <button className='contact-copy-main-button' type='button' onClick={() => handleCopy(primaryContact)}>
                {copiedContactId === primaryContact.id
                  ? 'E-mail copiado!'
                  : 'Copiar e-mail'}
              </button>
            )}
          </div>
        </section>
      )}

      <section className='contact-section'>
        <div className='contact-section-heading'>
          <div>
            <p className='hero-eyebrow'>Canais públicos</p>
            <h2>Onde me encontrar</h2>
          </div>

          <p>{featuredContacts.length} canais principais para acompanhar meu trabalho e entrar em contato.</p>
        </div>

        <div className='contacts-grid'>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} isCopied={copiedContactId === contact.id} onCopy={handleCopy} />
          ))}
        </div>
      </section>

      <section className='contact-message'>
        <span aria-hidden='true'>✨</span>

        <p>Obrigada por visitar meu portfólio. Será um prazer receber sua mensagem.</p>
      </section>
    </main>
  );
}

export default Contact;
