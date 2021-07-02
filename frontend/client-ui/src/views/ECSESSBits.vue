<template>
  <div>
    <PageCover title="ECSESSBits" subtitle="ECSE First Year Council" />
    <Divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
  name: "ECSESSBits",
  components: {
    PageCover,
    Divider,
    Subtitle,
  },
})
export default class ECSESSBits extends Vue {}
</script>
