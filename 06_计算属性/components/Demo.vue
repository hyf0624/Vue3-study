<template>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script setup>
import { reactive, computed } from 'vue'
const person = reactive({
  firstName: '张',
  lastName: '三丰'
})
// 计算属性的简写形式，只考虑了getter
// person.fullName = computed(() => {
//   return person.firstName + '-' + person.lastName
// })

// 计算属性完整写法
person.fullName = computed({
  get() {
    return person.firstName + '-' + person.lastName
  },
  set(value) {
    console.log(value)
    const name = value.split('-')
    person.firstName = name[0]
    person.lastName = name[1]
  }
})
</script>
