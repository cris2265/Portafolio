import { lista_soporte_tecnico } from "./data_tecnico.js";

let div_soporte = document.querySelector(".soporte")

lista_soporte_tecnico.forEach ((cada_categoria) =>{

    let div = document.createElement("div")
    div.classList.add("div_caja_componente")

    div.innerHTML = `
        <h2>${cada_categoria.titulo}</h2>
        <img src="${cada_categoria.imagen}" alt="">
        <div class= "div_categoria">${cada_categoria.descripcion}</div>
        <div class="hardware">
            <h3>hardware</h3>
            <p>${cada_categoria.hardware.cpu}</p>
            <p>${cada_categoria.hardware.disco}</p>
            <p>${cada_categoria.hardware.gpu}</p>
            <p>${cada_categoria.hardware.ram}</p>
            <p>${cada_categoria.hardware.disco}</p>
        </div>
    `

div_soporte.appendChild(div)


})


