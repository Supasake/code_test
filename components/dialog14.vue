<template>
  <div class="dialog14-container" v-bind:class="rootClassName">
    <div class="dialog14-container1">
      <div class="dialog14-container2">
        <div class="dialog14-container3">
          <span class="dialog14-text">{{ text }}</span>
        </div>
        <div class="dialog14-container4">
          <span class="dialog14-text1">{{ text1 }}</span>
        </div>
      </div>
      <div class="dialog14-container5">
        <svg viewBox="0 0 1024 1024" class="dialog14-icon">
          <path
            d="M300 574l252-252 54 54-308 306-162-162 54-54zM810 42q34 0 60 26t26 60v768q0 34-26 60t-60 26h-426q-34 0-60-26t-26-60v-128h86v86h426v-684h-426v86h-86v-128q0-34 26-60t60-26h426z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog14',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'ยอดการติดตั้งแอพ',
    },
    text1: {
      type: String,
      default: '10,000',
    },
  },
}
</script>

<style scoped>
.dialog14-container {
  width: 160px;
  height: 60px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog14-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.dialog14-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog14-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog14-text {
  color: var(--dl-color-gray-white);
}
.dialog14-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog14-text1 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog14-container5 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog14-icon {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
}


</style>
