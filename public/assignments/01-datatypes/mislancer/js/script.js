// Below are the assignments for Datatypes

/*
  In the array below are a couple of odd numbers, we want to retrieve those numbers.
  Create a new variable called 'odds' and 'push' all odd numbers to this new array using some sort of loop
  Display the odds array to the console.
*/
let all = [12, 1238, 3724, 43, 89, 11, 32443287];
let odd = [];
let result = 0;
let resultDivision;

for (let i = 0; i < all.length; i++) {
    result = all[i];
    result /= 2;
    if (result - Math.trunc(result) === 0.5){
        odd.push (all[i]);}
}
console.log(odd);

/*
  We want to round the decimal below, write some code that rounds the decimal to 8 and 7
*/
let decimal = 7.5;
let roundUp = 0;
let roundDown = 0;

roundDown = Math.trunc(decimal);
roundUp = Math.round(decimal);

console.log(roundDown);
console.log(roundUp);

/*
  In the following string replace 'and' with 'or'
*/
let str = "Hello and welcome to javascript!";
let replaceStr = str.replace(/and/, 'or');

console.log(replaceStr);

/*
  Remove the last element from array a
  Remove the first element from array b
  Combine array a and b into one array called c
  Sort the array alphabetically
*/
let a = ['cookiemonster', 'grover', 'big bird', 'bert', 'ernie'];
let b = ['kermit', 'miss piggy', 'statler', 'waldorf'];
let c = [];

a.pop();
b.shift();
c = a.concat(b);
c.sort()

console.log(c);

/*
  Remove the element 'heineken' from the beers array
*/
let beers = ['amstel', 'heineken', 'grolsch', 'hertog jan'];
let position = 0

position = beers.indexOf("heineken");
beers.splice(position, 1);

console.log(beers);

/*
  Convert the following string to an array, every word has to be a new element.
  The last two words have to be a single element and the code cannot contain a fixed numbers so no 3 as a limit
*/
let toBeArray = 'I am the javascript king';

tempArray1 = toBeArray.split(" ");
popKing = tempArray1.pop();
popJavaScript = tempArray1.pop();
addJavaKing = popJavaScript + " " + popKing;
tempArray2 = addJavaKing.split();

finalArray = tempArray1.concat(tempArray2)

console.log(finalArray);
