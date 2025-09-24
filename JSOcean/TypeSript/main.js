"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World !!";
console.log(message);
var a = 10;
var b = 20;
// let a=30; Not Allowed
var sum;
var title = "TypeScript";
var isBeginner = true;
var total = 0;
var name = 'Rakesh';
var sentence = "My Name is ".concat(name, "\n    i am beginner in TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Rakesh', 34];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Rakesh";
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(5, 10);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " and ").concat(person.lastName));
}
var p = {
    firstName: 'Rakesh',
    lastName: 'Ranjan'
};
fullName(p);
