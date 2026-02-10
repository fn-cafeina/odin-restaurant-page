const contact = document.createElement("div");
contact.classList.add("contact");

const left = document.createElement("div");
const right = document.createElement("div");

left.classList.add("contact-left");
right.classList.add("contact-right");

const logoContainer = document.createElement("div");
const logo = document.createElement("p");
logo.textContent = "Caffeine";
logoContainer.appendChild(logo);

const logoDescription = document.createElement("p");
logoDescription.textContent = `Enjoy Better And Better Quality Coffee With Caffeine`;

left.appendChild(logoContainer);
left.appendChild(logoDescription);

const contactUsHero = document.createElement("p");
contactUsHero.textContent = "Contact Us";
const mail = document.createElement("p");
mail.textContent = "Caffeine@Gmail.Com";
const callUs = document.createElement("div");
const textUs = document.createElement("div");
callUs.innerHTML = "Call Us: <span>(321) 562 - 57420</span>";
textUs.innerHTML = "Call Us: <span>(321) 562 - 57420</span>";
const address = document.createElement("p");
address.textContent = "39 Brooklyn Street Covington, VA 244426";

const contactUsContent = document.createElement("div");
contactUsContent.appendChild(mail);
contactUsContent.appendChild(callUs);
contactUsContent.appendChild(textUs);

right.appendChild(contactUsHero);
right.appendChild(contactUsContent);
right.appendChild(address);

contact.appendChild(left);
contact.appendChild(right);

export default contact;
