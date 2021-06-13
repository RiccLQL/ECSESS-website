<template>
    <div>
        <PageCover title="Wellness Events" subtitle="De-stress with ECSESS, therapy dogs, and more."/>
        <Divider />
        <Subtitle subtitle="Events happening this month" />
        <Grid :gridCells="upcomingEvents" />
        <Divider />
        <Subtitle subtitle="All ECSESS Wellness Events" />
        <List :list="eventsList" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageCover from "@/components/PageCover.vue";
import Subtitle from "@/components/Subtitle.vue";
import Divider from "@/components/Divider.vue";
import List, { ListItem } from "@/components/List.vue";
import { ImageSize } from "@/components/Picture.vue";
import Grid, { GridCellObject } from "@/components/Grid.vue";

@Component({
    name: "Wellness Events",
    components: {
        Divider,
        PageCover,
        Subtitle,
        List,
        Grid,
    }
})
export default class WellnessEvents extends Vue {
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
}
</script>