<template>
  <div id="app">
    <NavBar />
    <div class="app-margins">
      <router-view />
    </div>
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import colors from "@/styles/colors";

@Component({
  name: "App",
  components: {
    NavBar,
    BottomBar,
  },
})
export default class App extends Vue {
  created() {
    document.title = "ECSE McGill";
    let storedTheme = localStorage.getItem("theme");
    if (storedTheme) colors.setTheme(storedTheme, document.documentElement);
    else colors.setTheme("dark", document.documentElement);
  }
}
</script>

<style lang="scss">
//general elements

:root[data-theme="dark"] {
  //prefer dark theme
  --backgroundColor: #26292f;
  --mainColor: #363a41;
  --textColor: #ffffff;
  --inputColor: #4f5662;
  --accentColor: #00904b;
}

html[data-theme="light"] {
  --backgroundColor: #ffffff;
  --mainColor: #1fb16b;
  --textColor: #272727;
  --inputColor: #cfcfcf;
  --accentColor: #63ca98;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: var(--textColor);
  user-select: none;
}

body {
  margin: 0;
  background-color: var(--backgroundColor);
  transition: 0.3s all ease;
}

//text stuff

h1 {
  font-family: $defaultfont;
  color: var(--textColor);
  font-size: $title-size;
  font-weight: $light;
  margin: 0;
}

h2 {
  font-family: $defaultfont;
  color: var(--textColor);
  font-size: $medium-size;
  font-weight: $medium;
}

h3 {
  font-family: $defaultfont;
  color: var(--textColor);
  font-size: $large-size;
  font-weight: $medium;
  margin: 0;
}
h4 {
  font-family: $defaultfont;
  color: var(--textColor);
  font-size: $medium-size;
  font-weight: $bold;
}

p {
  font-family: $defaultfont;
  color: var(--textColor);
  font-size: $small-size;
  font-weight: $light;
}

//formatting

.app-margins {
  margin: 0 15rem;
}

.centered {
  text-align: center;
}

.left {
  text-align: left;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.flex-vertical {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.flex-horizontal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.space-between {
  justify-content: space-between;
  align-items: space-between;
}

.align-left {
  justify-content: left;
}

.sixty {
  width: 60%;
}

.fourty {
  width: 40%;
}

.fifty {
  width: 50%;
}

.twenty {
  width: 20%;
}

.top-layer {
  z-index: 100;
}

.overflow-hidden {
  overflow: hidden;
}

.full-width {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-bottom: 1rem;
}

.behind {
  z-index: -1;
}

.margin-bottom {
  margin-bottom: 2rem;
}

.side-margins {
  margin: 0 2rem;
}

//transitions

.fade-enter-active {
  transition: all 0.15s ease;
}

.fade-leave-active {
  transition: all 0.15s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.smooth-transition {
  transition: all 0.3s ease;
}

//image filters

.black-and-white {
  filter: grayscale(1);
}

.color-on-hover:hover {
  filter: unset;
}

//pointers

.no-pointer-events {
  pointer-events: none;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
