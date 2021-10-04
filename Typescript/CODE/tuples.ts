/*
    A tuple is a fixed length array. If I want an array that has a fixed length and strict types,
    then use a tuple.
*/

var person1: {
    name: string;
    height: number;
    hobbies: string[];
    // This tells TS I want to have a special array with two values. First number is a number and second is a string.
    role: [number, string] // this denotes a tuple
    } = {
        name: "Ore",
        height: 183,
        hobbies: ["basketball", "football", "tennis"],
        role: [30, "Software Director"]
    }

/*
    The length of the tuple is enforced, i.e. I cant have the below because it has three values
    person1.role = [0, 'admin', 'user']

    This would also cause an issue, but unfortunately, TS will not catch it.
    person1.role.push("manager")
*/

console.log(person1.role)