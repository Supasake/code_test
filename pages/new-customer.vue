<template>
  <div class="new-customer-container">
    <div class="new-customer-container1">
      <menu-sidebar></menu-sidebar>
      <div class="new-customer-container2">
        <app-header></app-header>
        <div id="area" class="new-customer-container3">
          <div class="new-customer-container4">
            <app-table2 rootClassName="table2-root-class-name3"></app-table2>
            <!-- <nuxt-link to="/employee" class="new-customer-navlink"> -->
              <dialog-emty
                rootClassName="dialog-emty-root-class-name2"
                class="new-customer-component3"
              ></dialog-emty>
            <!-- </nuxt-link> -->
          </div>
          <div class="new-customer-container5">
            <div class="new-customer-container6">
              <span>บริษัท กรีนโฮม เพสท์ คอนโทรล จำกัด</span>
            </div>
            <div class="new-customer-container7">
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
import AppTable2 from '../components/table2'
import DialogEmty from '../components/dialog-emty'

export default {
  name: 'NewCustomer',
  components: {
    MenuSidebar,
    AppHeader,
    AppTable2,
    DialogEmty,
  },
  head: {
    title: 'NewCustomer - TestDeveloper',
    meta: [
      {
        property: 'og:title',
        content: 'NewCustomer - TestDeveloper',
      },
    ],
  },
}
</script>

<style scoped>
.new-customer-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.new-customer-container1 {
  width: 100%;
  height: 1005px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.new-customer-container2 {
  width: 90%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.new-customer-container3 {
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
.new-customer-container4 {
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
.new-customer-navlink {
  display: contents;
}
.new-customer-component3 {
  text-decoration: none;
}
.new-customer-container5 {
  flex: 1;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.new-customer-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.new-customer-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
