<template>
  <div>
    <button
      :class="hoverable"
      :style="{ backgroundColor: color, padding: size }"
      @click="handleClick()"
      type="button"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export enum ButtonSizes {
  small = "0.2rem 0.5rem 0.2rem 0.5rem",
  medium = "0.5rem 1rem 0.5rem 1rem",
  big = "1rem 1.6rem 1rem 1.6rem",
}

@Component({
  name: "PageCover",
})
export default class PageCover extends Vue {
  @Prop() color!: string;
  @Prop() size!: ButtonSizes;
  @Prop() text!: string;
  @Prop() clickParams!: string | null;
  @Prop() hoverable?: "hoverable";

  private handleClick(): void {
    this.$emit("handleClick", this.clickParams);
  }
}
</script>

<style lang="scss" scoped>
button {
  all: unset;
  border-radius: 0.2rem;
  font-family: $defaultfont;
  font-size: $small-size;
  font-weight: $bold;
  color: var(--textColor);
  cursor: pointer;
}

.hoverable {
  transition: all 0.3s ease;
}

.hoverable:hover {
  background-color: var(--accentColor) !important;
}
</style>
