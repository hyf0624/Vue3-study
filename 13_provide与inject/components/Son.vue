<template>
  <div class="son">
    <h3>我是son孙组件</h3>
    {{ car }}
  </div>
</template>

<script setup>
import { inject } from 'vue'

const car = inject('car') // 接收祖组件的数据
console.log(car)
</script>

<style scoped>
.son {
  padding: 10px;
  background: orange;
}
</style>
