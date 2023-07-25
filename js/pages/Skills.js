import { SkillCard } from "../components/SkillCard.js";
import { loadSkills } from "../helpers/fetch.js";

export const Skills = async () => {
  const $main = document.querySelector("main");

  $main.classList.add("skill-container")

    const  $h2 = document.createElement("h2");

    $h2.innerHTML = "Habilidades";
    
    $main.appendChild($h2);


  const skills = await loadSkills();

  console.log(skills);

  let html = "";

  skills.forEach((skill) => {
    html += SkillCard(skill).outerHTML; // Agrega .outerHTML para obtener el contenido HTML del elemento
  });

  console.log(html);

  $main.innerHTML = html;
};
