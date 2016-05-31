function assert(expectedValue, realValue) {
  if (expectedValue.toString() === realValue.toString()) {
    put("OK: " + expectedValue + " === " + realValue);
  } else {
    put("ERROR: " + expectedValue + " !== " + realValue);
  }
}

var orderNumber = 0;

function put(text) {
  orderNumber++;
  console.log("TEST " + orderNumber + ")", text);
}


// Below are the assignments for Datatypes

/*
  In the array below are a couple of odd numbers, we want to retrieve those numbers.
  Create a new variable called 'odds' and 'push' all odd numbers to this new array using some sort of loop
  Display the odds array to the console.
*/
var all = [12, 1238, 3724, 43, 89, 11, 32443287];
var odds = [];
all.forEach(function(element) { 
  if (element % 2 === 1) {
    odds.push(element); 
  }
});
assert([43, 89, 11, 32443287], odds);

/*
  We want to round the decimal below, write some code that rounds the decimal to 8 and 7
*/
var decimal = 7.5;
assert(7, Math.floor(decimal));
assert(8, Math.ceil(decimal));

/*
  In the following string replace 'and' with 'or'
*/
var str = "Hello and welcome to javascript!"
var replaced = str.replace('and', 'or');
assert('Hello or welcome to javascript!', replaced);

/*
  Remove the last element from array a
  Remove the first element from array b
  Combine array a and b into one array called c
  Sort the array alphabetically
*/
var a = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
var b = ['kermit', 'miss piggy', 'statler', 'waldorf'];
a.pop();
b = b.splice(1);
var c = a.concat(b);
assert(["bert", "big bird", "cookiemonster", "grover", "miss piggy", "statler", "waldorf"], c.sort());

/*
  Remove the element 'heineken' from the beers array
*/
var beers = ['amstel', 'heineken', 'grolsch', 'hertog jan'];
var unwantedValue = 'heineken';
var unwantedIndex = beers.indexOf(unwantedValue);
beers.splice(unwantedIndex, 1);
assert(["amstel", "grolsch", "hertog jan"], beers);

/*
  Convert the following string to an array, every word has to be a new element.
  The last two words have to be a single element and the code cannot contain a fixed numbers so no 3 as a limit
*/
var toBeArray = 'I am the javascript king';
var words = toBeArray.split(' ');
var lastWord = words.pop();
var penultimateWord = words.pop();
words.push(penultimateWord + " " + lastWord);
assert(["I", "am", "the", "javascript king"], words);

