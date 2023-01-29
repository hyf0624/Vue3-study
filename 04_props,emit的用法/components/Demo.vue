<template>
  <p>姓名：{{ props.name }}</p>
  <p>年龄：{{ info.age }}</p>
  <button @click="changeName">子组件emit发送事件</button>
</template>

<script setup>
import { reactive, watch } from 'vue'
// import { defineProps } from 'vue'
// defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineProps: true】
// 必须使用ref 进行加工的数据才算是响应式的数据，页面才能检测到数据更新
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['updateName'])

const info = reactive({
  name: 1221,
  age: 88,
  sex: '男',
  a: {
    b: {
      c: 999
    }
  }
})

const changeName = () => {
  emit('updateName', '------')
}
</script>

<style></style>
