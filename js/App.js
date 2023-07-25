import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";

export const App = () => {
  const $main = document.querySelector("main");

  $main.insertAdjacentElement("beforebegin", Header());

  $main.insertAdjacentElement("afterend", Footer());
};
