<template>
  <div class="academic-resources">
    <PageCover
      title="Academic Resources"
      subtitle="Contact an academic rep, or browse academic rights and resources"
    />
    <Divider />
    <Subtitle subtitle="Contact an academic representative" />
    <div class="flex-vertical">
      <div class="grid fourty">
        <div
          class="acadperson centered"
          v-for="(acadAuth, index) in academicAuths"
          :key="index"
        >
          <Picture
            :alt="acadAuth.image.alt"
            :path="acadAuth.image.path"
            :size="imageSize"
            class="acad-image"
          />
          <a href="#acad-form">
            <Button
              :clickParams="acadAuth.data.email"
              :color="buttonColor"
              :size="buttonSize"
              :text="'Send to: ' + acadAuth.data.name"
              @handleClick="acadEmail"
            />
          </a>
        </div>
      </div>
      <div class="flex-vertical relative">
        <span
          id="acad-form"
          :style="{ position: 'absolute', top: '-6rem' }"
        ></span>
        <h4>Sending Email to: {{ acadContactEmail }}</h4>
        <Form :form="academicContactForm" @handleFormSubmit="submitAcademic" />
      </div>
    </div>
    <Divider />
    <Subtitle subtitle="Academic Resources" />
    <TextArea text="Ask Anja" />
    <Divider />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";
import Form from "@/components/Form.vue";
import { InputObject } from "@/components/FormInput.vue";
import Picture, { ImageObject, ImageSize } from "@/components/Picture.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import colors from "@/styles/colors";
import TextArea from "@/components/TextArea.vue";

@Component({
  name: "AcademicResources",
  components: {
    PageCover,
    Divider,
    Subtitle,
    Form,
    Picture,
    Button,
    TextArea,
  },
})
export default class AcademicResources extends Vue {
  private buttonColor: string = colors.get().accent;
  private buttonSize: ButtonSizes = ButtonSizes.medium;
  private imageSize: ImageSize = ImageSize.auto;
  private acadContactEmail: string = "";

  private academicAuths: {
    image: ImageObject;
    data: { name: string; email: string };
  }[] = [
    {
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526947/members/kenz_sgsfxo.jpg",
        alt: "Acad person",
      },
      data: { name: "Kenz", email: "eeee.eee@eee" },
    },
    {
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526947/members/kenz_sgsfxo.jpg",
        alt: "Acad person",
      },
      data: { name: "Kenz", email: "eeee.eee@eee" },
    },
    {
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526947/members/kenz_sgsfxo.jpg",
        alt: "Acad person",
      },
      data: { name: "Kenz", email: "eeee.eee@eee" },
    },
    {
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623526947/members/kenz_sgsfxo.jpg",
        alt: "Acad person",
      },
      data: { name: "Kenz", email: "eeee.eee@eee" },
    },
  ];

  private academicContactForm!: InputObject[];

  created() {
    this.academicContactForm = [
      {
        name: "Full Name",
        placeholder: "Full Name",
        value: "",
        inputType: "text",
      },
      {
        name: "Email",
        placeholder: "Your Email",
        value: "",
        inputType: "text",
      },
      {
        name: "Subject",
        placeholder: "Email Subject",
        value: "",
        inputType: "text",
      },
      {
        name: "Message",
        placeholder: "Message",
        value: "",
        inputType: "textarea",
        height: "20rem",
      },
      {
        name: "File",
        placeholder: "Attach File",
        value: "",
        inputType: "file",
      },
    ];
  }

  private acadEmail(value: string) {
    this.acadContactEmail = value;
  }

  private submitAcademic() {}
}
</script>

<style lang="scss" scoped>
.acadperson {
  margin: 1rem 1rem 2rem 1rem;
}

.acad-image {
  margin-bottom: 1rem;
}
</style>
