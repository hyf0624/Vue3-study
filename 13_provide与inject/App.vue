<template>
  <div class="app">
    <h3>我是App组件</h3>
    汽车--{{ name }} 价格--{{ price }}
    <button @click="changeInfo">修改name和price</button>
    <hr />
    {{ car }}
    <Child />
  </div>
</template>

<script setup>
import Child from './components/Child.vue'
import { reactive, toRefs, provide } from 'vue'
const car = reactive({
  name: '奔驰',
  price: '50w'
})
let { name, price } = toRefs(car)
const changeInfo = () => {
  name.value = '宝马'
  price.value = '30w'
}

// provide将数据抛出去，后代组件就能够使用父组件的数据
provide('car', car)
</script>

<style scoped>
.app {
  padding: 10px;
  background: gray;
}
</style>

