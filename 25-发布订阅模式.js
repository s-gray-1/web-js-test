let bus={ //调度中心
  list:[], //列表存储订阅函数，
  subscribe(callback){
    this.list.push(callback)
  },
  publish(text){
    this.list.forEach(callback=>{ //每次发布都会循环遍历执行订阅者的回调函数，并往里传值
      callback&&callback(text)
    })
  }
}
bus.subscribe((text)=>{
  console.log('111订阅了',text); //接受回调函数的值并执行
})
bus.subscribe((text)=>{
  console.log('222订阅了',text);
})
bus.publish("发布内容")