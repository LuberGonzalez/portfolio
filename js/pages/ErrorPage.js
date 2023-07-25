export const ErrorPage = () => {
  const $main = document.querySelector("main");

  $main.innerHTML = `

  <div class="error-page">
        <div class="error-page__container">
            <h2 class="error-page__title">Error</h2>
            <p class="error-page__message">La Pagina Que Buscas, No Existe</p>
        </div>
    </div>
  `;
};
