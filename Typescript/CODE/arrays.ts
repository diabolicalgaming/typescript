// Initialize an array.
var array = ["This", "is", "an", "array"] 

// I can specify the type of the array
var num: number[]
num = [1,2,3]

// To specify an array to store any type, I can use the "any" keyword.
var random: any[]
random = [1, "something", [2,3,4]]

// Iterate through the hobby list of the person1 object. 
var person1: {
    name: string;
    height: number;
    hobbies: string[];
    } = {
        name: "Ore",
        height: 183,
        hobbies: ["basketball", "football", "tennis"]
    }

for(var hobby of person1.hobbies){
    console.log(hobby);    
}

/*
    ALL ARRAY METHODS

    pop() - Removes the last element of the array and return that element
    push()- Adds new elements to the array and returns the new array length
    sort() - Sorts all the elements of the array
    concat()- Joins two arrays and returns the combined result
    indexOf() - Returns the index of the first match of a value in the array (-1 if not found)
    copyWithin() - Copies a sequence of elements within the array
    fill() - Fills the array with a static value from the provided start index to the end index
    shift()	- Removes and returns the first element of the array
    splice() - Adds or removes elements from the array
    unshift() - Adds one or more elements to the beginning of the array
    includes() - Checks whether the array contains a certain element
    join() - Joins all elements of the array into a string
    lastIndexOf() - Returns the last index of an element in the array
    slice()	- Extracts a section of the array and returns the new array
    toString() - Returns a string representation of the array
    toLocaleString() - Returns a localized string representing the array
    every() - Returns true if every element in this array satisfies the provided testing function.
    filter() - Creates a new array with all of the elements of this array for which the provided filtering function returns true.
    forEach() - Calls a function for each element in the array.
    map() - Creates a new array with the results of calling a provided function on every element in this array.
    reduce() - Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
    reduceRight() - Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
    reverse() - Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
    some() - Returns true if at least one element in this array satisfies the provided testing function.
    unshift() - Adds one or more elements to the front of an array and returns the new length of the array.
*/
