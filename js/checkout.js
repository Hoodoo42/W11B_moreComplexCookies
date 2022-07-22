let grabJson = Cookies.get(`selection`);
let choice = JSON.parse(grabJson);



if(choice[`colour`] === `Red`){
    // document.body.insertAdjacentHTML("beforeend", `<h2>You picked Red!</h2>`);
    let container = document.getElementById(`checkout_container`);
    container.insertAdjacentHTML(`beforeend`, 
        `<h3> ${choice[`colour`]}</h3>
         <img src="images/red.png" alt="">
         <p> ${choice[`price`]}`)


};