import thenFs from 'then-fs'
thenFs.readFile('./files/1.txt','utf-8').then(r1=>{
  console.log(r1);
  return thenFs.readFile('./files/2.txt','utf-8')
}).then(r2=>{
  console.log(r2);
  return thenFs.readFile('./files/3.txt','utf-8')
}).then(r3=>{
  console.log(r3);
}

)
const parr=[
  thenFs.readFile('./files/1.txt','utf-8'),
thenFs.readFile('./files/2.txt','utf-8'),
 thenFs.readFile('./files/3.txt','utf-8')

]

Promise.all(
  parr
).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err.message);
})
Promise.race(
  parr
).then(res=>{
  console.log(res);
})