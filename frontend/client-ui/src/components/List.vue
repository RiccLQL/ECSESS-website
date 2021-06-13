<template>
    <div class="flex-vertical">
        <div v-for="(listItem, index) in list" :key="index" class="list flex-vertical centered">
            <div v-if="index % 2 === 0" class="flex-horizontal full-width">
                <div class="fifty list-image">
                    <Picture :alt="listItem.image.alt" :path="listItem.image.path" :size="listImageSize"/>
                </div>
                <div class="fifty list-text">
                    <h4>{{listItem.title}}</h4>
                    <TextArea :text="listItem.description"/>
                    <Button :clickParams="listItem.buttonLink" :color="buttonColor" :hoverable="hoverable" :size="buttonSize" v-if="listItem.button" :text="listItem.button" @handleClick="goToLink"/>
                </div>
            </div>
            <div v-else class="flex-horizontal full-width">
                <div class="fifty list-text">
                    <h4>{{listItem.title}}</h4>
                    <TextArea :text="listItem.description"/>
                    <Button :clickParams="listItem.buttonLink" :color="buttonColor" :hoverable="hoverable" :size="buttonSize" v-if="listItem.button" :text="listItem.button" @handleClick="goToLink"/>
                </div>
                <div class="fifty list-image">
                    <Picture :alt="listItem.image.alt" :path="listItem.image.path" :size="listImageSize"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Picture, { ImageObject, ImageSize } from "@/components/Picture.vue";
import TextArea from "@/components/TextArea.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import _colors from "@/styles/_colors.scss";

export interface ListItem {
    title: string,
    description: string,
    image: ImageObject,
    button?: string,
    buttonLink?: string,
}

@Component({
    name: "List",
    components: {
        Picture,
        TextArea,
        Button,
    }
})
export default class List extends Vue {
    @Prop() list!: ListItem[]; 

    private buttonSize: ButtonSizes = ButtonSizes.medium;
    private buttonColor: string = _colors.darkaccent;
    private listImageSize: ImageSize = ImageSize.auto;

    private goToLink(value: string) {
        window.open(value);
    }
}
</script>

<style lang="scss" scoped>
    .list {
        width: 60vw;
        justify-content: space-between;
        border: $darkmain solid 0.2rem;
        border-radius: 0.5rem;
        padding: 1.5rem;
        margin: 1rem;
    }

    .list-text {
        padding: 0 2rem 1.5rem 2rem;
    }

    .list-image {
        padding: 1.5rem 2rem 1.5rem 2rem;
    }
</style>