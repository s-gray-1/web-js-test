//利用闭包 每秒钟循环输出数组的一个元素
let arr=[1,2,3,4,5]
const closure=(arr)=>{
  arr.forEach((elem,index)=>{
    ((elem)=>{
      setTimeout(() => {
        console.log(elem);
      }, 1000*index);
    })(elem)
  })
}
closure(arr)