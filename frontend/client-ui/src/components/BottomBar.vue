<template>
  <div class="bottom flex-horizontal">
    <div class="flex-vertical">
      <h4>Electrical, Computer & Software Engineering Students' Society @ McGill</h4>
      <div class="flex-horizontal">
        <a href="https://www.instagram.com/mcgill_ecsess/" target="_blank" class="social-media"><Picture alt="Instagram" path="https://res.cloudinary.com/ecsess-website/image/upload/v1625194522/instagram_2_ld4hje.png" :size="logoSize"/></a>
        <a href="https://www.facebook.com/ECSESS" target="_blank" class="social-media"><Picture alt="Facebook" path="https://res.cloudinary.com/ecsess-website/image/upload/v1625194522/facebook_jcchsn.png" :size="logoSize"/></a>
        <a href="https://vm.tiktok.com/ZMd6u7CV4/" target="_blank" class="social-media"><Picture alt="Tiktok" path="https://res.cloudinary.com/ecsess-website/image/upload/v1625194522/tik-tok_zg9zjq.png" :size="logoSize"/></a>
      </div>
      <p>3630 Rue University, Montréal, QC H3A 2B3</p>
      <p>All Rights Reserved</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextArea from "@/components/TextArea.vue";
import Picture, { ImageSize } from "@/components/Picture.vue";

@Component({
  name: "BottomBar",
  components: {
    TextArea,
    Picture,
  },
})
export default class BottomBar extends Vue {
  private logoSize: ImageSize = ImageSize.logo;
}
</script>

<style lang="scss" scoped>
.bottom {
  height: 10rem;
  margin-top: 2rem;
  background-color: var(--mainColor);
  padding: 4rem;
}

.social-media {
  margin: 0 0.5rem;
}

.align-right {
  justify-content: right;
  text-align: right;
}
</style>
