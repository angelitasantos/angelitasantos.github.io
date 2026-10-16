import { Link } from 'react-router-dom';
import type { Section } from '../../types/section';
import './SectionCard.css';

interface SectionCardProps {
  section: Section;
}

function SectionCard({ section }: SectionCardProps) {
  return (
    <Link className='section-card' to={section.path}>
      <div className='section-card-header'>
        <span className='section-card-icon' aria-hidden='true'>
          {section.icon}
        </span>

        {section.locked && (
          <span
            className='section-card-lock'
            title='Possui área com acesso demonstrativo'
          >
            🔒
          </span>
        )}
      </div>

      <h2>{section.title}</h2>
      <p>{section.description}</p>

      <span className='section-card-link'>
        Mais informações <span aria-hidden='true'>→</span>
      </span>
    </Link>
  );
}

export default SectionCard;
