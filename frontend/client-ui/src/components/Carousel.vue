<template>
  <div class="flex-horizontal">
    <div class="carousel-bg flex-horizontal">
      <Button
        :color="buttonColor"
        :size="buttonSize"
        :text="buttonLeftArrow"
        clickParams="left"
        @handleClick="rotate"
        hoverable="hoverable"
      />
      <div class="carousel flex-vertical centered">
        <div class="slide-wrapper flex-horizontal">
          <CarouselSlide
            v-for="(slide, index) in slides"
            :key="index"
            :index="index"
            :carouselRotation="carouselRotationIndex"
            :description="slide.description"
            :title="slide.title"
            :image="slide.image"
            :link="slide.link"
          />
        </div>
        <div class="flex-horizontal dots">
          <span
            :class="
              index === carouselRotationIndex ? 'filled-dot' : 'empty-dot'
            "
            v-for="(slide, index) in slides"
            :key="index"
          >
          </span>
        </div>
      </div>
      <Button
        :color="buttonColor"
        :size="buttonSize"
        :text="buttonRightArrow"
        clickParams="right"
        @handleClick="rotate"
        hoverable="hoverable"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import colors from "@/styles/colors";
import { ButtonSizes } from "@/components/Button.vue";
import Button from "@/components/Button.vue";
import CarouselSlide, { SlideObject } from "@/components/CarouselSlide.vue";

@Component({
  name: "Carousel",
  components: {
    Button,
    CarouselSlide,
  },
})
export default class Carousel extends Vue {
    @Prop() slides!: SlideObject[];
    @Prop() autoLoop!: boolean;

    private buttonSize: ButtonSizes = ButtonSizes.medium;
    private buttonLeftArrow: string = "ᐸ";
    private buttonRightArrow: string = "ᐳ";
    private buttonColor: string = colors.get().input;

    private carouselRotationIndex: number = 0;

    private timer!: NodeJS.Timeout;

    private rotate(direction: string): void {
        if (this.slides.length - 1 > 0) {
            let tempIndex = this.carouselRotationIndex;
            this.carouselRotationIndex = -1;

            clearInterval(this.timer);

            setTimeout(() => {
                if (direction === "left") {
                    if (tempIndex === 0) this.carouselRotationIndex = this.slides.length - 1;
                    else this.carouselRotationIndex = tempIndex - 1;
                } else if (direction === "right") {
                    if (tempIndex === this.slides.length - 1) this.carouselRotationIndex = 0;
                    else this.carouselRotationIndex = tempIndex + 1;
                }
            }, 150);

            this.timer = setInterval(() => {
                this.rotate("right");
            }, 5000);
        }
    }

    created() {
        if (this.autoLoop && (this.slides.length - 1) > 0) {
            this.timer = setInterval(() => { this.rotate("right"); }, 5000);
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 60vw;
  height: 25rem;
  margin: 1.5rem 0 1rem 0;
}

.carousel-bg {
  border: var(--mainColor) solid 0.2rem;
  border-radius: 0.5rem;
  padding: 0 2rem 0 2rem;
}

.slide-wrapper {
  height: 20rem;
  width: 100%;
}

.dots {
  margin-top: 2rem;
}

.filled-dot {
  height: 0.5rem;
  width: 0.5rem;
  background-color: var(--textColor);
  border-radius: 50%;
  margin: 0 0.5rem 0 0.5rem;
}

.empty-dot {
  height: 0.5rem;
  width: 0.5rem;
  background-color: var(--inputColor);
  border-radius: 50%;
  margin: 0 0.5rem 0 0.5rem;
}

@media only screen and (max-width: 768px) {
  .carousel-bg {
    border: unset;
  }
}
</style>
