// 深度优先遍历 DFS栈
  //  从根出发，尽可能深的搜索树的节点
  //  技巧：
  //   1 访问根节点
  //   2 对根节点的children挨个进行深度优先遍历
// 广度优先遍历 BFS 队列
  // 从根出发优先访问离根节点最近的节点
  // 技巧
    // 1. 新建一个队列，把根节点入队
    // 2. 把队头出队
    // 3. 把队头的children挨个入队
    // 4. 重复2和3步，直到队列为空位置

const tree ={
  val:'a',
  children:[
    {
      val:'b',
      children:[
        {
          val:'d',children:[]
        },
        {
          val:'e',children:[]
        },
        
      ]
    },
    {
      val:'c', 
      children:[
        {
          val:'f',children:[]
        },
        {
          val:'g',children:[]
        }
      ]
    },
  ]
}

const DFS=(root)=>{
  console.log(root.val);
  root.children.forEach(DFS) //循环 递归执行dfc函数
}
DFS(tree)
const BFS=(root)=>{
  let arr=[root] //对象存到数组中，相当于队列
  while(arr.length>0){ //循环弹出第一个对象
    const o =arr.shift() //弹出第一个对象
    console.log(o.val); //打印对象的值
    o.children.forEach(item=>{ //循环遍历对象的children，把对象push进数组排队
      arr.push(item)
    })
  }
}
BFS(tree)