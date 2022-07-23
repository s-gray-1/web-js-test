// class Star{
//   constructor(uname,age){
//     this.uname=uname
//     this.age=age
//   }
//   say(song){
//     console.log(this.uname+"唱了"+song);
//   }
// }
// var ldh=new Star('刘德华',50)
// console.log(ldh.age);
// ldh.say('冰雨')

// class Father{
//   constructor(){}
//   money(){
//     console.log("父亲的钱");
//   }
// }
// class Son extends Father{

// }
// var son=new Son()
// son.money()
class Father{
  constructor(x,y){
    this.x=x
    this.y=y
  }
  sum(){
    console.log(this.x+this.y);
  }
}
class Son extends Father{
  constructor(x,y){
   super(x,y) //调用了父类中的构造函数
  }

}
var son=new Son(1,2)
var son1=new Son(11,22)
son.sum()
son1.sum()