<template>
  <div class="dialog10-container" v-bind:class="rootClassName">
    <div class="dialog10-container01">
      <span class="dialog10-text">{{ text1 }}</span>
      <nuxt-link to="/stage-dashboard10" class="dialog10-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog10-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog10-container02">
      <div class="dialog10-container03">
        <div class="dialog10-container04">
          <div class="dialog10-container05">
            <span class="dialog10-text1">{{ text2 }}</span>
          </div>
          <div class="dialog10-container06">
            <svg viewBox="0 0 1024 1024" class="dialog10-icon02">
              <path
                d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="dialog10-container07">
          <form class="dialog10-form">
            <div class="dialog10-container08">
              <div class="dialog10-container09">
                <span class="dialog10-text2">
                  09 กก 66 โทรติดต่อไปครั้งที่ 1 แล้ว
                  แต่ลูกค้าไม่สะดวกที่จะคุยแล้ว
                </span>
              </div>
              <div class="dialog10-container10">
                <span class="dialog10-text3">
                  12 กก 66 โทรติดต่อไปครั้งที่ 2 ลูกค้าสนใจจะนัดวันที่
                </span>
              </div>
              <div class="dialog10-container11">
                <input
                  type="text"
                  placeholder="21 กย 66 :........."
                  class="dialog10-textinput input Content OO3_1DialogTextInput"
                />
              </div>
              <div class="dialog10-container12">
                <svg viewBox="0 0 1024 1024" class="dialog10-icon04">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <span>เพิ่มรีพอร์ทการเข้าพบ</span>
              </div>
              <div class="dialog10-container13">
                <svg viewBox="0 0 1024 1024" class="dialog10-icon06">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <span>เพิ่มไฟล์แนบ</span>
              </div>
              <div class="dialog10-container14">
                <svg viewBox="0 0 1024 1024" class="dialog10-icon08">
                  <path
                    d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                  ></path>
                </svg>
                <nuxt-link to="/stage-dashboard5" class="dialog10-navlink1">
                  เพิ่มคิวเข้าไปนัดสำรวจ
                </nuxt-link>
              </div>
              <div class="dialog10-container15">
                <span class="dialog10-text6">{{ text }}</span>
              </div>
              <div class="dialog10-container16">
                <button type="button" class="dialog10-button button">
                  อนุมัติเพื่อนัดหมาย
                </button>
              </div>
              <div class="dialog10-container17">
                <div class="dialog10-container18">
                  <div class="dialog10-container19">
                    <svg viewBox="0 0 1024 1024" class="dialog10-icon10">
                      <path
                        d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                      ></path>
                    </svg>
                    <span>12 สค 66 / โดย: แอม</span>
                  </div>
                  <div class="dialog10-container20">
                    <textarea
                      placeholder="ตอนนี้ติดต่อลูกค้ายังไม่ได้เลยค่ะ"
                      class="dialog10-textarea Content OO3_1DialogTextInput textarea"
                    ></textarea>
                    <svg viewBox="0 0 1024 1024" class="dialog10-icon12">
                      <path
                        d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="dialog10-container21">
                <div class="dialog10-container22">
                  <div class="dialog10-container23">
                    <svg viewBox="0 0 1024 1024" class="dialog10-icon14">
                      <path
                        d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                      ></path>
                    </svg>
                    <span>12 สค 66 / โดย: แอม</span>
                  </div>
                  <div class="dialog10-container24">
                    <textarea
                      placeholder="ตอนนี้ติดต่อลูกค้ายังไม่ได้เลยค่ะ"
                      class="dialog10-textarea1 Content OO3_1DialogTextInput textarea"
                    ></textarea>
                    <svg viewBox="0 0 1024 1024" class="dialog10-icon16">
                      <path
                        d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="dialog10-container25">
                <textarea
                  placeholder="คอมเม้น"
                  class="dialog10-textarea2 Content OO3_1DialogTextInput textarea"
                ></textarea>
                <svg viewBox="0 0 1024 1024" class="dialog10-icon18">
                  <path
                    d="M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
      <app-right1 rootClassName="right1-root-class-name1"></app-right1>
    </div>
  </div>
</template>

<script>
import AppRight1 from './right1'

export default {
  name: 'Dialog10',
  props: {
    text1: {
      type: String,
      default: 'การเพิ่มข้อมูลลูกค้าเข้าระบบ',
    },
    text2: {
      type: String,
      default: 'รีพอร์ทการติดต่อ',
    },
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    rootClassName: String,
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
.dialog10-container {
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
.dialog10-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #4A494B;
}
.dialog10-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog10-navlink {
  display: contents;
}
.dialog10-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog10-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog10-container03 {
  flex: 0 0 auto;
  width: 65%;
  height: auto;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #F5F6F1;
}
.dialog10-container04 {
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
.dialog10-container05 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog10-text1 {
  font-size: 22px;
}
.dialog10-container06 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog10-icon02 {
  width: 24px;
  height: 24px;
}
.dialog10-container07 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog10-form {
  width: 100%;
  height: auto;
  display: flex;
}
.dialog10-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.dialog10-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
}
.dialog10-text2 {
  padding-left: 0.5rem;
}
.dialog10-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog10-text3 {
  padding-left: 0.5rem;
}
.dialog10-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog10-textinput {
  font-size: 18px;
  padding-left: 0.5rem;
  background-color: #d6d8d9;
}
.dialog10-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 5px;
  justify-content: flex-start;
}
.dialog10-icon04 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog10-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 5px;
}
.dialog10-icon06 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog10-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  margin-bottom: 5px;
}
.dialog10-icon08 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog10-navlink1 {
  text-decoration: none;
}
.dialog10-container15 {
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
.dialog10-text6 {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 100%;
  align-self: center;
  padding-left: 1rem;
}
.dialog10-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog10-button {
  color: var(--dl-color-gray-white);
  width: 35%;
  height: 24px;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog10-container17 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 35px;
  align-items: flex-start;
}
.dialog10-container18 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog10-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog10-icon10 {
  fill: #9DA0A2;
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.dialog10-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog10-textarea {
  width: 90%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog10-icon12 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog10-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
}
.dialog10-container22 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog10-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog10-icon14 {
  fill: #9DA0A2;
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.dialog10-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: flex-end;
}
.dialog10-textarea1 {
  width: 90%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog10-icon16 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog10-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  margin-top: 30px;
  align-items: flex-start;
}
.dialog10-textarea2 {
  width: 100%;
  height: auto;
  background-color: #D6D8D9;
}
.dialog10-icon18 {
  right: 15px;
  width: 20px;
  bottom: 10px;
  height: 20px;
  position: absolute;
}
.dialog10-root-class-name {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog10-root-class-name1 {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 750px;
  margin: auto;
  position: absolute;
}
</style>
