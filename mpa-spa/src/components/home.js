

import { messages } from "../messages.js";

function renderHome() {
    const content = `
    <h1>${messages.home.h1}</h1>
    <h2>${messages.home.h2}</h2>
    <p>Thi is the home page</p>
`;

    const main = document.getElementById("main");
    main.innerHTML = content;
}


export { renderHome };