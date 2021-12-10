// standard for loop
console.log("STANDARD LOOP")
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("")

/*
    TypeScript includes the for...of loop to iterate and access elements of an array, 
    list, or tuple collection. The for...of loop returns elements from a collection 
    e.g. array, list or tuple, and so, there is no need to use the traditional for 
    loop shown above.
*/
console.log("FOR...OF LOOP")
let a1 = [1,2,3,4,5]

for(var val1 of a1)
{
    console.log(val1)
}

/*
    Another form of the for loop is for...in. This can be used with an array, list, or 
    tuple. The for...in loop iterates through a list or collection and returns an index 
    on each iteration.
*/
console.log("FOR...IN LOOP")
let a2 = [1,2,3,4,5]

for(var val2 in a2)
{
    console.log(a2[val2])
}

/*
    The condition expression checks for a specified condition before running the 
    block of code.
*/
console.log("STANDARD WHILE LOOP")

let num1: number = 1
while(num1 <= 10){
    console.log(num1)
    num1++;
}

/*
    The do..while loop is similar to the while loop, except that the condition is given 
    at the end of the loop. The do..while loop runs the block of code at least once 
    before checking for the specified condition. For the rest of the iterations, 
    it runs the block of code only if the specified condition is met.
*/
console.log("DO WHILE LOOP")
let num2: number = 1
do {
    console.log(num2);
    num2++;
}
while (num2 <= 10);