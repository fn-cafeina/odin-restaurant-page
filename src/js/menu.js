import AmericanoImage from "../images/americano.avif";
import CappuccinoImage from "../images/cappuccino.avif";
import EspressoImage from "../images/espresso.avif";

const menu = document.createElement("div");
menu.classList.add("menu");

const hero = document.createElement("p");
hero.textContent = "Best Selling Item";
hero.classList.add("menu-hero");

const description = document.createElement("p");
description.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sapien nibh, sed molestie est suscipit sit amet. Fusce at.`;
description.classList.add("menu-description");

const textContainer = document.createElement("div");
textContainer.appendChild(hero);
textContainer.appendChild(description);
textContainer.classList.add("menu-text");

const cards = document.createElement("div");
cards.classList.add("menu-cards");
const images = [AmericanoImage, CappuccinoImage, EspressoImage];
const names = ["Americano", "Cappuccino", "Espresso"];
for (let i = 0; i < 3; i++) {
  const card = document.createElement("div");
  card.classList.add("menu-card");
  const name = document.createElement("p");
  const image = new Image();

  name.textContent = names[i];
  image.src = images[i];
  image.width = "200";
  image.height = "auto";

  card.appendChild(name);
  card.appendChild(image);

  cards.appendChild(card);
}

menu.appendChild(textContainer);
menu.appendChild(cards);

export default menu;
