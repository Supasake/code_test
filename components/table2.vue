<template>
  <div class="table2-container" v-bind:class="rootClassName">
    <div class="table2-container001">
      <div class="table2-container002">
        <div class="table2-container003">
          <span class="table2-text">ลำดับ</span>
        </div>
        <div class="table2-container004">
          <span class="table2-text001">ไอดี</span>
        </div>
        <div class="table2-container005">
          <span class="table2-text002">ชื่อ-นามสกุล</span>
        </div>
        <div class="table2-container006">
          <span class="table2-text003">ตำแหน่ง</span>
        </div>
        <div class="table2-container007">
          <span class="table2-text004">อีเมล</span>
        </div>
        <div class="table2-container008">
          <span class="table2-text005">เบอร์โทรศัพท์</span>
        </div>
        <div class="table2-container009">
          <span class="table2-text006">บทบาทในระบบ</span>
        </div>
        <div class="table2-container010">
          <span class="table2-text007">เลือก/จัดการ</span>
        </div>
      </div>
      <div class="table2-container011">
        <div class="table2-container012">
          <div class="table2-container013" v-for="(i, index) in customerData" :key="index">
            <div class="table2-container014"><span>{{ index+1 }}</span></div>
            <div class="table2-container015"><span>{{ i.id }}</span></div>
            <div class="table2-container016"><span>{{ i.name }}</span></div>
            <div class="table2-container017"><span>{{ i.position }}</span></div>
            <div class="table2-container018"><span>{{ i.eMail }}</span></div>
            <div class="table2-container019"><span>{{ i.phone }}</span></div>
            <div class="table2-container020"><span>{{ i.type === 'staff' ? 'เจ้าหน้าที่' : 'ลูกค้า' }}</span></div>
            <div class="table2-container021">
              <div class="table2-container022">
                <svg viewBox="0 0 1024 1024" class="table2-icon">
                  <path
                    d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
                  ></path>
                </svg>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { collection, getDocs, query, where } from "firebase/firestore";
export default {
  name: 'Table2',
  props: {
    text624: {
      type: String,
      default: 'แอดมิน',
    },
    text224: {
      type: String,
      default: 'ลูกค้า',
    },
    text30: {
      type: String,
      default: 'MPO-2023-001',
    },
    text920: {
      type: String,
      default: '00001',
    },
    text420: {
      type: String,
      default: '089-098-9887',
    },
    text1: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text5: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text92: {
      type: String,
      default: '00001',
    },
    text18: {
      type: String,
      default: 'MPO-2023-001',
    },
    text98: {
      type: String,
      default: '00001',
    },
    text510: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text22: {
      type: String,
      default: 'ลูกค้า',
    },
    text51: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text52: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text225: {
      type: String,
      default: 'ลูกค้า',
    },
    text4: {
      type: String,
      default: '089-098-9887',
    },
    text514: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text2: {
      type: String,
      default: 'ลูกค้า',
    },
    text32: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text53: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text31: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text23: {
      type: String,
      default: 'ลูกค้า',
    },
    text521: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text115: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text36: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text620: {
      type: String,
      default: 'แอดมิน',
    },
    text426: {
      type: String,
      default: '089-098-9887',
    },
    text917: {
      type: String,
      default: '00001',
    },
    text614: {
      type: String,
      default: 'แอดมิน',
    },
    text19: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text411: {
      type: String,
      default: '089-098-9887',
    },
    text622: {
      type: String,
      default: 'แอดมิน',
    },
    text422: {
      type: String,
      default: '089-098-9887',
    },
    text612: {
      type: String,
      default: 'แอดมิน',
    },
    text625: {
      type: String,
      default: 'แอดมิน',
    },
    text425: {
      type: String,
      default: '089-098-9887',
    },
    text15: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text214: {
      type: String,
      default: 'ลูกค้า',
    },
    text40: {
      type: String,
      default: 'MPO-2023-001',
    },
    text42: {
      type: String,
      default: '089-098-9887',
    },
    text9: {
      type: String,
      default: '00001',
    },
    text517: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text25: {
      type: String,
      default: 'ลูกค้า',
    },
    text220: {
      type: String,
      default: 'ลูกค้า',
    },
    text7: {
      type: String,
      default: 'MPO-2023-001',
    },
    text72: {
      type: String,
      default: 'MPO-2023-001',
    },
    text129: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text16: {
      type: String,
      default: 'MPO-2023-001',
    },
    text324: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text218: {
      type: String,
      default: 'ลูกค้า',
    },
    text81: {
      type: String,
      default: 'MPO-2023-001',
    },
    text511: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text626: {
      type: String,
      default: 'แอดมิน',
    },
    text313: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text210: {
      type: String,
      default: 'ลูกค้า',
    },
    text114: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text49: {
      type: String,
      default: '089-098-9887',
    },
    text125: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text38: {
      type: String,
      default: 'somchai@gmail.com',
    },
    rootClassName: String,
    text59: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text412: {
      type: String,
      default: '089-098-9887',
    },
    text64: {
      type: String,
      default: 'แอดมิน',
    },
    text314: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text26: {
      type: String,
      default: 'ลูกค้า',
    },
    text322: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text421: {
      type: String,
      default: '089-098-9887',
    },
    text919: {
      type: String,
      default: '00001',
    },
    text45: {
      type: String,
      default: '089-098-9887',
    },
    text6: {
      type: String,
      default: 'แอดมิน',
    },
    text61: {
      type: String,
      default: 'แอดมิน',
    },
    text423: {
      type: String,
      default: '089-098-9887',
    },
    text515: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text21: {
      type: String,
      default: 'ลูกค้า',
    },
    text56: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text918: {
      type: String,
      default: '00001',
    },
    text119: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text419: {
      type: String,
      default: '089-098-9887',
    },
    text124: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text922: {
      type: String,
      default: '00001',
    },
    text619: {
      type: String,
      default: 'แอดมิน',
    },
    text99: {
      type: String,
      default: '00001',
    },
    text914: {
      type: String,
      default: '00001',
    },
    text211: {
      type: String,
      default: 'ลูกค้า',
    },
    text34: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text916: {
      type: String,
      default: '00001',
    },
    text925: {
      type: String,
      default: '00001',
    },
    text20: {
      type: String,
      default: 'MPO-2023-001',
    },
    text3: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text913: {
      type: String,
      default: '00001',
    },
    text520: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text37: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text80: {
      type: String,
      default: 'MPO-2023-001',
    },
    text319: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text623: {
      type: String,
      default: 'แอดมิน',
    },
    text617: {
      type: String,
      default: 'แอดมิน',
    },
    text: {
      type: String,
      default: 'MPO-2023-001',
    },
    text222: {
      type: String,
      default: 'ลูกค้า',
    },
    text910: {
      type: String,
      default: '00001',
    },
    text10: {
      type: String,
      default: 'MPO-2023-001',
    },
    text312: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text66: {
      type: String,
      default: 'แอดมิน',
    },
    text54: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text8: {
      type: String,
      default: 'MPO-2023-001',
    },
    text47: {
      type: String,
      default: '089-098-9887',
    },
    text923: {
      type: String,
      default: '00001',
    },
    text310: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text48: {
      type: String,
      default: '089-098-9887',
    },
    text91: {
      type: String,
      default: '00001',
    },
    text97: {
      type: String,
      default: '00001',
    },
    text77: {
      type: String,
      default: 'MPO-2023-001',
    },
    text318: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text11: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text128: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text116: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text410: {
      type: String,
      default: '089-098-9887',
    },
    text78: {
      type: String,
      default: 'MPO-2023-001',
    },
    text519: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text417: {
      type: String,
      default: '089-098-9887',
    },
    text911: {
      type: String,
      default: '00001',
    },
    text325: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text44: {
      type: String,
      default: '089-098-9887',
    },
    text68: {
      type: String,
      default: 'แอดมิน',
    },
    text316: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text58: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text96: {
      type: String,
      default: '00001',
    },
    text65: {
      type: String,
      default: 'แอดมิน',
    },
    text33: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text83: {
      type: String,
      default: 'MPO-2023-001',
    },
    text512: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text418: {
      type: String,
      default: '089-098-9887',
    },
    text73: {
      type: String,
      default: 'MPO-2023-001',
    },
    text70: {
      type: String,
      default: 'MPO-2023-001',
    },
    text924: {
      type: String,
      default: '00001',
    },
    text320: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text416: {
      type: String,
      default: '089-098-9887',
    },
    text27: {
      type: String,
      default: 'ลูกค้า',
    },
    text50: {
      type: String,
      default: 'MPO-2023-001',
    },
    text118: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text516: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text13: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text67: {
      type: String,
      default: 'แอดมิน',
    },
    text121: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text112: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text219: {
      type: String,
      default: 'ลูกค้า',
    },
    text94: {
      type: String,
      default: '00001',
    },
    text29: {
      type: String,
      default: 'ลูกค้า',
    },
    text39: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text227: {
      type: String,
      default: 'ลูกค้า',
    },
    text57: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text926: {
      type: String,
      default: '00001',
    },
    text424: {
      type: String,
      default: '089-098-9887',
    },
    text315: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text215: {
      type: String,
      default: 'ลูกค้า',
    },
    text912: {
      type: String,
      default: '00001',
    },
    text216: {
      type: String,
      default: 'ลูกค้า',
    },
    text24: {
      type: String,
      default: 'ลูกค้า',
    },
    text71: {
      type: String,
      default: 'MPO-2023-001',
    },
    text28: {
      type: String,
      default: 'MPO-2023-001',
    },
    text621: {
      type: String,
      default: 'แอดมิน',
    },
    text123: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text111: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text618: {
      type: String,
      default: 'แอดมิน',
    },
    text60: {
      type: String,
      default: 'MPO-2023-001',
    },
    text326: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text12: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text14: {
      type: String,
      default: 'MPO-2023-001',
    },
    text317: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text17: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text223: {
      type: String,
      default: 'ลูกค้า',
    },
    text414: {
      type: String,
      default: '089-098-9887',
    },
    text323: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text126: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text217: {
      type: String,
      default: 'ลูกค้า',
    },
    text63: {
      type: String,
      default: 'แอดมิน',
    },
    text41: {
      type: String,
      default: '089-098-9887',
    },
    text110: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text76: {
      type: String,
      default: 'MPO-2023-001',
    },
    text415: {
      type: String,
      default: '089-098-9887',
    },
    text35: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text46: {
      type: String,
      default: '089-098-9887',
    },
    text213: {
      type: String,
      default: 'ลูกค้า',
    },
    text74: {
      type: String,
      default: 'MPO-2023-001',
    },
    text79: {
      type: String,
      default: 'MPO-2023-001',
    },
    text616: {
      type: String,
      default: 'แอดมิน',
    },
    text615: {
      type: String,
      default: 'แอดมิน',
    },
    text226: {
      type: String,
      default: 'ลูกค้า',
    },
    text915: {
      type: String,
      default: '00001',
    },
    text117: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text518: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text55: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text95: {
      type: String,
      default: '00001',
    },
    text120: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text93: {
      type: String,
      default: '00001',
    },
    text921: {
      type: String,
      default: '00001',
    },
    text311: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text413: {
      type: String,
      default: '089-098-9887',
    },
    text43: {
      type: String,
      default: '089-098-9887',
    },
    text62: {
      type: String,
      default: 'แอดมิน',
    },
    text611: {
      type: String,
      default: 'แอดมิน',
    },
    text513: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text212: {
      type: String,
      default: 'ลูกค้า',
    },
    text82: {
      type: String,
      default: 'MPO-2023-001',
    },
    text221: {
      type: String,
      default: 'ลูกค้า',
    },
    text321: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text69: {
      type: String,
      default: 'แอดมิน',
    },
    text610: {
      type: String,
      default: 'แอดมิน',
    },
    text122: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text127: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text613: {
      type: String,
      default: 'แอดมิน',
    },
    text75: {
      type: String,
      default: 'MPO-2023-001',
    },
    text113: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
  },
  setup() {
    const customerData = ref()
    async function getCustomer() {
      let data = []
      const { db } = useFirebase()    
      const user = query(collection(db, "user"), where("type", "==", "customer")); 
      const querySnapshot = await getDocs(user);
      querySnapshot.forEach((doc) => {
        data.push({...doc.data(), fID: doc.id})
      });
      customerData.value = data
    }
    onMounted(() => {
      getCustomer()
    }) 
    return {
      customerData,
      getCustomer
    }
  }
}
</script>

<style scoped>
.table2-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.table2-container001 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table2-container002 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dl-color-gray-title);
}
.table2-container003 {
  flex: 0 0 auto;
  width: 5%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.table2-text {
  color: var(--dl-color-gray-white);
  align-self: center;
}
.table2-container004 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text001 {
  color: var(--dl-color-gray-white);
}
.table2-container005 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text002 {
  color: var(--dl-color-gray-white);
}
.table2-container006 {
  flex: 0 0 auto;
  width: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text003 {
  color: var(--dl-color-gray-white);
}
.table2-container007 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text004 {
  color: var(--dl-color-gray-white);
}
.table2-container008 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text005 {
  color: var(--dl-color-gray-white);
}
.table2-container009 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text006 {
  color: var(--dl-color-gray-white);
}
.table2-container010 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-text007 {
  color: var(--dl-color-gray-white);
  align-self: center;
}
.table2-container011 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
}
.table2-container012 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table2-container013 {
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
.table2-container014 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container015 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container016 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container017 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container018 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container019 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container020 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container021 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container022 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container023 {
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
.table2-container024 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container025 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container026 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container027 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container028 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container029 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container030 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container031 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container032 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon02 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container033 {
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
.table2-container034 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container035 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container036 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container037 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container038 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container039 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container040 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container041 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container042 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon04 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container043 {
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
.table2-container044 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container045 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container046 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container047 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container048 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container049 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container050 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container051 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container052 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon06 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container053 {
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
.table2-container054 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container055 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container056 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container057 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container058 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container059 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container060 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container061 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container062 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon08 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container063 {
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
.table2-container064 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container065 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container066 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container067 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container068 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container069 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container070 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container071 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container072 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon10 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container073 {
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
.table2-container074 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container075 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container076 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container077 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container078 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container079 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container080 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container081 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container082 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon12 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container083 {
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
.table2-container084 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container085 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container086 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container087 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container088 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container089 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container090 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container091 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container092 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon14 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container093 {
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
.table2-container094 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container095 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container096 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container097 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container098 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container099 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container100 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container101 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container102 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon16 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container103 {
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
.table2-container104 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container105 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container106 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container107 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container108 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container109 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container110 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container111 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container112 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon18 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container113 {
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
.table2-container114 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container115 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container116 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container117 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container118 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container119 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container120 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container121 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container122 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon20 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container123 {
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
.table2-container124 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container125 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container126 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container127 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container128 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container129 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container130 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container131 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container132 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon22 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container133 {
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
.table2-container134 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container135 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container136 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container137 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container138 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container139 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container140 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container141 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container142 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon24 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container143 {
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
.table2-container144 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container145 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container146 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container147 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container148 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container149 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container150 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container151 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container152 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon26 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container153 {
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
.table2-container154 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container155 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container156 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container157 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container158 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container159 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container160 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container161 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container162 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon28 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container163 {
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
.table2-container164 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container165 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container166 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container167 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container168 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container169 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container170 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container171 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container172 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon30 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container173 {
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
.table2-container174 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container175 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container176 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container177 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container178 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container179 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container180 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container181 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container182 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon32 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container183 {
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
.table2-container184 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container185 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container186 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container187 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container188 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container189 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container190 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container191 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container192 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon34 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container193 {
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
.table2-container194 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container195 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container196 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container197 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container198 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container199 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container200 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container201 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container202 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon36 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container203 {
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
.table2-container204 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container205 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container206 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container207 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container208 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container209 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container210 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container211 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container212 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon38 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container213 {
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
.table2-container214 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container215 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container216 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container217 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container218 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container219 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container220 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container221 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container222 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon40 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container223 {
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
.table2-container224 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container225 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container226 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container227 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container228 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container229 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container230 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container231 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container232 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon42 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container233 {
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
.table2-container234 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container235 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container236 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container237 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container238 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container239 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container240 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container241 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container242 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon44 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container243 {
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
.table2-container244 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container245 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container246 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container247 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container248 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container249 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container250 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container251 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container252 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon46 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container253 {
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
.table2-container254 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container255 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container256 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container257 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container258 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container259 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container260 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container261 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container262 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon48 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container263 {
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
.table2-container264 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container265 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container266 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container267 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container268 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container269 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container270 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container271 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container272 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon50 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table2-container273 {
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
.table2-container274 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container275 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container276 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container277 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container278 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container279 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container280 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container281 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table2-container282 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table2-icon52 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}




@media(max-width: 1366px) {
  .table2-container013 {
    align-items: center;
  }
  .table2-container023 {
    align-items: center;
  }
  .table2-container033 {
    align-items: center;
  }
  .table2-container043 {
    align-items: center;
  }
  .table2-container053 {
    align-items: center;
  }
  .table2-container063 {
    align-items: center;
  }
  .table2-container073 {
    align-items: center;
  }
  .table2-container083 {
    align-items: center;
  }
  .table2-container093 {
    align-items: center;
  }
  .table2-container103 {
    align-items: center;
  }
  .table2-container113 {
    align-items: center;
  }
  .table2-container123 {
    align-items: center;
  }
  .table2-container133 {
    align-items: center;
  }
  .table2-container143 {
    align-items: center;
  }
  .table2-container153 {
    align-items: center;
  }
  .table2-container163 {
    align-items: center;
  }
  .table2-container173 {
    align-items: center;
  }
  .table2-container183 {
    align-items: center;
  }
  .table2-container193 {
    align-items: center;
  }
  .table2-container203 {
    align-items: center;
  }
  .table2-container213 {
    align-items: center;
  }
  .table2-container223 {
    align-items: center;
  }
  .table2-container233 {
    align-items: center;
  }
  .table2-container243 {
    align-items: center;
  }
  .table2-container253 {
    align-items: center;
  }
  .table2-container263 {
    align-items: center;
  }
  .table2-container273 {
    align-items: center;
  }
}
</style>
