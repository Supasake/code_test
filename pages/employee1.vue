<template>
  <div class="employee1-container">
    <div class="employee1-container1">
      <menu-sidebar></menu-sidebar>
      <div class="employee1-container2">
        <app-header></app-header>
        <div id="area" class="employee1-container3">
          <div class="employee1-container4">
            <app-table3
              rootClassName="table3-root-class-name5"
              class="employee1-component2"
            ></app-table3>
            <nuxt-link to="/employee" class="employee1-navlink">
              <app-dialog20
                rootClassName="dialog20-root-class-name1"
                class="employee1-component3"
              ></app-dialog20>
            </nuxt-link>
          </div>
          <div class="employee1-container5">
            <div class="employee1-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="employee1-container7">
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
import AppTable3 from '../components/table3'
import AppDialog20 from '../components/dialog20'

export default {
  name: 'Employee1',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable3,
    AppDialog20,
  },
  head: {
    title: 'Employee1 - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'Employee1 - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.employee1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.employee1-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.employee1-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.employee1-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 95%;
  display: flex;
  padding: 10px;
  position: relative;
  align-self: flex-start;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
}
.employee1-container4 {
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
.employee1-component2 {
  text-decoration: none;
}
.employee1-navlink {
  display: contents;
}
.employee1-component3 {
  text-decoration: none;
}
.employee1-container5 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.employee1-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.employee1-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
