<template>
  <div class="navbar-item dropdown-able" @click="dropdownToggle()">
    <a>{{ text }}</a>
    <transition name="fade">
      <div
        class="navbar-dropdown flex-vertical"
        v-if="dropdown === listId"
        @mouseleave="dropdown === listId ? dropdownToggle() : null"
      >
        <router-link
          class="navbar-item navbar-subitem"
          v-for="(route, key) in routes"
          :key="key"
          :to="{ path: `/${route.path}` }"
          >{{ route.text }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NavBarSingleOption from "@/components/NavBarSingleOption.vue";

export interface NavBarDropdownObject {
  path: string;
  text: string;
}

@Component({
  name: "NavBarDropdown",
  components: {
    NavBarSingleOption,
  },
})
export default class NavBarDropdown extends Vue {
  private opacity: number = 0;
  @Prop() private routes!: NavBarDropdownObject[];
  @Prop() private text!: string;
  @Prop() private listId!: number;
  @Prop() private dropdown!: number;

  private dropdownToggle(): void {
    this.dropdown === this.listId
      ? this.$emit("dropdown", -1)
      : this.$emit("dropdown", this.listId);
  }
}
</script>

<style lang="scss" scoped>
.dropdown-able {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  .navbar-dropdown {
    background-color: var(--textColor);
  }

  .navbar-subitem {
    color: var(--mainColor);
  }
}
</style>
