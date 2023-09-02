/**
 * Basic type
 */

let nums: number = 10
let myName: string = "1141"

/**
 * Object type
 */

let Nhon:{
    name:string,
    age:number
}= {
    name:"Hoai Nhon",
    age :20
}
Nhon.age =23
Nhon.name = "Man"

/**
 * Array Type
 */

let mang: string[] = []
/**
 * Class type
 */

class Person{
    constructor(public name:string,public age:number){
        this.name = name
        this.age = age
    }
}