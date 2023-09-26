<template>
  <div class="table1-container" v-bind:class="rootClassName">
    <div class="table1-container01">
      <div class="table1-container02">
        <div class="table1-container03">
          <span class="table1-text">วัน-เดือน-ปี</span>
        </div>
        <div class="table1-container04">
          <span class="table1-text01">
            <span>ชื่อ-นามสกุล</span>
            <br />
          </span>
        </div>
        <div class="table1-container05">
          <span class="table1-text04">
            <span>เบอร์โทรศัพท์</span>
            <br />
          </span>
        </div>
        <div class="table1-container06">
          <span class="table1-text07">
            <span>ผู้คีย์เข้าระบบ</span>
            <br />
          </span>
        </div>
        <div class="table1-container07">
          <span class="table1-text10">ดองมานาน </span>
        </div>
        <div class="table1-container08">
          <span class="table1-text11">เป็นทาวน์เฮาส์</span>
        </div>
        <div class="table1-container09">
          <span class="table1-text12">เป็นบ้านเดี่ยว</span>
        </div>
        <div class="table1-container10">
          <span class="table1-text13">เป็นบริษัท</span>
        </div>
        <div class="table1-container11">
          <span class="table1-text14">เป็นโรงงาน</span>
        </div>
        <div class="table1-container12">
          <span class="table1-text15">เคยฉีดปลวก</span>
        </div>
        <div class="table1-container13">
          <span class="table1-text16">
            <span>ไม่เคยฉีดปลวก</span>
            <br />
          </span>
        </div>
        <div class="table1-container14">
          <span class="table1-text19">
            <span>การดำเนีนการ</span>
            <br />
          </span>
        </div>
      </div>
      <div class="table1-container15">
        <div class="table1-container16">
          <div class="table1-container17">
            <div class="table1-container18"><span>{{ text9 }}</span></div>
            <div class="table1-container19"><span>{{ text }}</span></div>
            <div class="table1-container20"><span>{{ text2 }}</span></div>
            <div class="table1-container21"><span>{{ text3 }}</span></div>
            <div class="table1-container22"><span>{{ text4 }}</span></div>
            <div class="table1-container23"><input type="checkbox" /></div>
            <div class="table1-container24"><input type="checkbox" /></div>
            <div class="table1-container25"><input type="checkbox" /></div>
            <div class="table1-container26"><input type="checkbox" /></div>
            <div class="table1-container27"><input type="checkbox" /></div>
            <div class="table1-container28"><input type="checkbox" /></div>
            <div class="table1-container29">
              <div class="table1-container30">
                <nuxt-link to="/cusomer" class="table1-navlink">
                  <svg viewBox="0 0 1024 1024" class="table1-icon">
                    <path
                      d="M804 678q38 18 38 58v8l-32 226q-2 24-20 39t-42 15h-290q-26 0-44-18l-212-212 34-34q14-14 34-14 2 0 5 1t5 1l146 30v-458q0-28 19-46t45-18 45 18 19 46v256h34q6 0 22 4zM384 480q-86-56-86-160 0-80 56-136t136-56 136 56 56 136q0 106-84 160v-160q0-44-32-75t-76-31-75 31-31 75v160z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/schedule1" class="table1-navlink1">
                  <svg viewBox="0 0 950.8571428571428 1024" class="table1-icon02">
                    <path
                      d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/cusomer2" class="table1-navlink2">
                  <svg viewBox="0 0 1024 1024" class="table1-icon04">
                    <path
                      d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
                    ></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="table1-container31">
            <div class="table1-container32"><span>{{ text91 }}</span></div>
            <div class="table1-container33"><span>{{ text7 }}</span></div>
            <div class="table1-container34"><span>{{ text21 }}</span></div>
            <div class="table1-container35"><span>{{ text31 }}</span></div>
            <div class="table1-container36"><span>{{ text41 }}</span></div>
            <div class="table1-container37"><input type="checkbox" /></div>
            <div class="table1-container38"><input type="checkbox" /></div>
            <div class="table1-container39"><input type="checkbox" /></div>
            <div class="table1-container40"><input type="checkbox" /></div>
            <div class="table1-container41"><input type="checkbox" /></div>
            <div class="table1-container42"><input type="checkbox" /></div>
            <div class="table1-container43">
              <div class="table1-container44">
                <nuxt-link to="/cusomer" class="table1-navlink3">
                  <svg viewBox="0 0 1024 1024" class="table1-icon06">
                    <path
                      d="M804 678q38 18 38 58v8l-32 226q-2 24-20 39t-42 15h-290q-26 0-44-18l-212-212 34-34q14-14 34-14 2 0 5 1t5 1l146 30v-458q0-28 19-46t45-18 45 18 19 46v256h34q6 0 22 4zM384 480q-86-56-86-160 0-80 56-136t136-56 136 56 56 136q0 106-84 160v-160q0-44-32-75t-76-31-75 31-31 75v160z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/schedule1" class="table1-navlink4">
                  <svg viewBox="0 0 950.8571428571428 1024" class="table1-icon08">
                    <path
                      d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/cusomer2" class="table1-navlink5">
                  <svg viewBox="0 0 1024 1024" class="table1-icon10">
                    <path
                      d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
                    ></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="table1-container45">
            <div class="table1-container46"><span>{{ text92 }}</span></div>
            <div class="table1-container47"><span>{{ text8 }}</span></div>
            <div class="table1-container48"><span>{{ text22 }}</span></div>
            <div class="table1-container49"><span>{{ text32 }}</span></div>
            <div class="table1-container50"><span>{{ text42 }}</span></div>
            <div class="table1-container51"><input type="checkbox" /></div>
            <div class="table1-container52"><input type="checkbox" /></div>
            <div class="table1-container53"><input type="checkbox" /></div>
            <div class="table1-container54"><input type="checkbox" /></div>
            <div class="table1-container55"><input type="checkbox" /></div>
            <div class="table1-container56"><input type="checkbox" /></div>
            <div class="table1-container57">
              <div class="table1-container58">
                <nuxt-link to="/cusomer" class="table1-navlink6">
                  <svg viewBox="0 0 1024 1024" class="table1-icon12">
                    <path
                      d="M804 678q38 18 38 58v8l-32 226q-2 24-20 39t-42 15h-290q-26 0-44-18l-212-212 34-34q14-14 34-14 2 0 5 1t5 1l146 30v-458q0-28 19-46t45-18 45 18 19 46v256h34q6 0 22 4zM384 480q-86-56-86-160 0-80 56-136t136-56 136 56 56 136q0 106-84 160v-160q0-44-32-75t-76-31-75 31-31 75v160z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/schedule1" class="table1-navlink7">
                  <svg viewBox="0 0 950.8571428571428 1024" class="table1-icon14">
                    <path
                      d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"
                    ></path>
                  </svg>
                </nuxt-link>
                <nuxt-link to="/cusomer2" class="table1-navlink8">
                  <svg viewBox="0 0 1024 1024" class="table1-icon16">
                    <path
                      d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
                    ></path>
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table1',
  props: {
    text7: {
      type: String,
      default: 'สมชาย หมายจันทร์',
    },
    text3: {
      type: String,
      default: 'แอดมินจอย',
    },
    text41: {
      type: String,
      default: '17 วัน',
    },
    text11: {
      type: String,
      default: 'พิษณุโลก',
    },
    rootClassName: String,
    text4: {
      type: String,
      default: '17 วัน',
    },
    text2: {
      type: String,
      default: '089-998-8776',
    },
    text9: {
      type: String,
      default: '11-กก-99',
    },
    text22: {
      type: String,
      default: '089-998-8776',
    },
    text32: {
      type: String,
      default: 'แอดมินจอย',
    },
    text12: {
      type: String,
      default: 'พิษณุโลก',
    },
    text31: {
      type: String,
      default: 'แอดมินจอย',
    },
    text91: {
      type: String,
      default: '11-กก-99',
    },
    text92: {
      type: String,
      default: '11-กก-99',
    },
    text8: {
      type: String,
      default: 'สมชาย หมายจันทร์',
    },
    text1: {
      type: String,
      default: 'พิษณุโลก',
    },
    text21: {
      type: String,
      default: '089-998-8776',
    },
    text: {
      type: String,
      default: 'สมชาย หมายจันทร์',
    },
    text42: {
      type: String,
      default: '17 วัน',
    },
  },
}
</script>

<style scoped>
.table1-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.table1-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table1-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dl-color-gray-title);
}
.table1-container03 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text {
  color: var(--dl-color-gray-white);
}
.table1-container04 {
  flex: 0 0 auto;
  width: 17.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text01 {
  color: var(--dl-color-gray-white);
}
.table1-container05 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text04 {
  color: var(--dl-color-gray-white);
}
.table1-container06 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text07 {
  color: var(--dl-color-gray-white);
}
.table1-container07 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text10 {
  color: var(--dl-color-gray-white);
}
.table1-container08 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text11 {
  color: var(--dl-color-gray-white);
}
.table1-container09 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text12 {
  color: var(--dl-color-gray-white);
}
.table1-container10 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text13 {
  color: var(--dl-color-gray-white);
}
.table1-container11 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text14 {
  color: var(--dl-color-gray-white);
}
.table1-container12 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text15 {
  color: var(--dl-color-gray-white);
}
.table1-container13 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text16 {
  color: var(--dl-color-gray-white);
}
.table1-container14 {
  flex: 0 0 auto;
  width: 7.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-text19 {
  color: var(--dl-color-gray-white);
}
.table1-container15 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
}
.table1-container16 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table1-container17 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.table1-container18 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container19 {
  flex: 0 0 auto;
  width: 17.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container20 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container21 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container22 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container23 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container24 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container25 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container26 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container27 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container28 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container29 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container30 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.table1-navlink {
  display: contents;
}
.table1-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink1 {
  display: contents;
}
.table1-icon02 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink2 {
  display: contents;
}
.table1-icon04 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.table1-container31 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.table1-container32 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container33 {
  flex: 0 0 auto;
  width: 17.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container34 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container35 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container36 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container37 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container38 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container39 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container40 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container41 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container42 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container43 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container44 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.table1-navlink3 {
  display: contents;
}
.table1-icon06 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink4 {
  display: contents;
}
.table1-icon08 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink5 {
  display: contents;
}
.table1-icon10 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
.table1-container45 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px;
  align-items: center;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.table1-container46 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container47 {
  flex: 0 0 auto;
  width: 17.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container48 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container49 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container50 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container51 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container52 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container53 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container54 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container55 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container56 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container57 {
  flex: 0 0 auto;
  width: 7.5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table1-container58 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.table1-navlink6 {
  display: contents;
}
.table1-icon12 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink7 {
  display: contents;
}
.table1-icon14 {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-decoration: none;
}
.table1-navlink8 {
  display: contents;
}
.table1-icon16 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}






@media(max-width: 1366px) {
  .table1-container17 {
    align-items: center;
  }
  .table1-container31 {
    align-items: center;
  }
  .table1-container45 {
    align-items: center;
  }
}
</style>
