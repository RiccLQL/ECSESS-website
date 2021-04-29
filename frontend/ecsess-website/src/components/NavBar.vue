<template>
  <div id="navbar" class="navbar">
    <header id="header" class="header" role="banner">
      <div id="header-wrap" class="header-wrap">
        <div id="logo-top-left" class="logo-top-left">
          <img
            :src="require('../assets/ecsess-white.png')"
            id="ecsess-logo"
            class="ecsess-logo"
          />
        </div>
        <div id="menubar-top-right" class="menubar-top-right">
          <div id="menu-displayed" class="menu-displayed">
            <ul id="menu-list" class="menu-list">
              <router-link
                id="menu-entry"
                class="menu-entry"
                v-for="menuOption in menuOptions"
                :key="menuOption.options"
                :to="`${menuOption.route}`"
                >{{ menuOption.name }}</router-link
              >
            </ul>
          </div>
          <div id="menu-button" class="menu-button"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      menuOptions: [
        { name: "Home", route: "/" },
        { name: "Council", route: "/council" },
        { name: "Events", route: "/events" },
        { name: "Resources", route: "/resources" },
        { name: "Photos", route: "/photos" },
        { name: "Funds", route: "/bursaries" },
        { name: "ECSESSBits", route: "/bits" },
        { name: "Student Spaces", route: "/spaces" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "./styles/NavBar.scss";
</style>
