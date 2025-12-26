//Type Aliases
type stringOrNumber = string | number ;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
} 
type userId = stringOrNumber

//Literal Types
let myName:'Rakesh';
// myName ='Ranjan'

let userName : 'rakesh' |'ranjan'|'misu'
userName = 'misu';
// userName = 'modi'


//functions
const add = (a:number, b:number) : number =>{
    return a+b
}

const logMsg =(message: any): void=>{
    console.log(message)
}
logMsg("Hello!!")
logMsg(add(2,3));

let subtract = function(c:number, d:number):number{
    return c-d
}

type mathFunction = (a:number, b:number) => number
// interface mathFunction {
//     (a:number, b:number) : number
// }
let multiply : mathFunction = function(c,d){
    return c*d
}
logMsg(multiply(2,2))

//optional parameter
const addAll = (a:number, b:number, c?:number) :number =>{
    if(typeof c !== 'undefined'){
        return a+b+c
    }
    return a+b
}

//default value
const sumAll = (a:number=10, b:number, c:number=2) :number =>{
    return a+b+c
}

logMsg(addAll(2,3,2));
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined, 3))

// Rest Parameter
const total = (a:number, ...nums:number[]):number =>{
    return a + nums.reduce((prev, curr) => prev+curr)
}
logMsg(total(10,2,3,4,5,6))



//never type
const createError = (errMsg:string) : never=>{
    throw new Error(errMsg)
}

const infinite =() =>{
    let i: number =1;
    while(true){
        i++
        if(i>100) break;
    }
}

//custom type guard
const isNumber = (value:any):boolean =>{
    return typeof value === 'number' ?  true : false
}

//use of never type
const numberOrstring = (value: number | string) : string =>{
    if(typeof value === 'string') return 'string'
    if(isNumber(value)) return 'number'
    return createError("This should never happen");
}

logMsg(numberOrstring("hello"));
logMsg(numberOrstring(123));
logMsg(numberOrstring(undefined as any));