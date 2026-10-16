import { Link, useParams } from 'react-router-dom';
import { sections } from '../../data/sections';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './SectionPlaceholder.css';

function SectionPlaceholder() {
  useDocumentTitle('Seção | Angelita Santos');

  const { sectionId } = useParams<{ sectionId: string }>();

  const section = sections.find((item) => item.id === sectionId);

  if (!section) {
    return (
      <main className='placeholder-page'>
        <p className='hero-eyebrow'>Página não encontrada</p>
        <h1>Esta seção não existe.</h1>

        <Link className='primary-button' to='/'>
          Voltar ao início
        </Link>
      </main>
    );
  }

  return (
    <main className='placeholder-page'>
      <span className='placeholder-icon' aria-hidden='true'>
        {section.icon}
      </span>

      <p className='hero-eyebrow'>Seção em construção</p>
      <h1>{section.title}</h1>

      <p>
        Esta página será construída nas próximas etapas. Os conteúdos serão
        organizados em arquivos JSON.
      </p>

      {section.locked && (
        <p className='notice'>
          Esta seção terá um resumo público e uma área adicional com login
          demonstrativo.
        </p>
      )}

      <Link className='primary-button' to='/'>
        <span aria-hidden='true'>←</span>
        Voltar ao início
      </Link>
    </main>
  );
}

export default SectionPlaceholder;
