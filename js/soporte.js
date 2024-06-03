import { lista_soporte_tecnico } from "./data_tecnico.js";

let div_soporte = document.querySelector(".soporte")

lista_soporte_tecnico.forEach ((cada_categoria) =>{

    let div = document.createElement("div")
    div.classList.add("div_caja_componente")

    div.innerHTML = `
        <img src="${cada_categoria.img}" alt="">
        <h2>${cada_categoria.nombre}</h2>
        <span>${cada_categoria.cantidad}</span>
        <div class= "div_categoria">
        Holaaaa
        </div>
    `

div_soporte.appendChild(div)


})


