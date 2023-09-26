<template>
  <div class="dialog19-container" v-bind:class="rootClassName">
    <div class="dialog19-container01">
      <div class="dialog19-container02">
        <div class="dialog19-container03">
          <span class="dialog19-text">{{ text }}</span>
        </div>
        <div class="dialog19-container04">
          <span class="dialog19-text1">{{ text1 }}</span>
        </div>
      </div>
      <div class="dialog19-container05">
        <div class="dialog19-container06">
          <span class="dialog19-text2">{{ text2 }}</span>
        </div>
        <div class="dialog19-container07">
          <span class="dialog19-text3">{{ text11 }}</span>
        </div>
      </div>
      <div class="dialog19-container08">
        <div class="dialog19-container09">
          <span class="dialog19-text4">{{ text3 }}</span>
        </div>
        <div class="dialog19-container10">
          <span class="dialog19-text5">{{ text12 }}</span>
        </div>
      </div>
      <div class="dialog19-container11">
        <div class="dialog19-container12">
          <span class="dialog19-text6">{{ text4 }}</span>
        </div>
        <div class="dialog19-container13">
          <span class="dialog19-text7">{{ text13 }}</span>
        </div>
      </div>
      <div class="dialog19-container14">
        <div class="dialog19-container15">
          <svg viewBox="0 0 1024 1024" class="dialog19-icon">
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
  name: 'Dialog19',
  props: {
    text2: {
      type: String,
      default: 'Ads CPC',
    },
    text3: {
      type: String,
      default: 'Ads CPA',
    },
    text: {
      type: String,
      default: 'ยอดลูกค้ามาจาก Ads',
    },
    rootClassName: String,
    text1: {
      type: String,
      default: '3,000',
    },
    text12: {
      type: String,
      default: '3,000',
    },
    text4: {
      type: String,
      default: 'ยอดใช้เงิน Ads',
    },
    text13: {
      type: String,
      default: '100,000',
    },
    text11: {
      type: String,
      default: '3,000',
    },
  },
}
</script>

<style scoped>
.dialog19-container {
  width: 400px;
  height: auto;
  display: flex;
  position: relative;
  border-radius: 6px;
  flex-direction: column;
  background-color: #3CBAE1;
}
.dialog19-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: row;
  padding-bottom: 5px;
  justify-content: space-between;
}
.dialog19-container02 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog19-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text {
  color: var(--dl-color-gray-white);
}
.dialog19-container04 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text1 {
  color: var(--dl-color-gray-white);
  font-size: 25px;
  line-height: 0.5;
}
.dialog19-container05 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog19-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text2 {
  color: var(--dl-color-gray-white);
}
.dialog19-container07 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text3 {
  color: var(--dl-color-gray-white);
  font-size: 25px;
  line-height: 0.5;
}
.dialog19-container08 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog19-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text4 {
  color: var(--dl-color-gray-white);
}
.dialog19-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text5 {
  color: var(--dl-color-gray-white);
  font-size: 25px;
  line-height: 0.5;
}
.dialog19-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog19-container12 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog19-text6 {
  color: var(--dl-color-gray-white);
}
.dialog19-container13 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
}
.dialog19-text7 {
  color: var(--dl-color-gray-white);
  font-size: 25px;
  line-height: 0.5;
}
.dialog19-container14 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dialog19-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-round);
  justify-content: center;
  background-color: var(--dl-color-gray-white);
}
.dialog19-icon {
  fill: #3CBAE1;
  width: 25px;
  height: 25px;
}

.dialog19-root-class-name1 {
  width: 100%;
  height: auto;
}
.dialog19-root-class-name2 {
  width: 70%;
  height: auto;
}
.dialog19-root-class-name3 {
  width: 100%;
  height: auto;
}
.dialog19-root-class-name4 {
  width: 70%;
  height: auto;
}
.dialog19-root-class-name5 {
  width: 70%;
  height: auto;
}
@media(max-width: 1600px) {
  .dialog19-text {
    font-size: 16px;
  }
  .dialog19-text1 {
    font-size: 23px;
  }
  .dialog19-text2 {
    font-size: 16px;
  }
  .dialog19-text3 {
    font-size: 23px;
  }
  .dialog19-text4 {
    font-size: 16px;
  }
  .dialog19-text5 {
    font-size: 23px;
  }
  .dialog19-text6 {
    font-size: 16px;
  }
  .dialog19-text7 {
    font-size: 23px;
  }
  .dialog19-icon {
    width: 23px;
    height: 23px;
  }
}
@media(max-width: 1366px) {
  .dialog19-text {
    font-size: 14px;
  }
  .dialog19-text1 {
    font-size: 21px;
  }
  .dialog19-text2 {
    font-size: 14px;
  }
  .dialog19-text3 {
    font-size: 21px;
  }
  .dialog19-text4 {
    font-size: 14px;
  }
  .dialog19-text5 {
    font-size: 21px;
  }
  .dialog19-text6 {
    font-size: 14px;
  }
  .dialog19-text7 {
    font-size: 21px;
  }
  .dialog19-icon {
    width: 21px;
    height: 21px;
  }
  .dialog19-root-class-name1 {
    width: 100%;
  }
  .dialog19-root-class-name3 {
    width: 100%;
  }
}
@media(max-width: 991px) {
  .dialog19-root-class-name3 {
    width: auto;
  }
}
</style>
