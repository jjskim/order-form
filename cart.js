'use strict';

var allOrders = JSON.parse(localStorage.orders);
var orderTable = document.getElementById('order_table');

// function to display the orders
function displayOrders() {

  for (var i = 0; i < allOrders.length; i++) {

    // Make the table row element
    var trEl = document.createElement('tr');

    // for the image data cell
    var tdEl = document.createElement('td');
    var imgEl = document.createElement('img');
    imgEl.src = './img/' + allOrders[i].product + '.jpg';
    tdEl.appendChild(imgEl);
    trEl.appendChild(tdEl);

    // quantity data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].quantity;
    trEl.appendChild(tdEl);

    // name data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].name;
    trEl.appendChild(tdEl);

    // street data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].street;
    trEl.appendChild(tdEl);

    // city data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].city;
    trEl.appendChild(tdEl);

    // state data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].state;
    trEl.appendChild(tdEl);

    // zip data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].zipCode;
    trEl.appendChild(tdEl);

    // phone number data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].phoneNumber;
    trEl.appendChild(tdEl);

    // credit-card data cell
    tdEl = document.createElement('td');
    tdEl.textContent = allOrders[i].creditCard;
    trEl.appendChild(tdEl);

    // // making the delete button
    var buttonEl = document.createElement('button');
    buttonEl.textContent = 'Delete This Order';
    buttonEl.id = i;
    buttonEl.type = 'click';
    buttonEl.addEventListener('click', deleteThisRow);
    trEl.appendChild(buttonEl);

    // the row is now finished -- append the row to the table
    orderTable.appendChild(trEl);
  }
}

// eventhandler function to delete the row or object in the main array
// and then re-render the table
function deleteThisRow(event) {
  var orderIndex = event.target.id;
  allOrders.splice(orderIndex, 1);
  orderTable.innerHTML = '';
  displayOrders();
}

displayOrders();
