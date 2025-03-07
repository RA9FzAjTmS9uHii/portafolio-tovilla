document.addEventListener("DOMContentLoaded", () => {
    const proyectos = [
        {
            imagen: "img/imagenJS-1.png",
            titulo: "Proyecto filtro dimanico",
            descripcion: "En este programa trabajamos la logica mediante las condicionales, haciendo un filtrado de una lista de productos.",
            enlace: "https://filtrodinamico.netlify.app/"
        },
        {
            imagen: "img/imagenJS-2.png",
            titulo: "Administrador de pendientes",
            descripcion: "Explorando LocalStorage, como se almacenan los datos en el navegador y como accedemos a ella mediante JS.",
            enlace: "https://gestor-tareas-tovilla.netlify.app/"
        },
        {
            imagen: "img/imagenJS-3.png",
            titulo: "Proyecto metadatos",
            descripcion: "En este proyecto es util para obtener metadatos de imagenes, para ello solo tienes que subir la imagen.",
            enlace: "https://mtdts.netlify.app/"
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
