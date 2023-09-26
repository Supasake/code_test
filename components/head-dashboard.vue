<template>
  <div class="head-dashboard-container" v-bind:class="rootClassName">
    <div class="head-dashboard-container1">
      <img :alt="image_alt" :src="image_src" class="head-dashboard-image" />
      <div class="head-dashboard-container2">
        <app-dialog15 rootClassName="dialog15-root-class-name1"></app-dialog15>
        <div class="head-dashboard-container3">
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
  name: 'HeadDashboard',
  props: {
    rootClassName: String,
    image_src: {
      type: String,
      default: 'd75599f5-909f-4334-80e7-337be3ac21ca',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
  components: {
    AppDialog15,
    AppDialog23,
    AppDialog19,
  },
}
</script>

<style scoped>
.head-dashboard-container {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.head-dashboard-container1 {
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: flex-start;
}
.head-dashboard-image {
  width: 60%;
  height: auto;
  object-fit: cover;
  margin-right: 5px;
}
.head-dashboard-container2 {
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.head-dashboard-container3 {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.head-dashboard-root-class-name {
  width: 100%;
  height: 100%;
  align-self: flex-start;
}
</style>
