/*
    ------------------------------- VAR -------------------------------
*/

/*
    Scope of var:

    var declarations are globally scoped or function/localy scoped. The scope is global
    when a var variable is declared outside a function. Any variable declared with var
    outisde a function block is available for use in the whole window.

    var is function scoped when it is declared within a function. This means that it is 
    available and can be accessed only within that function.

    Below the variable word is global scoped because it is outside the function. The
    variable local is functon scoped because it is inside the function.
*/

var word = "Hello!";

function sayHello(): string {
    var local = "Function scoped."
    return word;
}

/*
    var variables can be re-declared and updated, this means that I can do this within
    the same scope and won't get an error.
*/

var x = 1
var x = 2

/*
    Hoisting of var:

    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of 
    their scope before code execution. This means that if we do this:

    console.log (greeter);
    var greeter = "say hello"

    is interpreted as this: 

    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
*/

console.log(z)
var z = 1;

/*
    Problem with var:

    So, since times > 3 returns true, greeter is redefined  to "say Hello instead". 
    While this is not a problem if I knowingly want greeter to be redefined, it 
    becomes a problem when I do not realize that a variable greeter has already been 
    defined before.

    If I have used greeter in other parts of your code, I might be surprised at the 
    output I might get. This will likely cause a lot of bugs in my code. This is why let 
    and const are necessary.
*/

var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"

/*
    ------------------------------- LET -------------------------------
*/

/*
    let is now preferred for variable declaration. It's no surprise as it comes as an 
    improvement to var declarations. It also solves the problem with var that we just 
    covered. Let's consider why this is so.

    Scope of let:

    let is block scoped. A block is a chunk of code bounded by {}. A block lives in curly 
    braces. Anything within curly braces is a block.

    So a variable declared in a block with let  is only available for use within that block. 
    Let me explain this with an example below.
*/

let greeting = "say Hi";
   let times2 = 4;

   if (times > 3) {
        let hello2 = "say Hello instead";
        console.log(hello2);// "say Hello instead"
    }
/* 
    I see that using hello outside its block (the curly braces where it was defined) returns an error. 
    This is because let variables are block scoped .

    console.log(hello2) // hello is not defined
*/ 

function test(){
    var hey = "Hey!"
}

/*
    let can be updated but not re-declared. Just like var,  a variable declared with let can be updated 
    within its scope. Unlike var, a let variable cannot be re-declared within its scope. The code below
    will work
*/

let y = 1;
y = 2;

/*
    Below will not work and will return an error.

    let y = 1;
    let y = 2;
*/

/*
    However, if the same variable is defined in different scoped, there will be no error.

    There is no error because both instances are treated as different variables since they have different 
    scopes.
*/
let greetings = "say Hi";

if (true) {
    let greetings = "say Hello instead";
    console.log(greetings); // "say Hello instead"
}
console.log(greetings); // "say Hi"

/*
    This fact makes let a better choice than var. When using let, I don't have to bother if I have 
    used a name for a variable before as a variable exists only within its scope.

    Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier 
    that occurs with var does not happen.

    Hoisting of let:

    Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, 
    the let keyword is not initialized. So if I try to use a let variable before declaration, I'll 
    get a Reference Error.
*/

/*
    ------------------------------- CONST -------------------------------
*/

/*
    Variables declared with the const maintain constant values. const declarations share some 
    similarities with let declarations.

    const declarations are block scoped. Like let declarations, const declarations can only be 
    accessed within the block they were declared.

    const cannot be updated or re-declared. This means that the value of a variable declared with 
    const remains the same within its scope. It cannot be updated or re-declared. So if we declare 
    a variable with const, we can neither do this:

    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.

    nor this:

    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

    Every const declaration, therefore, must be initialized at the time of declaration.

    This behavior is somehow different when it comes to objects declared with const. While a const object 
    cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

    const greeting = {
        message: "say Hi",
        times: 4
    }

    I cannot do this:

     greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.

    I can do this:

    greeting.message = "say Hello instead";

    This will update the value of greeting.message without returning errors.
*/

/*
    Hoisting of const:

    Just like let, const declarations are hoisted to the top but are not initialized.

    So just in case you missed the differences, here they are:

    o var declarations are globally scoped or function scoped while let and const are block scoped.
    o var variables can be updated and re-declared within its scope; let variables can be updated but 
      not re-declared; const variables can neither be updated nor re-declared.
    o They are all hoisted to the top of their scope. But while var variables are initialized with 
      undefined, let and const variables are not initialized.
    o While var and let can be declared without being initialized, const must be initialized during 
      declaration.
*/