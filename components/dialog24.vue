<template>
  <div class="dialog24-container">
    <div class="dialog24-container01">
      <form class="dialog24-form">
        <div class="dialog24-container02">
          <div class="dialog24-container03">
            <input
              type="text"
              :placeholder="textinput_placeholder2"
              class="dialog24-textinput input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="dialog24-container04">
            <input
              type="date"
              :placeholder="textinput_placeholder"
              class="dialog24-textinput1 input Content OO3_1DialogTextInput"
            />
            <span class="dialog24-text">{{ text }}</span>
            <input
              type="date"
              :placeholder="textinput_placeholder1"
              class="dialog24-textinput2 input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="dialog24-container05">
            <input type="checkbox" class="dialog24-checkbox" />
            <span class="dialog24-text1">{{ text1 }}</span>
            <select class="dialog24-select Content OO3_1DialogTextInput">
              <option value="ไม่เกิดช้ำ" selected>ไม่เกิดช้ำ</option>
              <option value="เกิดช้ำ">เกิดช้ำ</option>
            </select>
          </div>
          <div class="dialog24-container06">
            <span class="dialog24-text2">{{ text2 }}</span>
          </div>
          <div class="dialog24-container07">
            <input
              type="text"
              :placeholder="textinput_placeholder4"
              class="input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="dialog24-container08">
            <select class="dialog24-select1 Content OO3_1DialogTextInput">
              <option value="แจ้งเตือน" selected>แจ้งเตือน</option>
              <option value="Option 2">Option 2</option>
            </select>
            <input
              type="text"
              :placeholder="textinput_placeholder5"
              class="dialog24-textinput4 input Content OO3_1DialogTextInput"
            />
            <select class="dialog24-select2 Content OO3_1DialogTextInput">
              <option value="วัน">วัน</option>
              <option value="เดือน">เดือน</option>
              <option value="ปี">ปี</option>
            </select>
            <span class="Content OO3_1DialogText">{{ text3 }}</span>
            <input
              type="datetime-local"
              :placeholder="textinput_placeholder3"
              class="dialog24-textinput5 input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="dialog24-container09">
            <select class="dialog24-select3 Content OO3_1DialogTextInput">
              <option value="อีเมล์" selected>อีเมล์</option>
              <option value="Option 2">Option 2</option>
            </select>
            <input
              type="text"
              :placeholder="textinput_placeholder51"
              class="dialog24-textinput6 input Content OO3_1DialogTextInput"
            />
            <select class="dialog24-select4 Content OO3_1DialogTextInput">
              <option value="วัน" selected>วัน</option>
              <option value="เดือน">เดือน</option>
              <option value="ปี">ปี</option>
            </select>
            <span class="Content OO3_1DialogText">{{ text31 }}</span>
            <input
              type="datetime-local"
              :placeholder="textinput_placeholder31"
              class="dialog24-textinput7 input Content OO3_1DialogTextInput"
            />
          </div>
          <div class="dialog24-container10"><span>{{ text4 }}</span></div>
          <div class="dialog24-container11">
            <select class="dialog24-select5 Content OO3_1DialogTextInput">
              <option value="นัดหมายส่วนตัว">นัดหมายส่วนตัว</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <select class="dialog24-select6 Content OO3_1DialogTextInput">
              <option value="Option 1" selected>Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>
          <div class="dialog24-container12">
            <svg viewBox="0 0 1024 1024" class="dialog24-icon">
              <path
                d="M810 512v128h128v86h-128v128h-84v-128h-128v-86h128v-128h84zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93zM858 512q0-54-39-93t-93-39h-172v-82h172q88 0 150 63t62 151h-80zM342 470h340v84h-340v-84z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon02">
              <path
                d="M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon04">
              <path
                d="M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon06">
              <path
                d="M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon08">
              <path
                d="M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon10">
              <path
                d="M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon12">
              <path
                d="M256 214h598v128h-248l-68 160-90-88 30-72h-102l-120-120v-8zM140 214l12 10 616 618-54 54-242-242-66 156h-128l104-246-296-296z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon14">
              <path
                d="M342 726h512v84h-512v128l-172-170 172-170v128zM426 426q-70 0-120-50t-50-120 50-120 120-50h342v84h-86v470h-84v-470h-86v470h-86v-214z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="dialog24-icon16">
              <path
                d="M896 768l-170 170v-128h-512v-84h512v-128zM384 426q-70 0-120-50t-50-120 50-120 120-50h342v84h-86v470h-86v-470h-84v470h-86v-214z"
              ></path>
            </svg>
          </div>
          <div class="dialog24-container13">
            <textarea
              class="dialog24-textarea Content OO3_1DialogTextInput textarea"
            ></textarea>
          </div>
          <button type="button" class="dialog24-button button">
            {{ button }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog24',
  props: {
    textinput_placeholder3: {
      type: String,
      default: 'placeholder',
    },
    text: {
      type: String,
      default: 'ถึง',
    },
    text4: {
      type: String,
      default: 'เพิ่มการแจ้งเตือน',
    },
    text2: {
      type: String,
      default: 'รายละเอียดกิจกรรม',
    },
    textinput_placeholder4: {
      type: String,
      default: 'เพิ่มสถานที่',
    },
    textinput_placeholder31: String,
    textinput_placeholder1: {
      type: String,
      default: '2 กย 2023',
    },
    textinput_placeholder5: {
      type: String,
      default: '1',
    },
    textinput_placeholder2: {
      type: String,
      default: 'เพิ่มเชื่อ',
    },
    text1: {
      type: String,
      default: 'ตลอดวัน',
    },
    text31: {
      type: String,
      default: 'ล่วงหน้า เวลา',
    },
    button: {
      type: String,
      default: 'บันทึกการนัดหมายเข้าระบบ',
    },
    textinput_placeholder: {
      type: String,
      default: '2 กย 2023',
    },
    textinput_placeholder51: {
      type: String,
      default: '1',
    },
    text3: {
      type: String,
      default: 'ล่วงหน้า เวลา',
    },
  },
}
</script>

<style scoped>
.dialog24-container {
  width: 400px;
  height: 550px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-color: #F5F6F1;
}
.dialog24-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.dialog24-form {
  width: 100%;
  height: 100%;
  display: flex;
}
.dialog24-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog24-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog24-textinput {
  width: 100%;
}
.dialog24-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog24-textinput1 {
  width: 120px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-text {
  margin-left: 10px;
  margin-right: 10px;
}
.dialog24-textinput2 {
  width: 120px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog24-checkbox {
  margin-left: 10px;
}
.dialog24-text1 {
  margin-left: 10px;
  margin-right: 10px;
}
.dialog24-select {
  width: 32%;
  margin-top: 0px;
  margin-left: 66px;
  margin-bottom: 0px;
}
.dialog24-container06 {
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
.dialog24-text2 {
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog24-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog24-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog24-select1 {
  width: 20%;
}
.dialog24-textinput4 {
  width: 10%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-select2 {
  width: 13%;
}
.dialog24-textinput5 {
  width: 30%;
  margin-left: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.dialog24-select3 {
  width: 20%;
}
.dialog24-textinput6 {
  width: 10%;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-select4 {
  width: 13%;
}
.dialog24-textinput7 {
  width: 30%;
  margin-left: 10px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.dialog24-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}
.dialog24-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog24-select5 {
  width: 30%;
}
.dialog24-select6 {
  width: 20%;
  margin-left: 10px;
}
.dialog24-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding-left: 5px;
}
.dialog24-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.dialog24-icon02 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon04 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon06 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon08 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon10 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon12 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon14 {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.dialog24-icon16 {
  width: 16px;
  height: 16px;
}
.dialog24-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.dialog24-textarea {
  width: 100%;
  height: 100%;
}
.dialog24-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  margin-top: 30px;
  border-width: 0px;
  background-color: #2c8cbf;
}
</style>
