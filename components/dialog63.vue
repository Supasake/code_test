<template>
  <div class="dialog63-container" v-bind:class="rootClassName">
    <div class="dialog63-container1">
      <div class="dialog63-container2">
        <svg viewBox="0 0 1024 1024" class="dialog63-icon">
          <path
            d="M512 854q140 0 241-101t101-241q0-44-14-96-44 10-98 10-92 0-193-53t-153-127q-66 160-224 230-2 12-2 36 0 140 101 241t241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM640 502q22 0 38 15t16 37-16 38-38 16-38-16-16-38 16-37 38-15zM384 502q22 0 38 15t16 37-16 38-38 16-38-16-16-38 16-37 38-15z"
          ></path>
        </svg>
      </div>
      <div class="dialog63-container3">
        <div class="dialog63-container4">
          <span class="dialog63-text">{{ text }}</span>
        </div>
        <div class="dialog63-container5">
          <span class="dialog63-text1">{{ text1 }}</span>
        </div>
        <div class="dialog63-container6">
          <div class="dialog63-container7">
            <span class="dialog63-text2">{{ text2 }}</span>
          </div>
          <div class="dialog63-container8">
            <span class="dialog63-text3">{{ text3 }}</span>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" class="dialog63-icon2">
        <path
          d="M554 384v-86h-84v86h84zM554 726v-256h-84v256h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog63',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: 'ชื่อเล่น ชื่อจริง-นามสกุล',
    },
    text2: {
      type: String,
      default: 'ติดต่อ 01  มค 66',
    },
    text3: {
      type: String,
      default: 'รอมา  7  วัน',
    },
    text1: {
      type: String,
      default: 'ประเภทบ้านเดี่ยว > ต้องการทำนัดเลย',
    },
  },
}
</script>

<style scoped>
.dialog63-container {
  width: 250px;
  height: 85px;
  display: flex;
  position: relative;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 0px;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dialog63-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-color: #B6B8BA;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: var(--dl-color-gray-white);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dialog63-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 5px;
  flex-direction: column;
}
.dialog63-icon {
  width: 30px;
  height: 30px;
}
.dialog63-container3 {
  flex: 0 0 auto;
  width: 84%;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog63-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 2px;
  align-items: flex-start;
}
.dialog63-text {
  width: 100%;
  font-size: 24px;
}
.dialog63-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: #B6B8BA;
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog63-text1 {
  font-size: 16px;
}
.dialog63-container6 {
  flex: 0 0 auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-between;
}
.dialog63-container7 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog63-text2 {
  font-size: 16px;
}
.dialog63-container8 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  flex-direction: column;
}
.dialog63-text3 {
  font-size: 16px;
}
.dialog63-icon2 {
  top: 4px;
  right: 4px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.dialog63-root-class-name {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name1 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name2 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name3 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name4 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name5 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name6 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name7 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name8 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name9 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name10 {
  width: 100%;
  height: auto;
}
.dialog63-root-class-name11 {
  width: 100%;
  height: auto;
}
@media(max-width: 1366px) {
  .dialog63-text1 {
    font-size: 14px;
  }
  .dialog63-text2 {
    font-size: 14px;
  }
  .dialog63-text3 {
    font-size: 14px;
  }
}
</style>
