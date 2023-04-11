export const countCardItems = () => {
  // Get user in localStorage and return how many products have user
  const [getUserAndAddInLocalStorage] = JSON.parse(
    localStorage.getItem("navigate")
  );
  const getUserId = getUserAndAddInLocalStorage.id;
  const getUserInLocalStorage = JSON.parse(
    localStorage.getItem(`user${getUserId}`)
  );

  if (getUserInLocalStorage[1]) {
    return getUserInLocalStorage[1].length;
  }

  return 0;
};

export const listCardItems = () => {
  // Get user in localStorage
  const [getUserAndAddInLocalStorage] = JSON.parse(
    localStorage.getItem("navigate")
  );
  const getUserId = getUserAndAddInLocalStorage.id;
  const getUserInLocalStorage = JSON.parse(
    localStorage.getItem(`user${getUserId}`)
  );

  // Check for user have localStorage, if have reduce price and return quantity
  if (getUserInLocalStorage[1]) {
    let arrayOfPrice = [];
    getUserInLocalStorage[1].forEach((element) => {
      arrayOfPrice.push(element.price);
    });

    const initialValue = 0;
    const sumWithInitial = arrayOfPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    return sumWithInitial;
  } else {
    return 0;
  }
};
