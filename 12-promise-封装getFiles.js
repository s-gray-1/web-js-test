import fs from 'fs'
function getFile(fpath){
  return new Promise(function(resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
      if(err) return reject(err)
      resolve(dataStr)
    })
  })
}
getFile('./files/1.txt').then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err.message);
})