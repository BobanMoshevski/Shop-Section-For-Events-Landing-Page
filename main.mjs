import { countCardItems, listCardItems } from "./card/card.mjs";
import {
  changeElement,
  createElement,
  createProductEl,
} from "./utils/utils.mjs";

// Get DOM elements
const loginModal = document.getElementById("loginModal");
const loginModalBtn = document.getElementById("loginModalBtn");
const registerModal = document.getElementById("registerModal");
const registerModalBtn = document.getElementById("modalRegisterBtn");
const iconCardModal = document.getElementById("iconCardModal");
const iconCardModalBtn = document.getElementById("iconCard");
const closeLoginBtn = document.querySelector(".login-close");
const closeRegisterBtn = document.querySelector(".register-close");
const closeIconCardBtn = document.querySelector(".card-close");
const cardProducts = document.querySelector(".cardProducts");
cardProducts.innerHTML = "";

// Events for modals
loginModalBtn.addEventListener("click", openLoginModal);
closeLoginBtn.addEventListener("click", closeLoginModal);
registerModalBtn.addEventListener("click", openRegisterModal);
closeRegisterBtn.addEventListener("click", closeRegisterModal);
iconCardModalBtn.addEventListener("click", openIconCardModal);
closeIconCardBtn.addEventListener("click", closeIconCardModal);
window.addEventListener("click", outsideLoginClick);
window.addEventListener("click", outsideRegisterClick);
window.addEventListener("click", outsideIconCardClick);

// Open Login, Register, Icon card Modals
function openLoginModal() {
  loginModal.style.display = "block";
}
function openRegisterModal() {
  registerModal.style.display = "block";
}
function openIconCardModal() {
  iconCardModal.style.display = "block";
}

// Close Login, Register, Icon card Modals
function closeLoginModal() {
  loginModal.style.display = "none";
}
function closeRegisterModal() {
  registerModal.style.display = "none";
}
function closeIconCardModal() {
  iconCardModal.style.display = "none";
}

// Close if outside click  Login, Register, Icon card Modals
function outsideLoginClick(e) {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
}
function outsideRegisterClick(e) {
  if (e.target == registerModal) {
    registerModal.style.display = "none";
  }
}
function outsideIconCardClick(e) {
  if (e.target == iconCardModal) {
    iconCardModal.style.display = "none";
  }
}

///////////////////// Register ///////////////////////

// Check for password
const checkLowerCase = /^(?=.*[a-z])/;
const checkUpperCase = /^(?=.*[A-Z])/;
const checkNumber = /^(?=.*[0-9])/;
const checkSpecialCharacters = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
const checkAllCharacters =
  /^(?=.*[a-z][A-Z][0-9][!,@,#,$,%,^,&,*,?,_,~,-,(,)])/;

// Get DOM elements
const registerInputValue = document.getElementById("passwordRegister");
const lowerCaseLetterMsg = document.getElementById("letter");
const upperCaseLetterMsg = document.getElementById("capital");
const numberMsg = document.getElementById("number");
const specialCharacterMsg = document.getElementById("specialCharacter");
const passwordLengthMsg = document.getElementById("length");
const checkAllCharactersMsg = document.getElementById("message");
const registerBtn = document.getElementById("registerBtn");
const registerErrorMsg = document.querySelector(".register-error-msg");

// Add color to message
registerErrorMsg.style.color = "red";

// When the user clicks on the password field, show the message box
registerInputValue.onfocus = function () {
  checkAllCharactersMsg.style.display = "block";
};

// When the user starts to type something inside the password field
registerInputValue.onkeyup = function () {
  // Validate lowercase letters
  if (registerInputValue.value.match(checkLowerCase)) {
    lowerCaseLetterMsg.classList.remove("invalid");
    lowerCaseLetterMsg.classList.add("valid");
  } else {
    lowerCaseLetterMsg.classList.remove("valid");
    lowerCaseLetterMsg.classList.add("invalid");
  }

  // Validate capital letters
  if (registerInputValue.value.match(checkUpperCase)) {
    upperCaseLetterMsg.classList.remove("invalid");
    upperCaseLetterMsg.classList.add("valid");
  } else {
    upperCaseLetterMsg.classList.remove("valid");
    upperCaseLetterMsg.classList.add("invalid");
  }

  // Validate numbers
  if (registerInputValue.value.match(checkNumber)) {
    numberMsg.classList.remove("invalid");
    numberMsg.classList.add("valid");
  } else {
    numberMsg.classList.remove("valid");
    numberMsg.classList.add("invalid");
  }

  // Validate special characters
  if (registerInputValue.value.match(checkSpecialCharacters)) {
    specialCharacterMsg.classList.remove("invalid");
    specialCharacterMsg.classList.add("valid");
  } else {
    specialCharacterMsg.classList.remove("valid");
    specialCharacterMsg.classList.add("invalid");
  }

  // Validate length
  if (registerInputValue.value.length >= 10) {
    passwordLengthMsg.classList.remove("invalid");
    passwordLengthMsg.classList.add("valid");
  } else {
    passwordLengthMsg.classList.remove("valid");
    passwordLengthMsg.classList.add("invalid");
  }
};

// Event for register button
registerBtn.addEventListener("click", () => registerUser());

// Registration
const registerUser = () => {
  const form = document.forms["register"];
  const formData = new FormData(form);
  const values = Object.fromEntries(formData);

  // Check for validation
  if (form.checkValidity()) {
    // If password have condition
    if (
      registerInputValue.value.match(checkAllCharacters) ||
      values.password.length >= 10
    ) {
      registerBtn.disabled = true;
      fetch("https://63407044d1fcddf69cb8c368.mockapi.io/users", {
        method: "POST",
        body: values,
      }).then(() => {
        registerModal.style.display = "none";
        loginModal.style.display = "block";
        checkAllCharactersMsg.style.display = "none";
        registerErrorMsg.style.display = "none";
      });
    } else {
      // If password don't have condition
      registerErrorMsg.innerText =
        "Password must be larger than 10 charackters, one uppercase letter, one lowercase letter, one number and one special character";
    }
  } else {
    // If validation it's not valid
    registerErrorMsg.innerText = "Email and password must be valid!";
  }
};

//////////////////////Login//////////////////////////

// Get DOM elements
const loginBtn = document.getElementById("loginBtn");
const loginErrorMsg = document.querySelector(".login-error-msg");
const addButtons = document.getElementById("addBtn");

// Create elements
const createShopBtn = document.createElement("button");
const logOutUserBtn = document.createElement("button");

// Get keys of localStorage
const globalLocalStorage = Object.keys(localStorage);

// Add Id
createShopBtn.id = "buyAcademy";
logOutUserBtn.id = "logOut";

// Add class
createShopBtn.classList.add(
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

// Add color to login message
loginErrorMsg.style.color = "red";

// Add text on buttons
createShopBtn.innerText = "Academies";
logOutUserBtn.innerText = "Log out";

// Event for Academies
createShopBtn.onclick = () =>
  (window.location.href = window.location.origin + "/shop/shop.html");

// Event for logout button
logOutUserBtn.onclick = () => {
  // Hide and show elements
  iconCardModal.style.display = "none";
  iconCardModalBtn.style.display = "none";
  loginModalBtn.style.display = "block";
  registerModalBtn.style.display = "block";
  createShopBtn.style.display = "none";
  logOutUserBtn.style.display = "none";

  // Login button make to press
  loginBtn.disabled = false;

  // Set logOut object with empty array, and remove card object
  localStorage.setItem("logOut", JSON.stringify());
  localStorage.removeItem("card", JSON.stringify());

  const cardProducts = document.querySelector(".cardProducts");
  cardProducts.innerHTML = "";

  // Before finish logout button go to navigation
  navigateLoggedInUser();
};

// Get random number ((max) mean get database length of users)
const getRandomId = (max) => Math.round(Math.random() * (max - 1) + 1);

// Login
const loginUser = () => {
  const form = document.forms["login"];

  // Check for validation of email and password
  if (form.checkValidity()) {
    // If login form are true
    if (form) {
      // Make login button to don't press then get user and navigation
      loginBtn.disabled = true;
      fetch("https://63407044d1fcddf69cb8c368.mockapi.io/users").then(
        (response) =>
          response.json().then((users) => {
            // Generate random number and take user of database
            const userId = getRandomId(users.count);
            fetch(
              `https://63407044d1fcddf69cb8c368.mockapi.io/users/${userId}`
            ).then((response) =>
              response.json().then((responseUser) => {
                // Get user and check for user in localStorage
                const nameOfUser = `user${userId}`;
                const checkUser = JSON.parse(localStorage.getItem(nameOfUser));

                // Chek User in localStorage
                if (checkUser) {
                  // Check if user it is in localStorage (this will return boolean)
                  const userExist = checkUser.find(
                    (sameUser) => responseUser.id === sameUser.id
                  );

                  // Check user if it exist
                  if (userExist) {
                    // Set user in navigate
                    localStorage.setItem(
                      "navigate",
                      JSON.stringify([responseUser])
                    );
                  } else {
                    // If user it's not in localStorage, push in array
                    checkUser.push(responseUser);
                  }

                  // Set user in localStorage
                  localStorage.setItem(nameOfUser, JSON.stringify(checkUser));
                } else {
                  // If user not in localStorage, set user in local storage, and set navigate to get id of user to find user with id
                  localStorage.setItem(
                    nameOfUser,
                    JSON.stringify([responseUser])
                  );
                  localStorage.setItem(
                    "navigate",
                    JSON.stringify([responseUser])
                  );
                }

                // Hide and show elements
                loginModalBtn.style.display = "none";
                registerModalBtn.style.display = "none";
                iconCardModalBtn.style.display = "none";
                loginModal.style.display = "none";
                createShopBtn.style.display = "block";
                logOutUserBtn.style.display = "block";

                // Add buttons in navbar (academies and logout)
                addButtons.appendChild(createShopBtn);
                addButtons.appendChild(logOutUserBtn);

                // User navigations
                navigateLoggedInUser(responseUser);
              })
            );
          })
      );
      // Hide login error message
      loginErrorMsg.style.display = "none";

      // Login button make to press
      loginBtn.disabled = true;
    }
  } else {
    // If validation it's not true, send message and login button make to press
    loginErrorMsg.innerText = "Email must be valid, and must write password";
    loginBtn.disabled = false;
  }
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
} else if (globalLocalStorage.includes("navigate")) {
  // If localStorage have navigate object
  // Hide and show elements
  loginModalBtn.style.display = "none";
  registerModalBtn.style.display = "none";
  iconCardModalBtn.style.display = "block";
  loginModal.style.display = "none";

  // Add buttons
  addButtons.appendChild(createShopBtn);
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
      } else {
        // Navigate user if dosn't have logOut object
        navigateLoggedInUser(stores);
      }

      // Event
      loginBtn.addEventListener("click", () => {
        // Go to login function to check user
        loginUser();

        // Remove and add object in localStorage
        localStorage.removeItem("logOut", JSON.stringify());
        localStorage.setItem("card", JSON.stringify(stores));

        const cardProducts = document.querySelector(".cardProducts");
        cardProducts.innerHTML = "";

        // Navigate user
        navigateLoggedInUser(stores);
      });
    })
);
