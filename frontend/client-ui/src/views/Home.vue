<template>
  <div class="home">
    <PageCover :path="homeCoverImgPath" :title="homeCoverTitle" :subtitle="homeCoverSubtitle"/>
    <Divider />
    <Subtitle subtitle="Featured News" />
    <Carousel :slides="featuredNews" :autoLoop="true"/>   
    <Divider />
    <Subtitle subtitle="Upcoming Events" />
    <Divider />
    <Subtitle subtitle="Promote your event with ECSE students" />
    <TextArea text="Send a message to be featured on the ECSESS newsletter, to be shared with all ECSE students!"/>
    <Form :form="livewireForm" @handleFormSubmit="submitLivewire"/>
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

@Component({
  components: {
    PageCover,
    Divider,
    Subtitle,
    Carousel,
    Form,
    TextArea,
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
  private livewireEmail: string = "";
  private livewireName: string = "";
  private livewireOrganization: string = "";
  private livewireSubject: string = "";
  private livewireMessage: string = "";
  private livewirePicture: string = "";
  private livewireForm: InputObject[] = [
    { name: "Name", placeholder: "Full Name", value: this.livewireName, inputType: "text" },
    { name: "Email", placeholder: "Email Address", value: this.livewireEmail, inputType: "email" },
    { name: "Organization", placeholder: "Organization", value: this.livewireOrganization, inputType: "text" },
    { name: "Subject", placeholder: "Email Subject", value: this.livewireSubject, inputType: "text" },
    { name: "Message", placeholder: "Message", value: this.livewireMessage, inputType: "textarea", height: "20rem" },
    { name: "Image", placeholder: "Attach Image", value: this.livewirePicture, inputType: "file" }
  ]

  private submitLivewire(form: InputObject[]) {
    
  }
}
</script>