// 引入的不在是Vue构造函数了, 引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

/*
   创建应用实例对象—— app(类似于之前vue2中的vm, 但是app比vm更'轻')
 */
const app = createApp(App)
console.log(app)

// 挂载
app.mount('#app')

