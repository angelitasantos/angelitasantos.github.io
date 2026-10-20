import type { Book } from '../../types';

interface BookCardProps {
  book: Book;
  onSelect: (book: Book) => void;
}

const statusLabels: Record<Book['status'], string> = {
  publicado: 'Publicado',
  'em-escrita': 'Em escrita',
  planejado: 'Planejado',
  rascunho: 'Rascunho',
};

function BookCard({ book, onSelect }: BookCardProps) {
  return (
    <button className={`book-card ${book.featured ? 'book-card-featured' : ''}`}
      type='button' onClick={() => onSelect(book)} aria-label={`Ver detalhes do livro ${book.title}`}>
      <div className='book-card-cover'>
        {book.cover ? (
          <img src={book.cover} alt={`Capa do livro ${book.title}`} />
        ) : (
          <div className='book-cover-placeholder'>
            <span>Angelita Santos</span>
            <strong>{book.title}</strong>
            <small>{book.genre}</small>
          </div>
        )}
      </div>

      <div className='book-card-content'>
        <div className='book-card-top'>
          <span className={`book-status book-status-${book.status}`}>
            {statusLabels[book.status]}
          </span>

          {book.featured && (<span className='book-featured' title='Livro em destaque'>✦</span>)}
        </div>

        <h2>{book.title}</h2>
        {book.subtitle && <p className='book-subtitle'>{book.subtitle}</p>}

        <p className='book-genre'>{book.genre}</p>

        <span className='book-details-link'>Ver detalhes <span aria-hidden='true'>→</span></span>
      </div>
    </button>
  );
}

export default BookCard;
