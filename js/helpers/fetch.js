export const loadSkills = async () => {
  try {
    const response = await fetch("assets/skills.json");
    const data = await response.json();
    // console.log(data.skills);
    return data.skills;
  } catch (error) {
    console.error("Error al cargar las habilidades:", error);
  }
};

export const loadProjects = async () => {
  try {
    const response = await fetch("assets/skills.json");
    const data = await response.json();
    console.log(data.proyects);
    return data.proyects;
  } catch (error) {
    console.error("Error al cargar los Proyectos:", error);
  }
};
