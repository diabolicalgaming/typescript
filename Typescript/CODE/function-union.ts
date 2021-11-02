/*
    A unition variable is a variable which can store multiple types of values. Union types are useful for
    modeling situations when values can overlap in the types they take on.

    The pipe ("|") denotes a union.
*/
function add(n1: number | string, n2: number | string){
    if(typeof n1 === "number" && typeof n2 === "number")
    {
        return n1 + n2;
    }
    else{
        return n1.toString() + n2.toString();
    }
}

console.log(add(1, 2))
console.log(add("Ore", "Ibik"))