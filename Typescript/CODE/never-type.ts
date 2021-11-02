/*
    Never is a never type that functions can return.
*/

/*
    This function does not only return void. But I can specify that it only returns void.
    This function returns Never. This function never produces a return value.
*/
function generateError(message: string, code: number): void {
    // Return an error object. I can throw anything as an error.
    throw {message: message, errorCode: code};
}

//generateError('An error occured!', 500);

/*
    If I try to store the return value and I log the result, and compile my code, an error is thrown at
    runtime and there is no undefined being logged here. Since the error is thrown my script crashes. This
    function never produces a value. Hence, the return type of this function is not just void but Never.

    Never is a new type and wasn't built into the first versions of typescript.
*/
//const result = generateError('An error occured!', 500);
//console.log(result);

/* 
    I can set never as the return type to make it clear that the function never 
    returns anything.
*/
function generateError1(message: string, code: number): never {
    // Return an error object. I can throw anything as an error.
    throw {message: message, errorCode: code};
}

generateError1('Never an error occured!', 501);