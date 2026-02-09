const navbar = document.createElement("nav");

const logo = document.createElement("p");
logo.textContent = "Caffeine";

navbar.appendChild(logo);

const buttonTexts = ["Home", "Menu", "Contact"];
const buttons = document.createElement("ul");
for (const text of buttonTexts) {
  const button = document.createElement("li");
  button.textContent = text;
  buttons.appendChild(button);
}

navbar.appendChild(buttons);

export default navbar;
