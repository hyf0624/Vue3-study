<template>
  <h4>{{ info }}</h4>
  <h3>年龄: {{ age }}</h3>
  <h3>姓名: {{ name }}</h3>
  <h3>薪资: {{ job.j1.salary }}</h3>
  <button @click="changeInfo">修改info</button>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue'
const info = reactive({
  age: 25,
  name: 'xx',
  job: {
    j1: {
      salary: 3
    }
  }
})
/**
 * toRef的作用是将对象里的指定属性变成ref对象
 * toRefs作用和toRef一样，不同的是可以接收多个数据
 */
// 这里toRef定义的age，name，salary 指向的其实还是info对象里的几个属性。
// const age = toRef(info, 'age')
// const name = toRef(info, 'name')
// const salary = toRef(info.job.j1, 'salary')
const { age, name, job } = toRefs(info)
console.log(age)
console.log(name)
console.log(job)
const changeInfo = () => {
  // age.value++
  // name.value++
  // salary.value++
  age.value++
  name.value += 'x'
  job.value.j1.salary++
}
</script>
