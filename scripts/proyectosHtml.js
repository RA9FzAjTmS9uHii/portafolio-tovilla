document.addEventListener("DOMContentLoaded", () => {
    const proyectos = [
        {
            imagen: "img/imagen1-html.png",
            titulo: "Proyectos Guitarras",
            descripcion: "Proyecto desarrollado con HTML y CSS puro, con un diseño responsivo y animaciones que mejoran la experiencia del usuario, brindando una navegación más fluida y atractiva para el usuario.",
            enlace: "https://verdant-dieffenbachia-0e47e3.netlify.app/"
        },
        {
            imagen: "img/imagen2-html.png",
            titulo: "Escuela de cocina",
            descripcion: "Sitio web construido con la metodología BEM y SASS para organizar el código de forma eficiente. Se utilizó CSS Grid para estructurar el contenido de manera ordenada y flexible.",
            enlace: "https://lustrous-bubblegum-2a7ee9.netlify.app/"
        },
        {
            imagen: "img/imagen3-html.png",
            titulo: "Ecomerce de muebles",
            descripcion: "Prototipo de un eCommerce diseñado con CSS puro, aplicando CSS Grid y Flexbox para una estructura responsiva. Se enfocó en lograr un diseño atractivo sin el uso de procesadores.",
            enlace: "https://proyectoecomercealfredo.netlify.app/"
        }
    ];

    const contenedor = document.querySelector(".proyectos__grid");

    proyectos.forEach(proyecto => {
        const li = document.createElement("li");
        li.classList.add("proyecto");
        
        li.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="proyecto__imagen">
            <h3 class="proyecto__titulo">${proyecto.titulo}</h3>
            <p class="proyecto__descripcion">${proyecto.descripcion}</p>
            <a target="_blank" href="${proyecto.enlace}" class="proyecto__enlace">Ver Proyecto</a>
        `;

        contenedor.appendChild(li);
    });
});
