function myInstanceof(obj,className){
  // 指针
  let pointer=obj
  while(pointer){
    if(pointer===className.prototype){ //查找原型有没有属性
      return true
    }
    pointer=pointer.__proto__ //没有继续调用proto去查找 
  }
  return false

}



let obj =[]
console.log(myInstanceof(obj,Array));