import type { IconType } from 'react-icons';
import {
  SiDjango,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import './SkillsCard.css';

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  technologies: Technology[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    icon: '◐',
    description:
      'Interfaces responsivas, acessíveis e pensadas para uma boa experiência de navegação.',
    technologies: [
      {
        name: 'HTML5',
        icon: SiHtml5,
        color: '#e34f26',
      },
      {
        name: 'CSS3',
        icon: SiHtml5,
        color: '#1572b6',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#f7df1e',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178c6',
      },
      {
        name: 'React',
        icon: SiReact,
        color: '#61dafb',
      },
      {
        name: 'React Native',
        icon: SiReact,
        color: '#61dafb',
      },
    ],
  },
  {
    title: 'Back-end',
    icon: '⌘',
    description:
      'Desenvolvimento de aplicações, regras de negócio, APIs e sistemas web.',
    technologies: [
      {
        name: 'Python',
        icon: SiPython,
        color: '#3776ab',
      },
      {
        name: 'Django',
        icon: SiDjango,
        color: '#092e20',
      },
      {
        name: 'Java',
        icon: SiHtml5,
        color: '#f89820',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
      },
      {
        name: 'Express',
        icon: SiExpress,
        color: '#000000',
      },
    ],
  },
  {
    title: 'Banco de dados',
    icon: '▣',
    description:
      'Modelagem, consultas e organização de dados para aplicações.',
    technologies: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#4169e1',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479a1',
      },
    ],
  },
];

function SkillsCard() {
  return (
    <section className='skills-section' aria-labelledby='skills-title'>
      <div className='skills-section-heading'>
        <div>
          <p className='hero-eyebrow'>Tecnologias</p>

          <h2 id='skills-title'>Habilidades em tecnologia</h2>
        </div>

        <p>
          Tecnologias que utilizo para criar interfaces, aplicações web e
          soluções orientadas a dados.
        </p>
      </div>

      <article className='skills-card'>
        <div className='skills-card-introduction'>
          <p className='skills-card-label'>Stack de desenvolvimento</p>

          <h3>Da interface ao<span> banco de dados.</span></h3>

          <p>
            Conhecimentos voltados ao desenvolvimento de soluções completas,
            combinando organização, experiência do usuário e lógica de negócio.
          </p>
        </div>

        <div className='skills-groups'>
          {skillGroups.map((group) => (
            <section className='skills-group' key={group.title}>
              <div className='skills-group-icon' aria-hidden='true'>
                {group.icon}
              </div>

              <div>
                <h4>{group.title}</h4>
                <p>{group.description}</p>

                <ul className='skills-list'>
                  {group.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <li key={technology.name}>
                        <Icon aria-hidden='true' color={technology.color} size={16}/>
                        <span>{technology.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}

export default SkillsCard;
