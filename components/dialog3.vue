<template>
  <div class="dialog3-container" v-bind:class="rootClassName">
    <div class="dialog3-container01">
      <span class="dialog3-text">{{ text1 }}</span>
      <nuxt-link to="/stage-dashboard10" class="dialog3-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog3-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog3-container02">
      <div class="dialog3-container03">
        <div class="dialog3-container04">
          <div class="dialog3-container05">
            <span class="dialog3-text1">{{ text2 }}</span>
          </div>
          <div class="dialog3-container06">
            <svg viewBox="0 0 1024 1024" class="dialog3-icon02">
              <path
                d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="dialog3-container07">
          <form class="dialog3-form">
            <div class="dialog3-container08">
              <div class="dialog3-container09">
                <span class="dialog3-text2">
                  09 กก 66 โทรติดต่อไปครั้งที่ 1 แล้ว
                  แต่ลูกค้าไม่สะดวกที่จะคุยแล้ว
                </span>
              </div>
              <div class="dialog3-container10">
                <span class="dialog3-text3">
                  12 กก 66 โทรติดต่อไปครั้งที่ 2 ลูกค้าสนใจจะนัดวันที่
                </span>
              </div>
              <div class="dialog3-container11">
                <svg viewBox="0 0 1024 1024" class="dialog3-icon04">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <nuxt-link to="/stage-dashboard8" class="dialog3-navlink1">
                  เพิ่มรีพอร์ทการเข้าพบ
                </nuxt-link>
              </div>
              <div class="dialog3-container12">
                <svg viewBox="0 0 1024 1024" class="dialog3-icon06">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <span>เพิ่มไฟล์แนบ</span>
              </div>
              <div class="dialog3-container13">
                <svg viewBox="0 0 1024 1024" class="dialog3-icon08">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <nuxt-link to="/stage-dashboard5" class="dialog3-navlink2">
                  เพิ่มคิวเข้าไปนัดสำรวจ
                </nuxt-link>
              </div>
              <div class="dialog3-container14">
                <span class="dialog3-text5">{{ text }}</span>
              </div>
              <div class="dialog3-container15">
                <button type="button" class="dialog3-button button">
                  อนุมัติเพื่อนัดหมาย
                </button>
              </div>
              <div class="dialog3-container16">
                <div class="dialog3-container17">
                  <div class="dialog3-container18">
                    <svg viewBox="0 0 1024 1024" class="dialog3-icon10">
                      <path
                        d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                      ></path>
                    </svg>
                    <span>12 สค 66 / โดย: แอม</span>
                  </div>
                  <div class="dialog3-container19">
                    <textarea
                      placeholder="ตอนนี้ติดต่อลูกค้ายังไม่ได้เลยค่ะ"
                      class="dialog3-textarea Content OO3_1DialogTextInput textarea"
                    ></textarea>
                    <svg viewBox="0 0 1024 1024" class="dialog3-icon12">
                      <path
                        d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="dialog3-container20">
                <div class="dialog3-container21">
                  <div class="dialog3-container22">
                    <svg viewBox="0 0 1024 1024" class="dialog3-icon14">
                      <path
                        d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                      ></path>
                    </svg>
                    <span>12 สค 66 / โดย: แอม</span>
                  </div>
                  <div class="dialog3-container23">
                    <textarea
                      placeholder="ตอนนี้ติดต่อลูกค้ายังไม่ได้เลยค่ะ"
                      class="dialog3-textarea1 Content OO3_1DialogTextInput textarea"
                    ></textarea>
                    <svg viewBox="0 0 1024 1024" class="dialog3-icon16">
                      <path
                        d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="dialog3-container24">
                <textarea
                  placeholder="คอมเม้น"
                  class="dialog3-textarea2 Content OO3_1DialogTextInput textarea"
                ></textarea>
                <svg viewBox="0 0 1024 1024" class="dialog3-icon18">
                  <path
                    d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
      <app-right1 rootClassName="right1-root-class-name"></app-right1>
    </div>
  </div>
</template>

<script>
import AppRight1 from './right1'

export default {
  name: 'Dialog3',
  props: {
    rootClassName: String,
    text1: {
      type: String,
      default: 'การเพิ่มข้อมูลลูกค้าเข้าระบบ',
    },
    text2: {
      type: String,
      default: 'รีพอร์ทการติดต่อ',
    },
    text: {
      type: String,
      default: 'CF ----- // ------',
    },
  },
  components: {
    AppRight1,
  },
}
</script>

<style scoped>
.dialog3-container {
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
.dialog3-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #4A494B;
}
.dialog3-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog3-navlink {
  display: contents;
}
.dialog3-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog3-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog3-container03 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #F5F6F1;
}
.dialog3-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-color: #C3C5C3;
  border-width: 1px;
  padding-bottom: 5px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 2px;
}
.dialog3-container05 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog3-text1 {
  font-size: 22px;
}
.dialog3-container06 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog3-icon02 {
  width: 24px;
  height: 24px;
}
.dialog3-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog3-form {
  width: 100%;
  height: auto;
  display: flex;
}
.dialog3-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.dialog3-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.dialog3-text2 {
  padding-left: 0.5rem;
}
.dialog3-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog3-text3 {
  padding-left: 0.5rem;
}
.dialog3-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 50px;
  align-items: center;
  margin-bottom: 5px;
  justify-content: flex-start;
}
.dialog3-icon04 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog3-navlink1 {
  text-decoration: none;
}
.dialog3-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 5px;
}
.dialog3-icon06 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog3-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 5px;
}
.dialog3-icon08 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog3-navlink2 {
  text-decoration: none;
}
.dialog3-container14 {
  flex: 0 0 auto;
  width: 35%;
  height: 24px;
  display: flex;
  position: relative;
  align-self: flex-start;
  margin-top: 30px;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 5px;
  background-color: #8B8E90;
}
.dialog3-text5 {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 100%;
  align-self: center;
  padding-left: 1rem;
}
.dialog3-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog3-button {
  color: var(--dl-color-gray-white);
  width: 35%;
  height: 24px;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog3-container16 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 35px;
  align-items: flex-start;
}
.dialog3-container17 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog3-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog3-icon10 {
  fill: #9DA0A2;
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.dialog3-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog3-textarea {
  width: 90%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog3-icon12 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog3-container20 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
}
.dialog3-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog3-container22 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog3-icon14 {
  fill: #9DA0A2;
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.dialog3-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog3-textarea1 {
  width: 90%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog3-icon16 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog3-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  margin-top: 30px;
  align-items: flex-start;
}
.dialog3-textarea2 {
  width: 100%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog3-icon18 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog3-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog3-root-class-name1 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
</style>
