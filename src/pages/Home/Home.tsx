import ProfilePhoto from '../../components/ProfilePhoto/ProfilePhoto';
import SectionCard from '../../components/SectionCard/SectionCard';
import { sections } from '../../data/sections';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import './Home.css';

function Home() {
  useDocumentTitle('Home | Angelita Santos');

  return (
    <main className='home-page'>
      <header className='topbar'>
        <a className='brand' href='#/' aria-label='Voltar para a página inicial'>
          AS
        </a>

        <nav className='topbar-navigation' aria-label='Navegação principal'>
          <a href='#/projetos'>Projetos</a>
          <a href='#/literatura'>Literatura</a>
          <a href='#/contato'>Contato</a>
        </nav>
      </header>

      <section className='hero-section'>
        <div className='hero-photo-area'>
          <ProfilePhoto />
          <span className='photo-instruction'>
            Clique na foto para ampliar
          </span>
        </div>

        <div className='hero-content'>
          <p className='hero-eyebrow'>Portfólio pessoal</p>

          <h1>
            Angelita
            <span>Santos</span>
          </h1>

          <p className='hero-description'>
            Administração, tecnologia, criatividade e histórias. Este é um
            espaço para conhecer minha trajetória, meus projetos e tudo aquilo
            que faz parte de mim.
          </p>

          <a className='primary-button' href='#/projetos'>
            Conhecer projetos
            <span aria-hidden='true'>→</span>
          </a>
        </div>
      </section>

      <section className='sections-area' aria-labelledby='sections-title'>
        <div className='section-heading'>
          <div>
            <p className='hero-eyebrow'>Explore o portfólio</p>
            <h2 id='sections-title'>Um pouco sobre mim</h2>
          </div>

          <p>
            Cada seção possui conteúdos organizados em cards e carregados a
            partir de arquivos JSON.
          </p>
        </div>

        <div className='sections-grid'>
          {sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>

      <footer className='footer'>
        <p>© {new Date().getFullYear()} Angelita Santos.</p>
        <p>Feito em React, TypeScript e CSS puro.</p>
      </footer>
    </main>
  );
}

export default Home;
