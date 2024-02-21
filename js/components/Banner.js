const createSocialIcon = (iconClass, link) => {
    const socialIcon = document.createElement("a");
    socialIcon.href = link;
    socialIcon.target = "_blank";
    socialIcon.rel = "noopener noreferrer";
    socialIcon.classList.add("banner__social-icon");
    socialIcon.innerHTML = `<i class="${iconClass}"></i>`;
    return socialIcon;
  };


export const Banner = () => {
    const $banner = document.createElement("div");
  
    $banner.classList.add("banner");

    $banner.innerHTML =  `
        <section class="banner-section">

            <div class="banner-left">

                <img src="" alt="image-desarrollador" />

            </div>


            <div class="banner-rigth">

             <h1 class="banner-title">Luber Gonzalez</h1>


             <div class="banner-box">

             <i class="icon-linkedin">I</i>
             <i class="icon-git-hub">I</i>

            </div>


            </div>


        </section>
    `;
  
    // const bannerSection = document.createElement("section");
    // bannerSection.classList.add("banner");
  
    // const bannerContent = document.createElement("div");
    // bannerContent.classList.add("banner__content");
  
    // const bannerLeft = document.createElement("div");
    // bannerLeft.classList.add("banner__left");
  
    // const img = document.createElement("img");
    // img.src = "ruta_de_la_imagen.jpg"; // Reemplaza 'ruta_de_la_imagen.jpg' con la URL de la imagen que desees utilizar
    // img.alt = "Imagen del desarrollador";
    // bannerLeft.appendChild(img);
  
    // const bannerRight = document.createElement("div");
    // bannerRight.classList.add("banner__right");
  
    // const bannerText = document.createElement("p");
    // bannerText.classList.add("banner__text");
    // bannerText.textContent =
    //   "¡Hola! Soy un desarrollador web apasionado por crear experiencias increíbles en línea.";
    // bannerRight.appendChild(bannerText);
  
    // const socialIcons = document.createElement("div");
    // socialIcons.classList.add("banner__social-icons");
  
    // const linkedinIcon = createSocialIcon(
    //   "fab fa-linkedin",
    //   "enlace_de_linkedin"
    // ); // Reemplaza 'enlace_de_linkedin' con tu enlace de LinkedIn
    // const githubIcon = createSocialIcon("fab fa-github", "enlace_de_github"); // Reemplaza 'enlace_de_github' con tu enlace de GitHub
  
    // socialIcons.appendChild(linkedinIcon);
    // socialIcons.appendChild(githubIcon);
    // bannerRight.appendChild(socialIcons);
  
    // bannerContent.appendChild(bannerLeft);
    // bannerContent.appendChild(bannerRight);
    // bannerSection.appendChild(bannerContent);
  
    
  
    return $banner;
  };
  