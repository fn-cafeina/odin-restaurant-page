import "./styles.css";

import header from "./js/header.js";
import home from "./js/home.js";
import menu from "./js/menu.js";
import contact from "./js/contact.js";

const body = document.body;
body.appendChild(header);

const content = document.createElement("div");
content.id = "content";

content.appendChild(contact);

body.appendChild(content);
