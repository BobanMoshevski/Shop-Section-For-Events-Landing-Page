import { countCardItems, listCardItems } from "../card/card.mjs";
import {
  changeElement,
  createElement,
  createProductEl,
} from "../utils/utils.mjs";

// Get DOM elements
const iconCardModal = document.getElementById("iconCardModal");
const iconCardModalBtn = document.getElementById("iconCard");
const closeIconCardBtn = document.querySelector(".card-close");

// Events for modal
iconCardModalBtn.addEventListener("click", openIconCardModal);
closeIconCardBtn.addEventListener("click", closeIconCardModal);
window.addEventListener("click", outsideIconCardClick);

// Open icon card modal
function openIconCardModal() {
  iconCardModal.style.display = "block";
}

// Close icon card modal
function closeIconCardModal() {
  iconCardModal.style.display = "none";
}

// Close if outside click icon card modal
function outsideIconCardClick(e) {
  if (e.target == iconCardModal) {
    iconCardModal.style.display = "none";
  }
}

// Get DOM element
const addButtons = document.getElementById("addBtn");

// Create elements
const createHomePage = document.createElement("button");
const logOutUserBtn = document.createElement("button");

// Get keys of localStorage
const globalLocalStorage = Object.keys(localStorage);

// Add Id
createHomePage.id = "buyAcademy";
logOutUserBtn.id = "logOut";

// Add class
createHomePage.classList.add(
  "basic-btn",
  "custom-btn",
  "btn-bg-color",
  "btn-hover1"
);

logOutUserBtn.classList.add(
  "basic-btn",
  "custom-btn",
  "btn-bg-color",
  "btn-hover1"
);

// Add text on buttons
createHomePage.innerText = "Home page";
logOutUserBtn.innerText = "Log out";

// Event for Academies
createHomePage.onclick = () =>
  (window.location.href = window.location.origin + "/index.html");

// Event for logout button
logOutUserBtn.onclick = () => {
  // Hide and show elements
  iconCardModal.style.display = "none";
  iconCardModalBtn.style.display = "none";
  createHomePage.style.display = "none";
  logOutUserBtn.style.display = "none";

  // Set logOut object with empty array, and remove card object
  localStorage.setItem("logOut", JSON.stringify());
  localStorage.removeItem("card", JSON.stringify());

  const cardProducts = document.querySelector(".cardProducts");
  cardProducts.innerHTML = "";

  // Before finish logout button go to navigation
  navigateLoggedInUser();
};

/////////////////////////////////////////////////// Card Product /////////////////////

// Add product in localStorage
const addCardToLocalStorage = (newCardProduct) => {
  // Get user in localStorage
  const [getUserAndAddInLocalStorage] = JSON.parse(
    localStorage.getItem("navigate")
  );
  const getUserId = getUserAndAddInLocalStorage.id;
  const getUserInLocalStorage = JSON.parse(
    localStorage.getItem(`user${getUserId}`)
  );

  // Put first product and second product in variable
  const addFirstProduct = [newCardProduct];
  const addSecondProduct = newCardProduct;

  // Get DOM
  const cardProducts = document.querySelector(".cardProducts");
  const changeProducts = document.querySelector(".changeProducts");

  // Hide elements wrapper, show elements wrapper
  cardProducts.style.display = "block";
  changeProducts.style.display = "none";

  // Check for user localStorage
  if (getUserInLocalStorage.length === 1) {
    // Get localStorage, set first product in user localStorage, and create product to show
    getUserInLocalStorage.push(addFirstProduct);

    localStorage.setItem(
      `user${getUserId}`,
      JSON.stringify(getUserInLocalStorage)
    );

    createElement(newCardProduct);
  } else if (getUserInLocalStorage.length === 2) {
    // Get localStorage and set next product
    getUserInLocalStorage[1].push(addSecondProduct);

    localStorage.setItem(
      `user${getUserId}`,
      JSON.stringify(getUserInLocalStorage)
    );

    // Remvoe all childs
    cardProducts.innerHTML = "";
    changeProducts.innerHTML = "";

    // Create new elements
    getUserInLocalStorage[1].forEach((sameElement) => {
      createElement(sameElement);
    });
  }

  // Show how many items have in card
  showCardItems();

  // Reduce quantity and show in icon card modal
  const quantiity = listCardItems();
  const setQuantity = document.getElementById("quantity");
  setQuantity.innerText = `Quantity: ${quantiity} €`;
};

// Remove product in localStorage
const removeCardToLocalStorage = (newCardProduct) => {
  // Get user in localStorage
  const [getUserAndRemoveInLocalStorage] = JSON.parse(
    localStorage.getItem("navigate")
  );
  const getUserId = getUserAndRemoveInLocalStorage.id;
  const getUserInLocalStorage = JSON.parse(
    localStorage.getItem(`user${getUserId}`)
  );

  // Create new array
  const createNewUserArray = getUserInLocalStorage[0];
  const removeAcademy = getUserInLocalStorage[1];
  const newArrayUserId = getUserInLocalStorage.filter(
    (newAray) => newAray.id === createNewUserArray.id
  );
  const newArray = removeAcademy.filter(
    (item) => item.id !== newCardProduct.id
  );

  // Get DOM
  const cardProducts = document.querySelector(".cardProducts");
  const changeProducts = document.querySelector(".changeProducts");

  // Hide elements wrapper, show elements wrapper
  cardProducts.style.display = "none";
  changeProducts.style.display = "block";

  // Push in new array of user
  newArrayUserId.push(newArray);

  // Set new array of user in localStorage
  localStorage.setItem(`user${getUserId}`, JSON.stringify(newArrayUserId));

  // Remove all childs
  cardProducts.innerHTML = "";
  changeProducts.innerHTML = "";

  // Create new elements
  newArray.forEach((sameElement) => {
    changeElement(sameElement);
  });

  // Show how many items have in card
  showCardItems();

  // Reduce quantity and show in icon card modal
  const quantiity = listCardItems();
  const setQuantity = document.getElementById("quantity");
  setQuantity.innerText = `Quantity: ${quantiity} €`;
};

const navigateLoggedInUser = () => {
  // Get user in localStorage
  const checkCard = Object.keys(localStorage);

  // Get DOM, and selected all buttons
  const removeCard = document.querySelectorAll(".cardElement");

  // Check and navigate
  if (
    checkCard.includes("card") == true &&
    checkCard.includes("navigate") == true
  ) {
    // Get products in localStorage
    const getLocalStorageCard = JSON.parse(localStorage.getItem("card"));

    // Remove all buttons
    removeCard.forEach((removeElement) => removeElement.remove());

    // Hide element
    iconCardModalBtn.style.display = "block";

    // Create elements and events
    getLocalStorageCard.forEach((createElement) => {
      createProductEl(createElement);

      // Get product id
      const productId = createElement.id;

      // Get buy and remove button
      const buyBtn = document.getElementById(`buyBtn${productId}`);
      const removeBtn = document.getElementById(`removeBtn${productId}`);

      // Events
      buyBtn.onclick = () => {
        addCardToLocalStorage(createElement);
        buyBtn.style.display = "none";
        removeBtn.style.display = "block";
      };
      removeBtn.onclick = () => {
        removeCardToLocalStorage(createElement);
        buyBtn.style.display = "block";
        removeBtn.style.display = "none";
      };
    });

    // Get user in localStorage
    const [getUserId] = JSON.parse(localStorage.getItem("navigate"));
    const getUserIdInLocalStorage = getUserId.id;
    const getUserInLocalStorage = JSON.parse(
      localStorage.getItem(`user${getUserIdInLocalStorage}`)
    );

    // Check for products
    if (getUserInLocalStorage[1]) {
      const cardProducts = document.querySelector(".cardProducts");
      cardProducts.innerHTML = "";
      getUserInLocalStorage[1].forEach((hideBtn) => {
        // Get product id
        const getProductId = hideBtn.id;

        // Get DOM of buttons
        const getBuyBtnToChange = document.getElementById(
          `buyBtn${getProductId}`
        );
        const getRemoveBtnToChange = document.getElementById(
          `removeBtn${getProductId}`
        );

        // Hide and show elements
        getBuyBtnToChange.style.display = "none";
        getRemoveBtnToChange.style.display = "block";

        createElement(hideBtn);
      });
    }

    // Show how many items have in card
    showCardItems();

    // Reduce quantity and show in icon card modal
    const quantiity = listCardItems();
    const setQuantity = document.getElementById("quantity");
    setQuantity.innerText = `Quantity: ${quantiity} €`;
  } else {
    // Element does not exist!
    removeCard.forEach((removeElement) => removeElement.remove());
    iconCardModalBtn.style.display = "none";
    window.location.href = window.location.origin + "/index.html";
  }
};

// Show how many items have in card
const showCardItems = () =>
  (document.getElementById(
    "cardItemsNumber"
  ).innerHTML = `${countCardItems()}`);

// When the page is refresh and navigate
if (globalLocalStorage.includes("logOut")) {
  // If localStorage have logOut object, and hide element
  iconCardModalBtn.style.display = "none";

  // If have logOut localStorage go in home page
  window.location.href = window.location.origin + "/index.html";
} else if (globalLocalStorage.includes("navigate")) {
  // If localStorage have navigate object
  // Hide and show elements
  iconCardModalBtn.style.display = "block";

  // Add buttons
  addButtons.appendChild(createHomePage);
  addButtons.appendChild(logOutUserBtn);

  // Get user in localStorage
  const [getUserId] = JSON.parse(localStorage.getItem("navigate"));
  const getUserIdInLocalStorage = getUserId.id;
  const getUserInLocalStorage = JSON.parse(
    localStorage.getItem(`user${getUserIdInLocalStorage}`)
  );

  if (getUserInLocalStorage[1]) {
    // Create elements
    getUserInLocalStorage[1].forEach((hideBtn) => {
      createElement(hideBtn);
    });
  }

  // Reduce quantity and show in icon card modal
  const quantiity = listCardItems();
  const setQuantity = document.getElementById("quantity");
  setQuantity.innerText = `Quantity: ${quantiity} €`;

  // Navigate user
  navigateLoggedInUser();
}

// Take products
fetch(`https://63407044d1fcddf69cb8c368.mockapi.io/academies`).then(
  (response) =>
    response.json().then((stores) => {
      // Check if localStorage have logOut
      if (globalLocalStorage.includes("logOut")) {
        window.location.href = window.location.origin + "/index.html";
      } else {
        // Navigate user if dosn't have logOut object
        navigateLoggedInUser(stores);
      }
    })
);
