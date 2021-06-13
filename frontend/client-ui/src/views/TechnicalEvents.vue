<template>
    <div>
        <PageCover title="Technical Events" subtitle="CodeJam & other tech workshops"/>
        <Divider />
        <Subtitle subtitle="Events happening this month" />
        <Grid :gridCells="upcomingEvents" />
        <Divider />
        <Subtitle subtitle="CodeJam" />
        <div class="flex-horizontal">
            <div class="sixty flex-horizontal">
                <div class="flex-vertical sixty">
                    <TextArea text="CodeJam is a hackathon hosted by ECSESS." class="flex-vertical centered" />
                    <Button :clickParams="codeJamUrl" :color="codeJamButtonColor" :size="codeJamButtonSize" text="Go to CodeJam website" @handleClick="goToCodeJamWebsite" class="flex-vertical" />
                </div>
                <div class="fourty">
                    <Picture :alt="codeJamImage.alt" :path="codeJamImage.path" :size="codeJamImage.size" />
                </div>
            </div>
        </div>
        <Divider />
        <Subtitle subtitle="Other ECSESS Technical Events" />
        <List :list="eventsList" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import List, { ListItem } from "@/components/List.vue";
import { ImageObject, ImageSize } from "@/components/Picture.vue";
import Grid, { GridCellObject } from "@/components/Grid.vue";
import TextArea from "@/components/TextArea.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import _colors from "@/styles/_colors.scss";
import Picture from "@/components/Picture.vue";

@Component({
    name: "TechnicalEvents",
    components: {
        Divider,
        PageCover,
        Subtitle,
        List,
        Grid,
        TextArea,
        Button,
        Picture,
    }
})
export default class TechnicalEvents extends Vue {

    private codeJamUrl: string = "https://codejam.myshopify.com/";
    private codeJamButtonColor: string = _colors.darkaccent;
    private codeJamButtonSize: ButtonSizes = ButtonSizes.big;
    private codeJamImage: ImageObject = { alt: "Code Jam", path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389516/codejam2019_iahmqr.jpg", size: ImageSize.auto };


    private upcomingEvents: GridCellObject[] = [
        { title: "cheese and cheese with Cheese", description: "June 6 - Montreal Science Center - Networking Event for eeeee's", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", alt: "cheez" }, button: "Visit Event Page", buttonLink: "https://www.facebook.com/" },
        { title: "cheese and cheese with Cheese", description: "July 7", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", alt: "cheez" }, button: "Visit Event Page", buttonLink: "https://www.facebook.com/" },
        { title: "cheese and cheese with Cheese", description: "July 8", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", alt: "cheez" }, button: "Visit Event Page", buttonLink: "https://www.facebook.com/" },
        { title: "cheese and cheese with Cheese", description: "July 8", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", alt: "cheez" }, button: "Visit Event Page", buttonLink: "https://www.facebook.com/" },
        { title: "cheese and cheese with Cheese", description: "July 8", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389518/ECSESSCapade_2017_in_Toronto_wsurqf.jpg", alt: "cheez" }, button: "Visit Event Page", buttonLink: "https://www.facebook.com/" },
    ]

    private eventsList: ListItem[] = [
        { title: "Academic Forum", description: "People come to shit on DPM", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/acad-forum_zvqufq.png", alt: "acad forum", size: ImageSize.auto }, button: "Learn More", buttonLink: "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#Academic_Forum" },
        { title: "Academic Forum", description: "People come to shit on DPM. This description is slightly longer because I want to see if the height of a list item is dynamic. Hopefully it is and we can end here, but if it isn't, then I must re-edit the cssPeople come to shit on DPM. This description is slightly longer because I want to see if the height of a list item is dynamic. Hopefully it is and we can end here, but if it isn't, then I must re-edit the css", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/acad-forum_zvqufq.png", alt: "acad forum", size: ImageSize.auto }, button: "Learn More", buttonLink: "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#Academic_Forum" },
        { title: "Academic Forum", description: "People come to shit on DPM", image: { path: "https://res.cloudinary.com/ecsess-website/image/upload/v1623389517/acad-forum_zvqufq.png", alt: "acad forum", size: ImageSize.medium }, button: "Learn More", buttonLink: "https://eus.wiki/Electrical,_Computer,_and_Software_Engineering_Student_Society#Academic_Forum" },
    ];

    private goToCodeJamWebsite(link: string) {
        window.open(link);
    }
}
</script>