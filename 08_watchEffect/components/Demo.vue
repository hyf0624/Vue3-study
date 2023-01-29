<template>
  <h3>当前值：{{ num }}</h3>
  <button @click="num++">点我+1</button>
  <hr />
  <h3>当前信息：{{ msg }}</h3>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h3>年龄: {{ info.age }}</h3>
  <h3>姓名: {{ info.name }}</h3>
  <h3>测试: {{ info.a.b.c }}</h3>
  <button @click="changeInfo">修改info</button>
</template>

<script setup>
// 引入watch
import { ref, watchEffect } from 'vue'
const num = ref(0)
const msg = ref('xx')
const info = ref({
  age: 85,
  name: '摩根弗里曼',
  a: {
    b: {
      c: 2
    }
  }
})
// 回调函数里用了哪些数据，就监听哪些数据，并且重新执行一般函数体
watchEffect(() => {
  const x1 = num.value + 2
  const x2 = info.value.age + 3
  console.log('watchEffect配置执行了')
})
const changeInfo = () => {}
</script>
