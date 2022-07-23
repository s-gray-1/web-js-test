function robot(str){
  let x=0
  let y=0
  str=Array.from(str)
  
  str.forEach(elem => {
    if(elem==='U'){
      y+=1
    }else if(elem==='R'){
      x+=1
    }else if(elem==='L'){
      x-=1
    }else{
      y-=1
    }
  });
  return `(${x},${y})`
}
console.log(robot('RULD')); 