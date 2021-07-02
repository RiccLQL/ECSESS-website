<template>
    <div>
        <PageCover title="All Upcoming Events"/>
        <Divider />
        <Subtitle subtitle="Events happening soon" />
        <Calendar :calendar="eventsCalendar" :totalCount="eventsCalendarSize" @showMore="showMoreEvents" @collapseResults="collapseCalendar"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import Calendar, { CalendarItem } from "@/components/Calendar.vue";
import axios from "axios";
import { EventModel } from "@/axios/modelInterfaces";

@Component({
    name: "EventsCalendar",
    components: {
        Divider,
        PageCover,
        Subtitle,
        Calendar,
    }
})
export default class EventsCalendar extends Vue {

    private eventsCalendar: CalendarItem[] = [];
    private eventsCalendarSize: number = 0;

    private async created() {
        this.eventsCalendarSize = await axios.get("/events/size").then((result) => {
            return result.data.data;
        })

        this.eventsCalendar = await axios.get("/events", {params: {paginationIndex: 0}}).then((result) => {
        const upcomingEventsRawData: EventModel[] = result.data.data;
        const upcomingEventsProcessed: CalendarItem[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, link: events.link, date: new Intl.DateTimeFormat('en-CA').format(new Date(events.date))})) : [];
        return upcomingEventsProcessed;
        })
    }

    private async showMoreEvents(paginationIndex: number) {
        const moreEvents = await axios.get(`/events`, {params: {paginationIndex: paginationIndex}}).then((result) => {
            const upcomingEventsRawData: EventModel[] = result.data.data;
            const upcomingEventsProcessed: CalendarItem[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, link: events.link, date: new Intl.DateTimeFormat('en-CA').format(new Date(events.date))})) : [];
            return upcomingEventsProcessed;
        })
        console.log(moreEvents);
        this.eventsCalendar = this.eventsCalendar.concat(moreEvents);
    }

    private collapseCalendar() {
        this.eventsCalendar = this.eventsCalendar.slice(0, 5);
    }
}
</script>
