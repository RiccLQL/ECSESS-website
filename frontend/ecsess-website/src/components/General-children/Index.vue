<template>
  <div>
    <div id="subtitle" class="subtitle">
      <h2>Sections</h2>
    </div>
    <Slideshow :items="indexItems" :navStyle="'expand'" />
  </div>
</template>

<script>
import Slideshow from "../General-children/Slideshow";

export default {
  name: "Index",
  components: { Slideshow },
  props: ["indexItems"],
  methods: {}
};
</script>

<style lang="scss"></style>
