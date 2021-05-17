<template>
  <div id="FYC" class="FYC">
    <FYCMainImage id="main-image" />
    <div id="FYC-content" class="FYC-content">
      <Index :indexItems="fycSections" />
      <div id="FYC-members" class="FYC-members">
        <div id="subtitle" class="subtitle">
          <h2>Meet Your ECSESS Bits!</h2>
        </div>
        <div id="fyc-member-section" class="fyc-member-section">
          <Members :displayMembers="fycMembers" class="member-component" />
        </div>
      </div>
      <div
        id="fyc-public-documents-section"
        class="fyc-public-documents-section"
      >
        <div id="subtitle" class="subtitle">
          <h2>ECSESS Bits Documents</h2>
        </div>
        <div class="fyc-public-documents-body">
          <h3>Coming soon.</h3>
        </div>
      </div>
      <div id="join-fyc-section">
        <div id="subtitle" class="subtitle">
          <h2>Join The First-Year Council!</h2>
        </div>
        <div class="join-fyc-body">
          <h3>Coming soon.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FYCMainImage from "./FYC-children/FYCMainImage.vue";
import Members from "./General-children/Members.vue";
import Index from "./General-children/Index.vue";

export default {
  name: "ECSESSBits",
  components: { FYCMainImage, Members, Index },
  data: function() {
    return {
      fycSections: [
        {
          name: "ECSESS Bits Members",
          id: 0,
          image: "council-members.jpg",
          href: "FYC-members"
        },
        {
          name: "ECSESS Bits Documents",
          id: 1,
          image: "documents.jpg",
          href: "fyc-public-documents-section"
        },
        {
          name: "Join the First-Year Council!",
          id: 2,
          image: "ECSESS_Lounge.jpg",
          href: "join-fyc-section"
        }
      ],
      fycMembers: [
        {
          id: 17,
          name: "Charles Lapierre",
          position: "U1 Software Rep",
          photo: "charles.jpg",
          email: "software.u1rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 18,
          name: "Arman Shroff-Mehrabadi",
          position: "U1 Computer Rep",
          photo: "arman.jpg",
          email: "computer.u1rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 19,
          name: "Alondra Karam",
          position: "U1 Electrical Rep",
          photo: "alondra.jpg",
          email: "electrical.u1rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 20,
          name: "Ryan Reszetnik",
          position: "U0 Rep",
          photo: "ryan.jpg",
          email: "ecsess.u0rep@mgcilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 21,
          name: "ADD THE OTHERS PLS",
          position: "Chief Meme Officer",
          photo: "ricky.jpg",
          email: "someone else",
          blurb: "Ayy lmao!"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'); 
</style>