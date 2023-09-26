<template>
  <div class="dialog2-container" v-bind:class="rootClassName">
    <div class="dialog2-container1">
      <svg viewBox="0 0 1024 1024" class="dialog2-icon">
        <path
          d="M950.857 932.571v-621.714c0-9.714-8.571-18.286-18.286-18.286h-621.714c-9.714 0-18.286 8.571-18.286 18.286v621.714c0 9.714 8.571 18.286 18.286 18.286h621.714c9.714 0 18.286-8.571 18.286-18.286zM1024 310.857v621.714c0 50.286-41.143 91.429-91.429 91.429h-621.714c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h621.714c50.286 0 91.429 41.143 91.429 91.429zM804.571 91.429v91.429h-73.143v-91.429c0-9.714-8.571-18.286-18.286-18.286h-621.714c-9.714 0-18.286 8.571-18.286 18.286v621.714c0 9.714 8.571 18.286 18.286 18.286h91.429v73.143h-91.429c-50.286 0-91.429-41.143-91.429-91.429v-621.714c0-50.286 41.143-91.429 91.429-91.429h621.714c50.286 0 91.429 41.143 91.429 91.429z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon02">
        <path
          d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM554 298v172h172v84h-172v172h-84v-172h-172v-84h172v-172h84z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon04">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon06">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon08">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon10">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon12">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon14">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon16">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024" class="dialog2-icon18">
        <path
          d="M512 820q68 0 143-40t113-98q-2-56-90-94t-166-38-166 37-90 95q38 58 113 98t143 40zM512 214q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog2',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.dialog2-container {
  width: 60px;
  height: 600px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  background-color: #4A494B;
}
.dialog2-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
}
.dialog2-icon {
  fill: #D9D9D9;
  width: 24px;
  height: 24px;
  margin-top: 10px;
  margin-bottom: 5px;
}
.dialog2-icon02 {
  fill: var(--dl-color-success-green);
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon04 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: 5px;
}
.dialog2-icon06 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon08 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon10 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon12 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon14 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.dialog2-icon16 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
}
.dialog2-icon18 {
  fill: var(--dl-color-gray-white);
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>
