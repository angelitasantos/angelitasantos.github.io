async function loadEducation() {
    try {
        const response = await fetch("static/data/education.json");
        const educationData = await response.json();
        renderEducation(educationData.education);
    } catch (error) {
        console.error("Error loading education!", error);
    }
}

function renderEducation(education) {
    const educationSection = document.querySelector("#education-section");
    
    educationSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="3" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="3">Formação</strong>
            <i data-accordion-header="3" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="3" class="accordion-body">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="especializacao-tab" data-bs-toggle="tab" data-bs-target="#especializacao-tab-pane" 
                                type="button" role="tab" aria-controls="especializacao-tab-pane" aria-selected="true">Especialização</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="graduacao-tab" data-bs-toggle="tab" data-bs-target="#graduacao-tab-pane" 
                            type="button" role="tab" aria-controls="graduacao-tab-pane" aria-selected="false">Graduação</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tecnico-tab" data-bs-toggle="tab" data-bs-target="#tecnico-tab-pane" 
                            type="button" role="tab" aria-controls="tecnico-tab-pane" aria-selected="false">Técnico</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="cursos-tab" data-bs-toggle="tab" data-bs-target="#cursos-tab-pane" 
                            type="button" role="tab" aria-controls="cursos-tab-pane" aria-selected="false">Cursos</button>
                        </li>
                    </ul>
                    <div class="tab-content mb-5" id="myTabContent">
                        <!-- Especialização -->
                        <div class="tab-pane fade show active" id="especializacao-tab-pane" role="tabpanel" aria-labelledby="especializacao-tab" tabindex="0">
                            <h4 class="mt-5">Curso: ${education.specialization.course}</h4>
                            <h4>Instituição: ${education.specialization.institution}</h4>
                            <h4>Concluído em ${education.specialization.year}</h4>
                        </div>
                        
                        <!-- Graduação -->
                        <div class="tab-pane fade" id="graduacao-tab-pane" role="tabpanel" aria-labelledby="graduacao-tab" tabindex="0">
                            <h4 class="mt-5">Curso: ${education.graduation.course}</h4>
                            <h4>Instituição: ${education.graduation.institution}</h4>
                            <h4>Concluído em ${education.graduation.year}</h4>
                        </div>
                        
                        <!-- Técnico -->
                        <div class="tab-pane fade" id="tecnico-tab-pane" role="tabpanel" aria-labelledby="tecnico-tab" tabindex="0">
                            <h4 class="mt-5">Curso: ${education.technical.course}</h4>
                            <h4>Instituição: ${education.technical.institution}</h4>
                            <h4>Concluído em ${education.technical.year}</h4>
                        </div>
                        
                        <!-- Cursos -->
                        <div class="tab-pane fade" id="cursos-tab-pane" role="tabpanel" aria-labelledby="cursos-tab" tabindex="0">
                            <div><br>
                                ${education.courses.map(course => `
                                    <i class="fa fa-check"></i> ${course}<br>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

document.addEventListener("DOMContentLoaded", loadEducation);