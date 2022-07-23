// 1 call
Function.prototype.mycall=function(context,...args){
  let context=context||window
  let args=args?args:[]
  let key = Symbol()
  context[key]=this
  let res = context[key](...args)
  delete context[key]
  return res
}
// 2 apply
Function.prototype.myApply = function (context, args) {
  //这里默认不传就是给window,也可以用es6给参数设置默认参数
  context = context || window
  args = args ? args : []
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  context[key] = this
  //通过隐式绑定的方式调用函数
  const result = context[key](...args) 
  //删除添加的属性
  delete context[key]
  //返回函数调用的返回值
  return result
}

// bind
//传递参数从一个数组变成逐个传参了,不用...扩展运算符的也可以用arguments代替
Function.prototype.myCall = function (context, ...args) {
  //这里默认不传就是给window,也可以用es6给参数设置默认参数
  context = context || window
  args = args ? args : []
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  context[key] = this
  //通过隐式绑定的方式调用函数
  const result = context[key](...args)
  //删除添加的属性
  delete context[key]
  //返回函数调用的返回值
  return result
}
// 实现bind
/* bind和apply的区别在于,bind是返回一个绑定好的函数,apply是直接调用.其实想一想实现也很简单,就是返回一个函数,里面执行了apply上述的操作而已.不过有一个需要判断的点,因为返回新的函数,要考虑到使用new去调用,并且new的优先级比较高,所以需要判断new的调用,还有一个特点就是bind调用的时候可以传参,调用之后生成的新的函数也可以传参,效果是一样的,所以这一块也要做处理
因为上面已经实现了apply,这里就借用一下,实际上不借用就是把代码copy过来 */


Function.prototype.myBind = function (context, ...args) {
  const fn = this
  args = args ? args : []
  return function newFn(...newFnArgs) {
      if (this instanceof newFn) {
          return new fn(...args, ...newFnArgs)
      }
      return fn.apply(context, [...args,...newFnArgs])
  }
}
