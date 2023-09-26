<template>
  <div class="cusomer1-container">
    <div class="cusomer1-container1">
      <menu-sidebar></menu-sidebar>
      <div class="cusomer1-container2">
        <app-header></app-header>
        <div id="area" class="cusomer1-container3">
          <div class="cusomer1-container4">
            <app-table rootClassName="table-root-class-name14"></app-table>
            <app-dialog18
              rootClassName="dialog18-root-class-name1"
            ></app-dialog18>
          </div>
          <div class="cusomer1-container5">
            <div class="cusomer1-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="cusomer1-container7">
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
import AppTable from '../components/table'
import AppDialog18 from '../components/dialog18'

export default {
  name: 'Cusomer1',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable,
    AppDialog18,
  },
  head: {
    title: 'Cusomer1 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'Cusomer1 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.cusomer1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.cusomer1-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.cusomer1-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.cusomer1-container3 {
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
.cusomer1-container4 {
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
.cusomer1-container5 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.cusomer1-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cusomer1-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
