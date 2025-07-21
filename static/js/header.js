document.addEventListener('DOMContentLoaded', () => {
    const profileData = {
        name: 'Angelita Santos',
        role: 'Back-end Developer Jr',
        linkedin: 'https://www.linkedin.com/in/angelitasantos/',
        github: 'https://github.com/angelitasantos'
    };

    const header = document.getElementById('header');
    header.innerHTML = `
        <header class='header-wrapper'>

            <section class='checkbox-container'>
                <div class='header-container'>
                    <nav class='nav-menu'>
                        <div class='language'>
                            <div class='language-selected'>pt-BR</div>
                            <ul>
                                <li><a href='#' class='br'>Português</a></li>
                                <li><a href='#' class='en'>English</a></li>
                                <li><a href='#' class='es'>Español</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

            <section class='personal-data'>
                <h1 id='name'>${profileData.name}</h1>
                <figure>
                    <img id='photo' src='static/img/angelita.png' alt='${profileData.name}'>
                </figure>
                <h2 id='name-function'>${profileData.role}</h2>
            </section>

            <section class='social-media'>
                <a href='${profileData.linkedin}' target='_blank'>Linkedin</a>
                <a href='${profileData.github}' target='_blank'>Github</a>
            </section>
            
        </header>
    `;
});
