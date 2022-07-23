// the checkout array is grabbed
// and then reverted back into an object
let thisCheckout = Cookies.get(`checkoutCookie`);
let finalCheckout = JSON.parse(thisCheckout);

// this will count through the object each time one is added and enter the following information onto the page, per item
for (i = 0; i < finalCheckout.length; i++) {
  if (finalCheckout[i]) {
    let container = document.getElementById(`checkout_container`);
    container.insertAdjacentHTML(
      `afterbegin`,
      `
        <h3> ${finalCheckout[i][`colour`]}</h3>
         <img src ="${finalCheckout[i][`imgUrl`]}">
         <p> ${finalCheckout[i][`price`]}
         <button id="delete_button">delete</button>
    `
    );
    // once i figure out how to, this will allow an empty cart to diplay a message
  } else {
    container.insertAdjacentHTML(`afterbegin`, `<h3>Your cart is empty</h3>`);
  }
}

// // working on making the delete button functional

// function deleteItem(details){

// }

// let deleteButton = document.getElementById(`delete_button`)
// deleteButton.addEventListener(`click`, deleteItem)

// // working on making my "empty cart message" display

// if(finalCheckout=== `undefined`){

//     Cookies.set(`finalCheckout`, 0);
