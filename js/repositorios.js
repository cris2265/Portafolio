import { web } from "./data_web.js";
let paginas = document.querySelector(".repositorios");



 web.forEach ((cada_web)  => {

    let div_web = document.createElement("div")
    div_web.classList.add ("pages")
    div_web.innerHTML = `
        <a class="infor" href="${cada_web.github_page}">
            <img src="${cada_web.img}" alt="">
            <h2 class="titulo">${cada_web.nombre}</h2>
            <p class="descripcion">${cada_web.descripcion}</p>
            <div class="github">${cada_web.link_repo}</div>
        </a>
    `;

    paginas.appendChild(div_web)
})




