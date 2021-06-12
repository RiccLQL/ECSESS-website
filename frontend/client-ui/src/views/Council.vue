<template>
  <div class="council">
    <PageCover title="Meet the council"/>
    <Divider />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";

@Component({
    name: "Council",
    components: {
      PageCover,
      Divider,
    }
})
export default class Council extends Vue {
}
</script>