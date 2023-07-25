import { App } from "./App.js";
import { loadSkills } from "./helpers/fetch.js";
import { loadPages } from "./routes/Routes.js";

const d = document;

d.addEventListener("DOMContentLoaded", async(e) => {
  // Cargar la página inicial
  loadPages();

  //  Cargar el Componente Prncipal
  App();
  
});


// Detectar cambios en la URL y cargar la página correspondiente
window.addEventListener("hashchange", loadPages);
