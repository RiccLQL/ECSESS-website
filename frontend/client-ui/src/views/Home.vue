<template>
  <div class="home">
    <PageCover
      :title="homeCoverTitle"
    />
    <Divider />
    <Subtitle subtitle="A hub for McGill ECSE students" />
    <div class="flex-horizontal">
      <div class="sixty flex-horizontal">
        <div class="flex-vertical sixty side-margins">
          <TextArea
            text="ECSESS (Electrical, Computer & Software Engineering Students' Society at McGill) is a student association which helps McGill ECSE students in their academic, technical, social and professional progression."
            class="flex-vertical centered"
          />
          <TextArea
            text="This website was created to bring resources and information closer to students. All relevant academic resources, career resources and information about ECSESS events can be found here!"
            class="flex-vertical centered"
          />
        </div>
        <div class="fourty">
          <Picture
            alt="ECSESS Council"
            path="https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/council2019-2020_ba2neu.jpg"
            :size="councilImageSize"
          />
        </div>
      </div>
    </div>
    <Divider />
    <Subtitle subtitle="Featured News" />
    <Carousel :slides="featuredNews" :autoLoop="true" />
    <Divider />
    <Subtitle subtitle="Upcoming Events" />
    <Calendar :calendar="upcomingEvents" @showMore="showMoreUpcomingEvents" :totalCount="upcomingEventsSize" @collapseResults="collapseUpcomingEvents" limit="true"/>
    <Divider />
    <Subtitle subtitle="Promote your event with ECSE students" />
    <TextArea
      text="Send a message to be featured on the ECSESS newsletter, to be shared with all ECSE students!"
    />
    <Form v-model="livewireForm" @handleFormSubmit="submitLivewire" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";
import Carousel from "@/components/Carousel.vue";
import { SlideObject } from "@/components/CarouselSlide.vue";
import Form from "@/components/Form.vue";
import { InputObject } from "@/components/FormInput.vue";
import TextArea from "@/components/TextArea.vue";
import axios from "axios";
import FormData from "form-data";
import Calendar, { CalendarItem } from "@/components/Calendar.vue";
import { NewsModel, EventModel } from "@/axios/modelInterfaces";
import { ImageSize } from "@/components/Picture.vue";
import Picture from "@/components/Picture.vue";

@Component({
  components: {
    PageCover,
    Divider,
    Subtitle,
    Carousel,
    Form,
    TextArea,
    Calendar,
    Picture,
  },
})
export default class Home extends Vue {
  private homeCoverTitle: string = "Hello, world!";
  private featuredNews: SlideObject[] = [];
  private upcomingEvents: CalendarItem[] = [];
  private upcomingEventsSize: number = 0;

  private councilImageSize: ImageSize = ImageSize.auto;
  
  private async created() {
    this.featuredNews = await axios.get("/news/featured").then((result) => {
      const newsRawData: NewsModel[] = result.data.data;
      const newsProcessed: SlideObject[] = newsRawData
        ? newsRawData.map((news) => ({
            title: news.title,
            description: news.description,
            image: { alt: "news", path: news.image },
            link: news.link,
          }))
        : [];
      return newsProcessed;
    });

    this.upcomingEventsSize = await axios.get("/events/size").then((result) => {
      return result.data.data;
    })

    this.upcomingEvents = await axios.get(`/events`, {params: {paginationIndex: 0}}).then((result) => {
      const upcomingEventsRawData: EventModel[] = result.data.data;
      const upcomingEventsProcessed: CalendarItem[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, link: events.link, date: new Intl.DateTimeFormat('en-CA').format(new Date(events.date))})) : [];
      return upcomingEventsProcessed;
    });
  }

  private livewireEmail: string = "";
  private livewireName: string = "";
  private livewireOrganization: string = "";
  private livewireSubject: string = "";
  private livewireMessage: string = "";
  private livewirePicture!: File;
  private livewireForm: InputObject[] = [
    {
      name: "Name",
      placeholder: "Full Name",
      value: this.livewireName,
      inputType: "text",
    },
    {
      name: "Email",
      placeholder: "Email Address",
      value: this.livewireEmail,
      inputType: "email",
    },
    {
      name: "Organization",
      placeholder: "Organization",
      value: this.livewireOrganization,
      inputType: "text",
    },
    {
      name: "Subject",
      placeholder: "Email Subject",
      value: this.livewireSubject,
      inputType: "text",
    },
    {
      name: "Message",
      placeholder: "Message",
      value: this.livewireMessage,
      inputType: "textarea",
      height: "20rem",
    },
    {
      name: "Image",
      placeholder: "Attach Image",
      value: this.livewirePicture,
      inputType: "file",
    },
  ];

  private submitLivewire(form: InputObject[]) {
    const url = `${process.env.VUE_APP_CLOUDINARY_URL}/image/upload`;
    let data = new FormData();
    data.append("file", this.livewireForm[5].value);
    data.append("upload_preset", "ml_default");
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    axios.post(url, data, config).then((result) => {
      console.log(this.livewireForm[4].value)
      axios.post("/email/livewire", {
        to: process.env.VUE_APP_VP_COMMS_EMAIL,
        from: this.livewireForm[1].value,
        subject: `[${this.livewireForm[2].value} -- ${this.livewireForm[0].value} -- ${this.livewireForm[1].value}] ${this.livewireForm[3].value}`,
        text: this.livewireForm[4].value,
        image: result.data.secure_url,
      });
    });
    this.$forceUpdate();
  }

  private async showMoreUpcomingEvents(paginationIndex: number) {
      const moreEvents = await axios.get(`/events`, {params: {paginationIndex: paginationIndex}}).then((result) => {
        const upcomingEventsRawData: EventModel[] = result.data.data;
        const upcomingEventsProcessed: CalendarItem[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, link: events.link, date: new Intl.DateTimeFormat('en-CA').format(new Date(events.date))})) : [];
        return upcomingEventsProcessed;
      })
      this.upcomingEvents = this.upcomingEvents.concat(moreEvents);
  }

  private async collapseUpcomingEvents() {
    this.upcomingEvents = this.upcomingEvents.slice(0, 5);
  }
}
</script>
