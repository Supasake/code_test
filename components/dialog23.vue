<template>
  <div class="dialog23-container" v-bind:class="rootClassName">
    <div class="dialog23-container1">
      <div class="dialog23-container2">
        <div class="dialog23-container3">
          <span class="dialog23-text">ยอดการติดตั้งแอพ</span>
        </div>
        <div class="dialog23-container4">
          <span class="dialog23-text1">10,000</span>
        </div>
      </div>
      <div class="dialog23-container5">
        <svg viewBox="0 0 1024 1024" class="dialog23-icon">
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
  name: 'Dialog23',
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
.dialog23-container {
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-radius: 6px;
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog23-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: center;
  padding-top: 5px;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  padding-bottom: 5px;
  justify-content: flex-end;
}
.dialog23-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog23-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog23-text {
  color: var(--dl-color-gray-white);
}
.dialog23-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog23-text1 {
  color: var(--dl-color-gray-white);
  font-size: 25px;
  line-height: 0.5;
}
.dialog23-container5 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  margin-left: 5px;
  flex-direction: column;
}
.dialog23-icon {
  fill: var(--dl-color-gray-white);
  width: 25px;
  height: 25px;
}

.dialog23-root-class-name1 {
  width: auto;
  height: auto;
}
.dialog23-root-class-name2 {
  width: 28%;
  height: auto;
  margin-right: 2%;
}
.dialog23-root-class-name3 {
  width: auto;
  height: auto;
}
.dialog23-root-class-name4 {
  width: 30%;
  height: auto;
  margin-right: 10px;
}
.dialog23-root-class-name5 {
  width: 30%;
  height: auto;
  margin-right: 10px;
}
@media(max-width: 1600px) {
  .dialog23-text {
    font-size: 16px;
  }
  .dialog23-text1 {
    font-size: 23px;
  }
  .dialog23-icon {
    width: 23px;
    height: 23px;
  }
  .dialog23-root-class-name2 {
    width: 28%;
  }
}
@media(max-width: 1366px) {
  .dialog23-text {
    font-size: 14px;
  }
  .dialog23-text1 {
    font-size: 21px;
  }
  .dialog23-icon {
    width: 21px;
    height: 21px;
  }
  .dialog23-root-class-name1 {
    width: auto;
  }
  .dialog23-root-class-name2 {
    width: 28%;
    margin-right: 2%;
  }
  .dialog23-root-class-name3 {
    width: auto;
  }
}
</style>
