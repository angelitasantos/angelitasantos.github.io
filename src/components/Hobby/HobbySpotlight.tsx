import type { Hobby } from '../../types';
import { HOBBY_CATEGORY_LABELS } from '../../constants/hobbies';

interface HobbySpotlightProps {
  hobby: Hobby;
}

function HobbySpotlight({ hobby }: HobbySpotlightProps) {
  return (
    <aside
      className={`card hobby-spotlight hobby-spotlight-${hobby.accent}`}
      aria-labelledby='hobby-spotlight-title'
    >
      <div className='hobby-spotlight-visual'>
        {hobby.image ? (
          <img src={hobby.image} alt={`Representação de ${hobby.title}`} />
        ) : (
          <span aria-hidden='true'>{hobby.icon}</span>
        )}
      </div>

      <div className='hobby-spotlight-content'>
        <div className='hobby-spotlight-top'>
          <span className='badge badge--level'>
            {HOBBY_CATEGORY_LABELS[hobby.category]}
          </span>

          {hobby.featured && (
            <span className='badge badge--accent'>Em destaque</span>
          )}
        </div>

        <h2 id='hobby-spotlight-title'>{hobby.title}</h2>

        <p>{hobby.description}</p>

        <ul className='tag-list hobby-tags' aria-label='Temas relacionados'>
          {hobby.tags.map((tag) => (
            <li key={tag} className='tag tag--surface'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default HobbySpotlight;
