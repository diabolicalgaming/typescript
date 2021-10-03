/*
    An object is an instance which contains a set of key-value pairs. The values can be
    scalar values or functions or even array of other objects.
*/
var object_name = {
    key1: "value",
    key2: 100,
    key3: function functionName() {
        //statements
    }
};
/*
    Person object. I can also define a generic object type using the "object" keyword.
    But I won't be able to use person.name or person.occupation because it does not exist on the
    object type. Using the object keyword is like casting it to be of type object.
*/
var person1 = {
    name: "Ore",
    occupation: "Software Engineer"
};
/*
    {} - is TypeScripts notation of a specialized object type where I provide some information about
    the structure of the object.
*/
// This is not conventional but I can also do it this way.
var person2 = {
    name: "Ore",
    height: 183
};
console.log(person2);
console.log(person2.name + "'s height is " + person2.height + "cm.");
