let stringArray = ['Hey', 'Dave', 'John'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// stringArray[0] = 23;
// stringArray.push("Hello");
let myTuple = ['Rakesh', 34];
let mixed = ['John', 1, false];
// myTuple =mixed 
mixed = myTuple;
//Object
let myObj;
myObj = [];
console.log(typeof myObj);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    albums: ['I', "II", 'IV']
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greetGuitarist(jp));
var Grades;
(function (Grades) {
    Grades[Grades["U"] = 0] = "U";
    Grades[Grades["D"] = 1] = "D";
    Grades[Grades["C"] = 2] = "C";
    Grades[Grades["B"] = 3] = "B";
    Grades[Grades["A"] = 4] = "A";
})(Grades || (Grades = {}));
console.log(Grades.A);
export {};
//# sourceMappingURL=main.js.map