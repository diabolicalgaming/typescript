// Initialize an array.
var array = ["This", "is", "an", "array"];
console.log(array);
// I can specify the type of the array
var num;
num = [1, 2, 3];
// To specify an array to store any type, I can use the "any" keyword.
var random;
random = [1, "something", [2, 3, 4]];
// Iterate through the hobby list of the person1 object. 
var person1 = {
    name: "Ore",
    height: 183,
    hobbies: ["basketball", "football", "tennis"]
};
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
