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
  .on("/about", () => {
    render("<h1>About</h1>")
  })
  .on("/artwork", () => {
    render("<h1>Artwork</h1>");
  })
  .on("/on-camera", () => {
    render("<h1>On Camera</h1>");
  })
  .on("/photography", () => {
    render("<h1>Photography</h1>");
  });

window.addEventListener("DOMContentLoaded", () => {
  router.resolve();
});
