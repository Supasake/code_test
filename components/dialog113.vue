<template>
  <div class="dialog113-container" v-bind:class="rootClassName">
    <div class="dialog113-container01">
      <div class="dialog113-container02">
        <div class="dialog113-container03">
          <span class="dialog113-text">{{ text }}</span>
        </div>
        <div class="dialog113-container04">
          <span class="dialog113-text1">{{ text1 }}</span>
        </div>
      </div>
      <div class="dialog113-container05">
        <div class="dialog113-container06">
          <span class="dialog113-text2">{{ text2 }}</span>
        </div>
        <div class="dialog113-container07">
          <span class="dialog113-text3">{{ text11 }}</span>
        </div>
      </div>
      <div class="dialog113-container08">
        <div class="dialog113-container09">
          <span class="dialog113-text4">{{ text3 }}</span>
        </div>
        <div class="dialog113-container10">
          <span class="dialog113-text5">{{ text12 }}</span>
        </div>
      </div>
      <div class="dialog113-container11">
        <div class="dialog113-container12">
          <span class="dialog113-text6">{{ text4 }}</span>
        </div>
        <div class="dialog113-container13">
          <span class="dialog113-text7">{{ text13 }}</span>
        </div>
      </div>
      <div class="dialog113-container14">
        <div class="dialog113-container15">
          <svg viewBox="0 0 1024 1024" class="dialog113-icon">
            <path
              d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog113',
  props: {
    text2: {
      type: String,
      default: 'Ads CPC',
    },
    text11: {
      type: String,
      default: '3,000',
    },
    text4: {
      type: String,
      default: 'ยอดใช้เงิน Ads',
    },
    text: {
      type: String,
      default: 'ยอดลูกค้ามาจาก Ads',
    },
    rootClassName: String,
    text3: {
      type: String,
      default: 'Ads CPA',
    },
    text12: {
      type: String,
      default: '3,000',
    },
    text13: {
      type: String,
      default: '100,000',
    },
    text1: {
      type: String,
      default: '3,000',
    },
  },
}
</script>

<style scoped>
.dialog113-container {
  width: 550px;
  height: 60px;
  display: flex;
  position: relative;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog113-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dialog113-container02 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog113-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text {
  color: var(--dl-color-gray-white);
}
.dialog113-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text1 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog113-container05 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog113-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text2 {
  color: var(--dl-color-gray-white);
}
.dialog113-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text3 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog113-container08 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog113-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text4 {
  color: var(--dl-color-gray-white);
}
.dialog113-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text5 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog113-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog113-container12 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text6 {
  color: var(--dl-color-gray-white);
}
.dialog113-container13 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog113-text7 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog113-container14 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog113-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.dialog113-icon {
  fill: #3CBAE1;
  width: 30px;
  height: 30px;
}

.dialog113-root-class-name1 {
  width: 100%;
}
</style>
