<template>
  <div class="dialog110-container" v-bind:class="rootClassName">
    <div class="dialog110-container01">
      <div class="dialog110-container02">
        <div class="dialog110-container03">
          <span class="dialog110-text">{{ text }}</span>
        </div>
        <div class="dialog110-container04">
          <span class="dialog110-text1">{{ text1 }}</span>
        </div>
        <div class="dialog110-container05">
          <span class="dialog110-text2">{{ text2 }}</span>
        </div>
        <div class="dialog110-container06">
          <span class="dialog110-text3">{{ text3 }}</span>
        </div>
      </div>
      <div class="dialog110-container07">
        <div class="dialog110-container08">
          <span class="dialog110-text4">{{ text4 }}</span>
        </div>
        <div class="dialog110-container09">
          <span class="dialog110-text5">{{ text5 }}</span>
        </div>
        <div class="dialog110-container10">
          <span class="dialog110-text6">{{ text6 }}</span>
        </div>
        <div class="dialog110-container11">
          <span class="dialog110-text7">{{ text7 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog110',
  props: {
    rootClassName: String,
    text3: {
      type: String,
      default: 'ขาดอีก',
    },
    text5: {
      type: String,
      default: '17,000,000',
    },
    text: {
      type: String,
      default: 'ประจำปี 2565',
    },
    text6: {
      type: String,
      default: '50,000,000',
    },
    text1: {
      type: String,
      default: 'ประจำปี 2566',
    },
    text2: {
      type: String,
      default: 'เป้าหมาย',
    },
    text4: {
      type: String,
      default: '30,000,000',
    },
    text7: {
      type: String,
      default: '33%',
    },
  },
}
</script>

<style scoped>
.dialog110-container {
  width: 500px;
  height: 100px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
}
.dialog110-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog110-container02 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog110-container03 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  flex-direction: column;
}
.dialog110-text {
  width: auto;
  font-size: 25px;
  text-align: right;
}
.dialog110-container04 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog110-text1 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog110-container05 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog110-text2 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog110-container06 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
  flex-direction: column;
}
.dialog110-text3 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog110-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog110-container08 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog110-text4 {
  font-size: 30px;
}
.dialog110-container09 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog110-text5 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog110-container10 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog110-text6 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog110-container11 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
  flex-direction: column;
}
.dialog110-text7 {
  font-size: 30px;
  align-self: flex-end;
}

</style>
