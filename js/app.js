
// creating a variable to hold the array of object (items being added to cart)
let checkout = [];


// all functions will create on object describe which item was clicked on
function showRed(details) {
  let red = {
    type: `cloud`,
    colour: `Red`,
    imgUrl: `images/red.png`,
    description: `The first colour of the rainbow!`,
    price: 23,
  };

  // checkout.push will add the object to the checkout array
  // the array is turned into a string
  // and saved into a cookie
  checkout.push(red);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);
}

function showYellow(details) {
  let yellow = {
    type: `cloud`,
    colour: `Yellow`,
    imgUrl: `images/yellow.png`,
    description: `The third colour of the rainbow!`,
    price: 42,
  };

  checkout.push(yellow);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);
}

function showBlue(details) {
  let blue = {
    type: `cloud`,
    colour: `Blue`,
    imgUrl: `images/teal.png`,
    description: `The fourth colour of the rainbow!`,
    price: 25,
  };

  checkout.push(blue);
  let checkoutJson = JSON.stringify(checkout);
  Cookies.set(`checkoutCookie`, checkoutJson);
}

let redButton = document.getElementById("red_button");
redButton.addEventListener(`click`, showRed);

let yellowButton = document.getElementById(`yellow_button`);
yellowButton.addEventListener(`click`, showYellow);

let blueButton = document.getElementById(`blue_button`);
blueButton.addEventListener(`click`, showBlue);
