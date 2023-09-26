<template>
  <div class="dialog26-container" v-bind:class="rootClassName">
    <div class="dialog26-container01">
      <span class="dialog26-text">{{ text }}</span>
      <nuxt-link to="/cusomer3" class="dialog26-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog26-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog26-container02">
      <form class="dialog26-form">
        <div class="dialog26-container03">
          <div class="dialog26-container04">
            <div class="dialog26-container05">
              <div class="dialog26-container06">
                <img :alt="image_alt4" :src="image_src4" class="dialog26-image" />
              </div>
              <div class="dialog26-container07">
                <div class="dialog26-container08">
                  <span class="dialog26-text01">แอดมิน - ขิม</span>
                </div>
                <div class="dialog26-container09">
                  <span>ออฟฟิสสุวรณภูมิ</span>
                </div>
                <div class="dialog26-container10"><span>089-009-09765</span></div>
              </div>
            </div>
          </div>
          <div class="dialog26-container11">
            <nuxt-link to="/cusomer" class="dialog26-navlink1">
              <svg viewBox="0 0 877.7142857142857 1024" class="dialog26-icon2">
                <path
                  d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="dialog26-container12">
          <div class="dialog26-container13">
            <div class="dialog26-container14">
              <div class="dialog26-container15">
                <span>ลูกค้าทักเข้ามาจากช่องทางไหน</span>
              </div>
              <div class="dialog26-container16">
                <nuxt-link to="/customer1" class="dialog26-navlink2">
                  <svg viewBox="0 0 1024 1024" class="dialog26-icon4">
                    <path d="M598 298v428l-214-214z"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              class="dialog26-textinput input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              class="dialog26-input input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              class="input Content OO3_1DialogTextInput dialog26-textinput1"
            />
            <input
              type="text"
              placeholder="อำเภอ"
              class="input Content OO3_1DialogTextInput dialog26-textinput2"
            />
            <textarea
              placeholder="รายละเอียดอื่นๆ"
              class="dialog26-textarea Content OO3_1DialogTextInput textarea"
            ></textarea>
          </div>
          <div class="dialog26-container17">
            <div class="dialog26-container18">
              <div class="dialog26-container19">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ
                </span>
              </div>
              <div class="dialog26-container20">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการนัดสำรวจเฉยๆเท่านั้น ยังไม้ตัดสินใจอะไร
                </span>
              </div>
            </div>
            <div class="dialog26-container21">
              <div class="dialog26-container22">
                <div class="dialog26-container23">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog26-checkbox02 Content OO3_1DialogText"
                  />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบทาวน์เฮาส์
                  </span>
                </div>
                <div class="dialog26-container24">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบบ้านเดี่ยว
                  </span>
                </div>
                <div class="dialog26-container25">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ลูกค้าเป็นบริษัท</span>
                </div>
                <div class="dialog26-container26">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog26-container27">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog26-container28">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog26-container29">
                <div class="dialog26-container30">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog26-container31">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog26-container32">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog26-container33">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog26-container34">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog26-container35">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog26-container36">
                <svg viewBox="0 0 1024 1024" class="dialog26-icon6">
                  <path
                    d="M342 640l170-170 170 170-60 62-68-68v176h-84v-176l-68 66zM768 854v-470h-214v-214h-298v684h512zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"
                  ></path>
                </svg>
                <span class="dialog26-text19">
                  สลิปโอนเงินมัดจำ 1000 บาท / นัดสำรวจ 500 บาท
                </span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="dialog26-button button">
          {{ button2 }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog26',
  props: {
    image_alt4: {
      type: String,
      default: 'image',
    },
    button2: {
      type: String,
      default: 'เพิ่มข้อมูลเข้าระบบ',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'การเพิ่มข้อมูลลูกค้าเข้าระบบ',
    },
    text1: {
      type: String,
      default: 'ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ',
    },
    image_src4: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08280062-8fe4-4fe5-b33b-899c8276b176/9220e4cd-440e-4dd8-ae9a-2b6dc2add1d8?org_if_sml=17934',
    },
    text2: {
      type: String,
      default: 'ต้องการนัดสำรวจเฉยๆเท่านั้น ยังไม้ตัดสินใจอะไร',
    },
  },
}
</script>

<style scoped>
.dialog26-container {
  width: 650px;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog26-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 50px;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-start;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-style: dashed;
  border-width: 0px;
  justify-content: center;
  background-color: var(--dl-color-gray-title);
}
.dialog26-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog26-navlink {
  display: contents;
}
.dialog26-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog26-container02 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px;
  position: relative;
  margin-top: 50px;
  align-items: flex-start;
  border-color: var(--dl-color-gray-title);
  border-style: solid;
  border-width: 2px;
  justify-content: center;
  background-color: #f3f5ef;
}
.dialog26-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.dialog26-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dialog26-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog26-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog26-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
  margin-left: 10px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog26-container07 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog26-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog26-text01 {
  font-size: 20px;
}
.dialog26-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog26-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog26-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  flex-direction: column;
}
.dialog26-navlink1 {
  display: contents;
}
.dialog26-icon2 {
  width: 30px;
  height: 30px;
  text-decoration: none;
}
.dialog26-container12 {
  flex: 0 0 auto;
  width: 100%;
  bottom: 0px;
  height: 300px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.dialog26-container13 {
  flex: 0 0 auto;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog26-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 2px;
}
.dialog26-container15 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog26-container16 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog26-navlink2 {
  display: contents;
}
.dialog26-icon4 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.dialog26-textinput {
  border-width: 0px;
  background-color: var(--dl-color-gray-input);
}
.dialog26-input {
  color: var(--dl-color-gray-input);
  border-width: 0px;
}
.dialog26-textarea {
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog26-container17 {
  flex: 0 0 auto;
  width: 55%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.dialog26-container18 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-bottom: 10px;
  flex-direction: column;
  padding-bottom: 5px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog26-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog26-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container21 {
  width: 100%;
  height: 80%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog26-container22 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog26-container23 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.dialog26-checkbox02 {
  align-self: center;
  margin-left: 0px;
}
.dialog26-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container27 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container28 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container29 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog26-container30 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container32 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container33 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container34 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container35 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog26-container36 {
  width: auto;
  bottom: 35%;
  height: auto;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-start;
}
.dialog26-icon6 {
  width: 24px;
  height: 24px;
}
.dialog26-text19 {
  text-decoration: none;
}
.dialog26-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  position: absolute;
  align-self: flex-end;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog26-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog26-root-class-name1 {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  margin-top: 130px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
@media(max-width: 1600px) {
  .dialog26-container {
    width: 650px;
    height: 500px;
  }
  .dialog26-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog26-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog26-container12 {
    width: 100%;
    position: absolute;
  }
  .dialog26-container13 {
    width: 40%;
    height: 100%;
  }
  .dialog26-container14 {
    width: 100%;
  }
  .dialog26-textarea {
    height: auto;
  }
  .dialog26-container23 {
    width: auto;
    height: auto;
  }
  .dialog26-container24 {
    height: auto;
  }
  .dialog26-container25 {
    height: auto;
  }
  .dialog26-container26 {
    height: auto;
  }
  .dialog26-container27 {
    height: auto;
  }
  .dialog26-container28 {
    height: auto;
  }
  .dialog26-container29 {
    width: auto;
  }
  .dialog26-container30 {
    height: auto;
  }
  .dialog26-container31 {
    height: auto;
  }
  .dialog26-container32 {
    height: auto;
  }
  .dialog26-container33 {
    height: auto;
  }
  .dialog26-container34 {
    height: auto;
  }
  .dialog26-container35 {
    height: auto;
  }
  .dialog26-button {
    color: var(--dl-color-gray-white);
    width: 100%;
    height: 30px;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 1366px) {
  .dialog26-container {
    width: 650px;
    height: 500px;
  }
  .dialog26-container02 {
    position: relative;
  }
  .dialog26-form {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
  }
  .dialog26-image {
    align-self: center;
    margin-left: 10px;
  }
  .dialog26-container10 {
    margin-bottom: 5px;
  }
  .dialog26-icon2 {
    width: 30px;
    height: 30px;
  }
  .dialog26-container12 {
    width: 100%;
    bottom: 0px;
    height: 300px;
    flex-direction: row;
  }
  .dialog26-container13 {
    width: 40%;
    height: 100%;
    margin-right: 10px;
    flex-direction: column;
  }
  .dialog26-container14 {
    width: 100%;
    height: auto;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: space-between;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 2px;
  }
  .dialog26-container15 {
    width: auto;
    height: auto;
  }
  .dialog26-container16 {
    width: auto;
  }
  .dialog26-textinput {
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog26-input {
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog26-textinput1 {
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog26-textinput2 {
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog26-textarea {
    height: auto;
    border-width: 0px;
    border-radius: 0px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog26-container17 {
    width: 55%;
    height: 100%;
    margin-left: 10px;
  }
  .dialog26-container21 {
    width: 100%;
    height: 80%;
    position: relative;
    align-self: flex-end;
    flex-direction: row;
  }
  .dialog26-container22 {
    width: 50%;
    height: 100%;
  }
  .dialog26-container23 {
    width: 100%;
    height: auto;
    align-items: center;
  }
  .dialog26-container24 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container25 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container26 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container27 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container28 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container29 {
    width: 50%;
    height: 100%;
  }
  .dialog26-container30 {
    width: 100%;
    height: auto;
    justify-content: flex-start;
  }
  .dialog26-container31 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog26-container32 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog26-container33 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog26-container34 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog26-container35 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog26-container36 {
    width: auto;
    height: auto;
    position: absolute;
    flex-direction: row;
  }
  .dialog26-button {
    left: 0px;
    color: var(--dl-color-gray-white);
    right: 0px;
    width: 100%;
    margin: auto;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 991px) {
  .dialog26-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog26-container03 {
    align-self: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog26-form {
    align-items: center;
  }
  .dialog26-image {
    margin-left: 10px;
  }
}
</style>
