<template>
  <div class="state2-container" v-bind:class="rootClassName">
    <div class="state2-container01">
      <div class="state2-container02">
        <div class="state2-container03">
          <div class="state2-container04">
            <div class="state2-container05">
              <app-dialog16
                rootClassName="dialog16-root-class-name1"
              ></app-dialog16>
            </div>
            <div class="state2-container06">
              <app-dialog13
                rootClassName="dialog13-root-class-name"
              ></app-dialog13>
            </div>
            <div class="state2-container07">
              <app-dialog21
                rootClassName="dialog21-root-class-name1"
              ></app-dialog21>
            </div>
            <div class="state2-container08">
              <app-dialog31
                rootClassName="dialog31-root-class-name1"
              ></app-dialog31>
            </div>
            <div class="state2-container09">
              <app-dialog4 rootClassName="dialog4-root-class-name1"></app-dialog4>
            </div>
            <div class="state2-container10">
              <app-dialog52
                rootClassName="dialog52-root-class-name1"
              ></app-dialog52>
            </div>
            <div class="state2-container11">
              <app-dialog65
                rootClassName="dialog65-root-class-name1"
              ></app-dialog65>
            </div>
          </div>
          <div class="state2-container12">
            <div class="state2-container13">
              <app-dialog5 rootClassName="dialog5-root-class-name6"></app-dialog5>
            </div>
            <div class="state2-container14">
              <app-dialog5 rootClassName="dialog5-root-class-name7"></app-dialog5>
            </div>
            <div class="state2-container15">
              <app-dialog5 rootClassName="dialog5-root-class-name8"></app-dialog5>
            </div>
            <div class="state2-container16">
              <app-dialog5 rootClassName="dialog5-root-class-name9"></app-dialog5>
            </div>
            <div class="state2-container17">
              <app-dialog5
                rootClassName="dialog5-root-class-name10"
              ></app-dialog5>
            </div>
            <div class="state2-container18">
              <app-dialog5
                rootClassName="dialog5-root-class-name11"
              ></app-dialog5>
            </div>
            <div class="state2-container19">
              <app-dialog112
                rootClassName="dialog112-root-class-name3"
              ></app-dialog112>
            </div>
          </div>
          <div class="state2-container20">
            <app-dialog112
              rootClassName="dialog112-root-class-name2"
            ></app-dialog112>
            <app-dialog22
              rootClassName="dialog22-root-class-name2"
            ></app-dialog22>
            <app-dialog22
              rootClassName="dialog22-root-class-name3"
            ></app-dialog22>
            <app-dialog32
              rootClassName="dialog32-root-class-name4"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name5"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name6"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name7"
            ></app-dialog32>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDialog16 from './dialog16'
import AppDialog13 from './dialog13'
import AppDialog21 from './dialog21'
import AppDialog31 from './dialog31'
import AppDialog4 from './dialog4'
import AppDialog52 from './dialog52'
import AppDialog65 from './dialog65'
import AppDialog5 from './dialog5'
import AppDialog112 from './dialog112'
import AppDialog22 from './dialog22'
import AppDialog32 from './dialog32'

export default {
  name: 'State2',
  props: {
    rootClassName: String,
  },
  components: {
    AppDialog16,
    AppDialog13,
    AppDialog21,
    AppDialog31,
    AppDialog4,
    AppDialog52,
    AppDialog65,
    AppDialog5,
    AppDialog112,
    AppDialog22,
    AppDialog32,
  },
}
</script>

<style scoped>
.state2-container {
  width: 100%;
  height: 920px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.state2-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.state2-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
  padding-right: 10px;
  justify-content: space-between;
}
.state2-container05 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container06 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container07 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container08 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container09 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container10 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container11 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  justify-content: space-between;
}
.state2-container13 {
  flex: 0 0 auto;
  width: 14%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container14 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container15 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container16 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container17 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container18 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container19 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state2-container20 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-self: flex-end;
  margin-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.state2-root-class-name {
  width: 1665px;
  height: 750px;
  align-self: flex-start;
  margin-left: 10px;
}
.state2-root-class-name1 {
  width: 1665px;
  height: 750px;
  align-self: flex-start;
  margin-left: 10px;
}
@media(max-width: 1366px) {
  .state2-container20 {
    position: static;
  }
}
@media(max-width: 991px) {
  .state2-container03 {
    height: auto;
  }
}
</style>
