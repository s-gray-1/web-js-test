function flat(arr){
  let res=[]
  if(!Array.isArray(arr)){
    res.push(arr)
  }else{
    for(let i=0;i<arr.length;i++){
     res= res.concat(flat(arr[i]))
    }
  }
  return res
}
let arr=[1,[2,[3,[4]]]]
console.log(flat(arr));