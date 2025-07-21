async function loadPortfolio() {
    try {
        const response = await fetch("static/data/portfolio.json");
        const portfolioData = await response.json();
        renderPortfolio(portfolioData.portfolio);
    } catch (error) {
        console.error("Error loading portfolio!", error);
    }
}

function renderPortfolio(portfolio) {
    const portfolioSection = document.querySelector("#portfolio-section");
    
    portfolioSection.innerHTML = `
    <section class="accordion-item">
        <button data-accordion-header="4" data-js="accordion-header" class="accordion-header">
            <strong data-accordion-header="4">Portfólio</strong>
            <i data-accordion-header="4" class="fas fa-angle-down"></i>
        </button>

        <div data-accordion-body="4" class="accordion-body">
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="python-tab" data-bs-toggle="tab" data-bs-target="#python-tab-pane" 
                                type="button" role="tab" aria-controls="python-tab-pane" aria-selected="true">Python</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="javascript-tab" data-bs-toggle="tab" data-bs-target="#javascript-tab-pane" 
                            type="button" role="tab" aria-controls="javascript-tab-pane" aria-selected="false">JavaScript</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="outros-tab" data-bs-toggle="tab" data-bs-target="#outros-tab-pane" 
                            type="button" role="tab" aria-controls="outros-tab-pane" aria-selected="false">Outros</button>
                        </li>
                    </ul>
                    <div class="tab-content mb-5" id="myTabContent">

                        <div class="tab-pane fade show active" id="python-tab-pane" role="tabpanel" aria-labelledby="python-tab" tabindex="0">
                            
                            <section class="portfolio-container row row-cols-1 row-cols-md-3 g-4">

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            CRUD Todo
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python - Django</h5>
                                            <p class="card-text">Lista de Tarefas</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://github.com/angelitasantos/python-django-crud-todo" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-django-crud-todo" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            ERP Locabike
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python - Flask - MySQL</h5>
                                            <p class="card-text">Site institucional com painel admin.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://python-flask-mysql-locabike.herokuapp.com/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-flask-mysql-locabike" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Analise de Vendas
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python - Pandas</h5>
                                            <p class="card-text">Analise de vendas, arquivo em Excel.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://github.com/angelitasantos/python-pandas-analise-vendas" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-pandas-analise-vendas" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Controle Interno CSV
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python</h5>
                                            <p class="card-text">controle de compras e vendas via terminal.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/python-poo-controle-interno-csv/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-poo-controle-interno-csv" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Controle Interno MySQL
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python</h5>
                                            <p class="card-text">controle de compras e vendas via terminal.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/python-poo-controle-interno-mysql/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-poo-controle-interno-mysql" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Analise de Produtos
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python</h5>
                                            <p class="card-text">por categorias, 10 mais caros/baratos.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/python-poo-analise-produtos/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-poo-analise-produtos" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Agenda de Contatos
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python</h5>
                                            <p class="card-text">comandos via terminal.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/python-poo-agenda/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-poo-agenda" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Conversor de Medidas
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Python</h5>
                                            <p class="card-text">área, volume, imc, temperatura, moedas.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/python-conversor-medidas/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/python-conversor-medidas" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                            </section>

                        </div>

                        <div class="tab-pane fade" id="javascript-tab-pane" role="tabpanel" aria-labelledby="javascript-tab" tabindex="0">
                            
                            <section class="portfolio-container row row-cols-1 row-cols-md-3 g-4">

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Jogo de Memória
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Em JavaScript</h5>
                                            <p class="card-text">Contagem de erros e mudança de temas.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/jogo-memoria-js/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/jogo-memoria-js" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Carrinho de Compras
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Em JavaScript</h5>
                                            <p class="card-text">Dados via arquivo json.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/carrinho-compras-js/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/carrinho-compras-js" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            JavaScript em Camadas
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Type Module</h5>
                                            <p class="card-text">Utiliza package.json.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/sig-mec-test/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/sig-mec-test" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Ruas Que Andei
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Blog com JavaScript</h5>
                                            <p class="card-text">Relógio digital em JavaScript.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/ruasqueandei/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/ruasqueandei" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Consulta CEP
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">API ViaCEP</h5>
                                            <p class="card-text">Consultar dados do logradouro.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/consulta-cep/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/consulta-cep" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Contador
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Contador JavaScript</h5>
                                            <p class="card-text">Função de Incremento e Decremento.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/contador-js/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/contador-js" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Clone Netflix
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Owl Carousel</h5>
                                            <p class="card-text">Clone streaming e utiliza biblioteca owl carousel.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/clone-streaming-movies/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/clone-streaming-movies" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Blog Aulas Online
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Aulas HTML, CSS, Bootstrap</h5>
                                            <p class="card-text">Utiliza coletânea Bootstrap: cards, carrossel .</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/blog-aulas-online/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/blog-aulas-online" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                                <div class="col">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            Site Institucional
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Funções JavaScript:</h5>
                                            <p class="card-text">esconder, mostrar informações.</p>
                                        </div>
                                        <div class="card-footer">
                                            <div class="mb-2">
                                                <a href="https://angelitasantos.github.io/site-institucional1/" target="_blank" class="btn btn-sm btn-success">Site1</a>
                                                <a href="https://github.com/angelitasantos/site-institucional1" target="_blank" class="btn btn-sm btn-success">Repositório Github1</a>
                                            </div>
                                            <div>
                                                <a href="https://angelitasantos.github.io/site-institucional3/" target="_blank" class="btn btn-sm btn-success">Site2</a>
                                                <a href="https://github.com/angelitasantos/site-institucional3" target="_blank" class="btn btn-sm btn-success">Repositório Github2</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </section>

                        </div>
                        
                        <div class="tab-pane fade" id="outros-tab-pane" role="tabpanel" aria-labelledby="outros-tab" tabindex="0">
                            
                            <section class="portfolio-container row row-cols-1 row-cols-md-3 g-4">

                                <div class="col mt-5">
                                    <article class="card text-center h-100 text-bg-light border-success">
                                        <div class="card-header">
                                            GitHub
                                        </div>
                                        <div class="card-body text-success">
                                            <h5 class="card-title">Comandos Básicos</h5>
                                            <p class="card-text">Git e Github - Do clone ao pull request.</p>
                                        </div>
                                        <div class="card-footer">
                                            <a href="https://angelitasantos.github.io/github-comandos-basicos/" target="_blank" class="btn btn-sm btn-success">Site</a>
                                            <a href="https://github.com/angelitasantos/github-comandos-basicos" target="_blank" class="btn btn-sm btn-success">Repositório Github</a>
                                        </div>
                                    </article>
                                </div>

                            </section>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    `;
}

document.addEventListener("DOMContentLoaded", loadPortfolio);