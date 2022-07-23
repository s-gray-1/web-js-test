function create(obj){
  if(obj===null||typeof obj !=='object') {
    throw new TypeError('输入的不是对象')
  }
  function Fun(){}
  Fun.prototype=obj
  return new Fun
}
create(1)