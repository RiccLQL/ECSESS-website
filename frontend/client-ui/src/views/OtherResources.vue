<template>
  <div>
    <PageCover title="Other Resources" />
    <Divider />
    <Subtitle subtitle="Coming Soon" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
  name: "OtherResources",
  components: {
    PageCover,
    Divider,
    Subtitle,
  },
})
export default class OtherResources extends Vue {}
</script>
