<template>
  <div class="menu-sidebar-sidebar" v-bind:class="rootClassName">
    <nav class="menu-sidebar-nav">
      <nuxt-link to="/" class="menu-sidebar-navlink">
        <img :alt="image_alt" :src="image_src" class="menu-sidebar-image" />
      </nuxt-link>
      <div class="menu-sidebar-container">
        <svg viewBox="0 0 1024 1024" class="menu-sidebar-icon">
          <path
            d="M572 772q134-26 134-134 0-122-180-168-112-28-112-82 0-30 27-50t75-20q90 0 94 80h84q-4-114-122-144v-84h-114v84q-58 12-95 47t-37 89q0 112 178 156 114 26 114 92 0 26-23 47t-79 21q-106 0-114-80h-84q6 114 140 144v84h114v-82zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
          ></path>
        </svg>
        <nuxt-link to="/stage-dashboard6" class="menu-sidebar-text">
          <span>แดชบอร์ดรีพอร์ท</span>
          <br />
        </nuxt-link>
      </div>
      <nuxt-link to="/cusomer3" class="menu-sidebar-navlink1">
        <div class="menu-sidebar-container1">
          <svg viewBox="0 0 1024 1024" class="menu-sidebar-icon2">
            <path
              d="M572 772q134-26 134-134 0-122-180-168-112-28-112-82 0-30 27-50t75-20q90 0 94 80h84q-4-114-122-144v-84h-114v84q-58 12-95 47t-37 89q0 112 178 156 114 26 114 92 0 26-23 47t-79 21q-106 0-114-80h-84q6 114 140 144v84h114v-82zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
          <span class="menu-sidebar-text03">
            <span>คีย์ลูกค้าใหม่เข้าระบบ</span>
            <br />
          </span>
        </div>
      </nuxt-link>
      <nuxt-link to="/employee" class="menu-sidebar-navlink2">
        <div class="menu-sidebar-container2">
          <svg viewBox="0 0 1024 1024" class="menu-sidebar-icon4">
            <path
              d="M572 772q134-26 134-134 0-122-180-168-112-28-112-82 0-30 27-50t75-20q90 0 94 80h84q-4-114-122-144v-84h-114v84q-58 12-95 47t-37 89q0 112 178 156 114 26 114 92 0 26-23 47t-79 21q-106 0-114-80h-84q6 114 140 144v84h114v-82zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
          <span class="menu-sidebar-text06">
            <span>ระบบจัดการสมาชิก</span>
            <br />
          </span>
        </div>
      </nuxt-link>
      <div class="menu-sidebar-container3">
        <nuxt-link to="/employee" class="menu-sidebar-navlink3">
          {{ text }}
        </nuxt-link>
        <nuxt-link to="/customer" class="menu-sidebar-navlink4">
          {{ text1 }}
        </nuxt-link>
        <span class="menu-sidebar-text09">{{ text2 }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuSidebar',
  props: {
    rootClassName: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    text2: {
      type: String,
      default: 'ตั้งค่าระบบสมาชิก',
    },
    image_src: {
      type: String,
      default: '/img/logo-long-1500h.png',
    },
    text1: {
      type: String,
      default: 'ลูกค้าในระบบ',
    },
    text: {
      type: String,
      default: 'พนักงานในระบบบริษัท',
    },
  },
}
</script>

<style scoped>
.menu-sidebar-sidebar {
  width: 255px;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-success-green);
}
.menu-sidebar-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.menu-sidebar-navlink {
  display: contents;
}
.menu-sidebar-image {
  width: 100%;
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.menu-sidebar-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  margin-top: 5px;
  align-items: flex-start;
  margin-bottom: 5px;
  justify-content: flex-start;
  text-decoration: none;
}
.menu-sidebar-icon {
  fill: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.menu-sidebar-text {
  color: rgb(255, 255, 255);
  font-family: DBHelvethaicaXReg;
  text-decoration: none;
}
.menu-sidebar-navlink1 {
  display: contents;
}
.menu-sidebar-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  margin-top: 5px;
  align-items: flex-start;
  margin-bottom: 5px;
  justify-content: flex-start;
  text-decoration: none;
}
.menu-sidebar-icon2 {
  fill: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.menu-sidebar-text03 {
  color: rgb(255, 255, 255);
  font-family: DBHelvethaicaXReg;
}
.menu-sidebar-navlink2 {
  display: contents;
}
.menu-sidebar-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  margin-top: 5px;
  align-items: flex-start;
  margin-bottom: 5px;
  justify-content: flex-start;
  text-decoration: none;
}
.menu-sidebar-icon4 {
  fill: #ffffff;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.menu-sidebar-text06 {
  color: rgb(255, 255, 255);
  font-family: DBHelvethaicaXReg;
}
.menu-sidebar-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  margin-top: 5px;
  align-items: flex-start;
  margin-bottom: 5px;
  flex-direction: column;
  justify-content: flex-start;
}
.menu-sidebar-navlink3 {
  color: rgb(255, 255, 255);
  font-family: DBHelvethaicaXReg;
  margin-left: 30px;
  text-decoration: none;
}
.menu-sidebar-navlink4 {
  color: rgb(255, 255, 255);
  margin-top: 5px;
  margin-left: 30px;
  margin-bottom: 5px;
  text-decoration: none;
}
.menu-sidebar-text09 {
  color: rgb(255, 255, 255);
  margin-left: 30px;
}
.menu-sidebar-root-class-name {
  width: 12%;
}
.menu-sidebar-root-class-name1 {
  width: 12%;
}
.menu-sidebar-root-class-name2 {
  width: 12%;
}
.menu-sidebar-root-class-name3 {
  width: 12%;
}
.menu-sidebar-root-class-name4 {
  width: 12%;
}
.menu-sidebar-root-class-name5 {
  width: 12%;
}
.menu-sidebar-root-class-name6 {
  width: 12%;
}
.menu-sidebar-root-class-name7 {
  width: 12%;
}
.menu-sidebar-root-class-name8 {
  width: 12%;
}
.menu-sidebar-root-class-name9 {
  width: 12%;
}
.menu-sidebar-root-class-name10 {
  width: 12%;
}
@media(max-width: 1600px) {
  .menu-sidebar-sidebar {
    width: 255px;
    height: 100%;
    padding: var(--dl-space-space-unit);
    background-color: var(--dl-color-success-green);
  }
  .menu-sidebar-root-class-name {
    width: 12%;
  }
  .menu-sidebar-root-class-name1 {
    width: 12%;
  }
}
@media(max-width: 1366px) {
  .menu-sidebar-sidebar {
    width: 255px;
    height: 100%;
    padding: var(--dl-space-space-unit);
    background-color: var(--dl-color-success-green);
  }
  .menu-sidebar-image {
    width: 100%;
  }
  .menu-sidebar-root-class-name {
    width: 14%;
  }
  .menu-sidebar-root-class-name1 {
    width: 14%;
  }
  .menu-sidebar-root-class-name2 {
    width: 14%;
  }
  .menu-sidebar-root-class-name3 {
    width: 14%;
  }
  .menu-sidebar-root-class-name4 {
    width: 14%;
  }
  .menu-sidebar-root-class-name5 {
    width: 14%;
  }
  .menu-sidebar-root-class-name6 {
    width: 14%;
  }
  .menu-sidebar-root-class-name7 {
    width: 14%;
  }
  .menu-sidebar-root-class-name8 {
    width: 14%;
  }
  .menu-sidebar-root-class-name9 {
    width: 14%;
  }
  .menu-sidebar-root-class-name10 {
    width: 14%;
  }
}
@media(max-width: 767px) {
  .menu-sidebar-sidebar {
    height: 70vh;
  }
}
</style>
