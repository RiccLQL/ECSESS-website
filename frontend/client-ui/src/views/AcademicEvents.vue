<template>
    <div>
        <PageCover title="Academic Events" subtitle="Academic Forum, Professor Speaker Series, and more."/>
        <Divider />
        <Subtitle subtitle="Events happening soon" />
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
import axios from "axios";
import { EventModel } from "@/axios/modelInterfaces";

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
    private eventsList: ListItem[] = [];
    private oneMonth: Date = new Date();

    private async created() {
        this.oneMonth.setDate(this.oneMonth.getDate() + 30);
        let oneMonthString = this.oneMonth.toISOString().split('T')[0];
        this.upcomingEvents = await axios.get(`/events/byCategory/month`, {params: {category: "Academic", date: new Date(oneMonthString)}}).then((result) => {
            const upcomingEventsRawData: EventModel[] = result.data.data;
            const upcomingEventsProcessed: GridCellObject[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, button: "Visit Link", buttonLink: events.link })) : [];
            return upcomingEventsProcessed;
        })

        this.eventsList = await axios.get(`/events/byCategory`, {params: {category: "Academic"}}).then((result) => {
            const eventsRawData: EventModel[] = result.data.data;
            const eventsProcessed: ListItem[] = eventsRawData ?  eventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, button: "Visit Link", buttonLink: events.link })) : [];
            return eventsProcessed;
        })
    }
}
</script>
