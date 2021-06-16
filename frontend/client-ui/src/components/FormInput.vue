<template>
    <div class="input">
        <textarea v-if="inputType === 'textarea'" :placeholder="placeholder" :type="inputType" :style="{ height: height }" required></textarea>
        <input v-else-if="inputType === 'submit'" class="interactive" :type="inputType"/>
        <div v-else-if="inputType === 'file'">
            <input :type="inputType" :style="{ display: 'none' }" id="file-input" required v-on:change="onFileChanged"/>
            <Button :color="fileButtonColor" :size="fileButtonSize" :clickParams="selectFile" :text="placeholder" @handleClick="selectFile" hoverable="hoverable"/>
            <p>{{fileName}}</p>
        </div>
        <input v-else v-model="inputValue" :placeholder="placeholder" :type="inputType" :style="{ height: height }" required/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _colors from "@/styles/_colors.scss";
import Button, { ButtonSizes } from "@/components/Button.vue";

export interface InputObject {
    placeholder: string,
    value: string | File,
    inputType: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "textarea" | "time" | "url" | "week",
    height?: "20rem",
    name: string,
}

@Component({
    name: "FormInput",
    components: {
        Button,
    }
})
export default class FormInput extends Vue {
    @Prop() value!: string;
    @Prop() height?: string;
    @Prop() placeholder!: string;
    @Prop() inputType!: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
    @Prop() index!: number;

    private fileButtonColor: string = _colors.darkinput;
    private fileButtonSize: ButtonSizes = ButtonSizes.medium;
    private fileName: string | null = null;

    get inputValue() {
        return this.value;
    }

    set inputValue(value: string) {
        this.$emit("changeValue", value, this.index);
    }

    created() {
        this.inputValue = this.value;
    }
    
    private selectFile(): void {
        document.getElementById("file-input")?.click();
    }

    private onFileChanged(event: any): void {
        const files: FileList = event.target.files;
        let result: File = <File>files.item(0);
        this.fileName = result.name;
        this.$emit('changeValue', result, this.index);
    }

}
</script>

<style lang="scss" scoped>
    .input {
        margin: 0.5rem;
    }

    input {
        all: unset;
        background-color: $darkinput;
        font-family: $defaultfont;
        font-size: $small-size;
        font-weight: $bold;
        color: $darktext;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 0.2rem;
        text-align: left;
        width: 40rem;
    }

    .interactive {
        width: unset;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .interactive:hover {
        background-color: $darkaccent;
    }

    textarea {
        all: unset;
        background-color: $darkinput;
        font-family: $defaultfont;
        font-size: $small-size;
        font-weight: $bold;
        color: $darktext;
        padding: 0.5rem 1rem 0.5rem 1rem;
        border-radius: 0.2rem;
        text-align: left;
        width: 40rem;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: $darktext;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: $darktext;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: $darktext;
    }
</style>