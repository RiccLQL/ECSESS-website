<template>
    <div class="overflow-hidden">
        <img :src="path" :alt="alt" :style="style"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ImageSizeStyle {
    'max-width': string,
    'max-height': string,
}

enum ImageSize {
    small = "small",
    medium = "medium",
    large = "large",
    fullscreen = "fullscreen",
    auto = "auto",
}

export interface ImageObject {
    path: string,
    alt: string;
    size?: ImageSize,
}

export { ImageSize }

@Component({
    name: "Picture",
})
export default class NavBarSingleOption extends Vue {
    @Prop() private path!: string;
    @Prop() private alt!: string;
    @Prop() private size!: ImageSize;

    get style(): ImageSizeStyle {
        switch(this.size) {
            case ImageSize.small:
                return { 'max-width': "10rem", 'max-height': "10rem" }
            case ImageSize.medium:
                return { 'max-width': "20rem", 'max-height': "20rem" }
            case ImageSize.large:
                return { 'max-width': "40rem", 'max-height': "40rem" }
            case ImageSize.fullscreen:
                return { 'max-width': "100vw", 'max-height': "100vh" }
            case ImageSize.auto:
                return { 'max-width': '100%', 'max-height': '100%' }
        }
    }


}
</script>