<template>
    <div class="job-results flex-vertical">
        <div v-for="(result, index) in jobResults" :key="index" class="job-result flex-horizontal centered space-between">
            <div class="twenty">
                <h4>{{result.company}}</h4>
            </div>
            <div class="sixty">
                <h2>{{result.jobTitle}}</h2>
                <p>{{result.jobReqs}}</p>
            </div>
            <div class="twenty">
                <Button :clickParams="result.link" :color="buttonColor" :size="buttonSize" text="See Opening" @handleClick="goToLink"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button, { ButtonSizes } from "@/components/Button.vue";
import _colors from "@/styles/_colors.scss";

export interface JobResultItem {
    company: string,
    jobTitle: string,
    jobReqs: string,
    link: string,
}

@Component({
    name: "JobResults",
    components: {
        Button,
    }
})
export default class JobResults extends Vue {
    @Prop() jobResults!: JobResultItem[]; 

    private buttonSize: ButtonSizes = ButtonSizes.medium;
    private buttonColor: string = _colors.darkaccent;

    private goToLink(value: string) {
        window.open(value);
    }
}
</script>

<style lang="scss" scoped>
    .job-result {
        width: 60vw;
        background-color: $darkmain;
        border-radius: 0.2rem;
        margin-bottom: 1rem;
    }

</style>