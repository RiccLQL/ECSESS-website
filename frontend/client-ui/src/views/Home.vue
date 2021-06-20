<template>
  <div class="home">
    <PageCover :path="homeCoverImgPath" :title="homeCoverTitle" :subtitle="homeCoverSubtitle"/>
    <Divider />
    <Subtitle subtitle="Featured News" />
    <Carousel :slides="featuredNews" :autoLoop="true"/>   
    <Divider />
    <Subtitle subtitle="Upcoming Events" />
    <Calendar :calendar="upcomingEvents" />
    <Divider />
    <Subtitle subtitle="Promote your event with ECSE students" />
    <TextArea text="Send a message to be featured on the ECSESS newsletter, to be shared with all ECSE students!"/>
    <Form v-model="livewireForm" @handleFormSubmit="submitLivewire"/>
    <Divider />
    <Subtitle subtitle="Follow us on social media!" />
    <Divider />
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
import FormData from 'form-data';
import Calendar, { CalendarItem } from "@/components/Calendar.vue";
import { NewsModel, EventModel } from "@/axios/modelInterfaces";

@Component({
  components: {
    PageCover,
    Divider,
    Subtitle,
    Carousel,
    Form,
    TextArea,
    Calendar,
  },
})
export default class Home extends Vue {
  private homeCoverImgPath: string = "https://res.cloudinary.com/ecsess-website/image/upload/v1623367491/covers/peppa-blues_cqb58s.jpg";
  private homeCoverTitle: string = "Hello, world!";
  private homeCoverSubtitle: string = "Welcome to the new ECSESS website.";
  private featuredNews: SlideObject[] = [];
  private upcomingEvents: CalendarItem[] = [];
  
  private async created() {
    this.featuredNews = await axios.get("/news/featured").then((result) => {
      const newsRawData: NewsModel[] = result.data.data;
      const newsProcessed: SlideObject[] = newsRawData ? newsRawData.map(news => ({ title: news.title, description: news.description, image: { alt: "news", path: news.image }, link: news.link })) : [];
      return newsProcessed;
    })

    this.upcomingEvents = await axios.get("/events/date").then((result) => {
      const upcomingEventsRawData: EventModel[] = result.data.data;
      console.log(upcomingEventsRawData[0].date);
      const upcomingEventsProcessed: CalendarItem[] = upcomingEventsRawData ?  upcomingEventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, link: events.link, date: new Intl.DateTimeFormat('en-CA').format(new Date(events.date))})) : [];
      return upcomingEventsProcessed;
    })
  }

  private livewireEmail: string = "";
  private livewireName: string = "";
  private livewireOrganization: string = "";
  private livewireSubject: string = "";
  private livewireMessage: string = "";
  private livewirePicture!: File;
  private livewireForm: InputObject[] = [
    { name: "Name", placeholder: "Full Name", value: this.livewireName, inputType: "text" },
    { name: "Email", placeholder: "Email Address", value: this.livewireEmail, inputType: "email" },
    { name: "Organization", placeholder: "Organization", value: this.livewireOrganization, inputType: "text" },
    { name: "Subject", placeholder: "Email Subject", value: this.livewireSubject, inputType: "text" },
    { name: "Message", placeholder: "Message", value: this.livewireMessage, inputType: "textarea", height: "20rem" },
    { name: "Image", placeholder: "Attach Image", value: this.livewirePicture, inputType: "file" }
  ]

  private submitLivewire(form: InputObject[]) {

    const url = `${process.env.VUE_APP_CLOUDINARY_URL}/image/upload`;
    let data = new FormData();
    data.append("file", this.livewireForm[5].value);
    data.append("upload_preset", "ml_default");
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    };
    axios.post(url, data, config).then((result) => {
      axios.post("/home/livewire/email", { 
        senderName: this.livewireForm[0].value, 
        senderEmail: this.livewireForm[1].value, 
        senderOrganization: this.livewireForm[2].value, 
        subject: this.livewireForm[3].value,
        message: this.livewireForm[4].value,
        image: result.data.secure_url });
    });
    this.$forceUpdate();
  }
}
</script>