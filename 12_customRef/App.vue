<template>
  <input type="text" v-model="message" />
  <h3>{{ message }}</h3>
</template>

<script setup>
import { ref, customRef } from 'vue'

// 自定义ref
const myRef = (value) => {
  return customRef((track, trigger) => {
    let timer
    return {
      get() {
        console.log('读取了myRef中的数据了')
        track() // 追踪value的变化
        return value
      },
      set(val) {
        console.log('修改了myRef中的数据')
        clearTimeout(timer)
        timer = setTimeout(() => {
          // 延迟一秒再执行。
          value = val
          trigger() // 触发，通知vue重新解析模板
        }, 1000)
      }
    }
  })
}
//let message = ref('Hello World Vue3') // 使用vue提供的内置的ref
let message = myRef('Hello World Vue3')
</script>

<style scoped></style>

