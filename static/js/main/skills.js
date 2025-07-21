async function loadSkills() {
    try {
        const response = await fetch("static/data/skills.json");
        const skillsData = await response.json();
        renderSkills(skillsData.skills);
    } catch (error) {
        console.error("Error loading skills:", error);
    }
}

function renderSkills(skills) {   
    const skillsSection = document.getElementById("skills-section");
    skillsSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="1" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="1" id="skills">Habilidades</strong>
            <i data-accordion-header="1" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="1" class="accordion-body">
        
            <section class="skills">
                <!-- Frontend -->
                <figure class="frontend">
                    <figcaption>${skills.frontend.title}</figcaption>
                    <div>
                        ${skills.frontend.technologies.map(tech => `
                            <img alt="${tech.alt}" src="${tech.icon}" title="${tech.name}">
                        `).join('')}
                    </div>
                </figure>
                
                <!-- Backend -->
                <figure class="backend">
                    <figcaption>${skills.backend.title}</figcaption>
                    <div>
                        ${skills.backend.technologies.map(tech => `
                            <img alt="${tech.alt}" src="${tech.icon}" title="${tech.name}">
                        `).join('')}
                    </div>
                </figure>
                
                <!-- Database -->
                <figure class="database">
                    <figcaption>${skills.database.title}</figcaption>
                    <div>
                        ${skills.database.technologies.map(tech => `
                            <img alt="${tech.alt}" src="${tech.icon}" title="${tech.name}">
                        `).join('')}
                    </div>
                </figure>
            </section>

            <!-- GitHub Stats -->
            <section class="github-api">
                <a href="${skills.github_stats.profile_url}" target="_blank">
                    ${skills.github_stats.stats.map(stat => `
                        <img src="${stat}">
                    `).join('')}
                </a>
            </section>
        </div>
    </section>
    `;
}

document.addEventListener("DOMContentLoaded", loadSkills);