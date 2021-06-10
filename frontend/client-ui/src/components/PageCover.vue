<template>
    <div class="page-cover flex-vertical centered">
        <div class="absolute">
            <h1>{{title}}</h1>
            <TextArea />
        </div>
        <Picture :path="path" alt="Home Image" :size="coverImageSize"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Picture, { ImageSize } from "@/components/Picture.vue";
import TextArea from "@/components/TextArea.vue";

@Component({
    name: "PageCover",
    components: {
        Picture,
        TextArea,
    }
})
export default class PageCover extends Vue {
    @Prop() private path!: string;
    @Prop() private title!: string;
    private coverImageSize: ImageSize = ImageSize.fullscreen;
}
</script>

<style lang="scss" scoped>
    .page-cover {
        width: 100vw;
        max-height: 40vh;
        overflow: hidden;
        user-select: none;
    }
</style>