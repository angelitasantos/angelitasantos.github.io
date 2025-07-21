async function loadHeader() {
    try {
        const response = await fetch("static/data/header.json");
        const profileData = await response.json();

        const header = document.getElementById("header");
        header.innerHTML = `
        <header class="header-wrapper">

            <section class="checkbox-container">
                <div class="header-container">
                    <nav class="nav-menu">
                        <div class="language">
                            <div class="language-selected">${profileData.defaultLanguage}</div>
                            <ul>
                                <li><a href="#" class="br">Português</a></li>
                                <li><a href="#" class="en">English</a></li>
                                <li><a href="#" class="es">Español</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

            <section class="personal-data">
                <h1 id="name">${profileData.name}</h1>
                <figure>
                    <img id="photo" src="${profileData.photo}" alt="${profileData.name}">
                </figure>
                <h2 id="name-function">${profileData.role}</h2>
            </section>

            <section class="social-media">
                <a href="${profileData.linkedin}" target="_blank">Linkedin</a>
                <a href="${profileData.github}" target="_blank">Github</a>
            </section>

        </header>
        `;

    } catch (error) {
        console.error("Erro ao carregar o arquivo header.json!", error);
    }
}

document.addEventListener("DOMContentLoaded", loadHeader);
