<template>
    <div>
        <img :src="path" :alt="alt" :style="style"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ImageSizeStyle {
    width: string,
}

enum ImageSize {
    small = "small",
    medium = "medium",
    large = "large",
    fullscreen = "fullscreen",
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
                return { width: "10rem" }
            case ImageSize.medium:
                return { width: "20rem" }
            case ImageSize.large:
                return { width: "40rem" }
            case ImageSize.fullscreen:
                return { width: "100vw" }
        }
    }


}
</script>