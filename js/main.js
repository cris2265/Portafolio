import { header } from "./header.js";
import { perfil } from "./info.js";

let root = document.querySelector(".root");

let componentes = `
    <div class="header">${header}</div>
    <div class="repositorios"></div>
    <div class="componentes"></div>
    <div class="info">${perfil}</div>
`;

root.innerHTML = componentes;


 
