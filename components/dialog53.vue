<template>
  <div class="dialog53-container">
    <div class="dialog53-container1">
      <div class="dialog53-container2">
        <div class="dialog53-container3">
          <svg viewBox="0 0 1024 1024" class="dialog53-icon">
            <path
              d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
            ></path>
          </svg>
        </div>
        <div class="dialog53-container4">
          <span class="dialog53-text">{{ text }}</span>
        </div>
        <div class="dialog53-container5">
          <div class="dialog53-container6">
            <span class="dialog53-text1">{{ text1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog53',
  props: {
    text1: {
      type: String,
      default: '100',
    },
    text: {
      type: String,
      default: 'ลูกค้าคีย์เข้าใหม่',
    },
  },
}
</script>

<style scoped>
.dialog53-container {
  width: 200px;
  height: 40px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  background-color: #41B886;
}
.dialog53-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
}
.dialog53-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  justify-content: space-between;
}
.dialog53-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog53-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.dialog53-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog53-text {
  color: var(--dl-color-gray-white);
}
.dialog53-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.dialog53-container6 {
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: column;
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.dialog53-text1 {
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
</style>
