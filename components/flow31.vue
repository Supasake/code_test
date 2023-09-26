<template>
  <div class="flow31-container">
    <div class="flow31-container1">
      <div class="flow31-container2">
        <span class="flow31-text">{{ text }}</span>
        <svg viewBox="0 0 1024 1024" class="flow31-icon">
          <path
            d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z"
          ></path>
          <path
            d="M672 256l-160 160-160-160-96 96 160 160-160 160 96 96 160-160 160 160 96-96-160-160 160-160z"
          ></path>
        </svg>
      </div>
      <div class="flow31-container3"><div class="flow31-container4"></div></div>
    </div>
    <div class="flow31-container5"></div>
  </div>
</template>

<script>
export default {
  name: 'Flow31',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    text: {
      type: String,
      default: 'ข้อมูลสมาชิก',
    },
  },
}
</script>

<style scoped>
.flow31-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.flow31-container1 {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  flex-direction: column;
}
.flow31-container2 {
  flex: 0 0 auto;
  width: 887px;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--dl-color-gray-black);
}
.flow31-text {
  top: -2px;
  left: 413px;
  color: #ffffff;
  position: absolute;
  font-size: 25px;
}
.flow31-icon {
  fill: var(--dl-color-gray-white);
  right: 0px;
  width: 35px;
  bottom: 2px;
  height: 35px;
  position: absolute;
}
.flow31-container3 {
  width: 100%;
  height: 331px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.flow31-container4 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.flow31-container5 {
  flex: 0 0 auto;
  width: 200px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
</style>
