function isValid(str){
  let arr=str.split('')
  let left=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]==='['||arr[i]==='('||arr[i]==='{'){
      left.push(arr[i])
    }else{
      if(arr[i]===')'&&left.pop()!=='('){
        return false
      }
      if(arr[i]==='}'&&left.pop()!=='{'){
        return false
      }
      if(arr[i]===']'&&left.pop()!=='['){
        return false
      }
    }
  }
  return left.length===0
}

console.log(isValid('{9()32358}'));