<template>
  <div>
    <PageCover title="ECSE Photo Archive" />
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
  name: "Photos",
  components: {
    PageCover,
    Divider,
    Subtitle,
  },
})
export default class Photos extends Vue {}
</script>
