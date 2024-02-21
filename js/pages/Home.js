import { Banner } from "../components/Banner.js";



export const Home = () => {
  const $main = document.querySelector("main");

  $main.insertAdjacentElement("beforeend",Banner());

  
};
