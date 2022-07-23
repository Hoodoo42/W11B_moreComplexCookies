let checkout = [];

function showRed(details) {
  let red = {
    type: `cloud`,
    colour: `Red`,
    imgUrl: `images/red.png`,
    price: 23,
  };
  // let redJson = JSON.stringify(red);
  // Cookies.set(`selection`, redJson);

  checkout.push(red);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);

  // when the following code is on, it doesnt count up on clicks

  // // Cookies.set(`cartClick`, 0);
  // // if (Cookies.get(`cartClick`) === undefined) {
  // //   Cookies.set(`cartClick`, 0);
  // }
  // debugger says currentItems: NaN... but its should be?
  let currentItems = parseInt(Cookies.get(`cartClick`));
  currentItems++;

  Cookies.set(`cartClick`, currentItems);
}

function showYellow(details) {
  let yellow = {
    type: `cloud`,
    colour: `Yellow`,
    imgUrl: `images/yellow.png`,
    description: `The third colour of the rainbow!`,
  };
  // let yellowJson = JSON.stringify(yellow);
  // Cookies.set(`selection`, yellowJson);

  checkout.push(yellow);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);

  // Cookies.set(`cartClick`, 0);
  // if (Cookies.get(`cartClick`) === undefined) {
  //   Cookies.set(`cartClick`, 0);
  // }
  // debugger says currentItems: NaN... but its should be?
  let currentItems = parseInt(Cookies.get(`cartClick`));
  currentItems++;

  Cookies.set(`cartClick`, currentItems);
}

function showBlue(details) {
  let blue = {
    type: `cloud`,
    colour: `Blue`,
    imgUrl: `images/teal.png`,
    description: `The fourth colour of the rainbow!`,
  };
  // let blueJson = JSON.stringify(blue);
  // Cookies.set(`selection`, blueJson);

  checkout.push(blue);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);

  // Cookies.set(`cartClick`, 0);
  // if (Cookies.get(`cartClick`) === undefined) {
  //   Cookies.set(`cartClick`, 0);
  // }
  // debugger says currentItems: NaN... but its should be?
  let currentItems = parseInt(Cookies.get(`cartClick`));
  currentItems++;

  Cookies.set(`cartClick`, currentItems);
}

let redButton = document.getElementById("red_button");
redButton.addEventListener(`click`, showRed);

let yellowButton = document.getElementById(`yellow_button`);
yellowButton.addEventListener(`click`, showYellow);

let blueButton = document.getElementById(`blue_button`);
blueButton.addEventListener(`click`, showBlue);
