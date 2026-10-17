import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const statusLabels: Record<Project['status'], string> = {
  concluido: 'Concluído',
  'em-andamento': 'Em andamento',
  arquivado: 'Arquivado',
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${
        project.featured ? 'project-card-featured' : ''
      }`}
    >
      <div className='project-card-top'>
        <span className='project-category'>{project.category}</span>

        <span
          className={`project-status project-status-${project.status}`}
          aria-label={`Status: ${statusLabels[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <h2>{project.title}</h2>

      <p className='project-card-description'>{project.description}</p>

      {project.longDescription && (
        <p className='project-card-long-description'>
          {project.longDescription}
        </p>
      )}

      <div className='technology-list' aria-label='Tecnologias utilizadas'>
        {project.technologies.map((technology) => (
          <span key={technology} className='technology-tag'>
            {technology}
          </span>
        ))}
      </div>

      <div className='project-actions'>
        {project.repositoryUrl && (
          <a
            className='project-link'
            href={project.repositoryUrl}
            target='_blank'
            rel='noreferrer'
          >
            Ver repositório <span aria-hidden='true'>↗</span>
          </a>
        )}

        {project.projectUrl && (
          <a
            className='project-link project-link-primary'
            href={project.projectUrl}
            target='_blank'
            rel='noreferrer'
          >
            Abrir projeto <span aria-hidden='true'>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
