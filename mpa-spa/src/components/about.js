import { messages } from "../messages.js";

function renderAbout() {
    const content = `
    <h1>${messages.about.h1}</h1>
    <h2>${messages.about.h2}</h2>
    <p>This is the about page</p>
`;
    const main = document.getElementById("main");
    main.innerHTML = content;

}

export { renderAbout };