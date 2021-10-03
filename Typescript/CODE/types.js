// Don't have JS and TS file open at the same time, I will get an error.
/*
    All numbers, no differenciation between integers or floats, e.g. 5.0 is
    the same as 5.
*/
var num1 = 5;
// all text values
var text1 = "This is a string.";
var text2 = 'This is a string.';
var text3 = "This is a string.";
// just these two, no "truthy" or "falsy" values like in JS.
var bool1 = true;
var bool2 = false;
/*
    Enforcing types in functions. TypeScript's type system only helps
    me during develeopment, i.e. before the code gets compiles.
*/
function multiply(n1, n2) {
    return n1 * n2;
}
//get the type of variable
console.log(typeof multiply(8, 7));
//how to throw errors
function multiply_n(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect type input in method!');
    }
    return n1 * n2;
}
console.log(multiply_n(4, 6));
/*
    TypeScript knows a lot more types than JS.
*/
// null object
var nothing = null;
console.log(nothing);
/*
    Undefined denotes a value given to an unitialized variable.
*/
var e = undefined;
/*
    If a variable is declared with the "any" data-type then any type of value can be
    assigned to that variable.
*/
var anything = "Can literally be anything!";
/*
    Void in typescript. Only null or undefined are assignable to void.
*/
function helloWorld() {
    console.log("Hello World!");
}
var nada = undefined;
var none = null;
var something = "Word";
// TYPE ASSIGNMENTS
// It is bad practice to inialize a varibale like below.
var num = 25;
//This is unconventional but better
var num;
num = 2;
// I should initialize a variable like this. TypeScript will take note on its Type.
var number1 = 0;
number1 = 1;
/*
    CORE TYPES:
        o number
        o string
        o boolean
        o object
        o array
        o tuple
*/
