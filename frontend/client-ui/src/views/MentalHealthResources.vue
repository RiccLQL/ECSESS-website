<template>
  <div>
    <PageCover title="Mental Health Resources" />
    <Divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
  name: "MentalHealthResources",
  components: {
    PageCover,
    Divider,
    Subtitle,
  },
})
export default class MentalHealthResources extends Vue {}
</script>
