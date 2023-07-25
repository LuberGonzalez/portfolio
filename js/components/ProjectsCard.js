export const ProjectsCard = (props) => {
  const { description, img, technologies, title } = props;

  const $project = document.createElement("div");
  // $project.classList.add("project-container");

  $project.innerHTML = `
  <div class="project-card">
    <div class="project-info">
      <h2 class="project__title">${title}</h2>
      <img src="${img}" alt="${title}" />
      <p class="project__message">${description}</p>
      <div class="project__tags">
        ${technologies.map((technology) => `<span class="project__tag">${technology}</span>`).join('')}
      </div>
      <a class="project__button" href="#" target="_blank">Ver más</a>
    </div>
  </div>
`;

  return $project;
};

