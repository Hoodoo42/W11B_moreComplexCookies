// let grabJson = Cookies.get(`selection`);
// let choice = JSON.parse(grabJson);
let thisCheckout = Cookies.get(`checkoutCookie`);
let finalCheckout = JSON.parse(thisCheckout);

if (finalCheckout[`type`] === `cloud`) {
  let container = document.getElementById(`checkout_container`);
  container.insertAdjacentHTML(
    `afterbegin`,
    `
        <h3> ${finalCheckout[`colour`]}</h3>
         <img src ="${finalCheckout[`imgUrl`]}">
         <p> ${finalCheckout[`price`]}
    `
  );
} else {
  container.insertAdjacentHTML(`afterbegin`, `<h3>Your cart is empty</h3>`);
}
