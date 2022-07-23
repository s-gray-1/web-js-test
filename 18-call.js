function fn(x,y){
  console.log(this);
  console.log(x+y);
}
let obj={
  name:'pink'
}
fn.call()  //调用函数fn() 打印this指向window
fn.call(obj,1,2) //调用函数fn() 将this指向obj 并传入参数让fn()执行

function Father(uname,age){
  this.uname=uname
  this.age=age
}
Father.prototype.money=function(){
  console.log("我赚了好多钱");
}

function Son(uname,age,score){
  Father.call(this,uname,age) //继承父构造函数里的公共属性
  this.score=score
}
Son.prototype=new Father() //继承父构造函数里的方法
// 如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的构造函数
Son.prototype.constructor=Son
let son=new Son('pink',18,100)
son.money()
console.log(son);
