import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../../components/Literature/BookCard';
import BookModal from '../../components/Literature/BookModal';
import { books } from '../../data/literature/literature';
import type { Book, BookGenre } from '../../types';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Literature.css';

type BookFilter = 'todos' | BookGenre;

interface FilterOption {
  value: BookFilter;
  label: string;
}

const filters: FilterOption[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'romance', label: 'Romance' },
  { value: 'conto', label: 'Conto' },
  { value: 'antologia', label: 'Antologia' },
];

function Literature() {
  useDocumentTitle('Literatura | Angelita Santos');

  const [selectedFilter, setSelectedFilter] = useState<BookFilter>('todos');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = books.filter((book) => {
    if (selectedFilter === 'todos') {
      return true;
    }

    return book.genre === selectedFilter;
  });

  const publishedBooks = books.filter(
    (book) => book.status === 'publicado',
  ).length;

  const booksInProgress = books.filter(
    (book) => book.status === 'em-escrita',
  ).length;

  const genres = new Set(books.map((book) => book.genre)).size;

  return (
    <main className='literature-page'>
      <header className='literature-header'>
        <Link className='back-link' to='/'>
          <span aria-hidden='true'>←</span>
          Voltar ao início
        </Link>

        <p className='hero-eyebrow'>Escrita e literatura</p>

        <h1>
          Histórias em
          <span>palavras</span>
        </h1>

        <p className='literature-introduction'>
          Um espaço para reunir meus livros, projetos literários, rascunhos e
          histórias que fazem parte da minha jornada como escritora.
        </p>
      </header>

      <section className='literature-summary' aria-label='Resumo literário'>
        <article className='literature-summary-card'>
          <strong>{books.length}</strong>
          <span>Obras no portfólio</span>
        </article>

        <article className='literature-summary-card'>
          <strong>{publishedBooks}</strong>
          <span>Livros publicados</span>
        </article>

        <article className='literature-summary-card'>
          <strong>{booksInProgress}</strong>
          <span>Em processo de escrita</span>
        </article>

        <article className='literature-summary-card'>
          <strong>{genres}</strong>
          <span>Gêneros literários</span>
        </article>
      </section>

      <section
        className='literature-filter-area'
        aria-label='Filtros de livros'
      >
        <div>
          <p className='filter-label'>Explorar obras</p>

          <div className='literature-filters'>
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-button ${
                  selectedFilter === filter.value ? 'filter-button-active' : ''
                }`}
                type='button'
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <p className='books-counter'>
          {filteredBooks.length}{' '}
          {filteredBooks.length === 1 ? 'obra encontrada' : 'obras encontradas'}
        </p>
      </section>

      {filteredBooks.length > 0 ? (
        <section className='books-grid' aria-label='Lista de livros'>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onSelect={setSelectedBook} />
          ))}
        </section>
      ) : (
        <section className='empty-projects'>
          <span aria-hidden='true'>📖</span>
          <h2>Nenhuma obra encontrada</h2>
          <p>Escolha outro filtro para visualizar os livros disponíveis.</p>
        </section>
      )}

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </main>
  );
}

export default Literature;
