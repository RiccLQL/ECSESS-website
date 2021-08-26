<template>
  <div class="calendar flex-vertical">
    <div
      v-for="(item, index) in calendar"
      :key="index"
      class="calendar-item flex-horizontal centered space-between"
    >
      <div class="calendar-picture fourty">
        <Picture
          :alt="item.image.alt"
          :path="item.image.path"
          :size="calendarImageSize"
        />
      </div>
      <div
        class="
          calendar-item-content
          flex-horizontal
          centered
          space-between
          sixty
        "
      >
        <div class="date twenty">
          <h4>{{ item.date }}</h4>
        </div>
        <div class="calendar-event flex-vertical sixty">
          <h2 class="left">{{ item.title }}</h2>
        </div>
        <div class="calendar-event-button twenty flex-vertical">
          <Button
            :clickParams="item.link"
            @handleClick="goToLink"
            :color="buttonColor"
            :size="buttonSize"
            text="Go to event"
          />
        </div>
      </div>
    </div>
    <div class="small-margin-bottom" v-if="!limit">
        <Button v-if="totalCount > 5 && calendar.length < totalCount" :clickParams="null" :color="buttonColor" :size="buttonSize" text="More Results" @handleClick="showMoreResults"/>
    </div>
    <div class="margin-bottom" v-if="!limit">
        <Button v-if="calendar.length > 5" :clickParams="null" :color="collapseButtonColor" :size="buttonSize" text="Collapse Results" @handleClick="collapseResults"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Picture, { ImageObject, ImageSize } from "@/components/Picture.vue";
import TextArea from "@/components/TextArea.vue";
import Button, { ButtonSizes } from "@/components/Button.vue";
import colors from "@/styles/colors";

export interface CalendarItem {
  title: string;
  description: string;
  date: string;
  link: string;
  image: ImageObject;
}

@Component({
  name: "Calendar",
  components: {
    Picture,
    TextArea,
    Button,
  },
})
export default class Calendar extends Vue {
    @Prop() calendar!: CalendarItem[];
    @Prop() totalCount!: number;
    @Prop() limit?: boolean;

    private buttonSize: ButtonSizes = ButtonSizes.medium;
    private buttonColor: string = colors.get().accent;
    private collapseButtonColor: string = "#FA8072";
    private calendarImageSize: ImageSize = ImageSize.auto;

    private paginationIndex: number = 0;

    private goToLink(value: string) {
        window.open(value);
    }

    private showMoreResults() {
        this.paginationIndex++;
        this.$emit("showMore", this.paginationIndex);
    }

    private collapseResults() {
        this.paginationIndex = 0;
        this.$emit("collapseResults");
    }
}
</script>

<style lang="scss" scoped>
.calendar-item {
  width: 60vw;
  height: 10rem;
  margin: 1rem 0 1rem 0;
}

.calendar-item-content {
  width: 60vw;
  height: 10rem;
  padding: 0 1.5rem 0 1.5rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
  border: 0.2rem solid var(--mainColor);
}

.calendar-picture {
  filter: grayscale(1);
  height: 10rem;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: 0.3s all ease;
}

.calendar-picture:hover {
  filter: unset;
}

.small-margin-bottom {
  margin-bottom: 0.8rem;
}
</style>
