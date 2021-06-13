<template>
  <div class="council">
    <PageCover title="Meet the council"/>
    <Divider />
    <Subtitle subtitle="ECSESS Executives" />
    <Grid :gridCells="councilExecs" />
    <Divider />
    <Subtitle subtitle="ECSESS Representatives" />
    <Grid :gridCells="councilReps" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Grid, { GridCellObject } from "@/components/Grid.vue";
import Subtitle from "@/components/Subtitle.vue";

@Component({
    name: "Council",
    components: {
      PageCover,
      Divider,
      Grid,
      Subtitle,
    }
})
export default class Council extends Vue {
  private councilExecs: GridCellObject[] = [
    { title: "Katie Younge", description: "President", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526946/members/katie_tixzhd.jpg", alt: "katie" }, button: "Send Email", buttonLink: "mailto:ecsess.president@mcgilleus.ca" },
    { title: "Anja Kroon", description: "VP Academic", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604593/members/171916062_1525142564543802_2591664585097881490_n_njbklo.jpg", alt: "anja" }, button: "Send Email", buttonLink: "mailto:ecsess.vpacademic@mcgilleus.ca" },
    { title: "Alondra Karam", description: "VP Administration", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526945/members/alondra_ihvar1.jpg", alt: "alondra" }, button: "Send Email", buttonLink: "mailto:ecsess.vpadmin@mcgilleus.ca" },
    { title: "Sehr Moosabhoy", description: "VP Communications", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604696/members/sehr_di2enw.jpg", alt: "sehr" }, button: "Send Email", buttonLink: "mailto:ecsess.vpcomm@mcgilleus.ca" },
    { title: "Ali Tahma", description: "VP Finance", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526945/members/ali_izzsjc.jpg", alt: "ali" }, button: "Send Email", buttonLink: "mailto:ecsess.vpfinance@mcgilleus.ca" },
    { title: "Ricky Liu", description: "VP External", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604740/members/_DSC9714_1_v6v2wh.jpg", alt: "ricky" }, button: "Send Email", buttonLink: "mailto:ecsess.vpexternal@mcgilleus.ca" },
    { title: "Zarif Ashraf (Zidane)", description: "VP Internal", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604792/members/zarif_bcxic0.png", alt: "zarif" }, button: "Send Email", buttonLink: "mailto:ecsess.vpinternal@mcgilleus.ca" },
    { title: "Georges Mourant", description: "VP Tech Dev", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604832/members/georges_bu1xhv.png", alt: "georges" }, button: "Send Email", buttonLink: "mailto:ecsess.vptech@mcgilleus.ca" },
  ]

  private councilReps: GridCellObject[] = [

  ]
}
</script>