<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <MobileNavItem/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MobileNavItem from "@/components/MobileNavItem.vue";

@Component({
  name: "MobileNavMenu",
  components: {
      MobileNavItem,
  }
})
export default class MobileNavMenu extends Vue {

}
</script>