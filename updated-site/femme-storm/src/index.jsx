import Navigo from 'navigo';


const render = (htmlContent) => {
    document.querySelector('#content').innerHTML = htmlContent;
};


const router = new Navigo('/');

router
  .on("/", () => {
    render("<h1>Testing</h1>")
  })

window.addEventListener('DOMContentLoaded', () => {
    router.resolve();
});
