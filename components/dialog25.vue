<template>
  <div class="dialog25-container">
    <div class="dialog25-container01">
      <span class="dialog25-text">{{ text1 }}</span>
      <nuxt-link to="/stage-dashboard10" class="dialog25-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog25-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog25-container02">
      <div class="dialog25-container03">
        <div class="dialog25-container04">
          <span class="dialog25-text01">{{ text6 }}</span>
        </div>
        <div class="dialog25-container05">
          <div class="dialog25-container06">
            <span class="dialog25-text02">{{ text21 }}</span>
          </div>
        </div>
        <div class="dialog25-container07">
          <form class="dialog25-form"></form>
          <div class="dialog25-container08">
            <div class="dialog25-container09">
              <span class="dialog25-text03">{{ text }}</span>
            </div>
            <div class="dialog25-container10">
              <span class="dialog25-text04">{{ text3 }}</span>
            </div>
            <div class="dialog25-container11">
              <span class="dialog25-text05">{{ text4 }}</span>
            </div>
          </div>
          <div class="dialog25-container12">
            <div class="dialog25-container13"><span>{{ text5 }}</span></div>
            <div class="dialog25-container14"><span>{{ text31 }}</span></div>
            <div class="dialog25-container15"><span>{{ text41 }}</span></div>
          </div>
          <div class="dialog25-container16">
            <div class="dialog25-container17"><span>{{ text51 }}</span></div>
            <div class="dialog25-container18"><span>{{ text311 }}</span></div>
            <div class="dialog25-container19"><span>{{ text411 }}</span></div>
          </div>
          <div class="dialog25-container20">
            <input
              type="text"
              placeholder="ชื่ออุปกรณ์"
              class="dialog25-textinput input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="จำนวน"
              class="dialog25-textinput1 input Content OO3_1DialogTextInput"
            />
            <svg viewBox="0 0 1024 1024" class="dialog25-icon2">
              <path
                d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="dialog25-container21">
          <img :alt="image_alt" :src="image_src" class="dialog25-image" />
        </div>
        <button type="button" class="dialog25-button button">
          {{ button1 }}
        </button>
      </div>
      <app-right rootClassName="right-root-class-name"></app-right>
    </div>
  </div>
</template>

<script>
import AppRight from './right'

export default {
  name: 'Dialog25',
  props: {
    text31: {
      type: String,
      default: 'ปืนฉีดปลวก',
    },
    text3: {
      type: String,
      default: 'รายการ',
    },
    text: {
      type: String,
      default: 'ลำดับ',
    },
    text21: {
      type: String,
      default: 'รายการอุปกรณ์ที่จะเบิก',
    },
    text311: {
      type: String,
      default: 'สารป้องกันปลวก',
    },
    text6: {
      type: String,
      default: 'วันที่ 12 กย 2566 เวลา  10:00  นาที',
    },
    rootClassName: String,
    text411: {
      type: String,
      default: '2 ถุง',
    },
    text51: {
      type: String,
      default: '02',
    },
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-22%20at%2015.02.04-300w.png',
    },
    text1: {
      type: String,
      default: 'ใบเบิกอุปกรณ์',
    },
    text41: {
      type: String,
      default: '1 ชิ้น',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    text4: {
      type: String,
      default: 'จำนวน',
    },
    button1: {
      type: String,
      default: 'ยืนยัน',
    },
    text5: {
      type: String,
      default: '01',
    },
  },
  components: {
    AppRight,
  },
}
</script>

<style scoped>
.dialog25-container {
  width: 650px;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
}
.dialog25-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #4A494B;
}
.dialog25-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog25-navlink {
  display: contents;
}
.dialog25-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog25-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog25-container03 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #F5F6F1;
}
.dialog25-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  border-color: #C3C5C3;
  border-width: 0px;
  justify-content: center;
}
.dialog25-text01 {
  color: var(--dl-color-danger-700);
  font-size: 20px;
}
.dialog25-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  border-color: #C3C5C3;
  border-width: 1px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 2px;
}
.dialog25-container06 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-text02 {
  font-size: 22px;
}
.dialog25-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-form {
  width: 100%;
  height: auto;
  display: flex;
}
.dialog25-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.dialog25-container09 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog25-text03 {
  font-size: 20px;
}
.dialog25-container10 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dialog25-text04 {
  font-size: 20px;
}
.dialog25-container11 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.dialog25-text05 {
  font-size: 20px;
}
.dialog25-container12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.dialog25-container13 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-container14 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-container15 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dialog25-container16 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.dialog25-container17 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-container18 {
  flex: 0 0 auto;
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog25-container19 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.dialog25-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 250px;
  align-items: center;
}
.dialog25-textinput {
  width: 60%;
  height: 30px;
}
.dialog25-textinput1 {
  width: 20%;
  height: 30px;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
}
.dialog25-icon2 {
  fill: var(--dl-color-success-green);
  width: 30px;
  height: 30px;
}
.dialog25-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-bottom: 20px;
  justify-content: center;
}
.dialog25-image {
  width: 55%;
  object-fit: cover;
}
.dialog25-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  align-self: center;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
</style>
