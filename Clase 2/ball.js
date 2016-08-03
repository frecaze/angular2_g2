var Ball = (function () {
    function Ball() {
    }
    Ball.prototype.setBrandName = function (brandName) {
        this.brandName = brandName;
    };
    return Ball;
}());
var myBall = new Ball();
myBall.setBrandName('Nike');
console.log(myBall);
