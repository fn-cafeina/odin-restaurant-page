import CoffeeImage from "../images/coffee-image.avif";

const home = document.createElement("div");
home.classList.add("home");

const hero = document.createElement("p");
hero.classList.add("home-hero");
hero.textContent = "Discover The Art Of Perfect Coffee";

const description = document.createElement("p");
description.classList.add("home-description");
description.textContent = `Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right`;

const left = document.createElement("div");
left.classList.add("home-left");
left.appendChild(hero);
left.appendChild(description);

const cofeeImage = new Image();
cofeeImage.src = CoffeeImage;
cofeeImage.width = "400";
cofeeImage.height = "auto";

const right = document.createElement("div");
right.appendChild(cofeeImage);

home.appendChild(left);
home.appendChild(right);

export default home;
