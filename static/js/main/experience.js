async function loadExperience() {
    try {
        const expResponse = await fetch("static/data/experience.json");
        const experienceData = await expResponse.json();
        
        const compResponse = await fetch("static/data/company.json");
        const companyData = await compResponse.json();
        
        renderExperience(experienceData.experience, companyData.companies);
    } catch (error) {
        console.error("Error loading experience!", error);
    }
}

function renderExperience(experience, companies) {
    const experienceSection = document.querySelector("#experience-section");    
    
    experienceSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="2" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="2">Experiência</strong>
            <i data-accordion-header="2" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="2" class="accordion-body">
            <div class="experience-resume">
                <p>${experience.summary.description}</p>
                <p>${experience.summary.full_description}</p>
                ${experience.summary.details.map(detail => `
                    <i class="fa fa-check"> ${detail.area} </i>
                    <p>${detail.duration}</p>
                `).join('')}
            </div>

            <div class="experience-complete">
                <section class="company-container">
                    <h2 id="companies">Experiência Profissional:</h2>
                    <div class="company-area">
                        ${renderCompanies(companies)}
                    </div>
                </section>

                <section class="company-models" style="display:none;">
                    <div class="company-item">
                        <a href="">
                            <div class="company-item--add">+</div>
                        </a>
                        <div class="company-item--name"></div>
                        <div class="company-item--desc"></div>
                    </div>
                </section>
                
                <section class="company-modal-area" style="display:none;">
                    <div class="company-modal-body">
                        <div class="company-info">
                            <h1></h1>
                            <h4></h4>
                            <div class="company-info--res"></div>
                            <div class="company-info--role"></div>
                            <div class="company-info--desc"></div>
                            <div class="company-info--button">Fechar</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
    `;
    
    setupCompanyModals(companies);
}

function renderCompanies(companies) {
    return companies.map(company => `
        <div class="company-item" data-id="${company.id}">
            <div class="company-item--name">${company.name} - ${company.role}</div>
            <div class="company-item--resume">${company.resume}</div>
            <div class="company-item--add">+</div>
        </div>
    `).join('');
}

function setupCompanyModals(companies) {
    document.querySelectorAll('.company-item--add').forEach(button => {
        button.addEventListener('click', function() {
            const companyId = parseInt(this.closest('.company-item').getAttribute('data-id'));
            const company = companies.find(c => c.id === companyId);
            
            if (company) {
                showCompanyModal(company);
            }
        });
    });
}

function showCompanyModal(company) {
    const modal = document.querySelector('.company-modal-area');
    const modalBody = modal.querySelector('.company-modal-body');
    const modaCompany = modalBody.querySelector('.company-info');
    
    modaCompany.innerHTML = `
        <h1>${company.fullName}</h1>
        <h4>${company.role}</h4>
        <div class="company-info--res">${company.resume}</div>
        <div class="company-info--desc">${company.description.replace(/\\/g, '<br>')}</div>
        <div class="company-info--button">Fechar</div>
    `;
    
    modal.style.display = 'flex';
    
    modal.querySelector('.company-info--button').addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", loadExperience);