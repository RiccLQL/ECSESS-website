<template>
  <div class="council">
    <PageCover title="Meet the council" />
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
import { MemberModel } from "@/axios/modelInterfaces";
import Subtitle from "@/components/Subtitle.vue";
import axios from "axios";

@Component({
  name: "Council",
  components: {
    PageCover,
    Divider,
    Grid,
    Subtitle,
  },
})
export default class Council extends Vue {
  private councilExecs: GridCellObject[] = [];
  private councilReps: GridCellObject[] = [];

  private async created(): Promise<void> {
    this.councilExecs = await axios.get(`/council/members/execs`).then((result) => {
      const execsRawData: MemberModel[] = result.data.data;
      const execsProcessed: GridCellObject[] = execsRawData ? execsRawData.map(exec => ({ title: `${exec.name} // ${exec.position}`, description: exec.description, image: { alt: exec.name, path: exec.image }, button: `Email ${exec.email}`, buttonLink: `mailto:${exec.email}` })) : [];
      return execsProcessed;
    })

    this.councilReps = await axios.get(`/council/members/reps`).then((result) => {
      const execsRawData: MemberModel[] = result.data.data;
      const execsProcessed: GridCellObject[] = execsRawData ? execsRawData.map(exec => ({ title: `${exec.name} // ${exec.position}`, description: exec.description, image: { alt: exec.name, path: exec.image }, button: `Email ${exec.email}`, buttonLink: `mailto:${exec.email}` })) : [];
      return execsProcessed;
    })
  }

  
}
</script>
