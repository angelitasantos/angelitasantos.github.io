import type { Education } from '../../types';

interface EducationTimelineItemProps {
  education: Education;
}

const statusLabels: Record<Education['status'], string> = {
  concluido: 'Concluído',
  'em-andamento': 'Em andamento',
  pausado: 'Pausado',
  planejado: 'Planejado',
};

const levelLabels: Record<Education['level'], string> = {
  tecnico: 'Técnico',
  graduacao: 'Graduação',
  'pos-graduacao': 'Pós-graduação',
  curso: 'Curso',
  certificacao: 'Certificação',
  workshop: 'Workshop',
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

function formatPeriod(education: Education): string {
  const startDate = formatMonthYear(education.startDate);

  if (education.status === 'em-andamento') {
    return startDate ? `${startDate} — atual` : 'Em andamento';
  }

  const endDate = formatMonthYear(education.endDate);

  if (startDate && endDate) {
    return `${startDate} — ${endDate}`;
  }

  return endDate || startDate || 'Data não informada';
}

function EducationTimelineItem({ education }: EducationTimelineItemProps) {
  return (
    <article className='education-timeline-item'>
      <div className='education-period'>
        <span>{formatPeriod(education)}</span>
      </div>

      <div className='education-marker' aria-hidden='true'>
        <span />
      </div>

      <div className='education-card'>
        <div className='education-card-header'>
          <span className='education-level'>
            {levelLabels[education.level]}
          </span>

          <span
            className={`education-status education-status-${education.status}`}
          >
            {statusLabels[education.status]}
          </span>
        </div>

        <h2>{education.course}</h2>

        <p className='education-institution'>{education.institution}</p>

        {education.description && (
          <p className='education-description'>{education.description}</p>
        )}

        {education.skills && education.skills.length > 0 && (
          <div
            className='education-skills'
            aria-label='Competências desenvolvidas'
          >
            {education.skills.map((skill) => (
              <span key={skill} className='education-skill'>
                {skill}
              </span>
            ))}
          </div>
        )}

        {education.certificateUrl && (
          <a
            className='certificate-link'
            href={education.certificateUrl}
            target='_blank'
            rel='noreferrer'
          >
            Ver certificado <span aria-hidden='true'>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default EducationTimelineItem;
