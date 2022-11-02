import { renderHome } from "./components/home.js";
import { renderAbout } from "./components/about.js";
import { renderSignIn } from "./components/signIn.js";
import { renderContact } from "./components/contact.js";

const routes = ["#/home", "#/about", "#/sign-in", "#/contact"];

window.addEventListener("hashchange", (event) => route(event));

function route(event) {
    const hash = window.location.hash;
    if (hash == "#/home") {
        renderHome();
    } else if (hash == "#/about") {
        renderAbout();
    } else if (hash == "#/sign-in") {
        renderSignIn();
    } else if (hash == "#/contact") {
        renderContact();
    } else {
        console.log("404 not found");
    }

}

export { route };