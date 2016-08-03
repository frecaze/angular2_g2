//function add(x: number, y?: number):number {
function add(x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
}
add(2);
//Anonymus function
var myAdd = function (x, y) { return x + y; };
