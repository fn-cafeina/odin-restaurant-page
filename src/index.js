import "./styles.css";

import header from "./js/header.js";
import home from "./js/home.js";

const body = document.body;
body.appendChild(header);

const content = document.createElement("div");
content.id = "content";

content.appendChild(home);

body.appendChild(content);
