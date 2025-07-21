async function loadLanguages() {
    try {
        const response = await fetch("static/data/languages.json");
        const languagesData = await response.json();
        renderLanguages(languagesData.languages);
    } catch (error) {
        console.error("Error loading languages!", error);
    }
}

function renderLanguages(languages) {
    const languagesSection = document.querySelector("#languages-section");
    
    languagesSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="5" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="5">Idiomas</strong>
            <i data-accordion-header="5" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="5" class="accordion-body">
            <div class="card text-bg-light">
                <div class="card-header">
                    Inglês
                </div>
                <div class="card-body">
                    <h5 class="card-title">Escrita/Fala Nível Básico</h5>
                    <i class="fa fa-check"> </i> Inglês - SAS Idioma Nı́vel Básico Mar a Dez/2014.<br>
                    <i class="fa fa-check"> </i> Inglês - Canal EngVid Nı́vel Básico/Intermediário desde Jan/2015.<br>
                    <i class="fa fa-check"> </i> Inglês - KGIC Toronto Agosto/2015 - Curso de Intercâmbio 4 semanas<br>
                    <a href="https://www.engvid.com/" class="btn btn-sm btn-success mt-2" target="_blank">Site EngVid</a>
                </div>
            </div>
        </div>
    </section>
    `;
}

document.addEventListener("DOMContentLoaded", loadLanguages);