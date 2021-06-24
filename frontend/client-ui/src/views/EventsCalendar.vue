<template>
  <div>
    <PageCover title="All Upcoming Events" />
    <Divider />
    <Subtitle subtitle="Events happening this month" />
    <Calendar :calendar="eventsCalendar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import Calendar, { CalendarItem } from "@/components/Calendar.vue";

@Component({
  name: "SocialEvents",
  components: {
    Divider,
    PageCover,
    Subtitle,
    Calendar,
  },
})
export default class SocialEvents extends Vue {
  private eventsCalendar: CalendarItem[] = [
    {
      title: "Chucky cheez",
      description: "holy smokes",
      date: new Intl.DateTimeFormat("en-CA").format(
        new Date("December 3, 2021")
      ),
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
      image: {
        alt: "cheeze",
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg",
      },
    },
    {
      title: "Chucky cheez",
      description: "holy smokes",
      date: new Intl.DateTimeFormat("en-CA").format(
        new Date("December 3, 2021")
      ),
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
      image: {
        alt: "cheeze",
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg",
      },
    },
    {
      title: "Chucky cheez",
      description: "holy smokes",
      date: new Intl.DateTimeFormat("en-CA").format(
        new Date("December 3, 2021")
      ),
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
      image: {
        alt: "cheeze",
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg",
      },
    },
  ];
}
</script>
