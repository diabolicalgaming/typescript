/*
    It is unknown because you don't know the type of the value yet.
*/

let userInput: unknown;
let userName: string;

// These are allowed.
userInput = 5;
userInput = "Max";

/*
    I can't store values in an unknown variable without getting errors. Unknown is more
    restritive than the any type. The below is not allowd.

    let userInput: unknown;
    let userName: string;

    userName = userInput;

    With unknown I have the check the type that is currently stored in the variable with
    the unknown type (e.g. userInput) before I can assign it to a variable with a
    different type.
*/

/*
    I need to use a type check to be able to assign an unknown value to a value with a
    fixed type.

    Unknown is better than any because it makes sure I cannot do everything but I have at
    least some type checking.
*/
if (typeof userInput === 'string'){
    userName = userInput;
}