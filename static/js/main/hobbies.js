async function loadHobbies() {
    try {
        const response = await fetch("static/data/hobbies.json");
        const hobbiesData = await response.json();
        renderHobbies(hobbiesData.hobbies);
    } catch (error) {
        console.error("Error loading hobbies!", error);
    }
}

function renderHobbies(hobbies) {
    const hobbiesSection = document.querySelector("#hobbies-section");
    
    hobbiesSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="6" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="6">Hobbies</strong>
            <i data-accordion-header="6" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="6" class="accordion-body">
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card border-success h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title text-success text-bg-light py-2">Viajar e Fotografar</h5>
                        <a href="https://angelitasantos.github.io/ruasqueandei/" target="_blank">
                            <button type="button" class="btn btn-lg btn-success position-relative">
                                Ruas que Andei
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">
                                    <span class="visually-hidden"></span>
                                </span>
                            </button>
                        </a>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card border-success h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title text-success text-bg-light py-2">Jogar Board Games</h5>
                        <a href="https://ludopedia.com.br/usuario/angelitajunia" target="_blank">
                            <button type="button" class="btn btn-lg btn-success position-relative">
                                Ludopedia
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">
                                    <span class="visually-hidden"></span>
                                </span>
                            </button>
                        </a>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card border-success h-100">
                    <div class="card-body text-center">
                        <h5 class="card-title text-success text-bg-light py-2">Escrever Histórias</h5>
                        <a href="https://linktr.ee/angelitasantos" target="_blank">
                            <button type="button" class="btn btn-lg btn-success position-relative">
                                Wattpad / Amazon
                                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">
                                    <span class="visually-hidden"></span>
                                </span>
                            </button>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}

document.addEventListener("DOMContentLoaded", loadHobbies);