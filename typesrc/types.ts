// types of js we use inthe typescript

// 1> Explicit function
// here you give the strict type of values

let firstName: String = "nityanand"
console.log(firstName)

let x: number = 200
console.log(x)
console.log(typeof (x))

// 2> Implicit
// here type of the value get dynamically

let ans = true
console.log(ans)

let student = "nityanand"
let p = 110
console.log(typeof (ans))
console.log(typeof (p))
console.log(typeof (student))

//  example

function comp(p: number, q: number) {
    return p + q
}

let add = comp(500, 600)
console.log(add)

function anything(fn: any, ln: any, ag: number) {
    return (fn + " " + ln + " and your age is " + ag)
}

console.log(anything('nityanand', 'bhosale', 23))
console.log(anything('nityanand', true, 20))

console.log('----------------------------------------')

// ************** Arry *********************

// in normal we write in js

let num = [10, 20, 30, 40, 50, 60, 70]
let candidate = ['nityanand', 'sumit', 'shubham', 'raj', 'sangram']

console.log(num)
console.log(candidate)

// in typescript
let num1: number[] = [10, 20, 30, 40, 50, 60, 70]
let candidate1: string[] = ['nityanand', 'sumit', 'shubham', 'raj', 'sangram']

console.log(num1)
console.log(candidate1)

// tuple --> tuple is the arry but its length is defined

let tup: [string, string, number] = ['nityanand', 'bhosale', 20]

// there is one expection in tuple we can push the value

tup.push('student')

console.log(tup)

// we can destructure

let [f1, f2, f3] = tup

console.log(f1)
console.log(f3)

console.log('------------ Object ------------------------')


// this is the normal type
let student1 = {
    name: 'nityanand',
    age: 23,
    class: 12,
    grade: "pass"
}

// in type script

let student2: { name: string, class: number, age: number, grade: string } = {
    name: 'sangram',
    age: 24,
    class: 13,
    grade: "pass"

}

function callme() {
    return {
        name: 'shubham',
        age: 17,
        class: 10,
        grade: "pass"
    }
}

type obj = { name: string, class: number, age: number, grade: string }

let nitin: obj = callme()
console.log(nitin)

// suppose api data

type call = { first_name: string, last_name: string, email: string, id: number, avatar: string }

function apicall() {
    return {
        first_name: "nityanand",
        last_name: "bhosale",
        id: 236505,
        email: "bhosale@gmail.com",
        avatar: "src img ava"
    }
}

let shubham:call =apicall()
console.log()

console.log('--------------------------------')


// function 
function additionC(x:number,y:number):number{
    return x + y
}

let h = additionC(12,13)
console.log(h)

function printFullName(firstName:string,lastName:string):string{
    return firstName + lastName
}
let fullName = printFullName('nityanand','bhosale')
console.log(fullName)


function greet(greeting:string):void{
    console.log("hello")
}
greet("hello")


function greet1(greeting:string):any{
    return true
}
greet("hello")












