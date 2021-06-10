<template>
  <div class="home">
    <PageCover :path="homeCoverImgPath" :title="homeCoverTitle"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";

@Component({
  components: {
    PageCover,
  },
})
export default class Home extends Vue {
  private homeCoverImgPath: string = "s3://ecsess-website/peppa-blues.jpg";
  private homeCoverTitle: string = "Hello World!";

}
</script>
