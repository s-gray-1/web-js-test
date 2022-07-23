// 1 原始数据类型判断采用 typeof fuction类型也可以用typeof判断
// Number String Boolen null undefined Symbol BigInt
console.log(typeof 1);
console.log(typeof "nihao");
console.log(typeof false);
console.log(typeof null); //object 是一个bug
console.log(typeof undefined);
console.log(typeof Symbol(1));
console.log(typeof BigInt);//function
console.log(typeof []);//object
console.log(typeof function(){});
// 2 引用数据类型采用 instanceof 判断 但是需要知道具体的数据类型 返回true或者false
console.log([] instanceof Array); //true
console.log( new Date() instanceof Date);//true
console.log([] instanceof Object);//true
// 3 利用toString实现引用类型的判断 前提是在自定义对象内未被覆盖
console.log({}.toString());//[object Object]
console.log([].toString());//被覆盖了
// 被覆盖后可以采用 Object.prototype.toString.call()
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call(new RegExp()));//[object RegExp]
console.log(Object.prototype.toString.call(null)); //[object Null]