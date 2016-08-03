// console.log('Hola Typescript')
//
// function greeter(person: number){
//   return "Hola " + person;
// }
//
// var user = 123;
//
// console.log(greeter(user));
//
// document.body.innerHTML = greeter(user);

// interface Person{
//   name: string;
//   lastName: string;
// }
//
// function greeter(person: Person){
//   return "Hola " + person.name + " " + " " + person.lastName
// }
//
// var user = { name: "Sergio", lastName: "Brito"}

class Trainer {
  fullName: string;
  constructor(public name, public middleName, public lastName){
    this.fullName = name + " " + middleName + " " + lastName;
  }
}

interface Person{
  name: string;
  lastName: string;
}

function greeter(person: Person){
  return "Hola " + person.name + " " + " " + person.lastName
}

var user = new Trainer('Sergio', 'I.', 'Brito')


console.log(greeter(user));
document.body.innerHTML = greeter(user);

////////////////////////
//Data Types

let  isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;


let dish: string = 'Ceviche';
let sides: number = 4;
let text: string = `El ${ dish } se sirve con ${ sides } adicionales`

console.log(text)

let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

//Tuplas
let x: [string, number];

x = ["Hola Mundo", 10];

//Enum
enum Dishes {Ceviche = 20, Causa = 18, Carapulcra = 20}

let favDish0: Dishes = Dishes.Ceviche;
let favDish1: Dishes = Dishes.Causa;
let favDish2: Dishes = Dishes.Carapulcra;

//Any
let notSure: any = 4;


notSure = 'Hola mundo';

let list3: any[] = [1, true, "Hola mundo"];

function messaging(): void{

}

console.log(list3.length)

//Rest Params
function setSkill(...skills: string[]){
  console.log(skills.join(" "));
}

function calculate(data1:number, data2:number, data3?:number = 0){

}
