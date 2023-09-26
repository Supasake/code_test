<template>
  <div class="dialog9-container" v-bind:class="rootClassName">
    <div class="dialog9-container01">
      <span class="dialog9-text">{{ text }}</span>
      <nuxt-link to="/cusomer3" class="dialog9-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog9-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog9-container02">
      <form class="dialog9-form">
        <div class="dialog9-container03">
          <div class="dialog9-container04">
            <div class="dialog9-container05">
              <div class="dialog9-container06">
                <img :alt="image_alt4" :src="image_src4" class="dialog9-image" />
              </div>
              <div class="dialog9-container07">
                <div class="dialog9-container08">
                  <span class="dialog9-text01">แอดมิน - ขิม</span>
                </div>
                <div class="dialog9-container09">
                  <span>ออฟฟิสสุวรณภูมิ</span>
                </div>
                <div class="dialog9-container10"><span>089-009-09765</span></div>
              </div>
            </div>
          </div>
          <div class="dialog9-container11">
            <nuxt-link to="/cusomer" class="dialog9-navlink1">
              <svg viewBox="0 0 877.7142857142857 1024" class="dialog9-icon2">
                <path
                  d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="dialog9-container12">
          <div class="dialog9-container13">
            <div class="dialog9-container14">
              <div class="dialog9-container15">
                <span>ลูกค้าทักเข้ามาจากช่องทางไหน</span>
              </div>
              <div class="dialog9-container16">
                <nuxt-link to="/customer2" class="dialog9-navlink2">
                  <svg viewBox="0 0 1024 1024" class="dialog9-icon4">
                    <path d="M598 298v428l-214-214z"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              class="dialog9-textinput input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              class="dialog9-input input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              class="input Content OO3_1DialogTextInput dialog9-textinput1"
            />
            <input
              type="text"
              placeholder="อำเภอ"
              class="input Content OO3_1DialogTextInput dialog9-textinput2"
            />
            <textarea
              placeholder="รายละเอียดอื่นๆ"
              class="dialog9-textarea Content OO3_1DialogTextInput textarea"
            ></textarea>
            <div class="dialog9-container17">
              <div class="dialog9-container18">
                <span class="dialog9-text05">{{ text1 }}</span>
              </div>
              <div class="dialog9-container19">
                <div class="dialog9-container20">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog9-checkbox"
                  />
                  <span class="dialog9-text06">โทรเข้ามาที่โทรศัพท์โดยตรง</span>
                </div>
                <div class="dialog9-container21">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog9-checkbox01"
                  />
                  <span class="dialog9-text07">
                    ทักผ่าน inbox เข้ามาจากเฟสบุ๊คเพจ
                  </span>
                </div>
                <div class="dialog9-container22">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog9-checkbox02"
                  />
                  <span class="dialog9-text08">เห็นมาจาก Google Ads</span>
                </div>
              </div>
            </div>
          </div>
          <div class="dialog9-container23">
            <div class="dialog9-container24">
              <div class="dialog9-container25">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ
                </span>
              </div>
              <div class="dialog9-container26">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการนัดสำรวจเฉยๆเท่านั้น ยังไม้ตัดสินใจอะไร
                </span>
              </div>
            </div>
            <div class="dialog9-container27">
              <div class="dialog9-container28">
                <div class="dialog9-container29">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog9-checkbox05 Content OO3_1DialogText"
                  />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบทาวน์เฮาส์
                  </span>
                </div>
                <div class="dialog9-container30">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบบ้านเดี่ยว
                  </span>
                </div>
                <div class="dialog9-container31">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ลูกค้าเป็นบริษัท</span>
                </div>
                <div class="dialog9-container32">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog9-container33">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog9-container34">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog9-container35">
                <div class="dialog9-container36">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog9-container37">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog9-container38">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog9-container39">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog9-container40">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog9-container41">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog9-container42">
                <svg viewBox="0 0 1024 1024" class="dialog9-icon6">
                  <path
                    d="M342 640l170-170 170 170-60 62-68-68v176h-84v-176l-68 66zM768 854v-470h-214v-214h-298v684h512zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"
                  ></path>
                </svg>
                <span>สลิปโอนเงินมัดจำ 1000 บาท / นัดสำรวจ 500 บาท</span>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="dialog9-button button">{{ button2 }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog9',
  props: {
    image_alt4: {
      type: String,
      default: 'image',
    },
    button2: {
      type: String,
      default: 'บันทึกลูกค้าใหม่เข้าระบบ',
    },
    rootClassName: String,
    image_src4: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08280062-8fe4-4fe5-b33b-899c8276b176/9220e4cd-440e-4dd8-ae9a-2b6dc2add1d8?org_if_sml=17934',
    },
    text1: {
      type: String,
      default: 'ลูกค้าทักเข้ามาจากช่องทางไหน',
    },
    text: {
      type: String,
      default: 'ข้อมูลสมาชิก',
    },
  },
}
</script>

<style scoped>
.dialog9-container {
  width: 650px;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog9-container01 {
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
.dialog9-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog9-navlink {
  display: contents;
}
.dialog9-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog9-container02 {
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
.dialog9-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.dialog9-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dialog9-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog9-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog9-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
  margin-left: 10px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog9-container07 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog9-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog9-text01 {
  font-size: 20px;
}
.dialog9-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog9-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog9-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  flex-direction: column;
}
.dialog9-navlink1 {
  display: contents;
}
.dialog9-icon2 {
  width: 30px;
  height: 30px;
  text-decoration: none;
}
.dialog9-container12 {
  flex: 0 0 auto;
  width: 100%;
  bottom: 0px;
  height: 300px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.dialog9-container13 {
  flex: 0 0 auto;
  width: 40%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog9-container14 {
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
.dialog9-container15 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog9-container16 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog9-navlink2 {
  display: contents;
}
.dialog9-icon4 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.dialog9-textinput {
  border-width: 0px;
  background-color: var(--dl-color-gray-input);
}
.dialog9-input {
  color: var(--dl-color-gray-input);
  border-width: 0px;
}
.dialog9-textarea {
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog9-container17 {
  top: 0px;
  flex: 0 0 auto;
  right: 25px;
  width: 70%;
  height: 40%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.dialog9-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dl-color-gray-title);
}
.dialog9-text05 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
}
.dialog9-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: 75%;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  padding-bottom: 10px;
}
.dialog9-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  justify-content: flex-start;
}
.dialog9-checkbox {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.dialog9-text06 {
  font-size: 14px;
}
.dialog9-container21 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  justify-content: flex-start;
}
.dialog9-checkbox01 {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.dialog9-text07 {
  font-size: 14px;
}
.dialog9-container22 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  justify-content: flex-start;
}
.dialog9-checkbox02 {
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-radius4);
}
.dialog9-text08 {
  font-size: 14px;
}
.dialog9-container23 {
  flex: 0 0 auto;
  width: 55%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.dialog9-container24 {
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
.dialog9-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog9-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container27 {
  width: 100%;
  height: 80%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog9-container28 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog9-container29 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.dialog9-checkbox05 {
  align-self: center;
  margin-left: 0px;
}
.dialog9-container30 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container32 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container33 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container34 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container35 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog9-container36 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container37 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container38 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container39 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container40 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container41 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog9-container42 {
  width: auto;
  bottom: 35%;
  height: auto;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
}
.dialog9-icon6 {
  width: 24px;
  height: 24px;
}
.dialog9-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  position: absolute;
  align-self: flex-end;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog9-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog9-root-class-name1 {
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
  .dialog9-container {
    width: 650px;
    height: 500px;
  }
  .dialog9-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog9-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog9-container12 {
    width: 100%;
    position: absolute;
  }
  .dialog9-container13 {
    width: 40%;
    height: 100%;
  }
  .dialog9-container14 {
    width: 100%;
  }
  .dialog9-container29 {
    width: auto;
    height: auto;
  }
  .dialog9-container30 {
    height: auto;
  }
  .dialog9-container31 {
    height: auto;
  }
  .dialog9-container32 {
    height: auto;
  }
  .dialog9-container33 {
    height: auto;
  }
  .dialog9-container34 {
    height: auto;
  }
  .dialog9-container35 {
    width: auto;
  }
  .dialog9-container36 {
    height: auto;
  }
  .dialog9-container37 {
    height: auto;
  }
  .dialog9-container38 {
    height: auto;
  }
  .dialog9-container39 {
    height: auto;
  }
  .dialog9-container40 {
    height: auto;
  }
  .dialog9-container41 {
    height: auto;
  }
  .dialog9-button {
    color: var(--dl-color-gray-white);
    width: 100%;
    height: 30px;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 1366px) {
  .dialog9-container {
    width: 650px;
    height: 500px;
  }
  .dialog9-container02 {
    position: relative;
  }
  .dialog9-form {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
  }
  .dialog9-image {
    align-self: center;
    margin-left: 10px;
  }
  .dialog9-container10 {
    margin-bottom: 5px;
  }
  .dialog9-icon2 {
    width: 30px;
    height: 30px;
  }
  .dialog9-container12 {
    width: 100%;
    bottom: 0px;
    height: 300px;
    flex-direction: row;
  }
  .dialog9-container13 {
    width: 40%;
    height: 100%;
    margin-right: 10px;
    flex-direction: column;
  }
  .dialog9-container14 {
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
  .dialog9-container15 {
    width: auto;
    height: auto;
  }
  .dialog9-container16 {
    width: auto;
  }
  .dialog9-textinput {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog9-input {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog9-textinput1 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog9-textinput2 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog9-textarea {
    height: auto;
    border-width: 0px;
    border-radius: 0px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog9-container23 {
    width: 55%;
    height: 100%;
    margin-left: 10px;
  }
  .dialog9-container27 {
    width: 100%;
    height: 80%;
    position: relative;
    align-self: flex-end;
    flex-direction: row;
  }
  .dialog9-container28 {
    width: 50%;
    height: 100%;
  }
  .dialog9-container29 {
    width: 100%;
    height: auto;
    align-items: center;
  }
  .dialog9-container30 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container31 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container32 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container33 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container34 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container35 {
    width: 50%;
    height: 100%;
  }
  .dialog9-container36 {
    width: 100%;
    height: auto;
    justify-content: flex-start;
  }
  .dialog9-container37 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog9-container38 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog9-container39 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog9-container40 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog9-container41 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog9-container42 {
    width: auto;
    height: auto;
    position: absolute;
    flex-direction: row;
  }
  .dialog9-button {
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
  .dialog9-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog9-container03 {
    align-self: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog9-form {
    align-items: center;
  }
}
</style>
