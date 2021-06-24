<template>
  <div>
    <PageCover
      title="Academic Events"
      subtitle="Academic Forum, Professor Speaker Series, and more."
    />
    <Divider />
    <Subtitle subtitle="Events happening this month" />
    <Grid :gridCells="upcomingEvents" />
    <Divider />
    <Subtitle subtitle="All ECSESS Academic Events" />
    <List :list="eventsList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import List, { ListItem } from "@/components/List.vue";
import { ImageSize } from "@/components/Picture.vue";
import Grid, { GridCellObject } from "@/components/Grid.vue";

@Component({
  name: "AcademicEvents",
  components: {
    Divider,
    PageCover,
    Subtitle,
    List,
    Grid,
  },
})
export default class AcademicEvents extends Vue {
  private upcomingEvents: GridCellObject[] = [];

  private eventsList: ListItem[] = [
    {
      title: "Academic Forum",
      description:
        "An event once a semester where students come to give feedback about their courses. Advisors and faculty members are present to relay feedback!",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623605227/members/Community-forums-848_gwljzy.jpg",
        alt: "acad forum",
        size: ImageSize.auto,
      },
      button: "Learn More",
      buttonLink:
        "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#Academic_Forum",
    },
    {
      title: "Professors' Speaker Series",
      description:
        "An event once a semester where students can attend to hear professors in ECSE speak about their research and have stimulating conversations.",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623605377/members/931292_w2uzd9.png",
        alt: "prof speaker",
        size: ImageSize.auto,
      },
      button: "Learn More",
      buttonLink:
        "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#Industry_and_Professor_Speaker_Series",
    },
    {
      title: "DPM Social",
      description:
        "You think the labs were hard? 🤖 Get ready for the group project!!! (Just kidding, you got this!) ECSESS organizes its DPM Social twice a year, where you can mingle with your classmates and learn some tips and tricks on how to make it through the DPM project! We invite the course professors, TAs, and survivors from previous semesters. Free food and beverages are served.",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623605501/members/robotSideView_xmghoy.png",
        alt: "dpm social",
        size: ImageSize.auto,
      },
      button: "Learn More",
      buttonLink:
        "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#DPM_Social",
    },
  ];
}
</script>
