<template>

  <span v-if="screenSize < 768">
    <div class="navbar display-flex flex-vertical" :style="{ backgroundColor: colorToggle }">
      <div class="logo">
        <router-link to="/home"><Picture alt="ECSESS Logo" :path="require('@/assets/ecsess-white.png')" :size="logoSize" /></router-link>
      </div>
      <div class="flex-vertical">
        <Button :color="mobileMenuButtonColor" :size="mobileMenuButtonSize" text="Menu" :clickParams="menuExpand" @handleClick="() => { menuExpand = !menuExpand }" />
        <div v-if="menuExpand" class="navBarMenuExpand absolute">
          <div v-for="(route, key) in navBarRoutes" :key="key">
            <NavBarSingleOption
              v-if="route.path"
              :path="route.path"
              :text="route.name"
              @dropdown="toggleDropdown"
              :listId="key"
            />
            <NavBarDropdown
              v-if="route.paths"
              :routes="route.paths"
              :text="route.name"
              @dropdown="toggleDropdown"
              :listId="key"
              :dropdown="dropdown"
            />
          </div>
        </div>
      </div>
    </div>
  </span>  
  <span v-else>
    <div class="navbar display-flex flex-horizontal" :style="{ backgroundColor: colorToggle }">
      <div class="logo">
        <router-link to="/home"><Picture alt="ECSESS Logo" :path="require('@/assets/ecsess-white.png')" :size="logoSize" /></router-link>
      </div>
      <div v-for="(route, key) in navBarRoutes" :key="key">
        <NavBarSingleOption
          v-if="route.path"
          :path="route.path"
          :text="route.name"
          @dropdown="toggleDropdown"
          :listId="key"
        />
        <NavBarDropdown
          v-if="route.paths"
          :routes="route.paths"
          :text="route.name"
          @dropdown="toggleDropdown"
          :listId="key"
          :dropdown="dropdown"
        />
      </div>
      <button
        @click="toggleDisplayMode()"
        class="display-mode-toggle flex-horizontal cursor-pointer"
      >
        <img src="@/assets/sun.svg" v-if="isDarkMode()" class="sun-svg" />
        <img src="@/assets/moon.svg" v-else class="moon-svg" />
      </button>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import NavBarSingleOption from "@/components/NavBarSingleOption.vue";
import NavBarDropdown, {
  NavBarDropdownObject,
} from "@/components/NavBarDropdown.vue";
import pathNames from "@/router/pathNames";
import colors from "@/styles/colors";
import Picture, { ImageSize } from "@/components/Picture.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";

export interface NavBarRouteObject {
  name: string;
  path?: string;
  paths?: NavBarDropdownObject[];
}

@Component({
  name: "NavBar",
  components: {
    NavBarSingleOption,
    NavBarDropdown,
    Picture,
    Button,
  },
})
export default class NavBar extends Vue {
  private logoSize: ImageSize = ImageSize.logo;
  private menuExpand: boolean = false;
  private screenSize: number = window.innerWidth;

  private mobileMenuButtonColor: string = colors.get().main;
  private mobileMenuButtonSize: ButtonSizes = ButtonSizes.big;

  @Prop() private navBarRoutes!: NavBarRouteObject[];

  destroyed() {
    window.removeEventListener("resize", this.screenResize);
  }

  private screenResize(e: UIEvent) {
    console.log(window.innerWidth);
    this.screenSize = window.innerWidth;
  }

  private toggleDisplayMode(): void {
    const el = document.documentElement;
    switch (document.documentElement.getAttribute("data-theme")) {
      //using a switch here in case we ever for some reason (yes I will judge you) want to add more themes
      case "dark":
        colors.setTheme("light", el);
        break;
      case "light":
        colors.setTheme("dark", el);
        break;
      default:
        colors.setTheme("dark", el);
        break;
    }
    window.location.reload();
  }

  private isDarkMode(): boolean {
    return localStorage.getItem("theme") == "dark";
  }

  private colorToggle: string = colors.get().background;

  private scrollListener(event: Event): void {
    if (window.scrollY > 0) {
      this.colorToggle = colors.get().main;
    } else {
      this.colorToggle = colors.get().background;
    }
  }

  created() {
    window.addEventListener("scroll", this.scrollListener);
    // responsive design: check window size
    window.addEventListener("resize", this.screenResize);
  }

  private dropdown: number = -1;



  private toggleDropdown(listId: number): void {
    this.dropdown = listId;
  }
}
</script>

<style lang="scss">
.navbar {
  transition: all 0.3s ease;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
}

.logo {
  position: absolute;
  left: 2rem;
  margin-top: 0.25rem;
}

.navbar-item {
  font-family: $defaultfont;
  font-size: $medium-size;
  font-weight: $bold;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0.3rem 0.25rem 0.3rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: all 0.3s;
}

.navbar-item:hover {
  background-color: var(--accentColor);
}

.navbar-dropdown {
  position: absolute;
  top: 4rem;
  background-color: var(--mainColor);
  padding: 1rem;
  border-radius: 0.2rem;
  z-index: 1000;
}

.navbar-subitem {
  font-weight: $bold;
  font-size: $small-size;
  margin: 0.25rem 0;
}

.display-mode-toggle {
  all: unset;
  padding: 0.3rem;
  margin: 0.25rem 0;
  border-radius: 0.2rem;
  transition: 0.3s all ease;
  position: absolute;
  right: 2rem;
}

.display-mode-toggle:hover {
  background-color: var(--accentColor);
}

.sun-svg {
  filter: invert(100%);
  width: 1.85rem;
  height: 1.85rem;
}

.moon-svg {
  width: 1.85rem;
  height: 1.85rem;
}

.navBarMenuExpand {
  top: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: var(--mainColor);
  width: 100vw;
}

@media only screen and (max-width: 768px) {
  .navbar {
    position: unset;
    margin-top: 0.5rem;
  }

  .navBarMenuExpand {
    width: 100%;
    top: 5.2rem;
  }

  .navbar-item {
    font-size: 1.5rem;
    margin: 1rem;
  }

  .display-mode-toggle {
    position: relative;
  }
}
</style>
