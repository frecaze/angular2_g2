var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ball = (function () {
    function Ball(name) {
        this.price = 50;
        this.name = name;
        console.log("La pelota cuesta: $ " + this.price);
    }
    Ball.prototype.setBrandName = function (brandName) {
        this.brandName = brandName;
    };
    return Ball;
}());
var Rugby = (function (_super) {
    __extends(Rugby, _super);
    function Rugby(brandName) {
        _super.call(this, brandName);
        console.log(brandName);
    }
    return Rugby;
}(Ball));
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.minus = function (a, b) {
        return a - b;
    };
    Calculator.value = 123;
    return Calculator;
}());
console.log("Protected: " + Calculator.value);
console.log("Add: " + Calculator.add(2, 5));
console.log("Minus: " + Calculator.minus(2, 5));
var myRugbyBall = new Rugby('Lion ball');
console.log(myRugbyBall);
var myBall = new Ball('Aguila');
myBall.setBrandName('Nike');
console.log(myBall);
