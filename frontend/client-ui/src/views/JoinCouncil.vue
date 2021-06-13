<template>
  <div class="join-council">
    <PageCover title="Join ECSESS"/>
    <Divider />
    <Subtitle subtitle="Applications will be open in the fall!" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
    name: "Council",
    components: {
      PageCover,
      Divider,
      Subtitle,
    }
})
export default class Council extends Vue {

}
</script>