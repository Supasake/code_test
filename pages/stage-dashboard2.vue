<template>
  <div class="stage-dashboard2-container">
    <div class="stage-dashboard2-container01">
      <menu-sidebar rootClassName="menu-sidebar-root-class-name10"></menu-sidebar>
      <div class="stage-dashboard2-container02">
        <app-header></app-header>
        <div id="area" class="stage-dashboard2-container03">
          <div class="stage-dashboard2-container04">
            <div id="area2" class="stage-dashboard2-container05">
              <div class="stage-dashboard2-container06">
                <app-state rootClassName="state-root-class-name"></app-state>
              </div>
            </div>
            <app-dialog27
              rootClassName="dialog27-root-class-name16"
            ></app-dialog27>
          </div>
          <div class="stage-dashboard2-container07">
            <div class="stage-dashboard2-container08">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="stage-dashboard2-container09">
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
import AppState from '../components/state'
import AppDialog27 from '../components/dialog27'

export default {
  name: 'StageDashboard2',
  components: {
    MenuSidebar,
    AppHeader,
    AppState,
    AppDialog27,
  },
  head: {
    title: 'StageDashboard2 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'StageDashboard2 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.stage-dashboard2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard2-container01 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.stage-dashboard2-container02 {
  width: 88%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.stage-dashboard2-container03 {
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
.stage-dashboard2-container04 {
  width: 100%;
  height: 94%;
  display: flex;
  position: relative;
  margin-top: 10px;
  align-items: flex-start;
  flex-direction: row;
}
.stage-dashboard2-container05 {
  flex: 0 0 auto;
  width: 97%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard2-container06 {
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  overflow-x: scroll;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard2-container07 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.stage-dashboard2-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stage-dashboard2-container09 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 1600px) {
  .stage-dashboard2-container06 {
    width: 100%;
  }
}
@media(max-width: 1366px) {
  .stage-dashboard2-container02 {
    width: 86%;
  }
  .stage-dashboard2-container05 {
    width: 96%;
  }
  .stage-dashboard2-container06 {
    width: 100%;
  }
}
</style>
