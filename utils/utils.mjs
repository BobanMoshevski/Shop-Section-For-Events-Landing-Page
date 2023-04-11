export const createProductEl = (product) => {
  // Get DOM
  const academies = document.getElementById("addCards");

  // Create Elements
  const startEndCard = document.createElement("div");
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardImage = document.createElement("img");
  const priceAndPlace = document.createElement("div");
  const price = document.createElement("h5");
  const place = document.createElement("p");
  const speakers = document.createElement("p");
  const buyBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  const spanPrice = document.createElement("span");
  const spanPlace = document.createElement("span");
  const spanSpeakers = document.createElement("span");

  // Create id
  buyBtn.id = `buyBtn${product.id}`;
  removeBtn.id = `removeBtn${product.id}`;

  // Add classList
  startEndCard.classList.add(
    "col-lg-4",
    "offset-lg-0",
    "col-md-6",
    "col-md-0",
    "col-12",
    "text-center",
    "py-5",
    "margin",
    "cardElement"
  );
  card.classList.add("border-0", "shadow-hover", "card-padding");
  cardBody.classList.add("card-body", "border-bottom", "border-dark", "mb-4");
  cardTitle.classList.add("font-weight-bold", "font-color2", "card-heading");
  priceAndPlace.classList.add("align-self-start");
  buyBtn.classList.add(
    "font-weight-bold",
    "basic-btn",
    "btn-bg-color",
    "shadow-hover",
    "w-100"
  );
  removeBtn.classList.add(
    "font-weight-bold",
    "basic-btn",
    "btn-bg-color",
    "shadow-hover",
    "w-100"
  );
  cardImage.classList.add("img-fluid");
  price.classList.add("font-weight-bold", "font-color3");
  place.classList.add("font-weight-bold", "font-color3");
  speakers.classList.add("font-weight-bold", "font-color3");
  spanPrice.classList.add("font-weight-bold", "font-color2");
  spanPlace.classList.add("font-weight-bold", "font-color2");
  spanSpeakers.classList.add("font-weight-bold", "font-color2");

  // Add atribute
  cardImage.src = product.image;

  // Add text
  spanPrice.innerText = `${product.price} €`;
  spanPlace.innerText = product.place;
  spanSpeakers.innerText = product.speakers;
  cardTitle.innerText = product.name;
  price.innerText = "Price: ";
  place.innerText = "Place: ";
  speakers.innerText = "Speakers: ";
  buyBtn.innerText = "Buy Academy";
  removeBtn.innerText = "Remove Academy";

  // Hide Button
  removeBtn.style.display = "none";

  // Parent and child
  price.appendChild(spanPrice);
  place.appendChild(spanPlace);
  speakers.appendChild(spanSpeakers);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardImage);
  priceAndPlace.appendChild(price);
  priceAndPlace.appendChild(place);
  priceAndPlace.appendChild(speakers);
  cardBody.appendChild(priceAndPlace);
  card.appendChild(cardBody);
  card.appendChild(buyBtn);
  card.appendChild(removeBtn);
  startEndCard.appendChild(card);
  academies.appendChild(startEndCard);

  return academies;
};

export const createElement = (create) => {
  // Get DOM
  const showProducts = document.querySelector(".cardProducts");

  // Create Elements
  const productsWrapper = document.createElement("div");
  const productHeader = document.createElement("h2");
  const productImage = document.createElement("img");
  const priceAndPlace = document.createElement("div");
  const price = document.createElement("h5");
  const place = document.createElement("p");
  const speakers = document.createElement("p");
  const spanPrice = document.createElement("span");
  const spanPlace = document.createElement("span");
  const spanSpeakers = document.createElement("span");

  // Add id of product
  productsWrapper.id = `addProduct${create.id}`;

  // Add style in card
  productsWrapper.style.border = "1px solid black";
  productsWrapper.style.borderRadius = "20px";
  productsWrapper.style.margin = "15px 0";
  productsWrapper.style.padding = "20px";
  productsWrapper.style.textAlign = "center";

  // Add classList
  productHeader.classList.add(
    "font-weight-bold",
    "font-color2",
    "card-heading"
  );
  productImage.classList.add("img-fluid");
  priceAndPlace.classList.add("align-self-start");
  price.classList.add("font-weight-bold", "font-color3");
  place.classList.add("font-weight-bold", "font-color3");
  speakers.classList.add("font-weight-bold", "font-color3");
  spanPrice.classList.add("font-weight-bold", "font-color2");
  spanPlace.classList.add("font-weight-bold", "font-color2");
  spanSpeakers.classList.add("font-weight-bold", "font-color2");

  // Add Atribute
  productImage.src = create.image;

  // Add text
  productHeader.innerText = create.name;
  spanPrice.innerText = `${create.price} €`;
  spanPlace.innerText = create.place;
  spanSpeakers.innerText = create.speakers;
  price.innerText = "Price: ";
  place.innerText = "Place: ";
  speakers.innerText = "Speakers: ";

  // Parent and child
  price.appendChild(spanPrice);
  place.appendChild(spanPlace);
  speakers.appendChild(spanSpeakers);
  productsWrapper.appendChild(productHeader);
  productsWrapper.appendChild(productImage);
  priceAndPlace.appendChild(price);
  priceAndPlace.appendChild(place);
  priceAndPlace.appendChild(speakers);
  productsWrapper.appendChild(priceAndPlace);
  showProducts.appendChild(productsWrapper);
  return showProducts;
};

export const changeElement = (create) => {
  // Get DOM
  const showProducts = document.querySelector(".changeProducts");

  // Create Elements
  const productsWrapper = document.createElement("div");
  const productHeader = document.createElement("h2");
  const productImage = document.createElement("img");
  const priceAndPlace = document.createElement("div");
  const price = document.createElement("h5");
  const place = document.createElement("p");
  const speakers = document.createElement("p");
  const spanPrice = document.createElement("span");
  const spanPlace = document.createElement("span");
  const spanSpeakers = document.createElement("span");

  // Add id
  productsWrapper.id = `removeProduct${create.id}`;

  // Add classList
  productsWrapper.style.border = "1px solid black";
  productsWrapper.style.borderRadius = "20px";
  productsWrapper.style.margin = "15px 0";
  productsWrapper.style.padding = "20px";
  productsWrapper.style.textAlign = "center";
  productHeader.classList.add(
    "font-weight-bold",
    "font-color2",
    "card-heading"
  );
  productImage.classList.add("img-fluid");
  priceAndPlace.classList.add("align-self-start");
  price.classList.add("font-weight-bold", "font-color3");
  place.classList.add("font-weight-bold", "font-color3");
  speakers.classList.add("font-weight-bold", "font-color3");
  spanPrice.classList.add("font-weight-bold", "font-color2");
  spanPlace.classList.add("font-weight-bold", "font-color2");
  spanSpeakers.classList.add("font-weight-bold", "font-color2");

  // Add Atribute
  productImage.src = create.image;

  // Add text
  productHeader.innerText = create.name;
  spanPrice.innerText = `${create.price} €`;
  spanPlace.innerText = create.place;
  spanSpeakers.innerText = create.speakers;
  price.innerText = "Price: ";
  place.innerText = "Place: ";
  speakers.innerText = "Speakers: ";

  // Parent and child
  price.appendChild(spanPrice);
  place.appendChild(spanPlace);
  speakers.appendChild(spanSpeakers);
  productsWrapper.appendChild(productHeader);
  productsWrapper.appendChild(productImage);
  priceAndPlace.appendChild(price);
  priceAndPlace.appendChild(place);
  priceAndPlace.appendChild(speakers);
  productsWrapper.appendChild(priceAndPlace);
  showProducts.appendChild(productsWrapper);
  return showProducts;
};
