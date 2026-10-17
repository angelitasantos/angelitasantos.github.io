import type { ProfessionalExperience } from '../../types';

interface ProfessionalTimelineItemProps {
  experience: ProfessionalExperience;
}

const typeLabels: Record<ProfessionalExperience['type'], string> = {
  clt: 'Experiência corporativa',
  pj: 'Prestação de serviços',
  freelancer: 'Freelancer',
  estagio: 'Estágio',
  voluntariado: 'Voluntariado',
  'projeto-pessoal': 'Projeto pessoal',
};

function formatMonthYear(date?: string): string {
  if (!date) {
    return '';
  }

  const [year, month] = date.split('-');
  const monthIndex = Number(month) - 1;

  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  return `${months[monthIndex]}/${year}`;
}

function formatPeriod(experience: ProfessionalExperience): string {
  const startDate = formatMonthYear(experience.startDate);

  if (experience.current) {
    return startDate ? `${startDate} — atual` : 'Atual';
  }

  const endDate = formatMonthYear(experience.endDate);

  if (startDate && endDate) {
    return `${startDate} — ${endDate}`;
  }

  return endDate || startDate || 'Data não informada';
}

function ProfessionalTimelineItem({
  experience,
}: ProfessionalTimelineItemProps) {
  return (
    <article className='professional-timeline-item'>
      <div className='professional-period'><span>{formatPeriod(experience)}</span></div>

      <div className='professional-marker' aria-hidden='true'><span /></div>

      <div className='professional-card'>
        <div className='professional-card-header'>
          <span className='professional-type'>{typeLabels[experience.type]}</span>
          {experience.current && (<span className='professional-current'>Atual</span>)}
        </div>

        <h2>{experience.role}</h2>

        <p className='professional-company'>
          {experience.company}
          {experience.location ? ` · ${experience.location}` : ''}
        </p>

        <p className='professional-description'>{experience.summary}</p>

        <div className='professional-details'>
          <div>
            <h3>Principais atividades</h3>

            <ul>
              {experience.responsibilities.map((responsibility) => (<li key={responsibility}>{responsibility}</li>))}
            </ul>
          </div>

          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h3>Tecnologias</h3>

              <div className='professional-tags'>
                {experience.technologies.map((technology) => (<span key={technology} className='professional-tag'>{technology}</span>))}
              </div>
            </div>
          )}
        </div>

        {experience.skills && experience.skills.length > 0 && (
          <div className='professional-skills' aria-label='Competências'>
            {experience.skills.map((skill) => (<span key={skill} className='professional-skill'>{skill}</span>))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProfessionalTimelineItem;
