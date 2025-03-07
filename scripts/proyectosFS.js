document.addEventListener("DOMContentLoaded", () => {
    const proyectos = [
        {
            imagen: "img/imagenFS-1.png",
            titulo: "Sistema Inmobiliaria",
            descripcion: "Este proyecto fue creado para mostrar y vender propiedades de una inmobiliaria",
            enlace: "https://bienesraicesalfredo.netlify.app/"
        },
        {
            imagen: "img/imagenFS-1.png",
            titulo: "Sistema Inmobiliaria",
            descripcion: "Este proyecto fue creado para mostrar y vender propiedades de una inmobiliaria",
            enlace: "https://bienesraicesalfredo.netlify.app/"
        },
        {
            imagen: "img/imagenFS-1.png",
            titulo: "Sistema Inmobiliaria",
            descripcion: "Este proyecto fue creado para mostrar y vender propiedades de una inmobiliaria",
            enlace: "https://bienesraicesalfredo.netlify.app/"
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
