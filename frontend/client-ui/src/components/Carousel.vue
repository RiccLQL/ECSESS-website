<template>
    <div class="flex-horizontal">
        <div class="carousel-bg flex-horizontal">
            <Button :color="buttonColor" :size="buttonSize" :text="buttonLeftArrow" clickParams="left" @handleClick="rotate" hoverable="hoverable"/>
            <div class="carousel flex-horizontal centered" >
                <Slide v-for="(slide, index) in slides" :key="index" :index="index" :carouselRotation="carouselRotationIndex" :description="slide.description" :title="slide.title" :imgPath="slide.imgPath" :imgAlt="slide.imgAlt"/>
            </div>
            <Button :color="buttonColor" :size="buttonSize" :text="buttonRightArrow" clickParams="right" @handleClick="rotate" hoverable="hoverable"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _colors from "@/styles/_colors.scss";
import { ButtonSizes } from "@/components/Button.vue";
import Button from "@/components/Button.vue";
import Slide, { SlideObject } from "@/components/Slide.vue";

@Component({
    name: "Carousel",
    components: {
        Button,
        Slide
    }
})
export default class Carousel extends Vue {
    @Prop() slides!: SlideObject[];

    private buttonSize: ButtonSizes = ButtonSizes.medium;
    private buttonLeftArrow: string = "ᐸ";
    private buttonRightArrow: string = "ᐳ";
    private buttonColor: string = _colors.darkinput;

    private carouselRotationIndex: number = 0;
    private carouselMaxRotation: number = this.slides.length - 1;

    rotate(direction: string): void {
        let tempIndex = this.carouselRotationIndex;
        this.carouselRotationIndex = -1;
        setTimeout(() => {
            if (direction === "left") {
                if (tempIndex === 0) this.carouselRotationIndex = this.carouselMaxRotation;
                else this.carouselRotationIndex = tempIndex - 1;
            } else if (direction === "right") {
                if (tempIndex === this.carouselMaxRotation) this.carouselRotationIndex = 0;
                else this.carouselRotationIndex = tempIndex + 1;
            }
        }, 150)
    }
}
</script>

<style lang="scss" scoped>
    .carousel {
        width: 60vw;
        height: 25rem;
        margin: 4rem 0 4rem 0;
    }

    .carousel-bg {
        border: $darkmain solid 0.2rem;
        border-radius: 0.5rem;
        padding: 0 2rem 0 2rem;
    }

    .fade-enter-active {
        transition-delay: 0.15s;
    }
</style>