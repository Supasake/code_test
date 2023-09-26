<template>
  <div class="dialog67-container" v-bind:class="rootClassName">
    <div class="dialog67-container01">
      <div class="dialog67-container02">
        <div class="dialog67-container03">
          <span class="dialog67-text">{{ text }}</span>
        </div>
        <div class="dialog67-container04">
          <span class="dialog67-text1">{{ text1 }}</span>
        </div>
      </div>
      <div class="dialog67-container05">
        <div class="dialog67-container06">
          <span class="dialog67-text2">{{ text2 }}</span>
        </div>
        <div class="dialog67-container07">
          <span class="dialog67-text3">{{ text11 }}</span>
        </div>
      </div>
      <div class="dialog67-container08">
        <div class="dialog67-container09">
          <span class="dialog67-text4">{{ text3 }}</span>
        </div>
        <div class="dialog67-container10">
          <span class="dialog67-text5">{{ text12 }}</span>
        </div>
      </div>
      <div class="dialog67-container11">
        <div class="dialog67-container12">
          <span class="dialog67-text6">{{ text4 }}</span>
        </div>
        <div class="dialog67-container13">
          <span class="dialog67-text7">{{ text13 }}</span>
        </div>
      </div>
      <div class="dialog67-container14">
        <div class="dialog67-container15">
          <svg viewBox="0 0 1024 1024" class="dialog67-icon">
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
  name: 'Dialog67',
  props: {
    text3: {
      type: String,
      default: 'Ads CPA',
    },
    text12: {
      type: String,
      default: '3,000',
    },
    rootClassName: String,
    text4: {
      type: String,
      default: 'ยอดใช้เงิน Ads',
    },
    text13: {
      type: String,
      default: '100,000',
    },
    text1: {
      type: String,
      default: '3,000',
    },
    text: {
      type: String,
      default: 'ยอดลูกค้ามาจาก Ads',
    },
    text2: {
      type: String,
      default: 'Ads CPC',
    },
    text11: {
      type: String,
      default: '3,000',
    },
  },
}
</script>

<style scoped>
.dialog67-container {
  width: 500px;
  height: auto;
  display: flex;
  position: relative;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog67-container01 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.dialog67-container02 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog67-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text {
  color: var(--dl-color-gray-white);
}
.dialog67-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text1 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog67-container05 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog67-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text2 {
  color: var(--dl-color-gray-white);
}
.dialog67-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text3 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog67-container08 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog67-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text4 {
  color: var(--dl-color-gray-white);
}
.dialog67-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text5 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog67-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog67-container12 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text6 {
  color: var(--dl-color-gray-white);
}
.dialog67-container13 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog67-text7 {
  color: var(--dl-color-gray-white);
  font-size: 30px;
  line-height: 0.5;
}
.dialog67-container14 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog67-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-radius: var(--dl-radius-radius-round);
  background-color: var(--dl-color-gray-white);
}
.dialog67-icon {
  fill: #3CBAE1;
  width: 30px;
  height: 30px;
}

.dialog67-root-class-name1 {
  width: 100%;
  height: auto;
}
.dialog67-root-class-name2 {
  width: 70%;
  height: auto;
}
.dialog67-root-class-name3 {
  width: 100%;
  height: auto;
}
@media(max-width: 1366px) {
  .dialog67-container {
    width: 400px;
    height: 40px;
  }
  .dialog67-text {
    font-size: 16px;
  }
  .dialog67-text1 {
    font-size: 25px;
  }
  .dialog67-text2 {
    font-size: 16px;
  }
  .dialog67-text3 {
    font-size: 25px;
  }
  .dialog67-text4 {
    font-size: 16px;
  }
  .dialog67-text5 {
    font-size: 25px;
  }
  .dialog67-text6 {
    font-size: 16px;
  }
  .dialog67-text7 {
    font-size: 25px;
  }
  .dialog67-icon {
    width: 20px;
    height: 20px;
  }
}
@media(max-width: 991px) {
  .dialog67-container {
    width: 300px;
    height: 40px;
  }
  .dialog67-container01 {
    height: auto;
  }
  .dialog67-text {
    font-size: 16px;
  }
  .dialog67-text1 {
    font-size: 25px;
  }
  .dialog67-text2 {
    font-size: 16px;
  }
  .dialog67-text3 {
    font-size: 25px;
  }
  .dialog67-text4 {
    font-size: 16px;
  }
  .dialog67-text5 {
    font-size: 25px;
  }
}
</style>
