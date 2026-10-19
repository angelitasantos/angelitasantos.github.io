import type { Hobby } from '../../types';

interface HobbySpotlightProps {
  hobby: Hobby;
}

const categoryLabels: Record<Hobby['category'], string> = {
  criatividade: 'Criatividade',
  cultura: 'Cultura',
  tecnologia: 'Tecnologia',
  'bem-estar': 'Bem-estar',
  lazer: 'Lazer',
};

function HobbySpotlight({ hobby }: HobbySpotlightProps) {
  return (
    <aside className={`hobby-spotlight hobby-spotlight-${hobby.accent}`}>
      <div className='hobby-spotlight-visual'>
        {hobby.image ? (
          <img src={hobby.image} alt={`Representação de ${hobby.title}`} />
        ) : (
          <span aria-hidden='true'>{hobby.icon}</span>
        )}
      </div>

      <div className='hobby-spotlight-content'>
        <div className='hobby-spotlight-top'>
          <span className='hobby-category'>{categoryLabels[hobby.category]}</span>
          {hobby.featured && (<span className='hobby-featured'>Em destaque</span>)}
        </div>

        <h2>{hobby.title}</h2>
        <p>{hobby.description}</p>

        <div className='hobby-tags' aria-label='Temas relacionados'>
          {hobby.tags.map((tag) => (<span key={tag} className='hobby-tag'>{tag}</span>))}
        </div>
      </div>
    </aside>
  );
}

export default HobbySpotlight;
