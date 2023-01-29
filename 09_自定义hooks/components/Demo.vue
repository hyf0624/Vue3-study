<template>
  <h3>鼠标当前点击的坐标, x:{{ point.x }} y:{{ point.y }}</h3>
</template>

<script setup>
import usePoint from '../hooks/usePoint'
const point = usePoint()
</script>
