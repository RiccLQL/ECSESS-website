<template>
    <div @click="dropdownToggle()">
        <router-link class="navbar-item flex-horizontal" :to="{path: `/${path}`}">{{text}}</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name: "NavBarSingleOption",
})
export default class NavBarSingleOption extends Vue {
    @Prop() private path!: string;
    @Prop() private text!: string;
    @Prop() private listId!: number;

    private dropdownToggle(): void {
        this.$emit('dropdown', this.listId);
    }
}
</script>