// Declare a variable of type Object
// Object = a collection of properties, each property has a value (any type)
const labels = {
    home: { menuItem: "Home", h1: "Welcome to MPA/CSR demo", h2: "The best application in the world!" }, contact: { menuItem: "Contact", h1: "Contact" },
    signIn: { menuItem: "Sign-in", h1: "Sign-in" }, about: { menuItem: "About", h1: "About", h2: "It's all about" }
}; // a JSON (JavaScript Object Notation)

const pathName = window.location.pathname;

// `` = template literal with expression ${expression}
// replacing an expression by its value is an interpolation
const menu = `
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">MPA-SPA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link${pathName == "/index.html" || pathName == "/" ? " active" : ""}" href="index.html">${labels.home.menuItem}</a>
            <a class="nav-link${pathName == "/contact.html" ? " active" : ""}" href="contact.html">${labels.contact.menuItem}</a>
            <a class="nav-link${pathName == "/sign-in.html" ? " active" : ""}" href="sign-in.html">${labels.signIn.menuItem}</a>
            <a class="nav-link${pathName == "/about.html" ? " active" : ""}" href="about.html">${labels.about.menuItem}</a>
        </div>
        </div>
    </div>
    </nav>
`;

const header = document.getElementById("header");
header.innerHTML = menu;

const homeContent = `
    <h1>${labels.home.h1}</h1>
    <h2>${labels.home.h2}</h2>
    <p>Thi is the home page</p>
`;

const contactContent = `
    <h1>${labels.contact.h1}</h1>
    <p>This is the contact page</p>
`;

const signInContent = `
    <h1>${labels.signIn.h1}</h1>
    <p>This is the sign-in page</p>
`;

const aboutContent = `
    <h1>${labels.about.h1}</h1>
    <h2>${labels.about.h2}</h2>
    <p>This is the about page</p>
`;

const main = document.getElementById("main");

if (pathName == "/index.html" || pathName == "/") {
    main.innerHTML = homeContent;
} else if (pathName == "/contact.html") {
    main.innerHTML = contactContent;
} else if (pathName == "/sign-in.html") {
    main.innerHTML = signInContent;
} else if (pathName == "/about.html") {
    main.innerHTML = aboutContent;
}

const copyright = "<p>Copyright Simplon 2022</p>";

const footer = document.getElementById("footer");
footer.innerHTML = copyright;