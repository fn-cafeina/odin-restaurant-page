import "./styles.css";

import header from "./js/header.js";
import home from "./js/home.js";
import menu from "./js/menu.js";
import contact from "./js/contact.js";

import { buttons } from "./js/header.js";

const body = document.body;
body.appendChild(header);

const content = document.createElement("div");
content.id = "content";

content.appendChild(home);

body.appendChild(content);

buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    while (content.firstChild) content.removeChild(content.firstChild);

    switch (event.target.textContent.toLowerCase()) {
      case "home":
        content.appendChild(home);
        break;
      case "menu":
        content.appendChild(menu);
        break;
      case "contact":
        content.appendChild(contact);
        break;
      default:
        break;
    }
  }
});
