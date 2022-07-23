// function newMethod(){
//   let obj={}
//   let constructor = [].shift.call(arguments)
//   obj.__proto__=constructor.prototype
//   let res=constructor.apply(obj,arguments)
//   return typeof res ==='object'?res:obj
// }
// Promise.myall=function(promises){
//   let arr=[]
//   let count=0
//   return new Promise((resolve,reject)=>{
//     promises.forEach((item,i) => {
//       Promise.resolve(item).then(res=>{
//         count+=1
//         arr[i]=res
//         if(promises.length===count){
//           resolve(arr)
//         }
//       },reject)
//     });
//   })
// }
// Promise.myRace=function(promises){
//   return new Promise((resolve,reject)=>{
//     for(let item of promises){
//       Promise.resolve(item).then(resolve,reject)
//     }
//   })
// }
// const throttle =(fn,delay)=>{
//   let time=0
//   return function(){
//     let newTime=Date.now()
//     if(newTime-time>delay){
//       let args=arguments
//       fn.apply(this,args)
//       time=newTime
//     }
//   }
// }
// const debounce=(fn,wait)=>{
//   let timer=null
//   return function(){
//     clearTimeout(timer)
//     let args=arguments
//   timer=  setTimeout(() => {
      
//       fn.apply(this,args)
//     }, wait);
//   }

// }
// class Subject{
//   constructor(name){
//     this.name=name
//     this.observers=[]
//     this.state=''
//   }
//   attach(observer){
//     this.observers.push(observer)
//   }
//   setState(newState){
//     this.state=newState
//     this.observers.forEach(observer=>{
//       observer.update(state)
//     })
//   }
// }
// class Observer{
//   constructor(name){
//     this.name=name
//   }
//   update(newState){
//     console.log('通知'+this.name+"变成了"+newState);
//   }
// }
// let bus={
//   list:[],
//   subscribe(callback){
//     this.list.push(callback)
//   },
//   publish(text){
//     this.list.forEach(callback=>{
//       callback&&callback(text)
//     })
//   }
// }
// bus.subscribe((text)=>{
//   console.log(text);
// })
// bus.publish("111")
// var hammingWeight = function(n) {
//   let arr=n
//   console.log(arr);
// };
// hammingWeight(00000000000000000000000000001011)

// Function.prototype. myCall=function(context,...args){
//   context=context||window
//   args=args?args:[]
//   const key = Symbol()
//   context[key]=this
//   let res= context[key](...args)
//   delete context[key]
//   return res
// }
// Function.prototype.myApply=function(context,args){
//   context=context||window
//   args=args?args:[]
//   const key=Symbol()
//   context[key]=this
//   let res=context[key](...args)
//   delete context[key]
//   return res
// }

// Function.prototype.myBind=function(context,...args){
//   context=context||window
//   let fn=this
//   return function newFun(...newArgs){
//     if(this instanceof newFun){
//       return newFun(...args,...newArgs)
//     }
//     return fn.apply(context,[...args,...newArgs])
//   }

// }
// console.log(isNaN(NaN)); 

const timeout=(n)=> setTimeout(() => {
    Promise.resolve()
  }, 1000*n);
timeout(1)
// console.log(~~4.56)