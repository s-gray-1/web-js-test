Promise.myall=function(promises){
	let arr=[]
	let count=0
	return new Promise((resolve,reject)=>{
		promises.forEach((item,i)=>{ //先循环
			Promise.resolve(item).then(res=>{  //将promises里面的每一项包装成promise对象 
				count++
				arr[i]=res
				if(count===promises.length) resolve(arr)
			},reject)
		})
	
	})
}
Promise.myrace=function(promises){
  return new Promise((resolve,reject)=>{
    for(let item of promises){
      Promise.resolve(item).then(resolve,reject)
    }
  })
}
const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})
const p4 = Promise.reject('p4 rejected')
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})
// 所有 Promsie 都成功
Promise.myall([p1, p2, p3])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]
// 一个 Promise 失败
Promise.myall([p1, p2, p4])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
// 一个延时失败的 Promise
Promise.myall([p1, p2, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // 1.5秒后打印 p5 rejected 延时1.5秒
// 两个失败的 Promise
Promise.myall([p1, p4, p5])
  .then(res => console.log(res))
  .catch(err => console.log(err)) // p4 rejected
Promise.myrace([p1, p2, p3])
  .then(res => console.log('myrace:'+res))
  .catch(err => console.log(err)) 