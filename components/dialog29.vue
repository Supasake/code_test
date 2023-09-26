<template>
  <div class="dialog29-container" v-bind:class="rootClassName">
    <div class="dialog29-container01">
      <span class="dialog29-text">{{ text }}</span>
      <nuxt-link to="/cusomer3" class="dialog29-navlink">
        <svg viewBox="0 0 1024 1024" class="dialog29-icon">
          <path
            d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
          ></path>
        </svg>
      </nuxt-link>
    </div>
    <div class="dialog29-container02">
      <form class="dialog29-form">
        <div class="dialog29-container03">
          <div class="dialog29-container04">
            <div class="dialog29-container05">
              <div class="dialog29-container06">
                <img :alt="image_alt4" :src="image_src4" class="dialog29-image" />
              </div>
              <div class="dialog29-container07">
                <div class="dialog29-container08">
                  <span class="dialog29-text01">แอดมิน - ขิม</span>
                </div>
                <div class="dialog29-container09">
                  <span>ออฟฟิสสุวรณภูมิ</span>
                </div>
                <div class="dialog29-container10"><span>089-009-09765</span></div>
              </div>
            </div>
          </div>
          <div class="dialog29-container11">
            <nuxt-link to="/cusomer2" class="dialog29-navlink1">
              <svg viewBox="0 0 877.7142857142857 1024" class="dialog29-icon02">
                <path
                  d="M734.286 512c0-9.714-3.429-18.857-10.286-25.714l-258.857-258.857c-6.857-6.857-16-10.286-25.714-10.286s-18.857 3.429-25.714 10.286l-52 52c-6.857 6.857-10.286 16-10.286 25.714s3.429 18.857 10.286 25.714l108 108h-286.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h286.857l-108 108c-6.857 6.857-10.857 16-10.857 25.714s4 18.857 10.857 25.714l52 52c6.857 6.857 16 10.286 25.714 10.286s18.857-3.429 25.714-10.286l258.857-258.857c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <div class="dialog29-container12">
          <div class="dialog29-container13">
            <div class="dialog29-container14">
              <div class="dialog29-container15">
                <span>ลูกค้าทักเข้ามาจากช่องทางไหน</span>
              </div>
              <div class="dialog29-container16">
                <nuxt-link to="/customer1" class="dialog29-navlink2">
                  <svg viewBox="0 0 1024 1024" class="dialog29-icon04">
                    <path d="M598 298v428l-214-214z"></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              class="dialog29-textinput input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              class="dialog29-input input Content OO3_1DialogTextInput"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              class="input Content OO3_1DialogTextInput dialog29-textinput1"
            />
            <input
              type="text"
              placeholder="อำเภอ"
              class="input Content OO3_1DialogTextInput dialog29-textinput2"
            />
            <textarea
              placeholder="รายละเอียดอื่นๆ"
              class="dialog29-textarea Content OO3_1DialogTextInput textarea"
            ></textarea>
          </div>
          <div class="dialog29-container17">
            <div class="dialog29-container18">
              <div class="dialog29-container19">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการลงคิวนัดเลย และ ออกใบเสนอราคาเลย ไม่ต้องสำรวจ
                </span>
              </div>
              <div class="dialog29-container20">
                <input type="checkbox" checked="true" />
                <span class="Content OO3_1DialogText">
                  ต้องการนัดสำรวจเฉยๆเท่านั้น ยังไม้ตัดสินใจอะไร
                </span>
              </div>
            </div>
            <div class="dialog29-container21">
              <div class="dialog29-container22">
                <div class="dialog29-container23">
                  <input
                    type="checkbox"
                    checked="true"
                    class="dialog29-checkbox02 Content OO3_1DialogText"
                  />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบทาวน์เฮาส์
                  </span>
                </div>
                <div class="dialog29-container24">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">
                    ลูกค้าเป็นบ้านแบบบ้านเดี่ยว
                  </span>
                </div>
                <div class="dialog29-container25">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ลูกค้าเป็นบริษัท</span>
                </div>
                <div class="dialog29-container26">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog29-container27">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog29-container28">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog29-container29">
                <div class="dialog29-container30">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog29-container31">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog29-container32">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog29-container33">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
                <div class="dialog29-container34">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">เคยฉีดปลวกมาแล้ว</span>
                </div>
                <div class="dialog29-container35">
                  <input type="checkbox" checked="true" />
                  <span class="Content OO3_1DialogText">ยังไม่เคยฉีดปลวกเลย</span>
                </div>
              </div>
              <div class="dialog29-container36">
                <div class="dialog29-container37">
                  <img
                    :alt="image_alt"
                    :src="image_src"
                    class="dialog29-image1"
                  />
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    class="dialog29-icon06"
                  >
                    <path
                      d="M656.571 641.143c0-9.714-4-18.857-10.857-25.714l-103.429-103.429 103.429-103.429c6.857-6.857 10.857-16 10.857-25.714s-4-19.429-10.857-26.286l-51.429-51.429c-6.857-6.857-16.571-10.857-26.286-10.857s-18.857 4-25.714 10.857l-103.429 103.429-103.429-103.429c-6.857-6.857-16-10.857-25.714-10.857s-19.429 4-26.286 10.857l-51.429 51.429c-6.857 6.857-10.857 16.571-10.857 26.286s4 18.857 10.857 25.714l103.429 103.429-103.429 103.429c-6.857 6.857-10.857 16-10.857 25.714s4 19.429 10.857 26.286l51.429 51.429c6.857 6.857 16.571 10.857 26.286 10.857s18.857-4 25.714-10.857l103.429-103.429 103.429 103.429c6.857 6.857 16 10.857 25.714 10.857s19.429-4 26.286-10.857l51.429-51.429c6.857-6.857 10.857-16.571 10.857-26.286zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
                    ></path></svg
                  ><svg viewBox="0 0 1024 1024" class="dialog29-icon08">
                    <path
                      d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="dialog29-button button">
          {{ button2 }}
        </button>
        <div class="dialog29-container38">
          <div class="dialog29-container39">
            <div class="dialog29-container40">
              <div class="dialog29-container41">
                <input
                  type="checkbox"
                  checked="true"
                  class="dialog29-checkbox14"
                />
                <img
                  alt="image"
                  src="/external/screen%20shot%202566-09-18%20at%2010.28.221-200h-200h-200h.png"
                  class="dialog29-image2"
                />
              </div>
              <div class="dialog29-container42">
                <div class="dialog29-container43">
                  <span class="dialog29-text19">XOXOOXXXOXX</span>
                </div>
                <div class="dialog29-container44">
                  <span class="dialog29-text20">ตำแหน่ง: XOXOOX</span>
                </div>
              </div>
            </div>
            <div class="dialog29-container45">
              <div class="dialog29-container46">
                <input
                  type="checkbox"
                  checked="true"
                  class="dialog29-checkbox15"
                />
                <img
                  alt="image"
                  src="/img/screen%20shot%202566-09-18%20at%2013.16.30-200h.png"
                  class="dialog29-image3"
                />
              </div>
              <div class="dialog29-container47">
                <div class="dialog29-container48">
                  <span class="dialog29-text21">XOXOOXXXOXX</span>
                </div>
                <div class="dialog29-container49">
                  <span class="dialog29-text22">ตำแหน่ง: XOXOOX</span>
                </div>
              </div>
            </div>
            <div class="dialog29-container50">
              <div class="dialog29-container51">
                <input
                  type="checkbox"
                  checked="true"
                  class="dialog29-checkbox16"
                />
                <img
                  alt="image"
                  src="/img/screen%20shot%202566-09-18%20at%2013.15.42-200h.png"
                  class="dialog29-image4"
                />
              </div>
              <div class="dialog29-container52">
                <div class="dialog29-container53">
                  <span class="dialog29-text23">XOXOOXXXOXX</span>
                </div>
                <div class="dialog29-container54">
                  <span class="dialog29-text24">ตำแหน่ง: XOXOOX</span>
                </div>
              </div>
            </div>
            <div class="dialog29-container55">
              <div class="dialog29-container56">
                <input
                  type="checkbox"
                  checked="true"
                  class="dialog29-checkbox17"
                />
                <img
                  alt="image"
                  src="/img/screen%20shot%202566-09-18%20at%2010.27.111-200w.png"
                  class="dialog29-image5"
                />
              </div>
              <div class="dialog29-container57">
                <div class="dialog29-container58">
                  <span class="dialog29-text25">XOXOOXXXOXX</span>
                </div>
                <div class="dialog29-container59">
                  <span class="dialog29-text26">ตำแหน่ง: XOXOOX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog29',
  props: {
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-19%20at%2011.58.29-200w.png',
    },
    image_src22: {
      type: String,
      default: 'a51cc977-70a2-4369-967b-bdcf74de34f8',
    },
    image_src23: {
      type: String,
      default: 'f34d62f1-08e7-4748-b472-97049d45b3ab',
    },
    image_src21: {
      type: String,
      default: 'a71bd068-0caa-40e9-ba09-254eaa76df26',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src4: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08280062-8fe4-4fe5-b33b-899c8276b176/9220e4cd-440e-4dd8-ae9a-2b6dc2add1d8?org_if_sml=17934',
    },
    button2: {
      type: String,
      default: 'บันทึกการส่งต่อข้อมูลให้ทีมขาย',
    },
    text: {
      type: String,
      default: 'การส่งต่อลูกค้าไปยังเซล์',
    },
    rootClassName: String,
    image_alt4: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.dialog29-container {
  width: 650px;
  height: 500px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog29-container01 {
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
.dialog29-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog29-navlink {
  display: contents;
}
.dialog29-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog29-container02 {
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
.dialog29-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.dialog29-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dialog29-container04 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog29-container05 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog29-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
  margin-left: 10px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog29-container07 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog29-container08 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-text01 {
  font-size: 20px;
}
.dialog29-container09 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-container10 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog29-container11 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
  flex-direction: column;
}
.dialog29-navlink1 {
  display: contents;
}
.dialog29-icon02 {
  width: 30px;
  height: 30px;
  text-decoration: none;
}
.dialog29-container12 {
  flex: 0 0 auto;
  width: 100%;
  bottom: 0px;
  height: 300px;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.dialog29-container13 {
  flex: 0 0 auto;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog29-container14 {
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
.dialog29-container15 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog29-container16 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog29-navlink2 {
  display: contents;
}
.dialog29-icon04 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.dialog29-textinput {
  border-width: 0px;
  background-color: var(--dl-color-gray-input);
}
.dialog29-input {
  color: var(--dl-color-gray-input);
  border-width: 0px;
}
.dialog29-textarea {
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
.dialog29-container17 {
  flex: 0 0 auto;
  width: 55%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.dialog29-container18 {
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
.dialog29-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container21 {
  width: 100%;
  height: 80%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.dialog29-container22 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog29-container23 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.dialog29-checkbox02 {
  align-self: center;
  margin-left: 0px;
}
.dialog29-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container27 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container28 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container29 {
  flex: 0 0 auto;
  width: 50%;
  height: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog29-container30 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container32 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container33 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container34 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container35 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.dialog29-container36 {
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
.dialog29-container37 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.dialog29-image1 {
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
}
.dialog29-icon06 {
  top: -5px;
  fill: var(--dl-color-danger-500);
  left: 35px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.dialog29-icon08 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
}
.dialog29-button {
  color: var(--dl-color-gray-white);
  width: 100%;
  height: 30px;
  position: absolute;
  align-self: flex-end;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog29-container38 {
  top: 5%;
  flex: 0 0 auto;
  right: 10%;
  width: 25%;
  height: 45%;
  display: flex;
  position: absolute;
  flex-direction: column;
}
.dialog29-container39 {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.dialog29-container40 {
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog29-container41 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-checkbox14 {
  width: 10px;
  height: 10px;
  align-self: center;
}
.dialog29-image2 {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog29-container42 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog29-container43 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.dialog29-text19 {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.dialog29-container44 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-text20 {
  font-size: 14px;
}
.dialog29-container45 {
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog29-container46 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-checkbox15 {
  width: 10px;
  height: 10px;
  align-self: center;
}
.dialog29-image3 {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog29-container47 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog29-container48 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.dialog29-text21 {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.dialog29-container49 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-text22 {
  font-size: 14px;
}
.dialog29-container50 {
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog29-container51 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-checkbox16 {
  width: 10px;
  height: 10px;
  align-self: center;
}
.dialog29-image4 {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog29-container52 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog29-container53 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.dialog29-text23 {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.dialog29-container54 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-text24 {
  font-size: 14px;
}
.dialog29-container55 {
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  flex-direction: row;
  justify-content: flex-start;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog29-container56 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-checkbox17 {
  width: 10px;
  height: 10px;
  align-self: center;
}
.dialog29-image5 {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog29-container57 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.dialog29-container58 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.dialog29-text25 {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.dialog29-container59 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog29-text26 {
  font-size: 14px;
}
.dialog29-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog29-root-class-name1 {
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
  .dialog29-container {
    width: 650px;
    height: 500px;
  }
  .dialog29-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog29-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog29-container12 {
    width: 100%;
    position: absolute;
  }
  .dialog29-container13 {
    width: 40%;
    height: 100%;
  }
  .dialog29-container14 {
    width: 100%;
  }
  .dialog29-container23 {
    width: auto;
    height: auto;
  }
  .dialog29-container24 {
    height: auto;
  }
  .dialog29-container25 {
    height: auto;
  }
  .dialog29-container26 {
    height: auto;
  }
  .dialog29-container27 {
    height: auto;
  }
  .dialog29-container28 {
    height: auto;
  }
  .dialog29-container29 {
    width: auto;
  }
  .dialog29-container30 {
    height: auto;
  }
  .dialog29-container31 {
    height: auto;
  }
  .dialog29-container32 {
    height: auto;
  }
  .dialog29-container33 {
    height: auto;
  }
  .dialog29-container34 {
    height: auto;
  }
  .dialog29-container35 {
    height: auto;
  }
  .dialog29-button {
    color: var(--dl-color-gray-white);
    width: 100%;
    height: 30px;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
  .dialog29-container39 {
    top: 0px;
    left: 0px;
    position: absolute;
  }
}
@media(max-width: 1366px) {
  .dialog29-container {
    width: 650px;
    height: 500px;
  }
  .dialog29-container02 {
    position: relative;
  }
  .dialog29-form {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-content: center;
  }
  .dialog29-image {
    align-self: center;
    margin-left: 10px;
  }
  .dialog29-container10 {
    margin-bottom: 5px;
  }
  .dialog29-icon02 {
    width: 30px;
    height: 30px;
  }
  .dialog29-container12 {
    width: 100%;
    bottom: 0px;
    height: 300px;
    flex-direction: row;
  }
  .dialog29-container13 {
    width: 40%;
    height: 100%;
    margin-right: 10px;
    flex-direction: column;
  }
  .dialog29-container14 {
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
  .dialog29-container15 {
    width: auto;
    height: auto;
  }
  .dialog29-container16 {
    width: auto;
  }
  .dialog29-textinput {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog29-input {
    width: 100%;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog29-textinput1 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog29-textinput2 {
    width: 100%;
    height: 24px;
    border-width: 0px;
    border-radius: 0px;
    margin-bottom: 5px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog29-textarea {
    width: 100%;
    height: auto;
    border-width: 0px;
    border-radius: 0px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog29-container17 {
    width: 55%;
    height: 100%;
    margin-left: 10px;
  }
  .dialog29-container21 {
    width: 100%;
    height: 80%;
    position: relative;
    align-self: flex-end;
    flex-direction: row;
  }
  .dialog29-container22 {
    width: 50%;
    height: 100%;
  }
  .dialog29-container23 {
    width: 100%;
    height: auto;
    align-items: center;
  }
  .dialog29-container24 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container25 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container26 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container27 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container28 {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container29 {
    width: 50%;
    height: 100%;
  }
  .dialog29-container30 {
    width: 100%;
    height: auto;
    justify-content: flex-start;
  }
  .dialog29-container31 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog29-container32 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog29-container33 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog29-container34 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog29-container35 {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
  }
  .dialog29-container36 {
    width: auto;
    height: auto;
    position: absolute;
    flex-direction: row;
  }
  .dialog29-button {
    left: 0px;
    color: var(--dl-color-gray-white);
    right: 0px;
    width: 100%;
    margin: auto;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
  .dialog29-container38 {
    top: 5%;
    right: 10%;
    width: 25%;
    height: 45%;
    position: absolute;
    background-color: #D9D9D9;
  }
  .dialog29-container39 {
    width: 100%;
    height: 100%;
    padding: 5px;
    flex-direction: column;
  }
  .dialog29-container40 {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .dialog29-container41 {
    width: auto;
    height: auto;
    align-items: center;
  }
  .dialog29-checkbox14 {
    width: 10px;
    height: 10px;
  }
  .dialog29-image2 {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: var(--dl-radius-radius-round);
  }
  .dialog29-container42 {
    width: auto;
    flex-direction: column;
  }
  .dialog29-container43 {
    height: auto;
  }
  .dialog29-text19 {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .dialog29-container44 {
    height: auto;
  }
  .dialog29-text20 {
    font-size: 14px;
  }
  .dialog29-container45 {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .dialog29-container46 {
    width: auto;
    height: auto;
    align-items: center;
  }
  .dialog29-checkbox15 {
    width: 10px;
    height: 10px;
  }
  .dialog29-image3 {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: var(--dl-radius-radius-round);
  }
  .dialog29-container47 {
    width: auto;
    flex-direction: column;
  }
  .dialog29-container48 {
    height: auto;
  }
  .dialog29-text21 {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .dialog29-container49 {
    height: auto;
  }
  .dialog29-text22 {
    font-size: 14px;
  }
  .dialog29-container50 {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .dialog29-container51 {
    width: auto;
    height: auto;
    align-items: center;
  }
  .dialog29-checkbox16 {
    width: 10px;
    height: 10px;
  }
  .dialog29-image4 {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: var(--dl-radius-radius-round);
  }
  .dialog29-container52 {
    width: auto;
    flex-direction: column;
  }
  .dialog29-container53 {
    height: auto;
  }
  .dialog29-text23 {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .dialog29-container54 {
    height: auto;
  }
  .dialog29-text24 {
    font-size: 14px;
  }
  .dialog29-container55 {
    width: 100%;
    height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .dialog29-container56 {
    width: auto;
    height: auto;
    align-items: center;
  }
  .dialog29-checkbox17 {
    width: 10px;
    height: 10px;
  }
  .dialog29-image5 {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: var(--dl-radius-radius-round);
  }
  .dialog29-container57 {
    width: auto;
    flex-direction: column;
  }
  .dialog29-container58 {
    height: auto;
  }
  .dialog29-text25 {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }
  .dialog29-container59 {
    height: auto;
  }
  .dialog29-text26 {
    font-size: 14px;
  }
}
@media(max-width: 991px) {
  .dialog29-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog29-container03 {
    align-self: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog29-form {
    align-items: center;
  }
}
</style>
