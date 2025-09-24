export {}
let message = "Hello World !!";
console.log(message)

let a =10;
const b = 20;

// let a=30; Not Allowed

let sum;
const title = "TypeScript"

let isBeginner:boolean = true;
let total:number = 0;
let name:string = 'Rakesh';

let sentence : string = `My Name is ${name}
    i am beginner in TypeScript`;
console.log(sentence)


let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<Number> = [1,2,3];

let person1 : [string, number] = ['Rakesh', 34]

enum Color {Red=5, Green, Blue}
let c:Color = Color.Green;
console.log(c)

let randomValue:any = 10;
randomValue = true;
randomValue = "Rakesh"

let myVariable:unknown = 10;
function hasName(obj:any) : obj is {name: string}{
    return !!obj && 
        typeof obj === 'object' && 
        "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name)
}
(myVariable as string).toUpperCase()


function add (num1: number, num2?:number):number{
    if(num2){
        return num1+num2
    }else{
        return num1
    }
}
add(5,10)
add(5)
// add(5, '10')


interface Person{
    firstName:string,
    lastName : string
}
function fullName(person:Person){
    console.log(`${person.firstName} and ${person.lastName}`)
}
const p = {
    firstName: 'Rakesh',
    lastName : 'Ranjan'
}
fullName(p)

