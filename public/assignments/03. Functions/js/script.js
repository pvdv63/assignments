// Functions

// 1. Make a loop with only functions, it should count from 10 to 1
// If you need help look at recursive functions, these are functions which call themselves
function recursive(x) {
if(x===1)
{
  return 1;
}
  console.log(x);
  return recursive(x-1);
}
console.log(recursive(10))
// 2. Why would this example throw an error?
// function outer() {
//   function inner() {
//     let x = 10;
//   }
//   console.log(x);
// }
//console.log(x) wordt opgeroepen in outer terwijl x gedefinieerd is in innter.
// 3. Making a pizza's!

// To access our HTML page, we have to wait until the page has been loaded.
// This (event) function will automatically be called once the page is ready
// After the page is loaded we can access the elements and make changes
window.onload = function () {

  // Get all the new pizza's on the page, we use the DOM to access our html file
  let pizza1 = document.querySelector('.pizza1');
  let pizza2 = document.querySelector('.pizza2');
  let pizza3 = document.querySelector('.pizza3');
  let pizza4 = document.querySelector('.pizza4');
  let pizza5 = document.querySelector('.pizza5');

  // WHAT YOU NEED TO DO
  // On the page you can see four pizzas that we want to make (bottom four pizza's),
  // uncomment the make methods below and add the right params to get the toppings that we want.
  // Bon appetit

  // Make the first pizza
  pizzaMaker.make(pizza1, [ pizzaMaker.crust, pizzaMaker.sauce, pizzaMaker.cheese ] );

  // Make the second pizza
  pizzaMaker.make(pizza2, [ pizzaMaker.sauce, pizzaMaker.salami ] );

  // Make the third pizza
  pizzaMaker.make(pizza3, [ pizzaMaker.crust, pizzaMaker.sauce, pizzaMaker.cheese, pizzaMaker.salami ] );

  // Make the fourth pizza
  pizzaMaker.make(pizza4, [ pizzaMaker.cheese, pizzaMaker.salami ] );
}

// The object that let us make new pizza's!
// To make a pizza we call the make method, like pizzaMaker.make()
let pizzaMaker = {
  make : function(pizza, callbacks) {
    callbacks.forEach(function(callback){
      callback(pizza);
    });
  },
  // Add sauce to the pizza
  sauce : function (pizza) {
    pizza.classList.add('sauce');
  },
  // Add cheese to the pizza
  cheese : function(pizza) {
    pizza.classList.add('cheese');
  },
  // Add salami to the pizza
  salami : function(pizza) {
    pizza.classList.add('salami');
  },
  // Give the pizza a thick fat crust
  crust : function(pizza) {
    pizza.classList.add('thick-crust');
  },
};
