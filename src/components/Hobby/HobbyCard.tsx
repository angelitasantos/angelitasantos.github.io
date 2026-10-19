import type { Hobby } from '../../types';

interface HobbyCardProps {
  hobby: Hobby;
  isActive: boolean;
  onSelect: (hobby: Hobby) => void;
}

function HobbyCard({ hobby, isActive, onSelect }: HobbyCardProps) {
  return (
    <button
      className={`hobby-card hobby-card-${hobby.accent} ${
        isActive ? 'hobby-card-active' : ''
      }`}
      type='button' onClick={() => onSelect(hobby)} aria-pressed={isActive}>
      <span className='hobby-card-icon' aria-hidden='true'>{hobby.icon}</span>

      <div>
        <h2>{hobby.title}</h2>
        <p>{hobby.shortDescription}</p>
      </div>

      <span className='hobby-card-arrow' aria-hidden='true'>→</span>
    </button>
  );
}

export default HobbyCard;
