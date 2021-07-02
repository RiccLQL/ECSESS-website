<template>
  <div>
    <PageCover title="Student Spaces" />
    <Divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
  name: "StudentSpaces",
  components: {
    PageCover,
    Divider,
    Subtitle,
  },
})
export default class StudentSpaces extends Vue {}
</script>
