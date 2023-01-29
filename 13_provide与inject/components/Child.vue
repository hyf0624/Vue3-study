<template>
  <div class="child">
    <h3>我是child子组件</h3>
    <Son />
  </div>
</template>

<script setup>
import Son from './Son.vue'
</script>

<style scoped>
.child {
  padding: 10px;
  background: skyblue;
}
</style>
