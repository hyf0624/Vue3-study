<template>
  <!-- Vue3组件中低端模板可以没有根标签 -->
  <!-- 在template 模板中读取数据的时候，不用.value读取 -->
  <span>信息：{{ name }} {{ age }}</span>
  <button @click="changeInfo">点击方法</button>
</template>

<script setup>
import { ref } from 'vue'
// 必须使用ref 进行加工的数据才算是响应式的数据，页面才能检测到数据更新
const name = ref('张三')
const age = ref(18)

//  方法
const changeInfo = () => {
  // 在setup中修改ref数据要用 .value的形式修改
  name.value = '李四'
  age.value = 25
}
</script>

<style></style>

