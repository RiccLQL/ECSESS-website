<template>
  <div>
    <PageCover title="ECSESS Council Documents" />
    <Divider />
    <Subtitle subtitle="Coming Soon" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";

@Component({
  name: "CouncilDocuments",
  components: {
    Divider,
    PageCover,
    Subtitle,
  },
})
export default class CouncilDocuments extends Vue {}
</script>
