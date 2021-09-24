<template>
  <transition name="fade" mode="out-in">
    <div
      class="slide flex-horizontal"
      v-if="carouselRotation !== undefined ? carouselRotation === index : true"
    >
      <div
        class="fifty flex-vertical centered overflow-hidden slide-picture"
        :style="{ 'margin-right': '0.5rem' }"
      >
        <Picture :path="image.path" :alt="image.alt" :size="imgSize" />
      </div>
      <div
        class="fifty"
        :style="{ 'margin-left': '0.5rem', 'margin-bottom': '1.5rem' }"
      >
        <h4>{{ title }}</h4>
        <TextArea class="slide-description" :text="description" :width="textWidth" />
        <Button
          v-if="link"
          :clickParams="link"
          :color="buttonColor"
          :size="buttonSize"
          text="Learn More"
          @handleClick="goToLink"
        />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import colors from "@/styles/colors";
import TextArea from "@/components/TextArea.vue";
import { ImageObject, ImageSize } from "./Picture.vue";
import Picture from "@/components/Picture.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";

export interface SlideObject {
  title: string;
  description: string;
  image: ImageObject;
  link?: string;
}

@Component({
  name: "CarouselSlide",
  components: {
    TextArea,
    Picture,
    Button,
  },
})
export default class CarouselSlide extends Vue {
  @Prop() description!: string;
  @Prop() title!: string;
  @Prop() image!: ImageObject;
  @Prop() carouselRotation?: number;
  @Prop() index!: number;
  @Prop() link!: string;
  private imgSize: ImageSize = ImageSize.medium;
  private textWidth: string = "30%";

  private buttonColor: string = colors.get().accent;
  private buttonSize: ButtonSizes = ButtonSizes.medium;

  private goToLink(value: string): void {
    window.open(value);
  }
}
</script>

<style lang="scss" scoped>
.slide {
  justify-content: space-between;
  width: 90%;
  height: 20rem;
  overflow: hidden;
}

@media only screen and (max-width: 768px) {
  .slide {
    flex-direction: column;
  }

  .slide-description {
    display: none;
  }

  .slide-picture {
    display: none;
  }
}
</style>
