<template>
  <div class="right-container" v-bind:class="rootClassName">
    <div class="right-container01">
      <div class="right-container02">
        <div class="right-container03">
          <div class="right-container04">
            <input
              type="text"
              placeholder="ชื่อ-นามสกุล"
              class="right-textinput input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="right-container05">
            <input
              type="text"
              placeholder="ที่อยู่"
              class="input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="right-container06">
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              class="input Content OO3_1DialogTextInput"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="right-container07">
      <input type="checkbox" checked class="right-checkbox" />
      <span class="right-text">{{ text }}</span>
    </div>
    <div class="right-container08">
      <input type="checkbox" checked="true" class="right-checkbox1" />
      <span class="right-text01">{{ text3 }}</span>
    </div>
    <div class="right-container09">
      <input type="checkbox" checked="true" class="right-checkbox2" />
      <span class="right-text02">{{ text4 }}</span>
    </div>
    <div class="right-container10">
      <span class="right-text03">{{ text5 }}</span>
    </div>
    <div class="right-container11">
      <span class="right-text04">{{ text6 }}</span>
    </div>
    <div class="right-container12">
      <span class="right-text05">{{ text7 }}</span>
    </div>
    <div class="right-container13">
      <span class="right-text06">{{ text11 }}</span>
    </div>
    <div class="right-container14">
      <span class="right-text07">{{ text12 }}</span>
    </div>
    <div class="right-container15">
      <span class="right-text08">{{ text13 }}</span>
    </div>
    <div class="right-container16">
      <span class="right-text09">{{ text14 }}</span>
    </div>
    <div class="right-container17">
      <span class="right-text10">{{ text15 }}</span>
    </div>
    <div class="right-container18">
      <span class="right-text11">{{ text16 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    image_src: {
      type: String,
      default: 'a71bd068-0caa-40e9-ba09-254eaa76df26',
    },
    textinput_placeholder2: {
      type: String,
      default: 'placeholder',
    },
    text7: {
      type: String,
      default: 'โทร 098885995',
    },
    text16: {
      type: String,
      default: '21.00 น.',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text5: {
      type: String,
      default: 'ชญาดา พรประเสิร์ท',
    },
    text4: {
      type: String,
      default: 'ขนาด 40 ตร.ว',
    },
    text9: {
      type: String,
      default: 'ที่อยู่',
    },
    text3: {
      type: String,
      default: 'บ้านแบบบ้านเดี่ยว',
    },
    text15: {
      type: String,
      default: '19 สค 2566',
    },
    text14: {
      type: String,
      default: 'แอดมินขิม',
    },
    text: {
      type: String,
      default: 'ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ',
    },
    rootClassName: String,
    text13: {
      type: String,
      default: 'อนุมัติโดย',
    },
    textinput_placeholder1: {
      type: String,
      default: 'placeholder',
    },
    text10: {
      type: String,
      default: 'เบอร์โทรศัพท์',
    },
    text8: {
      type: String,
      default: 'ชื่อ-นามสกุล',
    },
    text11: {
      type: String,
      default: 'กรุงเทพมหานคร',
    },
    text6: {
      type: String,
      default: 'หมู่บ้านชวนชื่นรามอินทรา',
    },
    text12: {
      type: String,
      default: 'เขตมีนบุรี',
    },
  },
}
</script>

<style scoped>
.right-container {
  flex: 0 0 auto;
  width: 35%;
  height: auto;
  display: flex;
  padding: 20px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #E2CBB8;
}
.right-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.right-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right-textinput {
  width: 100%;
}
.right-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.right-checkbox {
  margin-right: 10px;
}
.right-text {
  font-size: 20px;
}
.right-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.right-checkbox1 {
  margin-right: 10px;
}
.right-text01 {
  font-size: 20px;
}
.right-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  padding-bottom: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
.right-checkbox2 {
  margin-right: 10px;
}
.right-text02 {
  font-size: 20px;
}
.right-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.right-text03 {
  font-size: 20px;
}
.right-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-text04 {
  font-size: 20px;
}
.right-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-text05 {
  font-size: 20px;
}
.right-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-text06 {
  font-size: 20px;
}
.right-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  padding-bottom: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.right-text07 {
  font-size: 20px;
}
.right-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.right-text08 {
  font-size: 20px;
}
.right-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-text09 {
  font-size: 20px;
}
.right-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right-text10 {
  font-size: 20px;
}
.right-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  padding-bottom: 20px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.right-text11 {
  font-size: 20px;
}
.right-root-class-name {
  height: 680px;
}
</style>
