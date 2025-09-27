const User = {
    name:'rakesh',
    email: "r@r.com",
    imActkve:  true
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }){

}
createUser({name:"Ranjan", isPaid: false})


type Student={
    name: string,
    email: string,
    isActive: boolean
}
 function createStudent(student : Student) : Student{
    return {name:"", email:"", isActive:true}
 }
 createStudent({name:"", email:"", isActive:true})


 type Employee ={
    readonly _id: string,
    name: string,
    email: string,
    isActive : boolean,
    salaryDetails?: number
 }
let myEmployee: Employee = {
    _id:'1234',
    name: 'R',
    email:'r@gmail.com',
    isActive:false,
}

// myEmployee._id='4567'
//Cannot assign to '_id' because it is a read-only property.ts(2540)


type cardNumber = {
    cardnumber : string
}
type cardDate = {
    carddate: string
}
type cardDetails = cardNumber & cardDate & {cvv:number};

export {}