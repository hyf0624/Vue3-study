<template>
  <!-- Vue3组件中低端模板可以没有根标签 -->
  <!-- 在template 模板中读取数据的时候，不用.value读取 -->
  <p>姓名：{{ info.name }}</p>
  <p>年龄：{{ info.age }}</p>
  <p>性别：{{ info.sex }}</p>
  <p>爱好：{{ info.hobby }}</p>
  <p>测试数据：{{ info.a.b.c }}</p>
  <br /><br />
  <button @click="changeInfo">点击方法</button>
  <button @click="addProperty">给info添加一个属性</button>
  <button @click="delProperty">给info删除age属性</button>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 必须使用ref 进行加工的数据才算是响应式的数据，页面才能检测到数据更新
const name = ref('张三')
const age = ref(18)
const info = reactive({
  name: '张之维',
  age: 88,
  sex: '男',
  a: {
    b: {
      c: 999
    }
  }
})
//  方法
const changeInfo = () => {
  // 在setup中修改ref数据要用 .value的形式修改
  name.value = '李四'
  age.value = 25
  console.log(info)
  info.a.b.c = 888
}

const addProperty = () => {
  info.hobby = '抽烟'
}

const delProperty = () => {
  delete info.age
}
</script>

<style></style>

