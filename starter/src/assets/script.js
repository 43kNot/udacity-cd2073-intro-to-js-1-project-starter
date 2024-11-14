/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

const products = [
    { name: 'strawberry', price: 1, quantity: 0, productId: 1, image: 'images/strawberry.jpg' },
    { name: 'orange', price: 1.5, quantity: 0, productId: 2, image: 'images/orange.jpg' },
    { name: 'cherry', price: 2, quantity: 0, productId: 3, image: 'images/cherry.jpg' }
];


/* Declare an empty array named cart to hold the items in the cart */

const cart = [];
let productFound = false;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {

// Loop through the cart to check if the product already exists
  let product = products.find(product => product.productId === productId);
  product.quantity += 1;

  if (!cart.includes(product)) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {

  // increasing quantity of products in the cart
  let product = products.find(productId, cart)
  product.quantity = product.quantity + 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {

  // decreasing the quantity of products in the cart
  let product = products.find(productId, cart)
  product.quantity = product.quantity - 1;
  if (product.quantity === 0) {
    product.quantity = 0
    cart.splice(index,1)
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  const index = cart.findIndex((product) => product.productId === productId);
  if (index !== -1) {
  cart[index].quantity = 0;
  cart.splice(index, 1);
}
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
  let totalCost = 0;

  // calculating the total cost and returning it
  for (let i =0; i < cart.length; i++) {
    totalCost = totalCost + (cart[i].quantity * cart[i].price);
  }
  return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.splice(0, cart.length); //empty everything from cart
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

let totalPaid = 0;
function pay(amount) {

  totalPaid = totalPaid + amount;
  let remainingBalance = totalPaid - cartTotal();

  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
   return remainingBalance;
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
