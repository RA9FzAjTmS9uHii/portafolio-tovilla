document.addEventListener('DOMContentLoaded', function(){
    mostrarFechaFooter();
});

function mostrarFechaFooter(){
    const año = new Date();
    const añoActual = año.getFullYear();
    const footerAño = document.querySelector(".footer__fecha");
    footerAño.innerHTML = añoActual
}


