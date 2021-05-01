<template>
  <div id="members">
    <ul id="member-list" class="member-list">
      <li
        id="member"
        class="member"
        v-for="member in displayMembers"
        :key="member.id"
      >
        <div id="member-panel" class="member-panel">
          <div
            :id="'image-desc-flip-' + member.id"
            class="image-description-flip-wrapper"
            @mouseover="showBlurb(member.id)"
            @mouseleave="hideBlurb(member.id)"
          >
            <img
              :id="'council-member-pic-' + member.id"
              class="member-pic"
              v-bind:src="require(`../../assets/members-temp/${member.photo}`)"
            />
            <p
              :id="'member-blurb-' + member.id"
              class="member-blurb"
              style="opacity:0.0"
            >
              {{ member.blurb }}
            </p>
          </div>
          <p id="member-name" class="member-name">
            <b>{{ member.name }}</b>
          </p>
          <br />
          <p id="member-role" class="member-role">
            <i>{{ member.position }}</i>
          </p>
          <br />
          <a :href="'mailto:' + member.email">
            <p id="member-email" class="member-email">
              Contact {{ member.email }}
            </p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Members",
  components: {},
  props: ["displayMembers"],
  methods: {
    showBlurb: function(memberId) {
      document.getElementById("member-blurb-" + memberId).style.opacity = "1.0";
      document.getElementById("council-member-pic-" + memberId).style.filter =
        "brightness(50%)";
    },
    hideBlurb: function(memberId) {
      document.getElementById("member-blurb-" + memberId).style.opacity = "0.0";
      document.getElementById("council-member-pic-" + memberId).style.filter =
        "brightness(100%)";
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
</style>
