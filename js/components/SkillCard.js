export const SkillCard = (props) => {
    const { title, icon } = props;
  
    const $skill = document.createElement("div");
    $skill.classList.add("skill");
  
    const $title = document.createElement("h3");
    $title.classList.add("skill-title");
    $title.textContent = title;
  
    const $icon = document.createElement("img");
    $icon.src = icon;
    $icon.alt = title;
  
    $skill.appendChild($title);
    $skill.appendChild($icon);
  
    return $skill;
  };
  