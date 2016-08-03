class Ball{
  brandName: string;

  setBrandName(brandName: string){
    this.brandName = brandName;
  }
}

var myBall = new Ball();
myBall.setBrandName('Nike');

console.log(myBall)
