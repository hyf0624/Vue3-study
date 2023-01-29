import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
  const point = reactive({
    x: 0,
    y: 0
  })
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
  }
  // 挂载之后
  onMounted(() => {
    console.log('挂载完毕，给window添加事件监听')
    window.addEventListener('click', savePoint)
  })

  // 卸载之前
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
