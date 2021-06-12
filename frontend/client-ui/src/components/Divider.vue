<template>
    <div class="flex-horizontal centered">
        <div class="divider"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "Divider",
})
export default class NavBarDropdown extends Vue {

}
</script>

<style lang="scss" scoped>
    .divider {
        background-color: $darktext;
        border-radius: 0.1rem;
        height: 0.2rem;
        width: 70%;
        margin: 4rem 0 4rem 0;
    }
</style>