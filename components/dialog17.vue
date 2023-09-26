<template>
  <div class="dialog17-container" v-bind:class="rootClassName">
    <div class="dialog17-container01">
      <span class="dialog17-text">{{ text }}</span>
      <nuxt-link to="/cusomer3" class="dialog17-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog17-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog17-container02">
      <form class="dialog17-form">
        <div class="dialog17-container03">
          <div class="dialog17-container04">
            <div class="dialog17-container05">
              <div class="dialog17-container06">
                <img :alt="image_alt4" :src="image_src4" class="dialog17-image" />
              </div>
              <div class="dialog17-container07">
                <div class="dialog17-container08">
                  <span class="dialog17-text01">แอดมิน - ขิม</span>
                </div>
                <div class="dialog17-container09">
                  <span>ออฟฟิสสุวรณภูมิ</span>
                </div>
                <div class="dialog17-container10"><span>089-009-09765</span></div>
              </div>
            </div>
          </div>
          <div class="dialog17-container11">
            <nuxt-link to="/cusomer" class="dialog17-navlink1">
              <svg viewBox="0 0 877.7142857142857 1024" class="dialog17-icon02">
                <path
                  d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="dialog17-container12">
          <div class="dialog17-container13">
            <div class="dialog17-container14">
              <div class="dialog17-container15">
                <span>ลูกค้าทักเข้ามาจากช่องทางไหน</span>
              </div>
              <div class="dialog17-container16">
                <nuxt-link to="/customer1" class="dialog17-navlink2">
                  <svg viewBox="0 0 1024 1024" class="dialog17-icon04">
                    <path d="M598 298v428l-214-214z"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              class="dialog17-textinput input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              class="dialog17-input input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              class="input Content OO3_1DialogTextInput dialog17-textinput1"
            />
            <input
              type="text"
              placeholder="อำเภอ"
              class="input Content OO3_1DialogTextInput dialog17-textinput2"
            />
            <textarea
              placeholder="รายละเอียดอื่นๆ"
              class="dialog17-textarea Content OO3_1DialogTextInput textarea"
            ></textarea>
          </div>
          <div class="dialog17-container17">
            <div class="dialog17-container18">
              <div class="dialog17-container19">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ
                </span>
              </div>
              <div class="dialog17-container20">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการนัดสำรวจเฉยๆเท่านั้น ยังไม้ตัดสินใจอะไร
                </span>
              </div>
            </div>
            <div class="dialog17-container21">
              <div class="dialog17-container22">
                <div class="dialog17-container23">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog17-checkbox02 Content OO3_1DialogText"
                  />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบทาวน์เฮาส์
                  </span>
                </div>
                <div class="dialog17-container24">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบบ้านเดี่ยว
                  </span>
                </div>
                <div class="dialog17-container25">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ลูกค้าเป็นบริษัท</span>
                </div>
                <div class="dialog17-container26">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog17-container27">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog17-container28">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog17-container29">
                <div class="dialog17-container30">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog17-container31">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog17-container32">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog17-container33">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog17-container34">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog17-container35">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog17-container36">
                <div class="dialog17-container37">
                  <img
                    :alt="image_alt"
                    :src="image_src"
                    class="dialog17-image1"
                  />
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="dialog17-icon06"
                  >
                    <path
                      d="M656.571 641.143c0-9.714-4-18.857-10.857-25.714l-103.429-103.429 103.429-103.429c6.857-6.857 10.857-16 10.857-25.714s-4-19.429-10.857-26.286l-51.429-51.429c-6.857-6.857-16.571-10.857-26.286-10.857s-18.857 4-25.714 10.857l-103.429 103.429-103.429-103.429c-6.857-6.857-16-10.857-25.714-10.857s-19.429 4-26.286 10.857l-51.429 51.429c-6.857 6.857-10.857 16.571-10.857 26.286s4 18.857 10.857 25.714l103.429 103.429-103.429 103.429c-6.857 6.857-10.857 16-10.857 25.714s4 19.429 10.857 26.286l51.429 51.429c6.857 6.857 16.571 10.857 26.286 10.857s18.857-4 25.714-10.857l103.429-103.429 103.429 103.429c6.857 6.857 16 10.857 25.714 10.857s19.429-4 26.286-10.857l51.429-51.429c6.857-6.857 10.857-16.571 10.857-26.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog17-icon08">
                    <path
                      d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="dialog17-button button">
          {{ button2 }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog17',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-19%20at%2011.58.29-200w.png',
    },
    button2: {
      type: String,
      default: 'บันทึกการแก้ไขข้อมูล',
    },
    image_src4: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08280062-8fe4-4fe5-b33b-899c8276b176/9220e4cd-440e-4dd8-ae9a-2b6dc2add1d8?org_if_sml=17934',
    },
    rootClassName: String,
    image_alt4: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'การเพิ่มข้อมูลลูกค้าเข้าระบบ',
    },
  },
}
</script>

<style scoped>
.dialog17-container {
  width: 650px;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog17-container01 {
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
.dialog17-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog17-navlink {
  display: contents;
}
.dialog17-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog17-container02 {
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
.dialog17-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.dialog17-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dialog17-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog17-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog17-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
  margin-left: 10px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog17-container07 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog17-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog17-text01 {
  font-size: 20px;
}
.dialog17-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog17-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog17-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  flex-direction: column;
}
.dialog17-navlink1 {
  display: contents;
}
.dialog17-icon02 {
  width: 30px;
  height: 30px;
  text-decoration: none;
}
.dialog17-container12 {
  flex: 0 0 auto;
  width: 100%;
  bottom: 0px;
  height: 300px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.dialog17-container13 {
  flex: 0 0 auto;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog17-container14 {
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
.dialog17-container15 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog17-container16 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog17-navlink2 {
  display: contents;
}
.dialog17-icon04 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.dialog17-textinput {
  border-width: 0px;
  background-color: var(--dl-color-gray-input);
}
.dialog17-input {
  color: var(--dl-color-gray-input);
  border-width: 0px;
}
.dialog17-textarea {
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog17-container17 {
  flex: 0 0 auto;
  width: 55%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.dialog17-container18 {
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
.dialog17-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog17-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container21 {
  width: 100%;
  height: 80%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog17-container22 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog17-container23 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.dialog17-checkbox02 {
  align-self: center;
  margin-left: 0px;
}
.dialog17-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container27 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container28 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container29 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog17-container30 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container32 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container33 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container34 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container35 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog17-container36 {
  width: 100%;
  bottom: 33%;
  height: auto;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: center;
  justify-content: flex-start;
}
.dialog17-container37 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.dialog17-image1 {
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
}
.dialog17-icon06 {
  top: -5px;
  fill: var(--dl-color-danger-500);
  left: 35px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.dialog17-icon08 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
}
.dialog17-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  position: absolute;
  align-self: flex-end;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog17-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog17-root-class-name1 {
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
  .dialog17-container {
    width: 650px;
    height: 500px;
  }
  .dialog17-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog17-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog17-container12 {
    width: 100%;
    position: absolute;
  }
  .dialog17-container13 {
    width: 40%;
    height: 100%;
  }
  .dialog17-container14 {
    width: 100%;
  }
  .dialog17-container23 {
    width: auto;
    height: auto;
  }
  .dialog17-container24 {
    height: auto;
  }
  .dialog17-container25 {
    height: auto;
  }
  .dialog17-container26 {
    height: auto;
  }
  .dialog17-container27 {
    height: auto;
  }
  .dialog17-container28 {
    height: auto;
  }
  .dialog17-container29 {
    width: auto;
  }
  .dialog17-container30 {
    height: auto;
  }
  .dialog17-container31 {
    height: auto;
  }
  .dialog17-container32 {
    height: auto;
  }
  .dialog17-container33 {
    height: auto;
  }
  .dialog17-container34 {
    height: auto;
  }
  .dialog17-container35 {
    height: auto;
  }
  .dialog17-button {
    color: var(--dl-color-gray-white);
    width: 100%;
    height: 30px;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 1366px) {
  .dialog17-container {
    width: 650px;
    height: 500px;
  }
  .dialog17-container02 {
    position: relative;
  }
  .dialog17-form {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
  }
  .dialog17-image {
    align-self: center;
    margin-left: 10px;
  }
  .dialog17-container10 {
    margin-bottom: 5px;
  }
  .dialog17-icon02 {
    width: 30px;
    height: 30px;
  }
  .dialog17-container12 {
    width: 100%;
    bottom: 0px;
    height: 300px;
    flex-direction: row;
  }
  .dialog17-container13 {
    width: 40%;
    height: 100%;
    margin-right: 10px;
    flex-direction: column;
  }
  .dialog17-container14 {
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
  .dialog17-container15 {
    width: auto;
    height: auto;
  }
  .dialog17-container16 {
    width: auto;
  }
  .dialog17-textinput {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog17-input {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog17-textinput1 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog17-textinput2 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog17-textarea {
    width: 100%;
    height: auto;
    border-width: 0px;
    border-radius: 0px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog17-container17 {
    width: 55%;
    height: 100%;
    margin-left: 10px;
  }
  .dialog17-container21 {
    width: 100%;
    height: 80%;
    position: relative;
    align-self: flex-end;
    flex-direction: row;
  }
  .dialog17-container22 {
    width: 50%;
    height: 100%;
  }
  .dialog17-container23 {
    width: 100%;
    height: auto;
    align-items: center;
  }
  .dialog17-container24 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container25 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container26 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container27 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container28 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container29 {
    width: 50%;
    height: 100%;
  }
  .dialog17-container30 {
    width: 100%;
    height: auto;
    justify-content: flex-start;
  }
  .dialog17-container31 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog17-container32 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog17-container33 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog17-container34 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog17-container35 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog17-container36 {
    width: auto;
    height: auto;
    position: absolute;
    flex-direction: row;
  }
  .dialog17-button {
    left: 0px;
    color: var(--dl-color-gray-white);
    right: 0px;
    width: 100%;
    margin: auto;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
  .dialog17-root-class-name1 {
    margin-top: 130px;
  }
}
@media(max-width: 991px) {
  .dialog17-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog17-container03 {
    align-self: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog17-form {
    align-items: center;
  }
}
</style>
