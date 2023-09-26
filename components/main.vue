<template>
  <div class="main-container" v-bind:class="rootClassName">
    <div class="main-container01">
      <div class="main-container02">
        <div class="main-container03">
          <div class="main-container04">
            <div class="main-container05">
              <img
                alt="image"
                src="/external/screen%20shot%202566-09-20%20at%2013.46.10-200h-200h-200h.png"
                class="main-image"
              />
            </div>
            <div class="main-container06">
              <div class="main-container07">
                <app-dialog15
                  rootClassName="dialog15-root-class-name"
                ></app-dialog15>
              </div>
              <div class="main-container08">
                <div class="main-container09">
                  <app-dialog23
                    rootClassName="dialog23-root-class-name1"
                  ></app-dialog23>
                </div>
                <div class="main-container10">
                  <app-dialog19
                    rootClassName="dialog19-root-class-name1"
                  ></app-dialog19>
                </div>
              </div>
            </div>
          </div>
          <div class="main-container11">
            <div class="main-container12">
              <app-dialog16
                rootClassName="dialog16-root-class-name"
              ></app-dialog16>
            </div>
            <div class="main-container13">
              <app-dialog13
                rootClassName="dialog13-root-class-name1"
              ></app-dialog13>
            </div>
            <div class="main-container14">
              <app-dialog21
                rootClassName="dialog21-root-class-name"
              ></app-dialog21>
            </div>
            <div class="main-container15">
              <app-dialog31
                rootClassName="dialog31-root-class-name"
              ></app-dialog31>
            </div>
            <div class="main-container16">
              <app-dialog4 rootClassName="dialog4-root-class-name"></app-dialog4>
            </div>
            <div class="main-container17">
              <app-dialog52
                rootClassName="dialog52-root-class-name"
              ></app-dialog52>
            </div>
            <div class="main-container18">
              <app-dialog65
                rootClassName="dialog65-root-class-name"
              ></app-dialog65>
            </div>
          </div>
          <div class="main-container19">
            <div class="main-container20">
              <app-dialog5 rootClassName="dialog5-root-class-name"></app-dialog5>
            </div>
            <div class="main-container21">
              <app-dialog5 rootClassName="dialog5-root-class-name1"></app-dialog5>
            </div>
            <div class="main-container22">
              <app-dialog5 rootClassName="dialog5-root-class-name2"></app-dialog5>
            </div>
            <div class="main-container23">
              <app-dialog5 rootClassName="dialog5-root-class-name3"></app-dialog5>
            </div>
            <div class="main-container24">
              <app-dialog5 rootClassName="dialog5-root-class-name4"></app-dialog5>
            </div>
            <div class="main-container25">
              <app-dialog5 rootClassName="dialog5-root-class-name5"></app-dialog5>
            </div>
            <div class="main-container26">
              <app-dialog112
                rootClassName="dialog112-root-class-name"
              ></app-dialog112>
            </div>
          </div>
          <div class="main-container27">
            <app-dialog112
              rootClassName="dialog112-root-class-name1"
            ></app-dialog112>
            <app-dialog22 rootClassName="dialog22-root-class-name"></app-dialog22>
            <app-dialog22
              rootClassName="dialog22-root-class-name1"
            ></app-dialog22>
            <app-dialog32 rootClassName="dialog32-root-class-name"></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name2"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name3"
            ></app-dialog32>
            <app-dialog32
              rootClassName="dialog32-root-class-name1"
            ></app-dialog32>
          </div>
        </div>
        <div class="main-container28">
          <div class="main-container29">
            <app-dialog27 rootClassName="dialog27-root-class-name"></app-dialog27>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppDialog15 from './dialog15'
import AppDialog23 from './dialog23'
import AppDialog19 from './dialog19'
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
import AppDialog27 from './dialog27'

export default {
  name: 'Main',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    image_src: {
      type: String,
      default: 'f6f84b26-b0d0-4805-8cc6-00313db246a8',
    },
  },
  components: {
    AppDialog15,
    AppDialog23,
    AppDialog19,
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
    AppDialog27,
  },
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 920px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.main-container01 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  flex-direction: column;
}
.main-container02 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.main-container03 {
  flex: 0 0 auto;
  width: 97%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.main-container04 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.main-container05 {
  flex: 0 0 auto;
  width: 60%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main-container06 {
  flex: 0 0 auto;
  width: 40%;
  height: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.main-container07 {
  flex: 0 0 auto;
  width: 80%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.main-container08 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
  justify-content: flex-end;
}
.main-container09 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  flex-direction: column;
}
.main-container10 {
  flex: 0 0 auto;
  width: 70%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container11 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 5px;
  padding-right: 10px;
  justify-content: space-between;
}
.main-container12 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container13 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container14 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container15 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container16 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container17 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container18 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container19 {
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
.main-container20 {
  flex: 0 0 auto;
  width: 14.2%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container21 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container22 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container23 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container24 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container25 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container26 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container27 {
  flex: 0 0 auto;
  width: 14.2%;
  height: auto;
  display: flex;
  align-self: flex-end;
  margin-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
}
.main-container28 {
  flex: 0 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.main-container29 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

@media(max-width: 1600px) {
  .main-container06 {
    height: auto;
  }
}
@media(max-width: 1366px) {
  .main-container08 {
    width: 100%;
    height: auto;
    align-self: flex-end;
    padding-right: 10px;
    justify-content: flex-end;
  }
  .main-container09 {
    height: auto;
  }
  .main-container27 {
    position: static;
  }
  .main-container29 {
    width: 100%;
    height: 100%;
  }
}
@media(max-width: 991px) {
  .main-container03 {
    height: auto;
  }
}
@media(max-width: 767px) {
  .main-container08 {
    width: 100%;
  }
}
</style>
