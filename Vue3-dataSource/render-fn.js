import { h } from "vue";
const App={
  render() {
    // 1. v-if='ok
    // v-if else-if else
    // return this.ok
    //   ? h('div',{id:'hello'},[h('span','world')])
    //   : this.otherCondition
    //     ? h('p','other branch')
    //     : h('span')

    // 2. v-for='item in list'
    // return this.list.map(item=>{
    //   return h('div',{key:item.id},item.text)
    // })
    // 3. slot
    const slot=this.$slot.default
      ? this.$slot.default({})
      : []
      // return h('div',slot) //在div节点中放入插槽
      // slot.map(vnode=>{
      //   return h('div',[vnode])
      // })

  }
}
const Stack={
  render(){
    const slot = this.$slot.default
      ? this.$slot.default()
      :[]
    return h('div',{class:'stack'},slot.map(child=>{
      return h('div',{class:`mt-${this.$props.size}`},[child])
    }))
  }
}
// <div id="hello"><span>world</span></div>