<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";

@Component({
  name: "App",
  components: {
    NavBar,
  },
})

export default class App extends Vue {

}

</script>

<style lang="scss">

  //general elements

  a {
    text-decoration: none;
    color: $darktext;
    user-select: none;
  }

  body {
    margin: 0;
    background-color: $darkbackground;
  }

  //text stuff

  h1 {
    font-family: $defaultfont;
    color: $darktext;
  }

  //formatting

  .centered {
    text-align: center;
  }

  .absolute {
    position: absolute;
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

</style>