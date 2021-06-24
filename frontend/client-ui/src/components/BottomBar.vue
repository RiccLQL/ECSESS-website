<template>
  <div class="bottom"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextArea from "@/components/TextArea.vue";

@Component({
  name: "BottomBar",
  components: {
    TextArea,
  },
})
export default class BottomBar extends Vue {}
</script>

<style lang="scss" scoped>
.bottom {
  height: 10rem;
  margin-top: 2rem;
  background-color: var(--mainColor);
}
</style>
