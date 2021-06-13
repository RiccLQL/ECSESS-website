<template>
    <div class="flex-vertical">
        <form class="flex-vertical centered" @submit.prevent="handleSubmit" >
            <FormInput v-for="(input, index) in form" :key="index" :inputType="input.inputType" :placeholder="input.placeholder" :value="input.value" :name="input.name" :index="index" :height="input.height" @changeValue="onValueChange"/>
            <FormInput inputType="submit" />
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _colors from "@/styles/_colors.scss";
import FormInput, { InputObject } from "@/components/FormInput.vue"

@Component({
    name: "Form",
    components: {
        FormInput,
    }
})
export default class Form extends Vue {
    @Prop() form!: InputObject[];
    private formInstance: InputObject[] = this.form;

    private onValueChange(inputValue: string, index: number ): void {
        this.formInstance[index].value = inputValue;
    }

    private handleSubmit(): void {
        this.$emit("handleFormSubmit", this.formInstance);
    }
}
</script>

<style lang="scss" scoped>
    form {
        width: 60vw;
    }
</style>