// Don't have JS and TS file open at the same time, I will get an error.
// all numbers, no differenciation between integers or floats
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
//how to catch errors
function multiply_n(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect type input in method!');
    }
    return n1 * n2;
}
console.log(multiply_n(4, 6));
