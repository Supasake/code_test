<template>
  <div class="state-container" v-bind:class="rootClassName">
    <div class="state-container01">
      <div class="state-container02">
        <div class="state-container03">
          <div class="state-container04">
            <div class="state-container05">
              <app-dialog16
                rootClassName="dialog16-root-class-name5"
              ></app-dialog16>
            </div>
            <div class="state-container06">
              <app-dialog13
                rootClassName="dialog13-root-class-name5"
              ></app-dialog13>
            </div>
            <div class="state-container07">
              <app-dialog21
                rootClassName="dialog21-root-class-name5"
              ></app-dialog21>
            </div>
            <div class="state-container08">
              <app-dialog31
                rootClassName="dialog31-root-class-name5"
              ></app-dialog31>
            </div>
            <div class="state-container09">
              <app-dialog4 rootClassName="dialog4-root-class-name5"></app-dialog4>
            </div>
            <div class="state-container10">
              <app-dialog52
                rootClassName="dialog52-root-class-name5"
              ></app-dialog52>
            </div>
            <div class="state-container11">
              <app-dialog65
                rootClassName="dialog65-root-class-name5"
              ></app-dialog65>
            </div>
          </div>
          <div class="state-container12">
            <div class="state-container13"></div>
            <div class="state-container14">
              <app-dialog5
                rootClassName="dialog5-root-class-name24"
              ></app-dialog5>
            </div>
            <div class="state-container15">
              <app-dialog5
                rootClassName="dialog5-root-class-name30"
              ></app-dialog5>
            </div>
            <div class="state-container16">
              <app-dialog5
                rootClassName="dialog5-root-class-name31"
              ></app-dialog5>
            </div>
            <div class="state-container17">
              <app-dialog5
                rootClassName="dialog5-root-class-name33"
              ></app-dialog5>
            </div>
            <div class="state-container18">
              <app-dialog5
                rootClassName="dialog5-root-class-name34"
              ></app-dialog5>
            </div>
            <div class="state-container19">
              <app-dialog112
                rootClassName="dialog112-root-class-name10"
              ></app-dialog112>
            </div>
          </div>
          <div class="state-container20">
            <div class="state-container21"></div>
            <div class="state-container22"></div>
            <div class="state-container23"></div>
            <div class="state-container24">
              <app-dialog5
                rootClassName="dialog5-root-class-name35"
              ></app-dialog5>
            </div>
            <div class="state-container25"></div>
            <div class="state-container26"></div>
            <div class="state-container27">
              <app-dialog112
                rootClassName="dialog112-root-class-name11"
              ></app-dialog112>
            </div>
          </div>
          <div class="state-container28">
            <app-dialog22
              rootClassName="dialog22-root-class-name10"
            ></app-dialog22>
            <app-dialog22
              rootClassName="dialog22-root-class-name11"
            ></app-dialog22>
            <app-dialog32
              rootClassName="dialog32-root-class-name20"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name21"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name22"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name23"
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
  name: 'State',
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
.state-container {
  width: 100%;
  height: 920px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.state-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.state-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.state-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
  padding-right: 10px;
  justify-content: space-between;
}
.state-container05 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container06 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container07 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container08 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container09 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container10 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container11 {
  flex: 0 0 auto;
  width: 14.2857%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-bottom: 2.5px;
  justify-content: space-between;
}
.state-container13 {
  flex: 0 0 auto;
  width: 14%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container14 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container15 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container16 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container17 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container18 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container19 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.state-container20 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 10px;
  justify-content: space-between;
}
.state-container21 {
  flex: 0 0 auto;
  width: 14%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container22 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container23 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container24 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container25 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container26 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container27 {
  flex: 0 0 auto;
  width: 14%;
  height: auto;
  display: flex;
  align-items: flex-start;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: column;
}
.state-container28 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-self: flex-end;
  margin-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
}

@media(max-width: 1600px) {
  .state-root-class-name {
    width: 1665px;
  }
}
@media(max-width: 1366px) {
  .state-container28 {
    position: static;
  }
  .state-root-class-name {
    width: 1665px;
    align-self: flex-start;
  }
}
@media(max-width: 991px) {
  .state-container03 {
    height: auto;
  }
}
</style>
