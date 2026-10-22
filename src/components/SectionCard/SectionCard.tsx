import { Link } from 'react-router-dom';
import type { Section } from '../../types/section';
import './SectionCard.css';

interface SectionCardProps {
  section: Section;
}

function SectionCard({ section }: SectionCardProps) {
  return (
    <Link
      className='card card--interactive section-card'
      to={section.path}
    >
      <div className='section-card-header'>
        <span className='section-card-icon' aria-hidden='true'>
          {section.icon}
        </span>

        {section.locked && (
          <span
            className='section-card-lock'
            title='Possui área com acesso demonstrativo'
            aria-label='Possui área com acesso demonstrativo'
          >
            🔒
          </span>
        )}
      </div>

      <h2>{section.title}</h2>

      <p>{section.description}</p>

      <span className='text-action text-action--accent section-card-link'>
        Mais informações
        <span aria-hidden='true'>→</span>
      </span>
    </Link>
  );
}

export default SectionCard;
