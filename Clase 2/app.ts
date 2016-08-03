//function add(x: number, y?: number):number {
function add(x: number, y:number = 5):number {
  return x + y;
}

add(2);

//Anonymus function
let myAdd = function(x, y): number { return x + y }
