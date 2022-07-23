let fn=(n)=>{
  return n===1?1:n*fn(n-1)
}
console.log(fn(10)); 