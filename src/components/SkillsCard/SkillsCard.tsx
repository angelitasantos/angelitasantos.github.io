import { skillGroups } from '../../constants';
import './SkillsCard.css';

function SkillsCard() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="section-heading section-heading--border section-heading--text-end">
        <div>
          <p className="hero-eyebrow">Tecnologias</p>
          <h2 id="skills-title">Habilidades em tecnologia</h2>
        </div>

        <p>
          Tecnologias que utilizo para criar interfaces, aplicações web e
          soluções orientadas a dados.
        </p>
      </div>

      <article className="skills-card">
        <div className="skills-card-introduction">
          <p className="skills-card-label">Stack de desenvolvimento</p>

          <h3>
            Da interface ao<span> banco de dados.</span>
          </h3>

          <p>
            Conhecimentos voltados ao desenvolvimento de soluções completas,
            combinando organização, experiência do usuário e lógica de negócio.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <section className="skills-group" key={group.title}>
              <div className="skills-group-icon" aria-hidden="true">
                {group.icon}
              </div>

              <div>
                <h4>{group.title}</h4>
                <p>{group.description}</p>

                <ul className="tag-list">
                  {group.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <li className="tag" key={technology.name}>
                        <Icon
                          aria-hidden="true"
                          color={technology.color}
                          size={16}
                        />
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
