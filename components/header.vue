<template>
  <header data-role="Header" class="header-header" v-bind:class="rootClassName">
    <nuxt-link to="/customer2" class="header-navlink">
      <div class="header-nav">
        <svg viewBox="0 0 1024 1024" class="header-icon">
          <path
            d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
          ></path>
        </svg>
        <span class="header-text">{{ Text }}</span>
      </div>
    </nuxt-link>
    <div class="header-container">
      <div class="header-container1">
        <input
          type="text"
          :placeholder="textinput_placeholder"
          class="header-textinput input"
        />
        <nuxt-link to="/stage-dashboard" class="header-navlink1">
          <svg viewBox="0 0 877.7142857142857 1024" class="header-icon02">
            <path
              d="M694.857 548.571v-73.143c0-20-16.571-36.571-36.571-36.571h-438.857c-20 0-36.571 16.571-36.571 36.571v73.143c0 20 16.571 36.571 36.571 36.571h438.857c20 0 36.571-16.571 36.571-36.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"
            ></path>
          </svg>
        </nuxt-link>
        <svg viewBox="0 0 1024 1024" class="header-icon04">
          <path
            d="M426 726l384-384-60-62-324 324-152-152-60 60zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
          ></path>
        </svg>
        <nuxt-link to="/new-customer" class="header-navlink2">
          <svg viewBox="0 0 1024 1024" class="header-icon06">
            <path
              d="M726 554v-84h-172v-172h-84v172h-172v84h172v172h84v-172h172zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
            ></path>
          </svg>
        </nuxt-link>
        <svg viewBox="0 0 1024 1024" class="header-icon08">
          <path
            d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"
          ></path></svg
        ><svg viewBox="0 0 1024 1024" class="header-icon10">
          <path
            d="M320 810.667c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M320 512c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M320 213.333c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M618.667 810.667c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M618.667 512c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M618.667 213.333c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M917.333 810.667c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M917.333 512c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
          <path
            d="M917.333 213.333c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
          ></path>
        </svg>
        <img :alt="image_alt" :src="image_src" class="header-image" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-18%20at%2010.27.111-200w.png',
    },
    textinput_placeholder: {
      type: String,
      default: 'ค้นหา',
    },
    Text: {
      type: String,
      default: 'คีย์ลูกค้าใหม่เข้าระบบ',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  height: 48px;
  display: flex;
  position: relative;
  max-width: auto;
  min-width: auto;
  align-self: flex-start;
  max-height: auto;
  min-height: auto;
  align-items: center;
  padding-top: 0px;
  border-color: var(--dl-color-gray-title);
  border-width: 1px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 0px;
  justify-content: space-between;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
.header-navlink {
  display: contents;
}
.header-nav {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.header-icon {
  fill: var(--dl-color-success-green);
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.header-text {
  font-size: 22px;
}
.header-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-textinput {
  width: auto;
  height: 30px;
  text-align: center;
  border-width: 0px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: var(--dl-color-gray-input);
}
.header-navlink1 {
  display: contents;
}
.header-icon02 {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
}
.header-icon04 {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
}
.header-navlink2 {
  display: contents;
}
.header-icon06 {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
}
.header-icon08 {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
}
.header-icon10 {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
}
.header-image {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 5px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  margin-right: 5px;
  border-radius: var(--dl-radius-radius-round);
}

@media(max-width: 1600px) {
  .header-header {
    flex: 1;
    width: 100%;
    height: 48px;
    padding: 10px;
    padding-top: var(--dl-space-space-unit);
    border-color: var(--dl-color-gray-title);
    border-width: 1px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  }
  .header-container {
    width: auto;
    height: auto;
  }
  .header-textinput {
    width: auto;
    height: 30px;
    align-self: flex-start;
    border-style: solid;
    border-width: 0px;
    border-radius: 20px;
    background-color: var(--dl-color-gray-input);
  }
  .header-image {
    width: 35px;
    height: 35px;
  }
}
@media(max-width: 1366px) {
  .header-header {
    flex: 0 0 auto;
    left: 0px;
    width: 100%;
    padding: 10px;
    position: static;
  }
  .header-container1 {
    align-items: center;
  }
  .header-textinput {
    align-self: flex-start;
    text-align: center;
  }
  .header-image {
    width: 30px;
    height: 30px;
    border-radius: var(--dl-radius-radius-round);
  }
}
@media(max-width: 991px) {
  .header-header {
    width: 724px;
  }
}
@media(max-width: 767px) {
  .header-header {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .header-nav {
    display: none;
  }
}
@media(max-width: 479px) {
  .header-header {
    padding: var(--dl-space-space-unit);
  }
}
</style>
