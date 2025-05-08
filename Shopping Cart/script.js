"use strict";

let allTotal = 0;

function addToCart(element) {
  // get the closest element with the class "single-item"
  let mainEl = element.closest(".single-item");
  // get the element with the class "price" inside the mainEl
  let price = mainEl.querySelector(".price").innerText;
  // get the element with h3 heading inside mainEl
  let name = mainEl.querySelector("h3").innerText;
  // get the value we put inside the input field inside mainEl
  let quantity = mainEl.querySelector("input").value;
  let cartItems = document.querySelector(".cart-items");

  // checking if the quantity is greater than 0
  if (Number(quantity) > 0) {
    // remove the dollar sign
    price = price.substring(1);
    price = Number(price);
    let total = price * Number(quantity);

    // adding the totals to the total variable
    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
                              <h3>${name}</h3>
                              <p>$${price} x ${quantity} = $<span>${total}</span></p>
                              <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                             </div>`;

    document.querySelector(".total").innerText = `Total: $${allTotal}`;

    element.innerText = "Added";
    // disable the button after adding to cart
    element.setAttribute("disabled", "true");
  } else {
    alert("Choose quantity!");
  }
}

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  // price of total
  let price = mainEl.querySelector("p span").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");
  price = Number(price);

  // remove the item from the cart
  allTotal -= price;
  // update total
  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  mainEl.remove();

  // enable the button again and sets the deafult text on buttons
  vegetables.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h3").innerText;
    if (itemName === name) {
      vege.querySelector(".actions input").value = 0;
      vege.querySelector(".actions button").removeAttribute("disabled");
      vege.querySelector(".actions button").innerText = "Add";
    }
  });
}


