<template>
  <div class="head-dashboard1-container" v-bind:class="rootClassName">
    <div class="head-dashboard1-container1">
      <img :alt="image_alt" :src="image_src" class="head-dashboard1-image" />
      <div class="head-dashboard1-container2">
        <app-dialog15 rootClassName="dialog15-root-class-name1"></app-dialog15>
        <div class="head-dashboard1-container3">
          <app-dialog23 rootClassName="dialog23-root-class-name2"></app-dialog23>
          <app-dialog19 rootClassName="dialog19-root-class-name2"></app-dialog19>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDialog15 from './dialog15'
import AppDialog23 from './dialog23'
import AppDialog19 from './dialog19'

export default {
  name: 'HeadDashboard1',
  props: {
    image_src: {
      type: String,
      default: '/img/screen%20shot%202566-09-20%20at%2013.46.10-200h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
  },
  components: {
    AppDialog15,
    AppDialog23,
    AppDialog19,
  },
}
</script>

<style scoped>
.head-dashboard1-container {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.head-dashboard1-container1 {
  width: 100%;
  height: 100%;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  align-items: center;
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: flex-start;
}
.head-dashboard1-image {
  width: 60%;
  height: 100%;
}
.head-dashboard1-container2 {
  width: 38%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 2%;
  flex-direction: column;
  justify-content: center;
}
.head-dashboard1-container3 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.head-dashboard1-root-class-name {
  width: 100%;
  height: 100%;
  align-self: flex-start;
  margin-bottom: 5px;
}
.head-dashboard1-root-class-name1 {
  width: 100%;
  height: 100%;
  align-self: flex-start;
  margin-bottom: 5px;
}
</style>
