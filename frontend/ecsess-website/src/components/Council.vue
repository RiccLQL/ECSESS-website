<template>
  <div id="council" class="council">
    <CouncilMainImage id="main-image" />
    <div id="council-page-body" class="page-body">
      <Index :indexItems="councilSections" />
      <CouncilMembers id="council-member-section" class="members" />
      <PublicDocuments id="public-documents-section" />
      <JoinCouncil id="join-council-section" />
    </div>
  </div>
</template>

<script>
import CouncilMembers from "./Council-children/CouncilMembers.vue";
import CouncilMainImage from "./Council-children/CouncilMainImage";
import PublicDocuments from "./Council-children/PublicDocuments";
import JoinCouncil from "./Council-children/JoinCouncil";
import Index from "./General-children/Index.vue";

export default {
  name: "Council",
  components: {
    CouncilMembers,
    CouncilMainImage,
    Index,
    PublicDocuments,
    JoinCouncil
  },
  data() {
    return {
      section: "",
      toggle: "",
      councilSections: [
        {
          name: "Council Members",
          id: 0,
          image: "council-members.jpg",
          href: "council-member-section"
        },
        {
          name: "ECSESS Public Documents",
          id: 1,
          image: "documents.jpg",
          href: "public-documents-section"
        },
        {
          name: "Join the Council",
          id: 2,
          image: "ECSESS_Lounge.jpg",
          href: "join-council-section"
        }
      ]
    };
  },
  methods: {},
  created() {
    window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
@import "./styles/Council.scss";
</style>
