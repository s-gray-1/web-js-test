function deepClone(obj,hash=new WeakMap()){
  if(obj===null) return obj
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(typeof obj!=='object') return obj
  if(hash.get(obj)) return hash.get(obj)
  let objClone=new obj.constructor()
  hash.set(obj,objClone)
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      objClone[key]=deepClone(obj[key],hash)
    }
  }
  return objClone
}
let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
console.log(obj);