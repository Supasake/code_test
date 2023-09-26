<template>
  <div class="stage-dashboard6-container">
    <div class="stage-dashboard6-container01">
      <menu-sidebar rootClassName="menu-sidebar-root-class-name"></menu-sidebar>
      <div class="stage-dashboard6-container02">
        <app-header></app-header>
        <div id="area" class="stage-dashboard6-container03">
          <div class="stage-dashboard6-container04">
            <div id="area2" class="stage-dashboard6-container05">
              <head-dashboard1
                rootClassName="head-dashboard1-root-class-name"
              ></head-dashboard1>
              <div class="stage-dashboard6-container06">
                <app-state3 rootClassName="state3-root-class-name"></app-state3>
              </div>
            </div>
            <app-dialog27
              rootClassName="dialog27-root-class-name1"
            ></app-dialog27>
          </div>
          <div class="stage-dashboard6-container07">
            <div class="stage-dashboard6-container08">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="stage-dashboard6-container09">
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
import HeadDashboard1 from '../components/head-dashboard1'
import AppState3 from '../components/state3'
import AppDialog27 from '../components/dialog27'

export default {
  name: 'StageDashboard6',
  components: {
    MenuSidebar,
    AppHeader,
    HeadDashboard1,
    AppState3,
    AppDialog27,
  },
  head: {
    title: 'StageDashboard6 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'StageDashboard6 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.stage-dashboard6-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard6-container01 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.stage-dashboard6-container02 {
  width: 88%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard6-container03 {
  flex: 0 0 auto;
  width: 100%;
  height: 95%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.stage-dashboard6-container04 {
  width: 100%;
  height: 94%;
  display: flex;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: row;
}
.stage-dashboard6-container05 {
  flex: 0 0 auto;
  width: 97%;
  height: auto;
  display: flex;
  align-items: center;
  padding-right: 10px;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard6-container06 {
  width: 100%;
  height: 750px;
  display: flex;
  align-self: flex-start;
  overflow-x: scroll;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard6-container07 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard6-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stage-dashboard6-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 1600px) {
  .stage-dashboard6-container02 {
    width: 88%;
  }
  .stage-dashboard6-container05 {
    width: 96%;
  }
  .stage-dashboard6-container06 {
    width: 100%;
  }
}
@media(max-width: 1366px) {
  .stage-dashboard6-container02 {
    width: 86%;
  }
  .stage-dashboard6-container05 {
    width: 96%;
  }
}
</style>
