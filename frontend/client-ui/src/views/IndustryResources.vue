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
  ];

  private projectHelpGrid: GridCellObject[] = [
  ];

  private jobType: "electrical" | "software" | "computer" | "" = "";

  private specifyJobType(
    jobType: "electrical" | "software" | "computer" | ""
  ): void {
    this.jobType = jobType;
  }

  private jobResults: JobResultItem[] = [
  ];

  private created() {
    this.jobHelpGrid = await axios.get(`/resources/byCategory`, {params: {category: "Industry"}}).then((result) => {
        const resourcesRawData: ResourceModel[] = result.data.data;
        const resourcesProcessed: GridCellObject[] = resourcesRawData.map(resource => ({ title: resource.title, description: resource.description, image: { alt: "Industry Resource", path: resource.image }, button: `Visit ${resource.title}`, buttonLink: resource.link }));
        return resourcesProcessed;
    })

    this.jobHelpGrid = await axios.get(`/resources/byCategory`, {params: {category: "Projects"}}).then((result) => {
        const resourcesRawData: ResourceModel[] = result.data.data;
        const resourcesProcessed: GridCellObject[] = resourcesRawData.map(resource => ({ title: resource.title, description: resource.description, image: { alt: "Project Resource", path: resource.image }, button: `Visit ${resource.title}`, buttonLink: resource.link }));
        return resourcesProcessed;
    })
  }

  private buttonColor: string = colors.get().input;
  private buttonSize: ButtonSizes = ButtonSizes.big;
}
</script>

<style lang="scss" scoped>
.job-button {
  margin: 0 0.5rem 0 0.5rem;
}
</style>
