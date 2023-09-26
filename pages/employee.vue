<template>
  <div class="employee-container">
    <div class="employee-container1">
      <menu-sidebar></menu-sidebar>
      <div class="employee-container2">
        <app-header></app-header>
        <div id="area" class="employee-container3">
          <div class="employee-container4">
            <!-- <nuxt-link to="/employee1" class="employee-navlink"> -->
              <app-table3
                rootClassName="table3-root-class-name2"
                class="employee-component2"
              ></app-table3>
            <!-- </nuxt-link> -->
          </div>
          <div class="employee-container5">
            <div class="employee-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="employee-container7">
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

export default {
  name: 'Employee',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable3,
  },
  head: {
    title: 'Employee - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'Employee - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.employee-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.employee-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.employee-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.employee-container3 {
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
.employee-container4 {
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
.employee-navlink {
  display: contents;
}
.employee-component2 {
  text-decoration: none;
}
.employee-container5 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.employee-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.employee-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
