import type { Hobby } from '../../types';

interface HobbyCardProps {
  hobby: Hobby;
  isActive: boolean;
  onSelect: (hobby: Hobby) => void;
}

function HobbyCard({ hobby, isActive, onSelect }: HobbyCardProps) {
  return (
    <button
      className={`card hobby-card hobby-card-${hobby.accent} ${
        isActive ? 'hobby-card-active' : ''
      }`}
      type='button'
      aria-pressed={isActive}
      aria-label={`${
        isActive ? 'Hobby selecionado' : 'Selecionar hobby'
      }: ${hobby.title}`}
      onClick={() => onSelect(hobby)}
    >
      <span className='hobby-card-icon' aria-hidden='true'>
        {hobby.icon}
      </span>

      <span className='hobby-card-content'>
        <span className='hobby-card-title'>{hobby.title}</span>
        <span className='hobby-card-description'>
          {hobby.shortDescription}
        </span>
      </span>

      <span className='hobby-card-arrow' aria-hidden='true'>
        →
      </span>
    </button>
  );
}

export default HobbyCard;
