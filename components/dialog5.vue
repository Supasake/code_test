<template>
  <div class="dialog5-container" v-bind:class="rootClassName">
    <div class="dialog5-container1">
      <div class="dialog5-container2">
        <svg viewBox="0 0 1024 1024" class="dialog5-icon">
          <path
            d="M512 854q140 0 241-101t101-241q0-44-14-96-44 10-98 10-92 0-193-53t-153-127q-66 160-224 230-2 12-2 36 0 140 101 241t241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM640 502q22 0 38 15t16 37-16 38-38 16-38-16-16-38 16-37 38-15zM384 502q22 0 38 15t16 37-16 38-38 16-38-16-16-38 16-37 38-15z"
          ></path>
        </svg>
      </div>
      <div class="dialog5-container3">
        <div class="dialog5-container4">
          <span class="dialog5-text">{{ text }}</span>
        </div>
        <div class="dialog5-container5">
          <span class="dialog5-text1">{{ text1 }}</span>
        </div>
        <div class="dialog5-container6">
          <div class="dialog5-container7">
            <span class="dialog5-text2">{{ text2 }}</span>
          </div>
          <div class="dialog5-container8">
            <span class="dialog5-text3">{{ text3 }}</span>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" class="dialog5-icon2">
        <path
          d="M554 384v-86h-84v86h84zM554 726v-256h-84v256h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog5',
  props: {
    text2: {
      type: String,
      default: 'ติดต่อ 01  มค 66',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'ชื่อเล่น ชื่อจริง-นามสกุล',
    },
    text1: {
      type: String,
      default: 'ประเภทบ้านเดี่ยว > ต้องการทำนัดเลย',
    },
    text3: {
      type: String,
      default: 'รอมา  7  วัน',
    },
  },
}
</script>

<style scoped>
.dialog5-container {
  width: 250px;
  height: 85px;
  display: flex;
  position: relative;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 0px;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dialog5-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-color: #B6B8BA;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  background-color: var(--dl-color-gray-white);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.dialog5-container2 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  margin-right: 5px;
  flex-direction: column;
}
.dialog5-icon {
  width: 30px;
  height: 30px;
}
.dialog5-container3 {
  flex: 0 0 auto;
  width: 84%;
  display: flex;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  flex-direction: column;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog5-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 2px;
  align-items: flex-start;
}
.dialog5-text {
  width: 100%;
  font-size: 24px;
}
.dialog5-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: #B6B8BA;
  border-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.dialog5-text1 {
  font-size: 16px;
}
.dialog5-container6 {
  flex: 0 0 auto;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-between;
}
.dialog5-container7 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.dialog5-text2 {
  font-size: 16px;
}
.dialog5-container8 {
  flex: 0 0 auto;
  width: auto;
  display: flex;
  flex-direction: column;
}
.dialog5-text3 {
  font-size: 16px;
}
.dialog5-icon2 {
  top: 4px;
  right: 4px;
  width: 15px;
  height: 15px;
  position: absolute;
}
.dialog5-root-class-name {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name1 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name2 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name3 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name4 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name5 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name6 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name7 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name8 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name9 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name10 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name11 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name12 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name13 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name14 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name15 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name16 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name17 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name18 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name19 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name20 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name21 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name22 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name23 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name24 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name25 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name26 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name27 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name28 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name29 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name30 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name31 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name32 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name33 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name34 {
  width: 100%;
  height: auto;
}
.dialog5-root-class-name35 {
  width: 100%;
  height: auto;
}
@media(max-width: 1366px) {
  .dialog5-text1 {
    font-size: 14px;
  }
  .dialog5-text2 {
    font-size: 14px;
  }
  .dialog5-text3 {
    font-size: 14px;
  }
  .dialog5-icon2 {
    box-shadow: 5px 5px 10px 0px #d4d4d4;
  }
  .dialog5-root-class-name1 {
    height: auto;
  }
  .dialog5-root-class-name7 {
    height: auto;
  }
  .dialog5-root-class-name13 {
    height: auto;
  }
  .dialog5-root-class-name19 {
    height: auto;
  }
  .dialog5-root-class-name24 {
    height: auto;
  }
  .dialog5-root-class-name25 {
    height: auto;
  }
}
</style>
