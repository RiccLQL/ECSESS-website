<template>        
    <transition name="fade" mode="out-in">
        <div class="slide flex-horizontal" v-if="carouselRotation !== undefined ? carouselRotation === index : true">
            <div class="fifty flex-vertical centered overflow-hidden" :style="{ 'margin-right': '0.5rem' }">
                <Picture :path="imgPath" :alt="imgAlt" :size="imgSize"/>
            </div>
            <div class="fifty" :style="{ 'margin-left': '0.5rem' }">
                <h4>{{title}}</h4>
                <TextArea :text="description" :width="textWidth"/>
            </div>
        </div>        
    </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _colors from "@/styles/_colors.scss";
import TextArea from "@/components/TextArea.vue";
import { ImageSize } from "./Picture.vue";
import Picture from "@/components/Picture.vue";

export interface SlideObject {
    title: string,
    description: string,
    imgPath: string,
    imgAlt: string,
}

@Component({
    name: "Slide",
    components: {
        TextArea,
        Picture,
    }
})
export default class Slide extends Vue {
    @Prop() description!: string;
    @Prop() title!: string;
    @Prop() imgPath!: string;
    @Prop() imgAlt!: string;
    @Prop() carouselRotation: number | undefined;
    @Prop() index!: number;
    private imgSize: ImageSize = ImageSize.medium;
    private textWidth: string = "30%";

    

}
</script>

<style lang="scss" scoped>
    .slide {
        justify-content: space-between;
        width: 90%;
        max-height: 20rem;
        overflow: hidden;
        align-items: flex-start;
    }
</style>