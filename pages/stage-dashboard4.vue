<template>
  <div class="stage-dashboard4-container">
    <div class="stage-dashboard4-container01">
      <menu-sidebar rootClassName="menu-sidebar-root-class-name6"></menu-sidebar>
      <div class="stage-dashboard4-container02">
        <app-header></app-header>
        <div id="area" class="stage-dashboard4-container03">
          <div class="stage-dashboard4-container04">
            <div id="area2" class="stage-dashboard4-container05">
              <div class="stage-dashboard4-container06">
                <app-state3 rootClassName="state3-root-class-name11"></app-state3>
              </div>
            </div>
            <app-dialog27
              rootClassName="dialog27-root-class-name12"
            ></app-dialog27>
            <app-dialog7 rootClassName="dialog7-root-class-name"></app-dialog7>
          </div>
          <div class="stage-dashboard4-container07">
            <div class="stage-dashboard4-container08">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="stage-dashboard4-container09">
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
import AppState3 from '../components/state3'
import AppDialog27 from '../components/dialog27'
import AppDialog7 from '../components/dialog7'

export default {
  name: 'StageDashboard4',
  components: {
    MenuSidebar,
    AppHeader,
    AppState3,
    AppDialog27,
    AppDialog7,
  },
  head: {
    title: 'StageDashboard4 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'StageDashboard4 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.stage-dashboard4-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard4-container01 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.stage-dashboard4-container02 {
  width: 88%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard4-container03 {
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
.stage-dashboard4-container04 {
  width: 100%;
  height: 94%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
}
.stage-dashboard4-container05 {
  flex: 0 0 auto;
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 10px;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard4-container06 {
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  overflow-x: scroll;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard4-container07 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard4-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stage-dashboard4-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 1600px) {
  .stage-dashboard4-container04 {
    width: 100%;
  }
  .stage-dashboard4-container06 {
    width: 100%;
  }
}
@media(max-width: 1366px) {
  .stage-dashboard4-container02 {
    width: 86%;
  }
  .stage-dashboard4-container04 {
    width: 100%;
  }
  .stage-dashboard4-container05 {
    width: 96%;
  }
  .stage-dashboard4-container06 {
    width: 100%;
  }
}
</style>
