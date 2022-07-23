function duplicate( numbers ) {
  // write code here
  let hash = new  Map()
for(let i=0;i<numbers.length;i++){
      if(hash.get(numbers[i])){
        return numbers[i]
      }else{
          hash.set(numbers[i],1)
      }
      
  }
}

console.log(duplicate([2,3,1,0,2,5,3]));