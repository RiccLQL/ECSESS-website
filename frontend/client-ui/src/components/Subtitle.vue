<template>
    <div class="flex-vertical centered subtitle">
        <h3>{{subtitle.toUpperCase()}}</h3>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name: "Subtitle",
})
export default class Subtitle extends Vue {
    @Prop() subtitle!: string;
}
</script>

<style lang="scss" scoped>
    .subtitle {
        margin-bottom: 3rem;
    }
</style>