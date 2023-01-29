<template>
  <h4>{{ info }}</h4>
  <h3>年龄: {{ info.age }}</h3>
  <h3>姓名: {{ info.name }}</h3>
  <h3>薪资: {{ info.job.j1.salary }}</h3>
  <button @click="info.job.j1.salary++">涨薪</button>
</template>

<script setup>
import { toRefs, shallowRef, shallowReactive } from 'vue'
// shallowReactive 只考虑第一层数据的响应式
const info = shallowReactive({
  age: 25,
  name: 'xx',
  job: {
    j1: {
      salary: 3
    }
  }
})
/**
 * shallowRef 如果传入的是一个基本数据类型，那么它的功能和ref一样，
 * 但是如果传入的是一个对象类型的数据，它是不会对其做响应式处理的。
 */
const x = shallowRef(0)
</script>
