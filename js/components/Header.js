import { ROUTES } from "../routes/Routes.js";

export const Header = () => {
  const $header = document.createElement("header");

  $header.classList.add("main-header");

  $header.innerHTML = `

    <div class="main-logo">
        <a class="main-link" href="#${ROUTES.HOME}"><img src="" alt="logo" /> </a>
    </div>

    <ul class="main-menu">
        
        <li class="main-menu-item"><a main-menu-link href="#/${ROUTES.CONTACT}">Contacto</a></li>
        <li class="main-menu-item"><a main-menu-link href="#/${ROUTES.ABOUT}">Sobre Mi</a></li>
        <li class="main-menu-item"><a main-menu-link href="#/${ROUTES.PROJECTS}">Proyectos</a></li>
        <li class="main-menu-item"><a main-menu-link href="#/${ROUTES.SKILLS}">Habilidades</a></li>
        <li class="main-menu-item"><a main-menu-link href="#/Error">Error</a></li>
    </ul>
`;
  return $header;
};
