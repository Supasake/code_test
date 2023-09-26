<template>
  <div class="dialog1-container" v-bind:class="rootClassName">
    <div class="dialog1-container01">
      <nuxt-link to="/stage-dashboard10" class="dialog1-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog1-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog1-container02">
      <div class="dialog1-container03">
        <div class="dialog1-container04">
          <img :alt="image_alt" :src="image_src" class="dialog1-image" />
        </div>
        <div class="dialog1-container05">
          <form class="dialog1-form">
            <div class="dialog1-container06">
              <div class="dialog1-container07">
                <div class="dialog1-container08">
                  <input
                    type="text"
                    placeholder="เพิ่มเชื่อ"
                    class="dialog1-textinput input Content OO3_1DialogTextInput"
                  />
                </div>
                <div class="dialog1-container09">
                  <input
                    type="date"
                    placeholder="2 กย 2023"
                    class="dialog1-textinput1 input Content OO3_1DialogTextInput"
                  />
                  <span class="dialog1-text">ถึง</span>
                  <input
                    type="date"
                    placeholder="2 กย 2023"
                    class="dialog1-textinput2 input Content OO3_1DialogTextInput"
                  />
                </div>
                <div class="dialog1-container10">
                  <input type="checkbox" class="dialog1-checkbox" />
                  <span class="dialog1-text1">ตลอดวัน</span>
                  <select class="dialog1-select Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="ไม่เกิดช้ำ" selected>ไม่เกิดช้ำ</option>
                    <option value="Option 1">Option 1</option>
                    <option value="เกิดช้ำ">เกิดช้ำ</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div class="dialog1-container11">
                  <span class="dialog1-text2">รายละเอียดกิจกรรม</span>
                </div>
                <div class="dialog1-container12">
                  <input
                    type="text"
                    placeholder="เพิ่มสถานที่"
                    class="input Content OO3_1DialogTextInput"
                  />
                </div>
                <div class="dialog1-container13">
                  <select class="dialog1-select1 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="แจ้งเตือน" selected>แจ้งเตือน</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <input
                    type="text"
                    placeholder="1"
                    class="dialog1-textinput4 input Content OO3_1DialogTextInput"
                  />
                  <select class="dialog1-select2 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="วัน">วัน</option>
                    <option value="Option 1">Option 1</option>
                    <option value="เดือน">เดือน</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="ปี">ปี</option>
                  </select>
                  <span class="dialog1-text3 Content OO3_1DialogText">
                    ล่วงหน้า เวลา
                  </span>
                  <input
                    type="datetime-local"
                    placeholder="placeholder"
                    class="dialog1-textinput5 Content input OO3_1DialogTextInput"
                  />
                </div>
                <div class="dialog1-container14">
                  <select class="dialog1-select3 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="อีเมล์" selected>อีเมล์</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <input
                    type="text"
                    placeholder="1"
                    class="dialog1-textinput6 input Content OO3_1DialogTextInput"
                  />
                  <select class="dialog1-select4 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="วัน" selected>วัน</option>
                    <option value="Option 1">Option 1</option>
                    <option value="เดือน">เดือน</option>
                    <option value="Option 2">Option 2</option>
                    <option value="ปี">ปี</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <span class="Content OO3_1DialogText">ล่วงหน้า เวลา</span>
                  <input
                    type="datetime-local"
                    placeholder
                    class="dialog1-textinput7 input Content OO3_1DialogTextInput"
                  />
                </div>
                <div class="dialog1-container15">
                  <span>เพิ่มการแจ้งเตือน</span>
                </div>
                <div class="dialog1-container16">
                  <select class="dialog1-select5 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="นัดหมายส่วนตัว">นัดหมายส่วนตัว</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                  <select class="dialog1-select6 Content OO3_1DialogTextInput">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 1" selected>Option 1</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
                <div class="dialog1-container17">
                  <svg viewBox="0 0 1024 1024" class="dialog1-icon02">
                    <path
                      d="M810 512v128h128v86h-128v128h-84v-128h-128v-86h128v-128h84zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93zM858 512q0-54-39-93t-93-39h-172v-82h172q88 0 150 63t62 151h-80zM342 470h340v84h-340v-84z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon04">
                    <path
                      d="M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon06">
                    <path
                      d="M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon08">
                    <path
                      d="M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon10">
                    <path
                      d="M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon12">
                    <path
                      d="M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon14">
                    <path
                      d="M256 214h598v128h-248l-68 160-90-88 30-72h-102l-120-120v-8zM140 214l12 10 616 618-54 54-242-242-66 156h-128l104-246-296-296z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon16">
                    <path
                      d="M342 726h512v84h-512v128l-172-170 172-170v128zM426 426q-70 0-120-50t-50-120 50-120 120-50h342v84h-86v470h-84v-470h-86v470h-86v-214z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog1-icon18">
                    <path
                      d="M896 768l-170 170v-128h-512v-84h512v-128zM384 426q-70 0-120-50t-50-120 50-120 120-50h342v84h-86v470h-86v-470h-84v470h-86v-214z"
                    ></path>
                  </svg>
                </div>
                <div class="dialog1-container18">
                  <textarea
                    class="dialog1-textarea Content OO3_1DialogTextInput textarea"
                  ></textarea>
                </div>
              </div>
              <nuxt-link to="/stage-dashboard2" class="dialog1-navlink1">
                <div class="dialog1-container19">
                  <button type="button" class="dialog1-button button">
                    บันทึกการนัดหมายเข้าระบบ
                  </button>
                </div>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog1',
  props: {
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-20%20at%2011.57.07-1100w.png',
    },
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.dialog1-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.dialog1-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  justify-content: flex-end;
  background-color: #2D8DC0;
}
.dialog1-navlink {
  display: contents;
}
.dialog1-icon {
  fill: var(--dl-color-gray-white);
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.dialog1-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 94%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
}
.dialog1-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog1-container04 {
  flex: 0 0 auto;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog1-image {
  width: 100%;
  object-fit: cover;
}
.dialog1-container05 {
  flex: 0 0 auto;
  width: 30%;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
  background-color: #f5f6f1;
}
.dialog1-form {
  width: 100%;
  height: 100%;
  display: flex;
}
.dialog1-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.dialog1-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog1-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog1-textinput {
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
}
.dialog1-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog1-textinput1 {
  width: 120px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-text {
  margin-left: 10px;
  margin-right: 10px;
}
.dialog1-textinput2 {
  width: 120px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog1-checkbox {
  margin-left: 10px;
}
.dialog1-text1 {
  margin-left: 10px;
  margin-right: 10px;
}
.dialog1-select {
  width: 31%;
  margin-top: 0px;
  margin-left: 66px;
  margin-bottom: 0px;
}
.dialog1-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog1-text2 {
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog1-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog1-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog1-select1 {
  width: 20%;
}
.dialog1-textinput4 {
  width: 10%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-select2 {
  width: 10%;
}
.dialog1-text3 {
  width: auto;
}
.dialog1-textinput5 {
  width: 30%;
  margin-left: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog1-select3 {
  width: 20%;
}
.dialog1-textinput6 {
  width: 10%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-select4 {
  width: 10%;
}
.dialog1-textinput7 {
  width: 30%;
  margin-left: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog1-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}
.dialog1-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog1-select5 {
  width: 30%;
}
.dialog1-select6 {
  width: 20%;
  margin-left: 10px;
}
.dialog1-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding-left: 5px;
}
.dialog1-icon02 {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog1-icon04 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon06 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon08 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon10 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon12 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon14 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon16 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog1-icon18 {
  width: 16px;
  height: 16px;
}
.dialog1-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}
.dialog1-textarea {
  height: 100%;
}
.dialog1-navlink1 {
  display: contents;
}
.dialog1-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-decoration: none;
}
.dialog1-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  border-width: 0px;
  background-color: #2c8cbf;
}
.dialog1-root-class-name {
  top: 8%;
  left: 0px;
  right: 4%;
  width: 90%;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
@media(max-width: 1600px) {
  .dialog1-form {
    align-items: stretch;
  }
  .dialog1-container06 {
    height: auto;
  }
  .dialog1-container07 {
    height: 100%;
  }
  .dialog1-container19 {
    height: auto;
  }
}
@media(max-width: 1366px) {
  .dialog1-container {
    background-color: var(--dl-color-gray-white);
  }
  .dialog1-container05 {
    height: 100%;
    background-color: #f5f6f1;
  }
  .dialog1-form {
    height: 100%;
  }
}
</style>
