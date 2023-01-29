<template>
  <!-- <h1>当前值：{{ num }}</h1>
  <button @click="num++">点我+1</button>
  <hr />
  <h1>当前信息：{{ msg }}</h1>
  <button @click="msg += '!'">修改信息</button>
  <hr> -->
  <h3>年龄: {{ info.age }}</h3>
  <h3>姓名: {{ info.name }}</h3>
  <h3>测试: {{ info.a.b.c }}</h3>
  <button @click="changeInfo">修改info</button>
</template>

<script setup>
// 引入watch
import { ref, reactive, watch } from 'vue'
const num = ref(0)
const msg = ref('xx')
const info = reactive({
  age: 85,
  name: '摩根弗里曼',
  a: {
    b: {
      c: 2
    }
  }
})
// 情况一： 只监听ref定义的一个响应式数据
// watch(
//   num,
//   (newValue, oldValue) => {
//     console.log('num发生改变了', newValue, oldValue)
//   },
//   {
//     immediate: true
//   }
// )

// 情况二：监听多个ref定义的响应式数据
// watch(
//   [num, msg],
//   (newValue, oldValue) => {
//     console.log('num和msg都发生改变了', newValue, oldValue)
//   },
//   {
//     immediate: true
//   }
// )

// 情况三：监听reactive定义数据的全部属性
/*
 注意：1.此处无法正确的获取oldValue
      2. 强制开启了深度监视(deep配置无效)
*/
// watch(info, (newValue, oldValue) => {
//   console.log(newValue)
//   console.log(oldValue)
// })

// 情况四：监听reactive定义数据的某个属性
// watch(
//   () => info.age,
//   (newValue, oldValue) => {
//     console.log(newValue)
//     console.log(oldValue)
//   }
// )

// 情况五：监听reactive定义数据的某些属性
// watch([() => info.age, () => info.name], (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// 情况六：监听reactive定义数据的某个属性，并且该属性是个对象，那么就需要开启deep：true
// watch(
//   () => info.a,
//   (newValue, oldValue) => {
//     console.log(newValue)
//     console.log(oldValue)
//   },
//   {
//     deep: true
//   }
// )

// 注意: 如果使用ref定义的数据是一个对象，那么下面这种监听方法，其实是在监听info.value
/*
  解决方法：把监听info修改成info.value，或者开启深度监听deep: true 
 */
watch(
  info,
  (newVal, oldVal) => {
    console.log('info发生了改变', newVal, oldVal)
  },
  {
    deep: true
  }
)
const changeInfo = () => {
  info.a.b.c += 2
}
</script>
