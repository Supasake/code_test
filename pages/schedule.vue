<template>
  <div class="schedule-container">
    <div class="schedule-container1">
      <menu-sidebar></menu-sidebar>
      <div class="schedule-container2">
        <app-header></app-header>
        <div id="area" class="schedule-container3">
          <div class="schedule-container4">
            <app-table1 rootClassName="table1-root-class-name3"></app-table1>
          </div>
          <div class="schedule-container5">
            <div class="schedule-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="schedule-container7">
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

export default {
  name: 'Schedule',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable1,
  },
  head: {
    title: 'Schedule - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'Schedule - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.schedule-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.schedule-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 95%;
  display: flex;
  padding: 10px;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
}
.schedule-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 94%;
  display: flex;
  align-items: flex-start;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: flex-start;
}
.schedule-container5 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.schedule-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.schedule-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
