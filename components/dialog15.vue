<template>
  <div class="dialog15-container" v-bind:class="rootClassName">
    <div class="dialog15-container01">
      <div class="dialog15-container02">
        <div class="dialog15-container03">
          <span class="dialog15-text">{{ text }}</span>
        </div>
        <div class="dialog15-container04">
          <span class="dialog15-text1">{{ text1 }}</span>
        </div>
        <div class="dialog15-container05">
          <span class="dialog15-text2">{{ text2 }}</span>
        </div>
        <div class="dialog15-container06">
          <span class="dialog15-text3">{{ text3 }}</span>
        </div>
      </div>
      <div class="dialog15-container07">
        <div class="dialog15-container08">
          <span class="dialog15-text4">{{ text4 }}</span>
        </div>
        <div class="dialog15-container09">
          <span class="dialog15-text5">{{ text5 }}</span>
        </div>
        <div class="dialog15-container10">
          <span class="dialog15-text6">{{ text6 }}</span>
        </div>
        <div class="dialog15-container11">
          <span class="dialog15-text7">{{ text7 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog15',
  props: {
    text4: {
      type: String,
      default: '30,000,000',
    },
    text7: {
      type: String,
      default: '33%',
    },
    text1: {
      type: String,
      default: 'ประจำปี 2566',
    },
    text3: {
      type: String,
      default: 'ขาดอีก',
    },
    text: {
      type: String,
      default: 'ประจำปี 2565',
    },
    text2: {
      type: String,
      default: 'เป้าหมาย',
    },
    text5: {
      type: String,
      default: '17,000,000',
    },
    text6: {
      type: String,
      default: '50,000,000',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.dialog15-container {
  width: 500px;
  height: 120px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
}
.dialog15-container01 {
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
.dialog15-container02 {
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
.dialog15-container03 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text {
  font-size: 25px;
  align-self: flex-end;
}
.dialog15-container04 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text1 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog15-container05 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text2 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog15-container06 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text3 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog15-container07 {
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
.dialog15-container08 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text4 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog15-container09 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text5 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog15-container10 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text6 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog15-container11 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog15-text7 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog15-root-class-name {
  width: 100%;
  height: auto;
}
.dialog15-root-class-name1 {
  width: 100%;
  height: 100%;
  align-self: flex-end;
}
.dialog15-root-class-name2 {
  width: 100%;
  height: auto;
}
.dialog15-root-class-name3 {
  width: 100%;
  height: auto;
  align-self: flex-end;
}
.dialog15-root-class-name4 {
  width: 100%;
  height: auto;
  align-self: flex-end;
}
@media(max-width: 1600px) {
  .dialog15-text {
    font-size: 20px;
  }
  .dialog15-text1 {
    font-size: 20px;
  }
  .dialog15-text2 {
    font-size: 20px;
  }
  .dialog15-text3 {
    font-size: 20px;
  }
  .dialog15-text4 {
    font-size: 25px;
  }
  .dialog15-text5 {
    font-size: 25px;
  }
  .dialog15-text6 {
    font-size: 25px;
  }
  .dialog15-text7 {
    font-size: 25px;
  }
  .dialog15-root-class-name {
    height: auto;
  }
  .dialog15-root-class-name2 {
    height: auto;
  }
}
@media(max-width: 1366px) {
  .dialog15-text {
    font-size: 15px;
  }
  .dialog15-text1 {
    font-size: 15px;
  }
  .dialog15-text2 {
    font-size: 15px;
  }
  .dialog15-text3 {
    font-size: 15px;
  }
  .dialog15-text4 {
    font-size: 20px;
  }
  .dialog15-text5 {
    font-size: 20px;
  }
  .dialog15-text6 {
    font-size: 20px;
  }
  .dialog15-text7 {
    font-size: 20px;
  }
  .dialog15-root-class-name {
    width: 100%;
    height: auto;
  }
  .dialog15-root-class-name1 {
    align-self: flex-end;
  }
  .dialog15-root-class-name2 {
    width: 100%;
    height: auto;
  }
  .dialog15-root-class-name3 {
    align-self: flex-end;
  }
  .dialog15-root-class-name4 {
    align-self: flex-end;
  }
}
@media(max-width: 991px) {
  .dialog15-root-class-name1 {
    height: auto;
  }
  .dialog15-root-class-name3 {
    height: auto;
  }
  .dialog15-root-class-name4 {
    height: auto;
  }
}
</style>
