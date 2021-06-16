<template>
  <div class="home">
    <PageCover :path="homeCoverImgPath" :title="homeCoverTitle" :subtitle="homeCoverSubtitle"/>
    <Divider />
    <Subtitle subtitle="Featured News" />
    <Carousel :slides="featuredNews" :autoLoop="true"/>   
    <Divider />
    <Subtitle subtitle="Upcoming Events" />
    <Calendar :calendar="upcomingThreeEvents" />
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
  private featuredNews: SlideObject[] = [
    { title: "Software Engineering Co-op", description: "If you're an incoming student in the new Software Engineering Co-op program, there are many resources coming up to help you get prepared!", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623603856/shutterstock_1104908693_recolored_resized_bnsjcb.jpg", alt: "coop" }, link: "https://www.mcgill.ca/ece/undergrad/information/software-engineering-co-op" },
    { title: "ECSESS Summer Events", description: "Check out our upcoming summer events!", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623604089/GettyImages-1224104180_tfrcmz.jpg", alt: "big money" } },
  ];

  private upcomingThreeEvents: CalendarItem[] = [
    { title: "Chucky cheez", description: "holy smokes", date: new Intl.DateTimeFormat('en-CA').format(new Date('December 3, 2021')), link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", image: { alt: "cheeze", path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg" } },
    { title: "Chucky cheez", description: "holy smokes", date: new Intl.DateTimeFormat('en-CA').format(new Date('December 3, 2021')), link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", image: { alt: "cheeze", path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg" } },
    { title: "Chucky cheez", description: "holy smokes", date: new Intl.DateTimeFormat('en-CA').format(new Date('December 3, 2021')), link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date", image: { alt: "cheeze", path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/council-members_xkjqpv.jpg" } },
  ]

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
        image: result.data.url });
    });
    this.$forceUpdate();
  }
}
</script>