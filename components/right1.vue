<template>
  <div class="right1-container" v-bind:class="rootClassName">
    <div class="right1-container01">
      <div class="right1-container02">
        <img :alt="image_alt" :src="image_src" class="right1-image" />
      </div>
      <div class="right1-container03">
        <div class="right1-container04">
          <div class="right1-container05">
            <span class="right1-text">{{ text8 }}</span>
          </div>
          <div class="right1-container06">
            <span class="right1-text01">{{ text9 }}</span>
          </div>
          <div class="right1-container07">
            <span class="right1-text02">{{ text10 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right1-container08">
      <div class="right1-container09">
        <input type="checkbox" checked class="right1-checkbox" />
      </div>
      <span class="right1-text03">{{ text }}</span>
    </div>
    <div class="right1-container10">
      <input type="checkbox" checked="true" class="right1-checkbox1" />
      <span class="right1-text04">{{ text3 }}</span>
    </div>
    <div class="right1-container11">
      <input type="checkbox" checked="true" class="right1-checkbox2" />
      <span class="right1-text05">{{ text4 }}</span>
    </div>
    <div class="right1-container12">
      <span class="right1-text06">{{ text5 }}</span>
    </div>
    <div class="right1-container13">
      <span class="right1-text07">{{ text6 }}</span>
    </div>
    <div class="right1-container14">
      <span class="right1-text08">{{ text7 }}</span>
    </div>
    <div class="right1-container15">
      <span class="right1-text09">{{ text11 }}</span>
    </div>
    <div class="right1-container16">
      <span class="right1-text10">{{ text12 }}</span>
    </div>
    <div class="right1-container17">
      <span class="right1-text11">{{ text13 }}</span>
    </div>
    <div class="right1-container18">
      <span class="right1-text12">{{ text14 }}</span>
    </div>
    <div class="right1-container19">
      <span class="right1-text13">{{ text15 }}</span>
    </div>
    <div class="right1-container20">
      <span class="right1-text14">{{ text16 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right1',
  props: {
    text12: {
      type: String,
      default: 'เขตมีนบุรี',
    },
    rootClassName: String,
    text3: {
      type: String,
      default: 'บ้านแบบบ้านเดี่ยว',
    },
    text: {
      type: String,
      default: 'ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ',
    },
    text8: {
      type: String,
      default: 'แอดมิน -ขิม',
    },
    text14: {
      type: String,
      default: 'แอดมินขิม',
    },
    text4: {
      type: String,
      default: 'ขนาด 40 ตร.ว',
    },
    text5: {
      type: String,
      default: 'ชญาดา พรประเสิร์ท',
    },
    text9: {
      type: String,
      default: 'ออฟฟิศสุวรรณภูมิ',
    },
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-18%20at%2010.27.111-200w.png',
    },
    text15: {
      type: String,
      default: '19 สค 2566',
    },
    text16: {
      type: String,
      default: '21.00 น.',
    },
    text11: {
      type: String,
      default: 'กรุงเทพมหานคร',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text6: {
      type: String,
      default: 'หมู่บ้านชวนชื่นรามอินทรา',
    },
    text7: {
      type: String,
      default: 'โทร 098885995',
    },
    text10: {
      type: String,
      default: '089-009-09765',
    },
    text13: {
      type: String,
      default: 'คีย์เข้าระบบโดย',
    },
  },
}
</script>

<style scoped>
.right1-container {
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
.right1-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right1-container02 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  padding-right: 15px;
  flex-direction: column;
}
.right1-image {
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
}
.right1-container03 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
}
.right1-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right1-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right1-text {
  font-size: 22px;
}
.right1-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right1-text01 {
  font-size: 20px;
}
.right1-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
}
.right1-text02 {
  font-size: 20px;
}
.right1-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.right1-container09 {
  display: flex;
  align-items: center;
}
.right1-checkbox {
  margin-right: 10px;
}
.right1-text03 {
  font-size: 20px;
}
.right1-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.right1-checkbox1 {
  margin-right: 10px;
}
.right1-text04 {
  font-size: 20px;
}
.right1-container11 {
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
.right1-checkbox2 {
  margin-right: 10px;
}
.right1-text05 {
  font-size: 20px;
}
.right1-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.right1-text06 {
  font-size: 20px;
}
.right1-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right1-text07 {
  font-size: 20px;
}
.right1-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right1-text08 {
  font-size: 20px;
}
.right1-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right1-text09 {
  font-size: 20px;
}
.right1-container16 {
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
.right1-text10 {
  font-size: 20px;
}
.right1-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.right1-text11 {
  font-size: 20px;
}
.right1-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right1-text12 {
  font-size: 20px;
}
.right1-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.right1-text13 {
  font-size: 20px;
}
.right1-container20 {
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
.right1-text14 {
  font-size: 20px;
}
.right1-root-class-name {
  top: 0px;
  left: 0px;
  width: 35%;
  height: 682px;
  position: static;
  align-self: flex-start;
}
.right1-root-class-name1 {
  top: 0px;
  right: 0px;
  width: 35%;
  height: 682px;
  position: static;
  align-self: flex-start;
}
.right1-root-class-name2 {
  top: 0px;
  right: 0px;
  width: 35%;
  height: auto;
  position: static;
  align-self: flex-start;
}
.right1-root-class-name3 {
  top: 0px;
  left: 0px;
  width: 35%;
  height: 682px;
  position: static;
  align-self: flex-start;
}
@media(max-width: 1600px) {
  .right1-container {
    width: 35%;
  }
  .right1-container08 {
    flex-direction: row;
    justify-content: flex-start;
  }
  .right1-container09 {
    align-self: flex-start;
    padding-top: 5px;
    flex-direction: column;
  }
  .right1-text03 {
    align-self: center;
  }
}
</style>
