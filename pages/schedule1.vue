<template>
  <div class="schedule1-container">
    <div class="schedule1-container1">
      <menu-sidebar></menu-sidebar>
      <div class="schedule1-container2">
        <app-header></app-header>
        <div id="area" class="schedule1-container3">
          <div class="schedule1-container4">
            <app-table1 rootClassName="table1-root-class-name4"></app-table1>
            <app-dialog8 rootClassName="dialog8-root-class-name1"></app-dialog8>
          </div>
          <div class="schedule1-container5">
            <div class="schedule1-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="schedule1-container7">
              <span>
                2/3 ซอยรามอินทรา 14 แยก 2 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร
                10230
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuSidebar from '../components/menu-sidebar'
import AppHeader from '../components/header'
import AppTable1 from '../components/table1'
import AppDialog8 from '../components/dialog8'

export default {
  name: 'Schedule1',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable1,
    AppDialog8,
  },
  head: {
    title: 'Schedule1 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'Schedule1 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.schedule1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule1-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.schedule1-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule1-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 95%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.schedule1-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule1-container5 {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.schedule1-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule1-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
