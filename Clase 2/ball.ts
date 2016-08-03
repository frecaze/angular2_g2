class Ball {
    brandName: string;
    public name: string;
    private price: number = 50;

    constructor(name: string) {
        this.name = name;
        console.log("La pelota cuesta: $ " + this.price)
    }

    setBrandName(brandName: string) {
        this.brandName = brandName;
    }
}

class Rugby extends Ball {
    constructor(brandName) {
        super(brandName)
        console.log(brandName);
    }
}

class Calculator {
    static value: number = 123;

    static add(a:number, b:number){
      return a + b;
    }

    minus(a:number, b:number){
      return a - b;
    }

}

console.log("Protected: " + Calculator.value)
console.log("Add: " + Calculator.add(2,5));
//console.log("Minus: " + Calculator.minus(2,5));


var myRugbyBall = new Rugby('Lion ball');
console.log(myRugbyBall)

var myBall = new Ball('Aguila');
myBall.setBrandName('Nike');

console.log(myBall)
