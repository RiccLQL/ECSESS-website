<template>
  <div class="flex-vertical">
    <form class="flex-vertical centered" @submit.prevent="handleSubmit">
      <FormInput
        v-for="(input, index) in value"
        :key="index"
        :inputType="input.inputType"
        :placeholder="input.placeholder"
        :value="input.value"
        :index="index"
        :height="input.height"
        :fileInputType="input.fileInputType ? input.fileInputType : undefined"
        @changeValue="onValueChange"
      />
      <FormInput inputType="submit" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import FormInput, { InputObject } from "@/components/FormInput.vue";

@Component({
  name: "Form",
  components: {
    FormInput,
  },
})
export default class Form extends Vue {
  @Prop() value!: InputObject[];

  private onValueChange(inputValue: string | File, index: number): void {
    this.value[index].value = inputValue;
  }

  private handleSubmit(): void {
    this.$emit("handleFormSubmit", this.value);
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 60vw;
}
</style>
