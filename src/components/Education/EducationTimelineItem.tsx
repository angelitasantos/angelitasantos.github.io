import type { Education } from '../../types';
import {
  EDUCATION_LEVEL_LABELS,
  EDUCATION_MONTHS,
  EDUCATION_STATUS_CLASS_NAMES,
  EDUCATION_STATUS_LABELS,
} from '../../constants';

interface EducationTimelineItemProps {
  education: Education;
}

function formatMonthYear(date?: string): string {
  if (!date) {
    return '';
  }

  const [year, month] = date.split('-');
  const monthIndex = Number(month) - 1;
  const monthLabel = EDUCATION_MONTHS[monthIndex];

  if (!year || !monthLabel) {
    return '';
  }

  return `${monthLabel}/${year}`;
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
  const statusClassName = EDUCATION_STATUS_CLASS_NAMES[education.status];

  return (
    <article className='education-timeline-item'>
      <div className='education-period'>
        <span>{formatPeriod(education)}</span>
      </div>

      <div className='education-marker' aria-hidden='true'>
        <span />
      </div>

      <div className='card card--interactive education-card'>
        <div className='education-card-header'>
          <span className='badge badge--level'>
            {EDUCATION_LEVEL_LABELS[education.level]}
          </span>

          <span className={`badge ${statusClassName}`}>
            {EDUCATION_STATUS_LABELS[education.status]}
          </span>
        </div>

        <h2>{education.course}</h2>

        <p className='education-institution'>{education.institution}</p>

        {education.description && (
          <p className='education-description'>{education.description}</p>
        )}

        {education.skills && education.skills.length > 0 && (
          <ul className='tag-list' aria-label='Competências desenvolvidas'>
            {education.skills.map((skill) => (
              <li key={skill} className='tag'>
                {skill}
              </li>
            ))}
          </ul>
        )}

        {education.certificateUrl && (
          <a
            className='certificate-link'
            href={education.certificateUrl}
            target='_blank'
            rel='noreferrer'
            aria-label={`Ver certificado de ${education.course}. Abre em nova aba.`}
          >
            Ver certificado <span aria-hidden='true'>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default EducationTimelineItem;
