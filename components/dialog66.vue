<template>
  <div class="dialog66-container" v-bind:class="rootClassName">
    <div class="dialog66-container1">
      <div class="dialog66-container2">
        <div class="dialog66-container3">
          <svg viewBox="0 0 1024 1024" class="dialog66-icon">
            <path
              d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
            ></path>
          </svg>
        </div>
        <div class="dialog66-container4">
          <span class="dialog66-text">{{ text }}</span>
        </div>
        <div class="dialog66-container5">
          <div class="dialog66-container6">
            <span class="dialog66-text1">{{ text1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog66',
  props: {
    text: {
      type: String,
      default: 'ลูกค้าคีย์เข้าใหม่',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: '100',
    },
  },
}
</script>

<style scoped>
.dialog66-container {
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
.dialog66-container1 {
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
.dialog66-container2 {
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
.dialog66-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog66-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.dialog66-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog66-text {
  color: var(--dl-color-gray-white);
  font-size: 23px;
}
.dialog66-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.dialog66-container6 {
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
.dialog66-text1 {
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.dialog66-root-class-name {
  width: 100%;
  height: auto;
}
.dialog66-root-class-name1 {
  width: 100%;
  height: auto;
}
</style>
