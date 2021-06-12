<template>
  <div class="home">
    <PageCover :path="homeCoverImgPath" :title="homeCoverTitle" :subtitle="homeCoverSubtitle"/>
    <Divider />
    <Subtitle subtitle="Featured News" />
    <Carousel :slides="featuredNews"/>   
    <Divider />
    <Subtitle subtitle="Upcoming Events" />
    <Divider />
    <Subtitle subtitle="Promote your event with ECSE students" />
    <TextArea text="Send a message to be featured on the ECSESS newsletter, to be shared with all ECSE students!"/>
    <Form :form="livewireForm"/>
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
import { SlideObject } from "@/components/Slide.vue";
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
    { title: "Huge News", description: "Yea, so I think this design looks a lot better! \n\n What do you think?", imgPath: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389519/funds-featured_ptjrll.jpg", imgAlt: "big money" },
    { title: "Huge Huge", description: "Yea, so I think this design looks a lot better! \n\n Ayo this text look a lil bit different", imgPath: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389519/gradient_hdiyxz.png", imgAlt: "big money" },
    { title: "News News", description: "News News News!", imgPath: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", imgAlt: "big money" },
    { title: "Waluigi", description: "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.", 
      imgPath: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389516/yes_d8ochj.png", imgAlt: "big money" },
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
}
</script>