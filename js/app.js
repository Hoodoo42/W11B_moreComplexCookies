function showRed(details) {
  let red = {
    colour: `Red`,
    imgUrl: `images/red.png`,
    price: 23
  };
  let redJson = JSON.stringify(red);
  Cookies.set(`selection`, redJson);
  location.href = `checkout.html`;
}

function showYellow(details) {
  let yellow = {
    colour: `Yellow`,
    imgUrl: `/Users/colleen/Desktop/Innotech/Assignments/week11/W11B_moreComplexCookies/images/yellow.png`,
    description: `The third colour of the rainbow!`,
  };
  let yellowJson = JSON.stringify(yellow);
  Cookies.set(`selection`, yellowJson);
  location.href = `checkout.html`;
}

function showBlue(details) {
  let blue = {
    colour: `Blue`,
    imgUrl: `/Users/colleen/Desktop/Innotech/Assignments/week11/W11B_moreComplexCookies/images/teal.png`,
    description: `The fourth colour of the rainbow!`,
  };
  let blueJson = JSON.stringify(blue);
  Cookies.set(`selection`, blueJson);
  location.href = `checkout.html`;
}

let redButton = document.getElementById("red_button");
redButton.addEventListener(`click`, showRed);

let yellowButton = document.getElementById(`yellow_button`);
yellowButton.addEventListener(`click`, showYellow);

let blueButton = document.getElementById(`blue_button`);
blueButton.addEventListener(`click`, showBlue);
