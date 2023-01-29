<template>
  <h4>{{ info }}</h4>
  <h3>年龄: {{ info.age }}</h3>
  <h3>姓名: {{ info.name }}</h3>
  <h3>薪资: {{ info.job.j1.salary }}</h3>

  <button @click="info.job.j1.salary++">涨薪</button>
  <h3>{{ x }}</h3>
  <button @click="x++">changeX</button>
  <button @click="toRawData">讲响应式数据变为原始数据</button>

  <button @click="addCar">给用户添加一台车</button>
  <button @click="changeCar">修改车的信息</button>
</template>

<script setup>
import { toRefs, shallowRef, shallowReactive, readonly, shallowReadonly, toRaw, markRaw } from 'vue'
// shallowReactive 只考虑第一层数据的响应式
let info = shallowReactive({
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
let x = shallowRef(0)

/**
 * readonly: 让一个响应式的数据变为只读的(深度 只读)
 * shallowReadonly: 让一个响应式数据变为只读(浅 只读)
 * 应用场景: 不希望数据被修改时。
 */
// x = readonly(x)
// info = shallowReadonly(info)

// toRaw可以将响应式数据变为原始数据, toRaw只能处理reactive的响应式对象，ref是处理不了的
const toRawData = () => {
  // const raw = toRaw(info)
  // console.log(raw)
  info.age++
  info.job.j1.salary++
  // console.log(info)
  // console.log(raw)
}

const addCar = () => {
  // 将对象标记，被标记过后该对象永远不会变成响应式，
  info.car = markRaw({ name: '奔驰', price: 100 })
}
const changeCar = () => {
  info.age++
  info.car.price++
}
</script>
