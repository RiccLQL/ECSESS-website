<template>
  <div class="page-cover flex-vertical centered">
    <div>
      <h1>{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle.toUpperCase() }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextArea from "@/components/TextArea.vue";

@Component({
  name: "PageCover",
  components: {
    TextArea,
  },
})
export default class PageCover extends Vue {
  @Prop() private title!: string;
  @Prop() private subtitle?: string;
}
</script>

<style lang="scss" scoped>
.page-cover {
  width: 100%;
  height: 70vh;
  overflow: hidden;
  user-select: none;
}

@media only screen and (max-width: 768px) {
.page-cover {
  width: 100%;
  height: 80vh;
  overflow: hidden;
  user-select: none;
}
}
</style>
