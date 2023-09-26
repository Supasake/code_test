<template>
  <div class="dialog64-container" v-bind:class="rootClassName">
    <div class="dialog64-container1">
      <div class="dialog64-container2">
        <div class="dialog64-container3">
          <span class="dialog64-text">{{ text }}</span>
        </div>
        <div class="dialog64-container4">
          <span class="dialog64-text1">{{ text1 }}</span>
        </div>
      </div>
      <div class="dialog64-container5">
        <svg viewBox="0 0 1024 1024" class="dialog64-icon">
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
  name: 'Dialog64',
  props: {
    text: {
      type: String,
      default: 'ยอดการติดตั้งแอพ',
    },
    text1: {
      type: String,
      default: '10,000',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.dialog64-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog64-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.dialog64-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog64-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog64-text {
  color: var(--dl-color-gray-white);
}
.dialog64-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog64-text1 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog64-container5 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog64-icon {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
}

.dialog64-root-class-name1 {
  width: auto;
  height: auto;
}
.dialog64-root-class-name2 {
  width: 30%;
  height: auto;
  margin-right: 10px;
}
.dialog64-root-class-name3 {
  width: auto;
  height: auto;
}
@media(max-width: 1366px) {
  .dialog64-text {
    font-size: 16px;
  }
  .dialog64-text1 {
    font-size: 25px;
  }
  .dialog64-icon {
    width: 25px;
    height: 25px;
  }
}
@media(max-width: 991px) {
  .dialog64-text {
    font-size: 16px;
  }
  .dialog64-text1 {
    font-size: 25px;
  }
  .dialog64-icon {
    width: 25px;
    height: 25px;
  }
}
@media(max-width: 767px) {
  .dialog64-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
