import { ProjectsCard } from "../components/ProjectsCard.js";
import { loadProjects } from "../helpers/fetch.js";

export const Projects = async () => {

    const $main = document.querySelector("main");


    const projects = await loadProjects();

    console.log(projects);

    let html = "<div class='project-container'>";
  
    projects.forEach((project) => {
      html += ProjectsCard(project).outerHTML; // Agrega .outerHTML para obtener el contenido HTML del elemento
    });
  
    console.log(html);

    html += "</div>"

    $main.innerHTML = html;


    // $main.innerHTML = "Projects";

}