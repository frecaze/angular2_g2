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
var Trainer = (function () {
    function Trainer(name, middleName, lastName) {
        this.name = name;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = name + " " + middleName + " " + lastName;
    }
    return Trainer;
}());
function greeter(person) {
    return "Hola " + person.name + " " + " " + person.lastName;
}
var user = new Trainer('Sergio', 'I.', 'Brito');
console.log(greeter(user));
document.body.innerHTML = greeter(user);
////////////////////////
//Data Types
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var dish = 'Ceviche';
var sides = 4;
var text = "El " + dish + " se sirve con " + sides + " adicionales";
console.log(text);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Tuplas
var x;
x = ["Hola Mundo", 10];
//Enum
var Dishes;
(function (Dishes) {
    Dishes[Dishes["Ceviche"] = 20] = "Ceviche";
    Dishes[Dishes["Causa"] = 18] = "Causa";
    Dishes[Dishes["Carapulcra"] = 20] = "Carapulcra";
})(Dishes || (Dishes = {}));
var favDish0 = Dishes.Ceviche;
var favDish1 = Dishes.Causa;
var favDish2 = Dishes.Carapulcra;
//Any
var notSure = 4;
notSure = 'Hola mundo';
var list3 = [1, true, "Hola mundo"];
function messaging() {
}
console.log(list3.length);
//Rest Params
function setSkill() {
    var skills = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        skills[_i - 0] = arguments[_i];
    }
    console.log(skills.join(" "));
}
