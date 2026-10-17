import { Link } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Professional.css';

function ProfessionalAccessPlaceholder() {
  useDocumentTitle('Profissional Acesso | Angelita Santos');

  return (
    <main className='placeholder-page'>
      <span className='placeholder-icon' aria-hidden='true'>🔒</span>

      <p className='hero-eyebrow'>Área demonstrativa</p>

      <h1>Acesso profissional</h1>

      <p>
        A próxima etapa será criar aqui uma tela de login mockado com usuário, senha e token de demonstração.
      </p>

      <p className='notice'>
        Esta área não será uma autenticação real. Como o site será publicado no
        GitHub Pages, nenhum dado sensível, senha real ou token de API deve ser
        incluído no projeto.
      </p>

      <Link className='primary-button' to='/profissional'>
        <span aria-hidden='true'>←</span>Voltar para experiências
      </Link>
    </main>
  );
}

export default ProfessionalAccessPlaceholder;
