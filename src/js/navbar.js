const logo = document.createElement("p");
logo.textContent = "Caffeine";

const buttonTexts = ["Home", "Menu", "Contact"];
const buttons = document.createElement("ul");
for (const buttonText of buttonTexts) {
  const button = document.createElement("li");
  button.textContent = buttonText;
  buttons.appendChild(button);
}

const navbar = document.createElement("nav");

navbar.appendChild(logo);
navbar.appendChild(buttons);

export default navbar;
