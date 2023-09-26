<template>
  <div class="dialog-emty-container" v-bind:class="rootClassName">
    <div class="dialog-emty-container01">
      <span class="dialog-emty-text">{{ text }}</span>
      <nuxt-link to="/employee" >
      <svg viewBox="0 0 1024 1024" class="dialog-emty-icon">
        <path
          d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
        ></path>
      </svg></nuxt-link>
    </div>
    <div class="dialog-emty-container02">
      <div class="dialog-emty-container03">
        <form @submit.prevent="addUser()" class="dialog-emty-form">
          <input type="file" id='input_file' accept='image/*' @change="setFile()" hidden/> 
            <img
              @click="clickUpload()"
              id='output'
              :alt="image_alt1"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="dialog-emty-image"
              style="height:90px; width:90px; cursor: pointer;"
            />
        
          <div class="dialog-emty-container04">
            <!-- <div class="dialog-emty-container05"><span>{{ text1 }}</span></div>
            <div class="dialog-emty-container06"><span>{{ text2 }}</span></div>
            <div class="dialog-emty-container07"><span>{{ text31 }}</span></div> -->
            <div class="dialog-emty-container08">
              <div class="dialog-emty-container09">
                <div class="dialog-emty-container10">
                  <span class="dialog-emty-text04">ชื่อ/นามสกุล</span>
                  <input
                    type="text"
                    :placeholder="textinput_placeholder11"
                    v-model="userData.name"
                    class="dialog-emty-textinput input" required
                  />
                </div>
                <div class="dialog-emty-container10">
                  <span class="dialog-emty-text04">{{ text41 }}</span>
                  <input
                    type="number"
                    :placeholder="textinput_placeholder11"
                    v-model="userData.key"
                    class="dialog-emty-textinput input"
                  />
                </div>
                <div class="dialog-emty-container11">
                  <span class="dialog-emty-text05">{{ text412 }}</span>
                  <input
                    type="text"
                    v-model="userData.id"
                    :placeholder="textinput_placeholder112"
                    class="dialog-emty-textinput01 input" required
                  />
                </div>
                <div class="dialog-emty-container12">
                  <span class="dialog-emty-text06">{{ text413 }}</span>
                  <input
                    type="text"
                    :placeholder="textinput_placeholder113"
                    v-model="userData.nickName"
                    class="dialog-emty-textinput02 input"
                  />
                </div>
                <div class="dialog-emty-container13">
                  <span class="dialog-emty-text07">{{ text414 }}</span>
                  <input
                    type="text"
                    v-model="userData.position"
                    :placeholder="textinput_placeholder114"
                    class="dialog-emty-textinput03 input" required
                  />
                </div>
                <div class="dialog-emty-container14">
                  <span class="dialog-emty-text08">{{ text415 }}</span>
                  <input type="date" class="dialog-emty-textinput04 input" v-model="userData.birthDay"/>
                </div>
                <div class="dialog-emty-container15">
                  <span class="dialog-emty-text09">{{ text416 }}</span>
                  <input type="email" class="dialog-emty-textinput05 input" v-model="userData.eMail"/>
                </div>
                <div class="dialog-emty-container16">
                  <span class="dialog-emty-text10">{{ text417 }}</span>
                  <input type="number" class="dialog-emty-textinput06 input" v-model="userData.height"/>
                </div>
                <div class="dialog-emty-container17">
                  <span class="dialog-emty-text11">{{ text418 }}</span>
                  <input type="number" class="dialog-emty-textinput07 input" v-model="userData.weight"/>
                </div>
                <div class="dialog-emty-container18">
                  <span class="dialog-emty-text12">{{ text419 }}</span>
                  <input type="text" class="dialog-emty-textinput08 input" v-model="userData.bloodGroup"/>
                </div>
                <div class="dialog-emty-container19">
                  <span class="dialog-emty-text13">{{ text4192 }}</span>
                  <select class="dialog-emty-select Content OO3_1DialogTextInput" v-model="userData.type" required>
                    <option value="staff" selected>พนักงาน</option>
                    <option value="customer">ลูกค้า</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="dialog-emty-container20">
            <div class="dialog-emty-container21">
              <div class="dialog-emty-container22">
                <div class="dialog-emty-container23">
                  <span class="dialog-emty-text14">{{ text4110 }}</span>
                  <input type="text" class="dialog-emty-textinput09 input" v-model="userData.userName"/>
                </div>
                <div class="dialog-emty-container24">
                  <span class="dialog-emty-text15">{{ text4121 }}</span>
                  <input type="password" class="dialog-emty-textinput10 input" v-model="userData.password"/>
                </div>
                <div class="dialog-emty-container25">
                  <span class="dialog-emty-text16">{{ text4131 }}</span>
                  <input type="text" class="dialog-emty-textinput11 input" v-model="userData.gender"/>
                </div>
                <div class="dialog-emty-container26">
                  <span class="dialog-emty-text17">{{ text4141 }}</span>
                  <input type="text" class="dialog-emty-textinput12 input" v-model="userData.age"/>
                </div>
                <div class="dialog-emty-container27">
                  <span class="dialog-emty-text18">{{ text4151 }}</span>
                  <input type="text" class="dialog-emty-textinput13 input" v-model="userData.birthPlace"/>
                </div>
                <div class="dialog-emty-container28">
                  <span class="dialog-emty-text19">{{ text4161 }}</span>
                  <input type="text" class="dialog-emty-textinput14 input" v-model="userData.province" />
                </div>
                <div class="dialog-emty-container29">
                  <span class="dialog-emty-text20">{{ text4171 }}</span>
                  <input type="text" class="dialog-emty-textinput15 input" v-model="userData.phone" required/>
                </div>
                <div class="dialog-emty-container30">
                  <span class="dialog-emty-text21">ผู้ติดต่อฉุกเฉิน</span>
                  <input type="text" class="dialog-emty-textinput16 input" v-model="userData.contactPerson"/>
                </div>
                <div class="dialog-emty-container31">
                  <span class="dialog-emty-text22">{{ text4191 }}</span>
                  <textarea class="dialog-emty-textarea textarea" v-model="userData.address"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="dialog-emty-container32"></div>
          <button type="submit" class="dialog-emty-button button" style="cursor: pointer;" >
            {{ button3 }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import { ref as imgref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { db } from "../composables/useFirebase"
export default {
  
  name: 'DialogEmty',
  props: {
    link_image: String,
    text2: {
      type: String,
      default: 'รหัสสมาชิก MPO-09-293-001',
    },
    text414: {
      type: String,
      default: 'ตำแหน่ง',
    },
    text41: {
      type: String,
      default: 'รหัส',
    },
    text4171: {
      type: String,
      default: 'เบอร์โทรติดต่อ',
    },
    text4121: {
      type: String,
      default: 'พาสเวิร์ด',
    },
    textinput_placeholder114: String,
    text412: {
      type: String,
      default: 'ไอดี',
    },
    text4192: {
      type: String,
      default: 'ประเภท',
    },
    textinput_placeholder11: String,
    text419: {
      type: String,
      default: 'หมู่เลือด',
    },
    text4141: {
      type: String,
      default: 'อายุ',
    },
    rootClassName: String,
    text413: {
      type: String,
      default: 'ชื่อเลน',
    },
    text: {
      type: String,
      default: 'เพิ่มข้อมูลสมาชิก',
    },
    text31: {
      type: String,
      default: 'Update 09-สค-2566',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    text416: {
      type: String,
      default: 'อีเมล์',
    },
    text4151: {
      type: String,
      default: 'สถานที่เกิด',
    },
    text4110: {
      type: String,
      default: 'ยูซเชอร์',
    },
    text4131: {
      type: String,
      default: 'เพศ',
    },
    text415: {
      type: String,
      default: 'วันเกิด',
    },
    text417: {
      type: String,
      default: 'ส่วนสูง',
    },
    button3: {
      type: String,
      default: 'บันทึกข้อมูล',
    },
    textinput_placeholder113: String,
    text418: {
      type: String,
      default: 'น้ำหนัก',
    },
    text1: {
      type: String,
      default: 'สมชาย ศรีสุวรรณจันทรา',
    },
    textinput_placeholder112: String,
    text4161: {
      type: String,
      default: 'จังหวัด',
    },
    text4191: {
      type: String,
      default: 'ที่อยู่',
    },
  },
  setup() {
    const addForm = ref(null)
    const imagesFile = ref(null);
    const userData = ref({
      name: "",
      key: "",
      id: "",
      nickName: "",
      position: "",
      birthDay: "",
      eMail: "",
      height: "",
      weight: "",
      bloodGroup: "",
      type: "",
      userName: "",
      password: "",
      gender: "",
      age: "",
      birthPlace: "",
      province: "",
      phone: "",
      contactPerson: "",
      address: "",
    })
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
    async function addUser() {
      const { db } = useFirebase()     
      const docRef = await addDoc(collection(db, "user"), {
        ...userData.value
      });
      // image
      if (imagesFile.value) {
        const { storage } = useFirebase() 
        const imagesRef =  imgref(storage, "user/" + docRef.id + "/" + imagesFile.value.name);
        await uploadBytes(imagesRef, imagesFile.value)
        const url = await getDownloadURL(imagesRef);

        // Update Image Url
        const userRef = doc(db, "user", docRef.id);
          await updateDoc(userRef, {
            avatar: url
          });
      }


      window.location.replace("employee");
    }
    return {
      addForm,
      userData,
      addUser,
      imagesFile,
      clickUpload,
      setFile
    }
  }

}
</script>

<style scoped>
.dialog-emty-container {
  width: 650px;
  height: 530px;
  display: flex;
  position: relative;
  flex-direction: column;
}
.dialog-emty-container01 {
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
.dialog-emty-text {
  color: var(--dl-color-gray-white);
  font-size: 22px;
}
.dialog-emty-icon {
  top: 13px;
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-right: 10px;
  text-decoration: none;
}
.dialog-emty-container02 {
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
.dialog-emty-container03 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.dialog-emty-form {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-self: center;
  justify-content: center;
}
.dialog-emty-link {
  display: contents;
}
.dialog-emty-image {
  width: 75px;
  height: 75px;
  align-self: flex-start;
  object-fit: cover;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 10px;
  border-radius: var(--dl-radius-radius-round);
  text-decoration: none;
}
.dialog-emty-container04 {
  flex: 0 0 auto;
  width: auto;
  height: 338px;
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
  flex-direction: column;
}
.dialog-emty-container05 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog-emty-container06 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
}
.dialog-emty-container07 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}
.dialog-emty-container08 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog-emty-container09 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog-emty-container10 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text04 {
  margin-right: 10px;
}
.dialog-emty-textinput {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text05 {
  margin-right: 10px;
}
.dialog-emty-textinput01 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text06 {
  margin-right: 10px;
}
.dialog-emty-textinput02 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container13 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text07 {
  margin-right: 10px;
}
.dialog-emty-textinput03 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container14 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text08 {
  margin-right: 10px;
}
.dialog-emty-textinput04 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text09 {
  margin-right: 10px;
}
.dialog-emty-textinput05 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text10 {
  margin-right: 10px;
}
.dialog-emty-textinput06 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text11 {
  margin-right: 10px;
}
.dialog-emty-textinput07 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container18 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text12 {
  margin-right: 10px;
}
.dialog-emty-textinput08 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container19 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text13 {
  margin-right: 10px;
}
.dialog-emty-select {
  width: 160px;
  height: 24px;
}
.dialog-emty-container20 {
  flex: 0 0 auto;
  width: auto;
  height: 348px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
}
.dialog-emty-container21 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.dialog-emty-container22 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog-emty-container23 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text14 {
  margin-right: 10px;
}
.dialog-emty-textinput09 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container24 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text15 {
  margin-right: 10px;
}
.dialog-emty-textinput10 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container25 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text16 {
  margin-right: 10px;
}
.dialog-emty-textinput11 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container26 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text17 {
  margin-right: 10px;
}
.dialog-emty-textinput12 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container27 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text18 {
  margin-right: 10px;
}
.dialog-emty-textinput13 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container28 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text19 {
  margin-right: 10px;
}
.dialog-emty-textinput14 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container29 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text20 {
  margin-right: 10px;
}
.dialog-emty-textinput15 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container30 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text21 {
  margin-right: 10px;
}
.dialog-emty-textinput16 {
  width: 160px;
  height: 24px;
  padding-top: 0.25rem;
  border-width: 1px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.25rem;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
}
.dialog-emty-text22 {
  margin-right: 10px;
}
.dialog-emty-textarea {
  width: 160px;
  height: 90px;
  background-color: var(--dl-color-gray-input);
}
.dialog-emty-container32 {
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
.dialog-emty-button {
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
.dialog-emty-root-class-name {
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: center;
}
.dialog-emty-root-class-name1 {
  top: 220px;
  left: 680px;
  position: absolute;
  align-self: center;
}
.dialog-emty-root-class-name2 {
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
  .dialog-emty-container {
    width: 650px;
    height: 530px;
  }
  .dialog-emty-container02 {
    padding: 15px;
    position: relative;
  }
  .dialog-emty-container03 {
    width: 100%;
    height: 100%;
  }
  .dialog-emty-form {
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    justify-content: center;
  }
  .dialog-emty-container04 {
    width: auto;
    height: 338px;
  }
  .dialog-emty-textinput {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput01 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput02 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput03 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput04 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput05 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput06 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput07 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput08 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-container20 {
    height: 348px;
    margin-left: 10px;
  }
  .dialog-emty-textinput09 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput10 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput11 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput12 {
    width: 160px;
    height: 24px;
  }
  .dialog-emty-textinput13 {
    width: 160px;
    height: 24px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput14 {
    width: 160px;
  }
  .dialog-emty-textinput15 {
    width: 160px;
  }
  .dialog-emty-textinput16 {
    width: 160px;
  }
  .dialog-emty-textarea {
    width: 160px;
    height: 90px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-container32 {
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
  .dialog-emty-button {
    color: var(--dl-color-gray-white);
    right: 20px;
    width: 20%;
    height: auto;
    align-self: flex-end;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
  .dialog-emty-root-class-name2 {
    margin-top: 130px;
  }
}
@media(max-width: 1366px) {
  .dialog-emty-container {
    width: 650px;
    height: 650px;
  }
  .dialog-emty-container02 {
    position: relative;
  }
  .dialog-emty-container03 {
    width: 100%;
    height: 100%;
    align-self: flex-start;
    justify-content: center;
  }
  .dialog-emty-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog-emty-image {
    align-self: flex-start;
  }
  .dialog-emty-container04 {
    width: auto;
    height: 338px;
    align-self: flex-start;
  }
  .dialog-emty-container08 {
    width: auto;
  }
  .dialog-emty-textinput {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput01 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput02 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput03 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput04 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput05 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput06 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput07 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput08 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-container20 {
    height: 348px;
    align-self: flex-start;
    margin-left: 10px;
  }
  .dialog-emty-textinput09 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput10 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput11 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput12 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput13 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput14 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput15 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textinput16 {
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-textarea {
    height: 90px;
    background-color: var(--dl-color-gray-input);
  }
  .dialog-emty-container32 {
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
  .dialog-emty-button {
    color: var(--dl-color-gray-white);
    right: 20px;
    width: 20%;
    bottom: 10px;
    position: absolute;
    border-width: 0px;
    background-color: var(--dl-color-success-green);
  }
}
@media(max-width: 991px) {
  .dialog-emty-form {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .dialog-emty-container04 {
    width: auto;
    margin-right: 10px;
  }
  .dialog-emty-container20 {
    align-self: flex-start;
    align-items: flex-end;
    margin-left: 10px;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .dialog-emty-form {
    align-items: center;
  }
}
</style>