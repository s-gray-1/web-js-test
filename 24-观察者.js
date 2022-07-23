class Subject{
  constructor(name){
    this.name=name
    this.state='开心'
    this.observers=[]
  }
  attach(observer){
    this.observers.push(observer)
  }
  setState(newState){
    this.state=newState
    this.observers.forEach(observer=>{
      observer.update(newState)
    })
  }
}
class Obsever{
  constructor(name){
    this.name=name
  }
  update(newState){
    // console.log(sub);
    console.log("通知了"+this.name+"宝宝状态变为"+newState);
  }
}
let ob1=new Obsever("爸爸")
let ob2=new Obsever("妈妈")
let sub=new Subject('宝宝')
sub.attach(ob1)
sub.attach(ob2)
sub.setState("不开心")
