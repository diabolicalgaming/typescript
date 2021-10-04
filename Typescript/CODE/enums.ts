/*
    Enums are automatically enumerated global constant identifiers.
*/

          //0,    1,         2
enum Role {ADMIN, READ_ONLY, AUTHROR};

var person1: {
        name: "Ore",
        height: 183,
        hobbies: ["basketball", "football", "tennis"],
        role: Role.ADMIN
    }

// I can even assign strings and numbers to my enums.
enum Roles {ADMIN = "ADMIN", READ_ONLY = 101, AUTHROR = 201};