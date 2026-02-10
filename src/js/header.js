const header = document.createElement("header");

const logo = document.createElement("p");
logo.textContent = "Caffeine";

header.appendChild(logo);

const buttonTexts = ["Home", "Menu", "Contact"];
const buttons = document.createElement("nav");
for (const text of buttonTexts) {
  const button = document.createElement("button");
  button.textContent = text;
  buttons.appendChild(button);
}

header.appendChild(buttons);

export { buttons };

export default header;
