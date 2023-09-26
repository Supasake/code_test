<template>
  <div class="dialog65-container" v-bind:class="rootClassName">
    <div class="dialog65-container1">
      <div class="dialog65-container2">
        <div class="dialog65-container3">
          <svg viewBox="0 0 1024 1024" class="dialog65-icon">
            <path
              d="M256 554v-84h512v84h-512zM128 256h768v86h-768v-86zM426 768v-86h172v86h-172z"
            ></path>
          </svg>
        </div>
        <div class="dialog65-container4">
          <span class="dialog65-text">{{ text }}</span>
        </div>
        <div class="dialog65-container5">
          <div class="dialog65-container6">
            <span class="dialog65-text1">{{ text1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog65',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'ใกล้หมดสัญญา',
    },
    text1: {
      type: String,
      default: '100',
    },
  },
}
</script>

<style scoped>
.dialog65-container {
  width: 200px;
  height: 40px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
  background-color: #16356A;
}
.dialog65-container1 {
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
.dialog65-container2 {
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
.dialog65-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog65-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
}
.dialog65-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog65-text {
  color: var(--dl-color-gray-white);
  font-size: 23px;
}
.dialog65-container5 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.dialog65-container6 {
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
.dialog65-text1 {
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.dialog65-root-class-name {
  width: 100%;
  height: auto;
}
.dialog65-root-class-name1 {
  width: 100%;
  height: auto;
}
.dialog65-root-class-name2 {
  width: 100%;
  height: auto;
}
.dialog65-root-class-name3 {
  width: 100%;
  height: auto;
}
.dialog65-root-class-name4 {
  width: 100%;
  height: auto;
}
.dialog65-root-class-name5 {
  width: 100%;
  height: auto;
}
</style>
