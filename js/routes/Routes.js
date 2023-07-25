import { About } from "../pages/About.js";
import { Home } from "../pages/Home.js";
import { Skills } from "../pages/Skills.js";
import { Projects } from "../pages/Projects.js";
import { ErrorPage } from "../pages/ErrorPage.js";
import { Contact } from "../pages/Contact.js";

// Definir constantes para las rutas
export const ROUTES = {
  HOME: '/',
  CONTACT: 'contacto',
  SKILLS: 'habilidades',
  PROJECTS: 'proyectos',
  ABOUT: 'sobre-mi' 
};

// Función para cargar la página correspondiente según la ruta
export function loadPages() {
  const route = window.location.hash.substr(2) || '/'; // Obtenemos la ruta después del '#', ignorando el primer '/'

  console.log(route);

  switch (route) {
    case ROUTES.HOME:
      Home();
      case ROUTES.CONTACT:
      Contact();
      break;
    case ROUTES.ABOUT:
     About();
      break;
    case ROUTES.SKILLS:
      Skills();
      break;
    case ROUTES.PROJECTS:
      Projects();
      break;
    default:
      ErrorPage();
      break;
  }
}
