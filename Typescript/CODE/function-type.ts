function add(n1: number, n2: number){
    return n1 + n2;
}

/*
    This is how to defined a void funtion. This is available in TypeScript but not
    JavaScript.
*/
function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5,12));

/*
    I can also mark a function as undefined.
*/

function printResult2(num: number): undefined {
    console.log('Result: ' + num);
    return;
}

/*
    I should use void if I don't need a return statement.
*/

let combineValues; 

// Store a pointer to the add function in the variable combineValues.
combineValues = add;

// Then execute the variable as a function because it points to the function.
console.log(combineValues(8,8));

/* 
    combineValues has the type any, so if I did the below it would compile, 
    but fail at runtime.

    combineValues = 5; // fails at runtime
*/

/*
    To fix this issue I can do the following.

    let combineValues: Function;

    This is good but not a perfect solution.
*/
let cV: Function;
cV = add;

console.log('Function: ' + cV(10,5))

/*
    Not a good solution because I can do below. Won't get result I want because I now
    stored a different function. Below throws an error at runtime.

    cV = printResult;
*/

/*
    The best way to do this is to use a Function type. I can add parameters to a
    Function type.

    Now combineValue can only point to a function that takes in two number paramaters
    and returns a number.
*/
let combineValue: (a: number, b: number) => number;

combineValue = add;

console.log('Function Type: ' + combineValue(1,2));

/*
    I can combine Function types with Callbacks.
*/

function addHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

// Now I pass in two number inputs and an anonymous function.
addHandle(10,20, (result) => {
    console.log("Callback: " + result);
    /*
        The callback will return somthing even though I said it shouldn't. By specifying 
        void any result that I return will be ignored.
    */
    return result;
});