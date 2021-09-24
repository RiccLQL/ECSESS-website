<template>
  <div class="academic-resources">
    <PageCover
      title="Academic Resources"
      subtitle="Contact an academic rep, or browse academic rights and resources"
    />    
    <Divider />
    <Subtitle subtitle="Academic Resources & Programs" />
    <Grid :gridCells="resourcesGrid"/>    
    <Divider />
    <Subtitle subtitle="The Engineering Student Toolbox" />
    <div class="engineering-student-toolbox display-flex flex-vertical">
      <p>A list of online engineering resources to help you thrive during your studies</p>
      <div v-for="(toolboxEntry, index) in toolboxEntries" :key="index" class="sixty display-flex flex-horizontal space-between toolbox-entry">
        <h4>{{toolboxEntry.title}}</h4>
        <a :href="toolboxEntry.link" target="_blank"><Button text="Visit" :color="buttonColor" :size="toolboxButtonSize" /></a>
      </div>
    </div>
    <Divider />
    <!-- <Subtitle subtitle="Contact Anja, our VP Academic" />
    <TextArea
      text="Send your concerns, suggestions and questions directly to our VP Academic, who will help you and forward your message to the right people!"
    />
    <Form v-model="vpAcadForm" @handleFormSubmit="submitAcadEmail" />
    <Divider />
    <Subtitle subtitle="Your Rights as a Student in Engineering" />
    <TextArea text="Working on it!" />
    <Divider /> -->
    <Subtitle subtitle="Academic Events" />
    <List :list="eventsList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Divider from "@/components/Divider.vue";
import Subtitle from "@/components/Subtitle.vue";
import Form from "@/components/Form.vue";
import { FileInputTypes, InputObject } from "@/components/FormInput.vue";
import Picture, { ImageObject, ImageSize } from "@/components/Picture.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import colors from "@/styles/colors";
import TextArea from "@/components/TextArea.vue";
import List, { ListItem } from '@/components/List.vue';
import axios from 'axios';
import { EventModel, ResourceModel } from '@/axios/modelInterfaces';
import Grid, { GridCellObject } from '@/components/Grid.vue';

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
    List,
    Grid,
  },
})
export default class AcademicResources extends Vue {

    private eventsList: ListItem[] = [];
    private resourcesGrid: GridCellObject[] = [];
    private toolboxEntries: { title: string, link: string }[] = [
      { title: "Paul's Online Math Notes", link: "https://tutorial.math.lamar.edu/" },
      { title: "MIT Opencourseware", link: "https://ocw.mit.edu/index.htm" },
      { title: "Efunda (Engineering Fundamentals)", link: "https://www.efunda.com/home.cfm" },
      { title: "The Engineering Toolbox", link: "https://www.engineeringtoolbox.com/" },
      { title: "Khan Academy", link: "https://www.khanacademy.org/" },
    ]
    private toolboxButtonSize: string = ButtonSizes.medium;
    private buttonColor: string = colors.get().accent;

    private async created() {
        this.eventsList = await axios.get(`/events/byCategory`, {params: {category: "Academic"}}).then((result) => {
            const eventsRawData: EventModel[] = result.data.data;
            const eventsProcessed: ListItem[] = eventsRawData ?  eventsRawData.map(events => ({ title: events.title, description: events.description, image: { alt: "upcoming event", path: events.image }, button: "Visit Link", buttonLink: events.link })) : [];
            return eventsProcessed;
        })

        this.resourcesGrid = await axios.get(`/resources/byCategory`, {params: {category: "Academic"}}).then((result) => {
            const resourcesRawData: ResourceModel[] = result.data.data;
            const resourcesProcessed: GridCellObject[] = resourcesRawData.map(resource => ({ title: resource.title, description: resource.description, image: { alt: "Academic Resource", path: resource.image }, button: `Visit ${resource.title}`, buttonLink: resource.link }));
            return resourcesProcessed;
        })
    }

    private name: string = "";
    private email: string = "";
    private subject: string = "";
    private message: string = "";
    private file!: File;

    private vpAcadForm: InputObject[] = [
      {
        name: "Name",
        placeholder: "Full Name",
        value: this.name,
        inputType: "text",
      },
      {
        name: "Email",
        placeholder: "Email Address",
        value: this.email,
        inputType: "email",
      },
      {
        name: "Subject",
        placeholder: "Email Subject",
        value: this.subject,
        inputType: "text",
      },
      {
        name: "Message",
        placeholder: "Message",
        value: this.message,
        inputType: "textarea",
        height: "20rem",
      },
      {
        name: "Image",
        placeholder: "Attach File",
        value: this.file,
        inputType: "file",
        fileInputType: FileInputTypes.document,
      },
    ];

    private submitAcadEmail(form: InputObject[]) {
      const url = `${process.env.VUE_APP_CLOUDINARY_URL}/raw/upload`;
      let data = new FormData();
      data.append("file", this.vpAcadForm[4].value);
      data.append("upload_preset", "ml_default");
      data.append("resource_type", "auto");
      const config = {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      };
      axios.post(url, data, config).then((result) => {
        axios.post("/email/academic", {
          to: process.env.VUE_APP_VP_ACAD_EMAIL,
          from: this.vpAcadForm[1].value,
          subject: `[${this.vpAcadForm[1].value} -- ${this.vpAcadForm[0].value}] ${this.vpAcadForm[2].value}`,
          text: this.vpAcadForm[3].value,
          image: result.data.secure_url,
        });
      });
      this.$forceUpdate();
    }
}
</script>

<style lang="scss" scoped>
  .toolbox-entry {
    background-color: var(--mainColor);
    margin: 0.5rem 0;
    padding: 0.2rem 1rem;
    border-radius: 0.2rem;
  }

  @media only screen and (max-width: 768px) {
    .toolbox-entry {
      flex-direction: column;
    }
  }
</style>
