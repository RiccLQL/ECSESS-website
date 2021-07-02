<template>
  <div class="navbar" :style="{ backgroundColor: colorToggle }">
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
      class="display-mode-toggle flex-horizontal"
    >
      <img src="@/assets/sun.svg" v-if="isDarkMode()" class="sun-svg" />
      <img src="@/assets/moon.svg" v-else class="moon-svg" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import NavBarSingleOption from "@/components/NavBarSingleOption.vue";
import NavBarDropdown, {
  NavBarDropdownObject,
} from "@/components/NavBarDropdown.vue";
import pathNames from "@/router/pathNames";
import colors from "@/styles/colors";

interface NavBarRouteObject {
  name: string;
  path?: string;
  paths?: NavBarDropdownObject[];
}

@Component({
  name: "NavBar",
  components: {
    NavBarSingleOption,
    NavBarDropdown,
  },
})
export default class Home extends Vue {
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
      console.log(colors.get().main);
    } else {
      this.colorToggle = colors.get().background;
    }
  }

  created() {
    window.addEventListener("scroll", this.scrollListener);
  }

  private dropdown: number = -1;

  // Navbar content

  private homeRoute: NavBarRouteObject = { name: "Home", path: pathNames.HOME };
  private councilDropdown: NavBarDropdownObject[] = [
    { path: `${pathNames.COUNCIL}`, text: "ECSESS Council" },
    { path: `${pathNames.COUNCIL}/${pathNames.JOIN}`, text: "Join ECSESS" },
    {
      path: `${pathNames.COUNCIL}/${pathNames.DOCS}`,
      text: "Council Documents",
    },
  ];
  private councilRoute: NavBarRouteObject = {
    name: "Council",
    paths: this.councilDropdown,
  };
  private eventDropdown: NavBarDropdownObject[] = [
    { path: `${pathNames.EVENTS}`, text: "Events Calendar" },
    {
      path: `${pathNames.EVENTS}/${pathNames.ACADEMIC}`,
      text: "Academic Events",
    },
    {
      path: `${pathNames.EVENTS}/${pathNames.INDUSTRY}`,
      text: "Industry & Networking Events",
    },
    {
      path: `${pathNames.EVENTS}/${pathNames.WELLNESS}`,
      text: "Wellness Events",
    },
    { path: `${pathNames.EVENTS}/${pathNames.SOCIAL}`, text: "Social Events" },
    { path: `${pathNames.EVENTS}/${pathNames.TECH}`, text: "Technical Events" },
  ];
  private eventRoute: NavBarRouteObject = {
    name: "Events",
    paths: this.eventDropdown,
  };
  private resourceDropdown: NavBarDropdownObject[] = [
    {
      path: `${pathNames.RESOURCES}/${pathNames.ACADEMIC}`,
      text: "Academic Resources",
    },
    {
      path: `${pathNames.RESOURCES}/${pathNames.INDUSTRY}`,
      text: "Industry Resources",
    },
    {
      path: `${pathNames.RESOURCES}/${pathNames.WELLNESS}`,
      text: "Mental Health Resources",
    },
    {
      path: `${pathNames.RESOURCES}/${pathNames.OTHER}`,
      text: "Other Resources",
    },
  ];
  private resourceRoute: NavBarRouteObject = {
    name: "Resources",
    paths: this.resourceDropdown,
  };
  private photosRoute: NavBarRouteObject = {
    name: "Photos",
    path: pathNames.PHOTOS,
  };
  private fycRoute: NavBarRouteObject = {
    name: "ECSESSBits",
    path: pathNames.ECSESSBITS,
  };
  private spacesRoute: NavBarRouteObject = {
    name: "Student Spaces",
    path: pathNames.STUDENT_SPACES,
  };

  private navBarRoutes: NavBarRouteObject[] = [
    this.homeRoute,
    this.councilRoute,
    this.eventRoute,
    this.resourceRoute,
    this.photosRoute,
    this.fycRoute,
    this.spacesRoute,
  ];

  private toggleDropdown(listId: number): void {
    this.dropdown = listId;
  }
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  transition: all 0.3s ease;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
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
</style>
