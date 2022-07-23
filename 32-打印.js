let arr='100'
let arr1=arr.parseInt()
arr=arr1.toString()
arr=Array.from(arr)
function jud (arr) {
  let numArr = []
  for (let i=0 ;i < arr.length-1; i++) {
      numArr.push(arr[i+1]-arr[i])
  }
  let res = numArr.every(item => numArr[0] === item)
//     console.log(res)
  if (res) {
      return arr1
  } else {
     arr1+=1
  }
}
