<template>
  <Demo :name="name" @updateName="updateName" />
</template>

<script setup>
import Demo from './components/Demo.vue'
import { ref } from 'vue'
const name = ref('')
const updateName = (val) => {
  console.log('子组件传递给父组件的数据', val)
  name.value = val
}
</script>

<style scoped></style>

