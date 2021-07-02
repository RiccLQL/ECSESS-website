<template>
  <div>
    <p class="text-area">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ButtonSizes } from "@/components/Button.vue";

@Component({
  name: "TextArea",
})
export default class TextArea extends Vue {
  @Prop() text!: string;
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}

.text-area {
  line-height: 1.5rem;
}
</style>
