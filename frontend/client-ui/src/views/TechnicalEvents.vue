<template>
  <div>
    <PageCover
      title="Technical Events"
      subtitle="CodeJam & other tech workshops"
    />
    <Divider />
    <Subtitle subtitle="Events happening this month" />
    <Grid :gridCells="upcomingEvents" />
    <Divider />
    <Subtitle subtitle="CodeJam" />
    <div class="flex-horizontal">
      <div class="sixty flex-horizontal">
        <div class="flex-vertical sixty">
          <TextArea
            text="CodeJam is a hackathon hosted by ECSESS."
            class="flex-vertical centered"
          />
          <Button
            :clickParams="codeJamUrl"
            :color="codeJamButtonColor"
            :size="codeJamButtonSize"
            text="Go to CodeJam website"
            @handleClick="goToCodeJamWebsite"
            class="flex-vertical"
          />
        </div>
        <div class="fourty">
          <Picture
            :alt="codeJamImage.alt"
            :path="codeJamImage.path"
            :size="codeJamImage.size"
          />
        </div>
      </div>
    </div>
    <Divider />
    <Subtitle subtitle="Other ECSESS Technical Events" />
    <List :list="eventsList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import List, { ListItem } from "@/components/List.vue";
import { ImageObject, ImageSize } from "@/components/Picture.vue";
import Grid, { GridCellObject } from "@/components/Grid.vue";
import TextArea from "@/components/TextArea.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import colors from "@/styles/colors";
import Picture from "@/components/Picture.vue";
import axios from "axios";
import { EventModel } from "@/axios/modelInterfaces";

@Component({
  name: "TechnicalEvents",
  components: {
    Divider,
    PageCover,
    Subtitle,
    List,
    Grid,
    TextArea,
    Button,
    Picture,
  },
})
export default class TechnicalEvents extends Vue {
    private codeJamUrl: string = "https://codejam.myshopify.com/";
    private codeJamButtonColor: string = colors.get().accent;
    private codeJamButtonSize: ButtonSizes = ButtonSizes.big;
    private codeJamImage: ImageObject = {
        alt: "Code Jam",
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389516/codejam2019_iahmqr.jpg",
        size: ImageSize.auto,
    };
    private upcomingEvents: GridCellObject[] = [];
    private eventsList: ListItem[] = [];
    private oneMonth: Date = new Date();

    private async created() {
        this.oneMonth.setDate(this.oneMonth.getDate() + 30);
        let oneMonthString = this.oneMonth.toISOString().split('T')[0];
        this.upcomingEvents = await axios.get(`/events/byCategory/month`, {params: {category: "Technical", date: new Date(oneMonthString)}}).then((result) => {
            const upcomingEventsRawData: EventModel[] = result.data.data;
            const upcomingEventsProcessed: GridCellObject[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, button: "Visit Link", buttonLink: events.link })) : [];
            return upcomingEventsProcessed;
        })

        this.eventsList = await axios.get(`/events/byCategory`, {params: {category: "Technical"}}).then((result) => {
            const eventsRawData: EventModel[] = result.data.data;
            const eventsProcessed: ListItem[] = eventsRawData ?  eventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, button: "Visit Link", buttonLink: events.link })) : [];
            return eventsProcessed;
        })
    }

    private goToCodeJamWebsite(link: string) {
        window.open(link);
    }
}
</script>
