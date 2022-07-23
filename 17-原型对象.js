function Star(uname,age){
  this.uname=uname
  this.age=age
  // this.sing=function(){
  //   console.log(this.uname+"我要唱歌");
  // }   有几个实例化对象就开辟几个内存空间 比较浪费内存空间
}
// 通过prototype的方式去设置共享的方法 节省内存空间
Star.prototype.sing=function(){
  console.log(this.uname+"我要唱歌");
}
Star.prototype={
  // 如果我们修改了原来的原型对象 给原型对象赋值的是一个对象，
  // 则必须手动的利用constructor指回原来的构造函数
 
  constructor:Star,
  sing:function(){
    console.log(this.uname+"我要唱歌");
  },
  movie:function(){
    console.log(this.uname+"我要演电影");
  }


}
let ldh=new Star('刘德华',18)
console.log(ldh);//对象身上系统给自己添加了一个__proto__
// 指向我们构造函数的原型对象prototype
ldh.sing()
console.log(ldh.__proto__===Star.prototype); //true
let zxy=new Star('张学友',18)
console.log(zxy);
zxy.sing()