<template>
    <div class="page-cover flex-vertical centered">
        <div>
            <h1>{{title}}</h1>
            <h2 v-if="subtitle">{{subtitle.toUpperCase()}}</h2>
        </div>
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
    @Prop() private title!: string;
    @Prop() private subtitle?: string;
    private coverImageSize: ImageSize = ImageSize.fullscreen;
}
</script>

<style lang="scss" scoped>
    .page-cover {
        width: 100%;
        height: 70vh;
        overflow: hidden;
        user-select: none;
    }
</style>