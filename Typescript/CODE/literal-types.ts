/*
    I can force the type of the output of a functon:

    resultConversion: 'as-number' | 'as-text'
*/
let result;
function add(n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text'){
    if(typeof n1 === "number" && typeof n2 === "number")
    {
        result =  n1 + n2;
    }
    else{
        result =  n1.toString() + n2.toString();
    }
    if(resultConversion === 'as-number'){
        return parseFloat(result); //can also use 'return +result' to return float.
    }
    else{
        return result.toString();
    }
}

console.log(add(2,4,'as-number'))

//Below, the add function would output a string.

console.log(add('5', '5', 'as-text'))