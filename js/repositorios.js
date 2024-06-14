import { web } from "./data_web.js";

let paginas = document.querySelector(".repositorios");

web.forEach((cada_web, index) => {
    let div_web = document.createElement("div");
    div_web.classList.add("pages");
    div_web.classList.add(`item-${index + 1}`); // Añadir clase única basada en el índice

    div_web.innerHTML = `
        <a class="infor" href="${cada_web.github_page}">
            <img src="${cada_web.img}" alt="">
            <h2 class="titulo">${cada_web.nombre}</h2>
            <p class="descripcion">${cada_web.descripcion}</p>
            <div class="github">
                <a href="${cada_web.link_repo}">
                    <span class="material-symbols-outlined">check</span>
                </a>
            </div>
        </a>
    `;

    paginas.appendChild(div_web);

    // Añadir evento de clic a los enlaces de los elementos item-4 e item-6
    if (index === 3) { // item-4 tiene índice 3, item-6 tiene índice 5
        const inforLink = div_web.querySelector('.infor');
        inforLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir la acción por defecto del enlace

            // Crear un enlace temporal para descargar el archivo
            const link = document.createElement('a');
            link.href = './exe/Indicemasacorporal.exe'; // Cambia esto por la URL de tu archivo
            link.download = 'Indicemadacorporal.exe'; // Nombre con el que se descargará el archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    if (index === 5) { // item-4 tiene índice 3, item-6 tiene índice 5
        const inforLink = div_web.querySelector('.infor');
        inforLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir la acción por defecto del enlace

            // Crear un enlace temporal para descargar el archivo
            const link = document.createElement('a');
            link.href = './exe/setup.exe'; // Cambia esto por la URL de tu archivo
            link.download = 'setup.exe'; // Nombre con el que se descargará el archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});
