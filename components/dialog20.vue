<template>
  <div v-if="uData" class="dialog20-container" v-bind:class="rootClassName">
    <div class="dialog20-container01">
      <span class="dialog20-text">{{ text }}</span>
      <nuxt-link to="/employee">
      <svg viewBox="0 0 1024 1024" class="dialog20-icon">
        <path
          d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
        ></path>
      </svg></nuxt-link>
    </div>
    <div class="dialog20-container02">
      <div class="dialog20-container03">
        <form class="dialog20-form">
          <input type="file" id='input_file' accept='image/*' @change="setFile()" hidden/> 
          <img @click="clickUpload()"
              id='output' :alt="image_alt1" :src="uData.avatar ? uData.avatar : image_src1" class="dialog20-image" style="cursor: pointer;" />
          <div class="dialog20-container04">
            <div class="dialog20-container05"><span>{{ uData.name }}</span></div>
            <div class="dialog20-container06"><span>รหัสสมาชิก {{ uData.id }}</span></div>
            <!-- <div class="dialog20-container07"><span>Update {{ Date() }}</span></div> -->
            <div class="dialog20-container08">
              <div class="dialog20-container09">
                <div class="dialog20-container10">
                  <span class="dialog20-text04">{{ text41 }}</span>
                 
                  <input
                    type="number"
                    v-model="uData.key"
                    class="dialog20-textinput input"
                  />
                </div>
                <div class="dialog20-container11">
                  <span class="dialog20-text05">{{ text412 }}</span>
                  <input
                    type="text"
                    v-model="uData.id"
                    class="dialog20-textinput01 input"
                  />
                </div>
                <div class="dialog20-container12">
                  <span class="dialog20-text06">{{ text413 }}</span>
                  <input
                    type="text"
                    v-model="uData.nickName"
                    class="dialog20-textinput02 input"
                  />
                </div>
                <div class="dialog20-container13">
                  <span class="dialog20-text07">{{ text414 }}</span>
                  <input
                    type="text"
                    v-model="uData.position"
                    class="dialog20-textinput03 input"
                  />
                </div>
                <div class="dialog20-container14">
                  <span class="dialog20-text08">{{ text415 }}</span>
                  <input
                    type="date"
                    v-model="uData.birthDay"
                    class="dialog20-textinput04 input"
                  />
                </div>
                <div class="dialog20-container15">
                  <span class="dialog20-text09">{{ text416 }}</span>
                  <input
                    type="email"
                    v-model="uData.eMail"
                    class="dialog20-textinput05 input"
                  />
                </div>
                <div class="dialog20-container16">
                  <span class="dialog20-text10">{{ text417 }}</span>
                  <input
                    type="number"
                    v-model="uData.height"
                    class="dialog20-textinput06 input"
                  />
                </div>
                <div class="dialog20-container17">
                  <span class="dialog20-text11">{{ text418 }}</span>
                  <input
                    type="number"
                    v-model="uData.weight"
                    class="dialog20-textinput07 input"
                  />
                </div>
                <div class="dialog20-container18">
                  <span class="dialog20-text12">{{ text419 }}</span>
                  <input
                    type="text"
                    v-model="uData.bloodGroup"
                    class="dialog20-textinput08 input"
                  />
                </div>
                <div class="dialog20-container19">
                  <span class="dialog20-text13">{{ text4192 }}</span>
                  <select class="dialog20-select Content OO3_1DialogTextInput" v-model="uData.type">
                    <option value="staff" selected>พนักงาน</option>
                    <option value="customer">ลูกค้า</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="dialog20-container20">
            <div class="dialog20-container21">
              <div class="dialog20-container22">
                <div class="dialog20-container23">
                  <span class="dialog20-text14">{{ text4110 }}</span>
                  <input
                    type="text"
                    v-model="uData.userName"
                    class="dialog20-textinput09 input"
                  />
                </div>
                <div class="dialog20-container24">
                  <span class="dialog20-text15">{{ text4121 }}</span>
                  <input
                    type="password"
                    v-model="uData.password"
                    class="dialog20-textinput10 input"
                  />
                </div>
                <div class="dialog20-container25">
                  <span class="dialog20-text16">{{ text4131 }}</span>
                  <input
                    type="text"
                    v-model="uData.gender"
                    class="dialog20-textinput11 input"
                  />
                </div>
                <div class="dialog20-container26">
                  <span class="dialog20-text17">{{ text4141 }}</span>
                  <input
                    type="number"
                    v-model="uData.age"
                    class="dialog20-textinput12 input"
                  />
                </div>
                <div class="dialog20-container27">
                  <span class="dialog20-text18">{{ text4151 }}</span>
                  <input
                    type="text"
                    v-model="uData.birthPlace"
                    class="dialog20-textinput13 input"
                  />
                </div>
                <div class="dialog20-container28">
                  <span class="dialog20-text19">{{ text4161 }}</span>
                  <input
                    type="text"
                    v-model="uData.province"
                    class="dialog20-textinput14 input"
                  />
                </div>
                <div class="dialog20-container29">
                  <span class="dialog20-text20">{{ text4171 }}</span>
                  <input
                    type="number"
                    v-model="uData.phone"
                    class="dialog20-textinput15 input"
                  />
                </div>
                <div class="dialog20-container30">
                  <span class="dialog20-text21">{{ text4181 }}</span>
                  <input
                    type="text"
                    v-model="uData.contactPerson"
                    class="dialog20-textinput16 input"
                  />
                </div>
                <div class="dialog20-container31">
                  <span class="dialog20-text22">{{ text4191 }}</span>
                  <textarea
                  v-model="uData.address"
                    class="dialog20-textarea textarea"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="dialog20-container32"></div>
          <button type="button" class="dialog20-button button" style="cursor: pointer;" @click="updateData()">
            {{ button3 }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { ref as imgref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  name: 'Dialog20',
  props: {
    image_alt1: {
      type: String,
      default: 'image',
    },
    text4191: {
      type: String,
      default: 'ที่อยู่',
    },
    text418: {
      type: String,
      default: 'น้ำหนัก',
    },
    text4110: {
      type: String,
      default: 'ยูสเซอร์',
    },
    text2: {
      type: String,
      default: 'รหัสสมาชิก MPO-09-293-001',
    },
    text416: {
      type: String,
      default: 'อีเมล์',
    },
    text4181: {
      type: String,
      default: 'ผู้ติดต่อฉุกเฉิน',
    },
    textinput_placeholder11: {
      type: String,
      default: '99874849098',
    },
    text414: {
      type: String,
      default: 'ตำแหน่ง',
    },
    text413: {
      type: String,
      default: 'ชื่อเลน',
    },
    text4131: {
      type: String,
      default: 'เพศ',
    },
    text: {
      type: String,
      default: 'ข้อมูลสมาชิก',
    },
    rootClassName: String,
    text417: {
      type: String,
      default: 'ส่วนสูง',
    },
    text4151: {
      type: String,
      default: 'สถานที่เกิด',
    },
    text4161: {
      type: String,
      default: 'จังหวัด',
    },
    textinput_placeholder115: {
      type: String,
      default: '09 เมษายน 2520',
    },
    textinput_placeholder114: {
      type: String,
      default: 'ธุรการ',
    },
    text4141: {
      type: String,
      default: 'อายุ',
    },
    text41: {
      type: String,
      default: 'รหัส',
    },
    text3: {
      type: String,
      default: 'Update 09-สค-2566',
    },
    text4192: {
      type: String,
      default: 'ประเภท',
    },
    text1: {
      type: String,
      default: 'สมชาย ศรีสุวรรณจันทรา',
    },
    text4171: {
      type: String,
      default: 'เบอร์โทรติดต่อ',
    },
    textinput_placeholder112: {
      type: String,
      default: 'MPO-2023-001',
    },
    text4121: {
      type: String,
      default: 'พาสเวิร์ด',
    },
    text415: {
      type: String,
      default: 'วันเกิด',
    },
    textinput_placeholder113: {
      type: String,
      default: 'แป้งโกะ',
    },
    button3: {
      type: String,
      default: 'บันทึกการแก้ไข',
    },
    text412: {
      type: String,
      default: 'ไอดี',
    },
    image_src1: {
      type: String,
      default: '/img/icon-10-200h.png',
    },
    text419: {
      type: String,
      default: 'หมู่เลือด',
    },
  },
  setup() {
      const id = useRoute().params
      const imagesFile = ref(null);
      const uData = ref()
      const clickUpload = () => {
      document.getElementById('input_file').click();
    };
    async function setFile() {
      const preview = document.getElementById("output");;
      const file = document.querySelector('input[type=file]').files[0];
      const reader = new FileReader();
       reader.addEventListener("load", () => {
        preview.src = reader.result;
      }, false);
      if (file) {
        reader.readAsDataURL(file);
     }
      imagesFile.value = file
    //  console.log(imagesFile.value.name)
    }
      async function updateData() {
        const { db } = useFirebase() 
        const userRef = doc(db, "user", uData.value.fID);
        await updateDoc(userRef, {
          ...uData.value
        });
        if (imagesFile.value) {
        const { storage } = useFirebase() 
        const imagesRef =  imgref(storage, "user/" + uData.value.fID + "/" + imagesFile.value.name);
        await uploadBytes(imagesRef, imagesFile.value)
        const url = await getDownloadURL(imagesRef);

        // Update Image Url
        const userRef = doc(db, "user", uData.value.fID);
          await updateDoc(userRef, {
            avatar: url
          });
      }
        window.history.back()
      }
      function getUserData() {
        const { db } = useFirebase()  
         onSnapshot(doc(db, "user", id.id), (doc) => { 
          uData.value = {...doc.data(), fID: doc.id}
        });
      }
      onMounted( () => {
       getUserData()
      })
      return {
        id,
        uData,
        clickUpload,
        setFile,
        updateData
      }
    }
}
</script>

<style scoped>
.dialog20-container {
  width: 650px;
  height: 530px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog20-container01 {
  top: 1px;
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
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
.dialog20-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog20-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog20-container02 {
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
.dialog20-container03 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dialog20-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-self: center;
  justify-content: center;
}
.dialog20-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
}
.dialog20-container04 {
  flex: 0 0 auto;
  width: auto;
  height: 338px;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog20-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog20-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog20-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog20-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog20-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog20-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text04 {
  margin-right: 10px;
}
.dialog20-textinput {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text05 {
  margin-right: 10px;
}
.dialog20-textinput01 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text06 {
  margin-right: 10px;
}
.dialog20-textinput02 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text07 {
  margin-right: 10px;
}
.dialog20-textinput03 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text08 {
  font-size: 18px;
  margin-right: 10px;
}
.dialog20-textinput04 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text09 {
  margin-right: 10px;
}
.dialog20-textinput05 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text10 {
  margin-right: 10px;
}
.dialog20-textinput06 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text11 {
  margin-right: 10px;
}
.dialog20-textinput07 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text12 {
  margin-right: 10px;
}
.dialog20-textinput08 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text13 {
  margin-right: 10px;
}
.dialog20-select {
  width: 160px;
  border-width: 1px;
}
.dialog20-container20 {
  flex: 0 0 auto;
  width: auto;
  height: 348px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
}
.dialog20-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog20-container22 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog20-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text14 {
  margin-right: 10px;
}
.dialog20-textinput09 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text15 {
  margin-right: 10px;
}
.dialog20-textinput10 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text16 {
  margin-right: 10px;
}
.dialog20-textinput11 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text17 {
  margin-right: 10px;
}
.dialog20-textinput12 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container27 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text18 {
  margin-right: 10px;
}
.dialog20-textinput13 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container28 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text19 {
  margin-right: 10px;
}
.dialog20-textinput14 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container29 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text20 {
  margin-right: 10px;
}
.dialog20-textinput15 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container30 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text21 {
  margin-right: 10px;
}
.dialog20-textinput16 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog20-text22 {
  margin-right: 10px;
}
.dialog20-textarea {
  width: 160px;
  height: 90px;
  line-height: 1;
  border-radius: 0px;
  background-color: var(--dl-color-gray-input);
}
.dialog20-container32 {
  flex: 0 0 auto;
  right: 25px;
  width: 80%;
  bottom: 62px;
  height: auto;
  display: flex;
  position: absolute;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
.dialog20-button {
  color: var(--dl-color-gray-white);
  right: 20px;
  width: 20%;
  bottom: 10px;
  height: auto;
  position: absolute;
  align-self: flex-end;
  border-width: 0px;
  background-color: var(--dl-color-success-green);
}
.dialog20-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 650px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.dialog20-root-class-name1 {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  margin-top: var(--dl-space-space-fiveunits);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
@media(max-width: 1600px) {
  .dialog20-container {
    width: 650px;
    height: 530px;
  }
  .dialog20-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog20-container03 {
    width: 100%;
    height: 100%;
  }
  .dialog20-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog20-container04 {
    width: auto;
    height: 338px;
  }
  .dialog20-textinput {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput01 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput02 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput03 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput04 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput05 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput06 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput07 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput08 {
    width: 160px;
    height: 24px;
  }
  .dialog20-container20 {
    height: 348px;
    margin-left: 10px;
  }
  .dialog20-textinput09 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput10 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput11 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput12 {
    width: 160px;
    height: 24px;
  }
  .dialog20-textinput13 {
    width: 160px;
    height: 24px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput14 {
    width: 160px;
  }
  .dialog20-textinput15 {
    width: 160px;
  }
  .dialog20-textinput16 {
    width: 160px;
  }
  .dialog20-textarea {
    width: 160px;
    height: 90px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-container32 {
    width: 80%;
    height: auto;
    align-items: flex-end;
    border-color: var(--dl-color-gray-black);
    border-style: solid;
    justify-content: flex-end;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }
  .dialog20-button {
    color: var(--dl-color-gray-white);
    right: 20px;
    width: 20%;
    height: auto;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 1366px) {
  .dialog20-container {
    width: 650px;
    height: 530px;
  }
  .dialog20-container02 {
    position: relative;
  }
  .dialog20-container03 {
    width: 100%;
    height: 100%;
    align-self: flex-start;
    justify-content: center;
  }
  .dialog20-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog20-image {
    align-self: flex-start;
  }
  .dialog20-container04 {
    width: auto;
    height: 338px;
    align-self: flex-start;
  }
  .dialog20-container08 {
    width: auto;
  }
  .dialog20-textinput {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput01 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput02 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput03 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput04 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput05 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput06 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput07 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput08 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-container20 {
    height: 348px;
    align-self: flex-start;
    margin-left: 10px;
  }
  .dialog20-textinput09 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput10 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput11 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput12 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput13 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput14 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput15 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textinput16 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-textarea {
    height: 90px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog20-container32 {
    right: 25px;
    width: 80%;
    bottom: 62px;
    height: auto;
    position: absolute;
    align-items: flex-end;
    border-color: var(--dl-color-gray-black);
    border-style: solid;
    justify-content: flex-end;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }
  .dialog20-button {
    color: var(--dl-color-gray-white);
    right: 20px;
    width: 20%;
    bottom: 10px;
    position: absolute;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
  .dialog20-root-class-name1 {
    top: 0px;
    left: 0px;
    right: 0px;
    margin-top: var(--dl-space-space-fiveunits);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
}
@media(max-width: 991px) {
  .dialog20-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog20-container04 {
    width: auto;
    margin-right: 10px;
  }
  .dialog20-container20 {
    align-self: flex-start;
    align-items: flex-end;
    margin-left: 10px;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog20-form {
    align-items: center;
  }
}
</style>
