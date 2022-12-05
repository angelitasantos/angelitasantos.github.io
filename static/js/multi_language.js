//Português
$(function () {
    $(".br").click(function () {

        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");

        $(".accordion-container .accordion-item:nth-child(1) button:nth-child(1) strong").text("Habilidades");
        $(".accordion-container .accordion-item:nth-child(2) button:nth-child(1) strong").text("Experiência");
        $(".accordion-container .accordion-item:nth-child(3) button:nth-child(1) strong").text("Formação");
        $(".accordion-container .accordion-item:nth-child(4) button:nth-child(1) strong").text("Portfólio");
        $(".accordion-container .accordion-item:nth-child(5) button:nth-child(1) strong").text("Idiomas");
        $(".accordion-container .accordion-item:nth-child(6) button:nth-child(1) strong").text("Lazer");

    });
});

//English
$(function () {
    $(".en").click(function () {

        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");

        console.log()

        $(".accordion-container .accordion-item:nth-child(1) button:nth-child(1) strong").text("Skills");
        $(".accordion-container .accordion-item:nth-child(2) button:nth-child(1) strong").text("Employment History");
        $(".accordion-container .accordion-item:nth-child(3) button:nth-child(1) strong").text("Education");
        $(".accordion-container .accordion-item:nth-child(4) button:nth-child(1) strong").text("portfolio");
        $(".accordion-container .accordion-item:nth-child(5) button:nth-child(1) strong").text("Languages");
        $(".accordion-container .accordion-item:nth-child(6) button:nth-child(1) strong").text("Hobbies");

    });
});

//Espanõl
$(function () {
    $(".es").click(function () {

        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");

        $(".accordion-container .accordion-item:nth-child(1) button:nth-child(1) strong").text("Destrezas");
        $(".accordion-container .accordion-item:nth-child(2) button:nth-child(1) strong").text("Vivencia");
        $(".accordion-container .accordion-item:nth-child(3) button:nth-child(1) strong").text("Educación");
        $(".accordion-container .accordion-item:nth-child(4) button:nth-child(1) strong").text("Portafolio");
        $(".accordion-container .accordion-item:nth-child(5) button:nth-child(1) strong").text("Idiomas");
        $(".accordion-container .accordion-item:nth-child(6) button:nth-child(1) strong").text("Pasatiempo");

    });
});