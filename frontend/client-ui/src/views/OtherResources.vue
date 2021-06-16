<template>
    <div>
        <PageCover title="Other Resources" />
        <Divider/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";
import _colors from "@/styles/_colors.scss";

@Component({
    name: "OtherResources",
    components: {
        PageCover,
        Divider,
        Subtitle,
    }
})
export default class OtherResources extends Vue {
}
</script>