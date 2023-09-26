<template>
  <div class="dialog61-container" v-bind:class="rootClassName">
    <div class="dialog61-container01">
      <div class="dialog61-container02">
        <div class="dialog61-container03">
          <span class="dialog61-text">{{ text }}</span>
        </div>
        <div class="dialog61-container04">
          <span class="dialog61-text1">{{ text1 }}</span>
        </div>
        <div class="dialog61-container05">
          <span class="dialog61-text2">{{ text2 }}</span>
        </div>
        <div class="dialog61-container06">
          <span class="dialog61-text3">{{ text3 }}</span>
        </div>
      </div>
      <div class="dialog61-container07">
        <div class="dialog61-container08">
          <span class="dialog61-text4">{{ text4 }}</span>
        </div>
        <div class="dialog61-container09">
          <span class="dialog61-text5">{{ text5 }}</span>
        </div>
        <div class="dialog61-container10">
          <span class="dialog61-text6">{{ text6 }}</span>
        </div>
        <div class="dialog61-container11">
          <span class="dialog61-text7">{{ text7 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog61',
  props: {
    text2: {
      type: String,
      default: 'เป้าหมาย',
    },
    text4: {
      type: String,
      default: '30,000,000',
    },
    text: {
      type: String,
      default: 'ประจำปี 2565',
    },
    text3: {
      type: String,
      default: 'ขาดอีก',
    },
    text7: {
      type: String,
      default: '33%',
    },
    text5: {
      type: String,
      default: '17,000,000',
    },
    text1: {
      type: String,
      default: 'ประจำปี 2566',
    },
    rootClassName: String,
    text6: {
      type: String,
      default: '50,000,000',
    },
  },
}
</script>

<style scoped>
.dialog61-container {
  width: 500px;
  height: 100px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  flex-direction: column;
}
.dialog61-container01 {
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
.dialog61-container02 {
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
.dialog61-container03 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  flex-direction: column;
}
.dialog61-text {
  font-size: 25px;
  align-self: flex-end;
}
.dialog61-container04 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  flex-direction: column;
}
.dialog61-text1 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog61-container05 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  flex-direction: column;
}
.dialog61-text2 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog61-container06 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  padding-right: 10px;
  flex-direction: column;
}
.dialog61-text3 {
  font-size: 25px;
  align-self: flex-end;
}
.dialog61-container07 {
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
.dialog61-container08 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog61-text4 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog61-container09 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog61-text5 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog61-container10 {
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.dialog61-text6 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog61-container11 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: flex-end;
  padding-right: 10px;
  flex-direction: column;
}
.dialog61-text7 {
  font-size: 30px;
  align-self: flex-end;
}
.dialog61-root-class-name {
  width: 100%;
  height: auto;
}
.dialog61-root-class-name1 {
  width: 100%;
  height: auto;
  align-self: flex-end;
}
.dialog61-root-class-name2 {
  width: 100%;
  height: auto;
}
@media(max-width: 1600px) {
  .dialog61-container {
    width: 450px;
    height: 90px;
  }
  .dialog61-text {
    font-size: 20px;
  }
  .dialog61-text1 {
    font-size: 20px;
  }
  .dialog61-text2 {
    font-size: 20px;
  }
  .dialog61-text3 {
    font-size: 20px;
  }
  .dialog61-text4 {
    font-size: 30px;
  }
  .dialog61-text5 {
    font-size: 30px;
  }
  .dialog61-text6 {
    font-size: 30px;
  }
  .dialog61-text7 {
    font-size: 30px;
  }
}
@media(max-width: 1366px) {
  .dialog61-text {
    font-size: 18px;
  }
  .dialog61-text1 {
    font-size: 18px;
  }
  .dialog61-text2 {
    font-size: 18px;
  }
  .dialog61-text3 {
    font-size: 18px;
  }
  .dialog61-text4 {
    font-size: 25px;
  }
  .dialog61-text5 {
    font-size: 25px;
  }
  .dialog61-text6 {
    font-size: 25px;
  }
  .dialog61-text7 {
    font-size: 25px;
  }
}
@media(max-width: 991px) {
  .dialog61-container {
    width: 400px;
    height: 80px;
  }
  .dialog61-text {
    font-size: 16px;
  }
  .dialog61-text1 {
    font-size: 16px;
  }
  .dialog61-text2 {
    font-size: 16px;
  }
  .dialog61-text3 {
    font-size: 16px;
  }
  .dialog61-text4 {
    font-size: 20px;
  }
  .dialog61-text5 {
    font-size: 20px;
  }
  .dialog61-text6 {
    font-size: 20px;
  }
  .dialog61-text7 {
    font-size: 20px;
  }
}
</style>
