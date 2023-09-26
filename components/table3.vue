<template>
  <div class="table3-container" v-bind:class="rootClassName">
    <div class="table3-container001">
      <div class="table3-container002">
        <div class="table3-container003">
          <span class="table3-text">ลำดับ</span>
        </div>
        <div class="table3-container004">
          <span class="table3-text001">ไอดี</span>
        </div>
        <div class="table3-container005">
          <span class="table3-text002">ชื่อ-นามสกุล</span>
        </div>
        <div class="table3-container006">
          <span class="table3-text003">ตำแหน่ง</span>
        </div>
        <div class="table3-container007">
          <span class="table3-text004">อีเมล</span>
        </div>
        <div class="table3-container008">
          <span class="table3-text005">เบอร์โทรศัพท์</span>
        </div>
        <div class="table3-container009">
          <span class="table3-text006">บทบาท</span>
        </div>
        <div class="table3-container010">
          <span class="table3-text007">เลือก/จัดการ</span>
        </div>
      </div>
      <div class="table3-container011">
        <div class="table3-container012">
          <div class="table3-container013" v-for="(i, index) in userData" :key="index">
            <div class="table3-container014 list" @click="userDetail(i.fID)"><span>{{ index+1 }}</span></div>
            <div class="table3-container015 list" @click="userDetail(i.fID)"><span>{{ i.id }}</span></div>
            <div class="table3-container016 list" @click="userDetail(i.fID)"><span>{{ i.name }}</span></div>
            <div class="table3-container017 list" @click="userDetail(i.fID)"><span>{{ i.position }}</span></div>
            <div class="table3-container018 list" @click="userDetail(i.fID)"><span>{{ i.eMail }}</span></div>
            <div class="table3-container019 list" @click="userDetail(i.fID)"><span>{{ i.phone }}</span></div>
            <div class="table3-container020 list" @click="userDetail(i.fID)"><span>{{ i.type === 'staff' ? 'เจ้าหน้าที่' : 'ลูกค้า' }}</span></div>
            <div class="table3-container021">
              <div class="table3-container022">
                <svg viewBox="0 0 1024 1024" class="table3-icon">
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
  name: 'Table3',
  props: {
    text76: {
      type: String,
      default: 'MPO-2023-001',
    },
    text321: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text621: {
      type: String,
      default: 'แอดมิน',
    },
    text411: {
      type: String,
      default: '089-098-9887',
    },
    text43: {
      type: String,
      default: '089-098-9887',
    },
    text59: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text57: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text512: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text918: {
      type: String,
      default: '00001',
    },
    text22: {
      type: String,
      default: 'ธุรการ',
    },
    text910: {
      type: String,
      default: '00001',
    },
    text112: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text920: {
      type: String,
      default: '00001',
    },
    text96: {
      type: String,
      default: '00001',
    },
    text9214: {
      type: String,
      default: '00001',
    },
    text46: {
      type: String,
      default: '089-098-9887',
    },
    rootClassName: String,
    text322: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text318: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text28: {
      type: String,
      default: 'MPO-2023-001',
    },
    text113: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text1241: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text71: {
      type: String,
      default: 'MPO-2023-001',
    },
    text3: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text54: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text911: {
      type: String,
      default: '00001',
    },
    text1243: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text4214: {
      type: String,
      default: '089-098-9887',
    },
    text3211: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text125: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text50: {
      type: String,
      default: 'MPO-2023-001',
    },
    text317: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text4213: {
      type: String,
      default: '089-098-9887',
    },
    text27: {
      type: String,
      default: 'ธุรการ',
    },
    text19: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text72: {
      type: String,
      default: 'MPO-2023-001',
    },
    text66: {
      type: String,
      default: 'แอดมิน',
    },
    text6: {
      type: String,
      default: 'แอดมิน',
    },
    text120: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text65: {
      type: String,
      default: 'แอดมิน',
    },
    text9211: {
      type: String,
      default: '00001',
    },
    text6212: {
      type: String,
      default: 'แอดมิน',
    },
    text37: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text610: {
      type: String,
      default: 'แอดมิน',
    },
    text99: {
      type: String,
      default: '00001',
    },
    text52: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text9213: {
      type: String,
      default: '00001',
    },
    text513: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text319: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text7: {
      type: String,
      default: 'MPO-2023-001',
    },
    text95: {
      type: String,
      default: '00001',
    },
    text320: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text51: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text613: {
      type: String,
      default: 'แอดมิน',
    },
    text29: {
      type: String,
      default: 'ธุรการ',
    },
    text783: {
      type: String,
      default: 'MPO-2023-001',
    },
    text79: {
      type: String,
      default: 'MPO-2023-001',
    },
    text4212: {
      type: String,
      default: '089-098-9887',
    },
    text314: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text6214: {
      type: String,
      default: 'แอดมิน',
    },
    text521: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text6211: {
      type: String,
      default: 'แอดมิน',
    },
    text9212: {
      type: String,
      default: '00001',
    },
    text221: {
      type: String,
      default: 'ธุรการ',
    },
    text70: {
      type: String,
      default: 'MPO-2023-001',
    },
    text5: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text116: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text48: {
      type: String,
      default: '089-098-9887',
    },
    text215: {
      type: String,
      default: 'ธุรการ',
    },
    text122: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text26: {
      type: String,
      default: 'ธุรการ',
    },
    text211: {
      type: String,
      default: 'ธุรการ',
    },
    text784: {
      type: String,
      default: 'MPO-2023-001',
    },
    text53: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text34: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text913: {
      type: String,
      default: '00001',
    },
    text921: {
      type: String,
      default: '00001',
    },
    text3212: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text214: {
      type: String,
      default: 'ธุรการ',
    },
    text3213: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text4211: {
      type: String,
      default: '089-098-9887',
    },
    text8: {
      type: String,
      default: 'MPO-2023-001',
    },
    text515: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text118: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text210: {
      type: String,
      default: 'ธุรการ',
    },
    text316: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text416: {
      type: String,
      default: '089-098-9887',
    },
    text312: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text77: {
      type: String,
      default: 'MPO-2023-001',
    },
    text25: {
      type: String,
      default: 'ธุรการ',
    },
    text16: {
      type: String,
      default: 'MPO-2023-001',
    },
    text410: {
      type: String,
      default: '089-098-9887',
    },
    text119: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text420: {
      type: String,
      default: '089-098-9887',
    },
    text40: {
      type: String,
      default: 'MPO-2023-001',
    },
    text56: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text47: {
      type: String,
      default: '089-098-9887',
    },
    text1244: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text41: {
      type: String,
      default: '089-098-9887',
    },
    text2221: {
      type: String,
      default: 'ธุรการ',
    },
    text220: {
      type: String,
      default: 'ธุรการ',
    },
    text216: {
      type: String,
      default: 'ธุรการ',
    },
    text620: {
      type: String,
      default: 'แอดมิน',
    },
    text114: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text517: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text124: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text311: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text97: {
      type: String,
      default: '00001',
    },
    text518: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text69: {
      type: String,
      default: 'แอดมิน',
    },
    text58: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text64: {
      type: String,
      default: 'แอดมิน',
    },
    text36: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text213: {
      type: String,
      default: 'ธุรการ',
    },
    text75: {
      type: String,
      default: 'MPO-2023-001',
    },
    text917: {
      type: String,
      default: '00001',
    },
    text14: {
      type: String,
      default: 'MPO-2023-001',
    },
    text612: {
      type: String,
      default: 'แอดมิน',
    },
    text12: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text2223: {
      type: String,
      default: 'ธุรการ',
    },
    text123: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text49: {
      type: String,
      default: '089-098-9887',
    },
    text413: {
      type: String,
      default: '089-098-9887',
    },
    text223: {
      type: String,
      default: 'ธุรการ',
    },
    text21: {
      type: String,
      default: 'ธุรการ',
    },
    text618: {
      type: String,
      default: 'แอดมิน',
    },
    text24: {
      type: String,
      default: 'ธุรการ',
    },
    text614: {
      type: String,
      default: 'แอดมิน',
    },
    text11: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text520: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text222: {
      type: String,
      default: 'ธุรการ',
    },
    text616: {
      type: String,
      default: 'แอดมิน',
    },
    text98: {
      type: String,
      default: '00001',
    },
    text414: {
      type: String,
      default: '089-098-9887',
    },
    text510: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text1242: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text1: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text916: {
      type: String,
      default: '00001',
    },
    text: {
      type: String,
      default: 'MPO-2023-001',
    },
    text35: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text782: {
      type: String,
      default: 'MPO-2023-001',
    },
    text217: {
      type: String,
      default: 'ธุรการ',
    },
    text31: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text18: {
      type: String,
      default: 'MPO-2023-001',
    },
    text218: {
      type: String,
      default: 'ธุรการ',
    },
    text781: {
      type: String,
      default: 'MPO-2023-001',
    },
    text20: {
      type: String,
      default: 'MPO-2023-001',
    },
    text42: {
      type: String,
      default: '089-098-9887',
    },
    text17: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text516: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text611: {
      type: String,
      default: 'แอดมิน',
    },
    text412: {
      type: String,
      default: '089-098-9887',
    },
    text62: {
      type: String,
      default: 'แอดมิน',
    },
    text61: {
      type: String,
      default: 'แอดมิน',
    },
    text110: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text219: {
      type: String,
      default: 'ธุรการ',
    },
    text914: {
      type: String,
      default: '00001',
    },
    text313: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text419: {
      type: String,
      default: '089-098-9887',
    },
    text78: {
      type: String,
      default: 'MPO-2023-001',
    },
    text919: {
      type: String,
      default: '00001',
    },
    text511: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text514: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text73: {
      type: String,
      default: 'MPO-2023-001',
    },
    text55: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text15: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text63: {
      type: String,
      default: 'แอดมิน',
    },
    text912: {
      type: String,
      default: '00001',
    },
    text30: {
      type: String,
      default: 'MPO-2023-001',
    },
    text421: {
      type: String,
      default: '089-098-9887',
    },
    text92: {
      type: String,
      default: '00001',
    },
    text617: {
      type: String,
      default: 'แอดมิน',
    },
    text615: {
      type: String,
      default: 'แอดมิน',
    },
    text922: {
      type: String,
      default: '00001',
    },
    text23: {
      type: String,
      default: 'ธุรการ',
    },
    text9: {
      type: String,
      default: '00001',
    },
    text94: {
      type: String,
      default: '00001',
    },
    text10: {
      type: String,
      default: 'MPO-2023-001',
    },
    text622: {
      type: String,
      default: 'แอดมิน',
    },
    text2224: {
      type: String,
      default: 'ธุรการ',
    },
    text44: {
      type: String,
      default: '089-098-9887',
    },
    text417: {
      type: String,
      default: '089-098-9887',
    },
    text111: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text32: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text315: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text519: {
      type: String,
      default: 'เลขที่ 1177 ชั้น 23. อาคารเพิร์ล แบงก์ค็อก ถนนพหลโยธิน...',
    },
    text38: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text121: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text39: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text117: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text13: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text415: {
      type: String,
      default: '089-098-9887',
    },
    text115: {
      type: String,
      default: 'นายสมชาย ศรีสุวรรณจันทรา',
    },
    text45: {
      type: String,
      default: '089-098-9887',
    },
    text74: {
      type: String,
      default: 'MPO-2023-001',
    },
    text310: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text2: {
      type: String,
      default: 'ธุรการ',
    },
    text3214: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text212: {
      type: String,
      default: 'ธุรการ',
    },
    text418: {
      type: String,
      default: '089-098-9887',
    },
    text68: {
      type: String,
      default: 'แอดมิน',
    },
    text6213: {
      type: String,
      default: 'แอดมิน',
    },
    text33: {
      type: String,
      default: 'somchai@gmail.com',
    },
    text4: {
      type: String,
      default: '089-098-9887',
    },
    text915: {
      type: String,
      default: '00001',
    },
    text619: {
      type: String,
      default: 'แอดมิน',
    },
    text422: {
      type: String,
      default: '089-098-9887',
    },
    text60: {
      type: String,
      default: 'MPO-2023-001',
    },
    text2222: {
      type: String,
      default: 'ธุรการ',
    },
    text67: {
      type: String,
      default: 'แอดมิน',
    },
    text93: {
      type: String,
      default: '00001',
    },
    text91: {
      type: String,
      default: '00001',
    },
  },
  setup() {
    const userData = ref(null)
    async function getUser() {
      let data = []
      const { db } = useFirebase()    
      const user = query(collection(db, "user"), where("type", "==", "staff")); 
      const querySnapshot = await getDocs(user);
      querySnapshot.forEach((doc) => {
        data.push({...doc.data(), fID: doc.id})
      });
      userData.value = data
    }
    function userDetail(fID) {
      location.assign(`employeeid/${fID}`);
    }
    onMounted(() => {
      getUser()
    }) 
    return {
      userData,
      userDetail
    }
  }
}
</script>

<style scoped>
.list {
  color: blue;
  cursor: pointer;
}
.table3-container {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.table3-container001 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table3-container002 {
  flex: 0 0 auto;
  width: 100%;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dl-color-gray-title);
}
.table3-container003 {
  flex: 0 0 auto;
  width: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text {
  color: var(--dl-color-gray-white);
}
.table3-container004 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text001 {
  color: var(--dl-color-gray-white);
}
.table3-container005 {
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text002 {
  color: var(--dl-color-gray-white);
}
.table3-container006 {
  flex: 0 0 auto;
  width: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text003 {
  color: var(--dl-color-gray-white);
}
.table3-container007 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text004 {
  color: var(--dl-color-gray-white);
}
.table3-container008 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text005 {
  color: var(--dl-color-gray-white);
}
.table3-container009 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text006 {
  color: var(--dl-color-gray-white);
}
.table3-container010 {
  flex: 0 0 auto;
  width: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-text007 {
  color: var(--dl-color-gray-white);
}
.table3-container011 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
}
.table3-container012 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.table3-container013 {
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
.table3-container014 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container015 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container016 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container017 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container018 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container019 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container020 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container021 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container022 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container023 {
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
.table3-container024 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container025 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container026 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container027 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container028 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container029 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container030 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container031 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container032 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon02 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container033 {
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
.table3-container034 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container035 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container036 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container037 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container038 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container039 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container040 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container041 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container042 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon04 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container043 {
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
.table3-container044 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container045 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container046 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container047 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container048 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container049 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container050 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container051 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container052 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon06 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container053 {
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
.table3-container054 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container055 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container056 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container057 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container058 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container059 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container060 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container061 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container062 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon08 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container063 {
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
.table3-container064 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container065 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container066 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container067 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container068 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container069 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container070 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container071 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container072 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon10 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container073 {
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
.table3-container074 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container075 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container076 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container077 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container078 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container079 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container080 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container081 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container082 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon12 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container083 {
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
.table3-container084 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container085 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container086 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container087 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container088 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container089 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container090 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container091 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container092 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon14 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container093 {
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
.table3-container094 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container095 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container096 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container097 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container098 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container099 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container100 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container101 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container102 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon16 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container103 {
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
.table3-container104 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container105 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container106 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container107 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container108 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container109 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container110 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container111 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container112 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon18 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container113 {
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
.table3-container114 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container115 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container116 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container117 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container118 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container119 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container120 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container121 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container122 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon20 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container123 {
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
.table3-container124 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container125 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container126 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container127 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container128 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container129 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container130 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container131 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container132 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon22 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container133 {
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
.table3-container134 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container135 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container136 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container137 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container138 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container139 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container140 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container141 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container142 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon24 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container143 {
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
.table3-container144 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container145 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container146 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container147 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container148 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container149 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container150 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container151 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container152 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon26 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container153 {
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
.table3-container154 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container155 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container156 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container157 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container158 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container159 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container160 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container161 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container162 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon28 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container163 {
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
.table3-container164 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container165 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container166 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container167 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container168 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container169 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container170 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container171 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container172 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon30 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container173 {
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
.table3-container174 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container175 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container176 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container177 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container178 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container179 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container180 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container181 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container182 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon32 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container183 {
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
.table3-container184 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container185 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container186 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container187 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container188 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container189 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container190 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container191 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container192 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon34 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container193 {
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
.table3-container194 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container195 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container196 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container197 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container198 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container199 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container200 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container201 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container202 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon36 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container203 {
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
.table3-container204 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container205 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container206 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container207 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container208 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container209 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container210 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container211 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container212 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon38 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container213 {
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
.table3-container214 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container215 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container216 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container217 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container218 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container219 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container220 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container221 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container222 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon40 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container223 {
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
.table3-container224 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container225 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container226 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container227 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container228 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container229 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container230 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container231 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container232 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon42 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container233 {
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
.table3-container234 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container235 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container236 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container237 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container238 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container239 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container240 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container241 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container242 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon44 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container243 {
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
.table3-container244 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container245 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container246 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container247 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container248 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container249 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container250 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container251 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container252 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon46 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container253 {
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
.table3-container254 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container255 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container256 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container257 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container258 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container259 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container260 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container261 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container262 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon48 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container263 {
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
.table3-container264 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container265 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container266 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container267 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container268 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container269 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container270 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container271 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container272 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon50 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.table3-container273 {
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
.table3-container274 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container275 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container276 {
  flex: 0 0 auto;
  width: 15%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container277 {
  flex: 0 0 auto;
  width: 5%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container278 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container279 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container280 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container281 {
  flex: 0 0 auto;
  width: 10%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.table3-container282 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}
.table3-icon52 {
  width: 20px;
  height: 20px;
  margin-right: 20px;
}




@media(max-width: 1366px) {
  .table3-container013 {
    align-items: center;
  }
  .table3-container023 {
    align-items: center;
  }
  .table3-container033 {
    align-items: center;
  }
  .table3-container043 {
    align-items: center;
  }
  .table3-container053 {
    align-items: center;
  }
  .table3-container063 {
    align-items: center;
  }
  .table3-container073 {
    align-items: center;
  }
  .table3-container083 {
    align-items: center;
  }
  .table3-container093 {
    align-items: center;
  }
  .table3-container103 {
    align-items: center;
  }
  .table3-container113 {
    align-items: center;
  }
  .table3-container123 {
    align-items: center;
  }
  .table3-container133 {
    align-items: center;
  }
  .table3-container143 {
    align-items: center;
  }
  .table3-container153 {
    align-items: center;
  }
  .table3-container163 {
    align-items: center;
  }
  .table3-container173 {
    align-items: center;
  }
  .table3-container183 {
    align-items: center;
  }
  .table3-container193 {
    align-items: center;
  }
  .table3-container203 {
    align-items: center;
  }
  .table3-container213 {
    align-items: center;
  }
  .table3-container223 {
    align-items: center;
  }
  .table3-container233 {
    align-items: center;
  }
  .table3-container243 {
    align-items: center;
  }
  .table3-container253 {
    align-items: center;
  }
  .table3-container263 {
    align-items: center;
  }
  .table3-container273 {
    align-items: center;
  }
}
</style>
