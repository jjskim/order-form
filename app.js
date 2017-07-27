'use strict';

var orderForm = document.getElementById('order_form');


// Constructor function for the Order object
function Order (product, quantity, name, street, city, state, zipCode, phoneNumber, creditCard) {
  this.product = product;
  this.quantity = quantity;
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
  this.phoneNumber = phoneNumber;
  this.creditCard = creditCard;

  // push the "finished" order object to the array
  Order.all.push(this);
}

Order.all = [];

function handleOrderSubmit(event) {

  event.preventDefault(); // because Sam told us to

  var productInput = event.target.product_name.value;
  var quantityInput = event.target.quantity.value;
  var nameInput = event.target.name.value;
  var streetInput = event.target.street.value;
  var cityInput = event.target.city.value;
  var stateInput = event.target.state.value;
  var zipCodeInput = event.target.zip.value;
  var phoneNumberInput = event.target.phone.value;
  var creditCardInput = event.target.credit_card_number.value;

  event.target.product_name.value = null;
  event.target.quantity.value = null;
  event.target.name.value = null;
  event.target.street.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zip.value = null;
  event.target.phone.value = null;
  event.target.credit_card_number.value = null;

  // make the object with the input data
  new Order(productInput, quantityInput, nameInput, streetInput, cityInput, stateInput, zipCodeInput, phoneNumberInput, creditCardInput);

  // store the object array to localstorage
  localStorage.orders = JSON.stringify(Order.all);
}

orderForm.addEventListener('submit', handleOrderSubmit);
