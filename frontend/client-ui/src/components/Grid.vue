<template>
  <div class="flex-vertical">
    <div class="grid">
      <div
        class="flex-vertical centered cell"
        v-for="(cell, index) in gridCells"
        :key="index"
      >
        <div class="cell-picture flex-vertical">
          <Picture
            :alt="cell.image.alt"
            :path="cell.image.path"
            :size="gridImageSize"
          />
        </div>
        <div>
          <h4>{{ cell.title }}</h4>
          <TextArea class="grid-description" :text="cell.description" />
          <Button
            v-if="cell.button"
            :clickParams="cell.buttonLink"
            :color="buttonColor"
            :size="buttonSize"
            :text="cell.button"
            @handleClick="goToLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import colors from "@/styles/colors";
import Picture, { ImageObject, ImageSize } from "@/components/Picture.vue";
import TextArea from "@/components/TextArea.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";

export interface GridCellObject {
  title: string;
  description: string;
  image: ImageObject;
  button?: string;
  buttonLink?: string;
}

@Component({
  name: "Grid",
  components: {
    Picture,
    TextArea,
    Button,
  },
})
export default class Grid extends Vue {
  @Prop() gridCells!: GridCellObject[];
  private gridImageSize: ImageSize = ImageSize.medium;
  private buttonColor: string = colors.get().accent;
  private buttonSize: ButtonSizes = ButtonSizes.small;

  private goToLink(value: string) {
    window.open(value);
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: 33.33% 33.33% 33.33%;
}

.cell {
  justify-content: flex-start;
  margin-bottom: 2rem;
  padding: 0 1.5rem 0 1.5rem;
}

.cell-picture {
  height: 20rem;
  width: 100%;
  overflow: hidden;
  filter: grayscale(1);
  transition: all 0.3s ease;
}

.cell-picture:hover {
  filter: grayscale(0);
}

@media only screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 100%;
  }

  .grid-description {
    display: none;
  }

  .cell {
    border: var(--mainColor) solid 0.2rem;
    border-radius: 0.5rem;
    padding: 0.8rem 0.5rem;
  }
}
</style>
