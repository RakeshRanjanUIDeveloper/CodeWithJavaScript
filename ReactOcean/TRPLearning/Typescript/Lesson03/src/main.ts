let stringArray = ['Hey', 'Dave', 'John'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true]

// stringArray[0] = 23;
// stringArray.push("Hello");

let myTuple : [string, number] = ['Rakesh', 34];
let mixed =['John', 1, false];
// myTuple =mixed 
mixed = myTuple


//Object

let myObj:object;
myObj = [];
console.log(typeof myObj)


type Guitarist = {
    name:string,
    active?:boolean,
    albums:(string | number)[]
}

let evh:Guitarist ={
    name:'Eddie',
    active:false,
    albums:[1984,5150, 'OU812']
}
let jp:Guitarist ={
    name:'Jimmy',
    albums:['I', "II", 'IV']
}

const greetGuitarist = (guitarist: Guitarist)=>{
    return `Hello ${guitarist.name}`
}
console.log(greetGuitarist(jp))


enum Grades{
    U,
    D,
    C,
    B,
    A
}
console.log(Grades.A)