import Navigo from "navigo";
import { Home } from "/src/pages/Home";

const render = (htmlContent) => {
  document.querySelector("#content").innerHTML = htmlContent;
};

const router = new Navigo("/");

router
  .on("/", () => {
    render(Home);
  })
  .on("/artwork", () => {
    render("<h);
  })
  .on("/about", () => {
    render("<h1>About</h1>")
  });

window.addEventListener("DOMContentLoaded", () => {
  router.resolve();
});
