<template>
  <div class="industry-resources">
    <PageCover
      title="Industry Resources"
      subtitle="CV/application tips, job postings, resources for projects and start-ups"
    />
    <Divider />
    <Subtitle subtitle="Job application and CV-building resources" />
    <Grid :gridCells="jobHelpGrid" />
    <Divider />
    <Subtitle subtitle="Project and start-up resources" />
    <Grid :gridCells="projectHelpGrid" />
    <Divider />
    <Subtitle
      subtitle="Get personalized industry advice from alumni and faculty"
    />
    <TextArea
      text="Make an appointment to talk about applying for internships and clear your roadblocks and issues with CV-building and starting projects!"
    />
    <h4 class="centered">Calendly Integration coming soon</h4>
    <Divider />
    <Subtitle subtitle="ECSE Internship Postings around Montreal" />
    <div class="flex-horizontal margin-bottom">
      <Button
        :clickParams="electrical"
        :color="buttonColor"
        hoverable="hoverable"
        :size="buttonSize"
        text="Electrical Jobs"
        class="job-button"
      />
      <Button
        :clickParams="computer"
        :color="buttonColor"
        hoverable="hoverable"
        :size="buttonSize"
        text="Computer Jobs"
        class="job-button"
      />
      <Button
        :clickParams="software"
        :color="buttonColor"
        hoverable="hoverable"
        :size="buttonSize"
        text="Software Jobs"
        class="job-button"
      />
    </div>
    <JobResults :jobResults="jobResults" />
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
import Grid, { GridCellObject } from "@/components/Grid.vue";
import JobResults, { JobResultItem } from "@/components/JobResults.vue";

@Component({
  name: "IndustryResources",
  components: {
    PageCover,
    Divider,
    Subtitle,
    Form,
    Picture,
    Button,
    TextArea,
    Grid,
    JobResults,
  },
})
export default class IndustryResources extends Vue {
  private jobHelpGrid: GridCellObject[] = [
    {
      title: "Job Application Hours",
      description:
        "June 6 - Montreal Science Center - Networking Event for eeeee's",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
    {
      title: "ECC McGill",
      description: "July 7",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
    {
      title: "CV and Cover Letter Resources",
      description: "July 8",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
  ];

  private projectHelpGrid: GridCellObject[] = [
    {
      title: "McGill Engine",
      description:
        "June 6 - Montreal Science Center - Networking Event for eeeee's",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
    {
      title: "Dobson",
      description: "July 7",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
    {
      title: "Montreal Startup Ecosystem",
      description: "July 8",
      image: {
        path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg",
        alt: "cheez",
      },
      button: "Visit Event Page",
      buttonLink: "https://www.facebook.com/",
    },
  ];

  private jobType: "electrical" | "software" | "computer" | "" = "";

  private specifyJobType(
    jobType: "electrical" | "software" | "computer" | ""
  ): void {
    this.jobType = jobType;
  }

  private jobResults: JobResultItem[] = [
    {
      company: "Google",
      jobTitle: "Software Developer Intern",
      jobReqs: "C++, Python",
      link: "google.ca",
    },
    {
      company: "Google",
      jobTitle: "Software Developer Intern",
      jobReqs: "C++, Python",
      link: "google.ca",
    },
    {
      company: "Google",
      jobTitle: "Software Developer Intern",
      jobReqs: "C++, Python",
      link: "google.ca",
    },
  ];

  private buttonColor: string = colors.get().input;
  private buttonSize: ButtonSizes = ButtonSizes.big;
}
</script>

<style lang="scss" scoped>
.job-button {
  margin: 0 0.5rem 0 0.5rem;
}
</style>
