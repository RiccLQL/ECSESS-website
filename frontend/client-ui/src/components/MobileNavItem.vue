<template>
    <div v-if="!collapsible">
        <h4>{{item.title}}</h4>
    </div>
    <div v-else>
        <h4>{{item.title}}</h4>
        <div v-if="expand">
            <div v-for="(subItem, index) in subItems" :key="index">
                <h5>{{subItem.title}}</h5>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "MobileNavItem",
})
export default class MobileNavItem extends Vue {
    
}
</script>