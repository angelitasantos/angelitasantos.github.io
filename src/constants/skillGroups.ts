
import type { IconType } from 'react-icons';
import {
  SiCss,
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
import { FaJava } from 'react-icons/fa';

export interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  technologies: Technology[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    icon: '◐',
    description:
      'Interfaces responsivas, acessíveis e pensadas para uma boa experiência de navegação.',
    technologies: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'React Native', icon: SiReact, color: '#61dafb' },
    ],
  },
  {
    title: 'Back-end',
    icon: '⌘',
    description:
      'Desenvolvimento de aplicações, regras de negócio, APIs e sistemas web.',
    technologies: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Django', icon: SiDjango, color: '#092e20' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
    ],
  },
  {
    title: 'Banco de dados',
    icon: '▣',
    description:
      'Modelagem, consultas e organização de dados para aplicações.',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    ],
  },
];
