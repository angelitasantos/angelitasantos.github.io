import { useEffect } from 'react';
import type { Book } from '../../types';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

const statusLabels: Record<Book['status'], string> = {
  publicado: 'Publicado',
  'em-escrita': 'Em escrita',
  planejado: 'Planejado',
  rascunho: 'Rascunho',
};

const linkLabels: Record<string, string> = {
  amazon: 'Ver na Amazon',
  wattpad: 'Ler no Wattpad',
  goodreads: 'Ver no Goodreads',
  other: 'Acessar link',
};

function BookModal({ book, onClose }: BookModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!book) {
    return null;
  }

  const links = Object.entries(book.links ?? {}).filter(
    (entry): entry is [string, string] =>
      typeof entry[1] === 'string' && entry[1].trim().length > 0,
  );

  return (
    <div className='book-modal-overlay' role='dialog' aria-modal='true'
      aria-label={`Detalhes do livro ${book.title}`} onClick={onClose}>
      <article className='book-modal' onClick={(event) => event.stopPropagation()}>
        <button className='book-modal-close' type='button' onClick={onClose}
          aria-label='Fechar detalhes do livro'>×
        </button>

        <div className='book-modal-cover'>
          {book.cover ? (
            <img src={book.cover} alt={`Capa do livro ${book.title}`} />
          ) : (
            <div className='book-cover-placeholder book-cover-placeholder-large'>
              <span>Angelita Santos</span>
              <strong>{book.title}</strong>
              <small>{book.genre}</small>
            </div>
          )}
        </div>

        <div className='book-modal-content'>
          <div className='book-modal-top'>
            <span className={`book-status book-status-${book.status}`}>{statusLabels[book.status]}</span>

            {book.publicationYear && (<span className='book-year'>{book.publicationYear}</span>)}
          </div>

          <h2>{book.title}</h2>

          {book.subtitle && (<p className='book-modal-subtitle'>{book.subtitle}</p>)}

          <p className='book-genre'>{book.genre}</p>

          <div className='book-synopsis'>
            <h3>Sobre a obra</h3>
            <p>{book.synopsis}</p>
          </div>

          {links.length > 0 && (
            <div className='book-links'>
              {links.map(([platform, url]) => (
                <a key={platform} className='book-link' href={url} target='_blank' rel='noreferrer'>
                  {linkLabels[platform] ?? 'Acessar link'}
                  <span aria-hidden='true'>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default BookModal;
