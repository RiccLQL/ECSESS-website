<template>
  <div id="council-members">
    <div id="subtitle" class="subtitle">
      <h2>Meet Your Council Members</h2>
    </div>
    <div id="council-members-list-wrapper" class="members-list-wrapper">
      <div id="execs" class="execs">
        <div id="sub-subtitle" class="sub-subtitle">
          <h3 id="member-title-button" class="pink-highlight">Executives</h3>
        </div>
        <Members id="exec-members" :displayMembers="execMembers" />
      </div>
      <div id="reps" class="reps">
        <div id="sub-subtitle" class="sub-subtitle">
          <h3 id="member-title-button" class="pink-highlight">
            Representatives
          </h3>
        </div>
        <Members id="rep-members" :displayMembers="repMembers" />
      </div>
    </div>
  </div>
</template>

<script>
import Members from "../General-children/Members.vue";
export default {
  name: "CouncilMembers",
  components: { Members },
  data: function() {
    return {
      execMembers: [
        {
          id: 0,
          name: "Dafne Culha",
          position: "President",
          photo: "dafne.jpg",
          email: "ecsess.president@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 1,
          name: "Kenz Zaghib",
          position: "VP Academic",
          photo: "kenz.jpg",
          email: "ecsess.vpacademic@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 2,
          name: "Ricky Liu",
          position: "VP Communications",
          photo: "ricky.jpg",
          email: "ecsess.vpcomm@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 3,
          name: "Melissa Hawley",
          position: "VP Administration",
          photo: "melissa.jpg",
          email: "ecsess.vpadmin@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 4,
          name: "Katie Younge",
          position: "VP External",
          photo: "katie.jpg",
          email: "ecsess.vpexternal@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 5,
          name: "Alena Midgen",
          position: "VP Internal",
          photo: "alena.jpg",
          email: "ecsess.vpinternal@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 6,
          name: "Ali Tahmasebi",
          position: "VP Finance",
          photo: "ali.jpg",
          email: "ecsess.vpfinance@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 7,
          name: "Alex Lam",
          position: "VP Tech Dev",
          photo: "alex.jpg",
          email: "ecsess.vptech@mcgilleus.ca",
          blurb: "Hi!"
        }
      ],

      repMembers: [
        {
          id: 8,
          name: "Hyun Su An",
          position: "U4 Software Rep",
          photo: "hyun.jpg",
          email: "software.u4rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 9,
          name: "Marie Guertin",
          position: "U4 Computer Rep",
          photo: "marie.jpg",
          email: "computer.u4rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 10,
          name: "Laurie Zaccarin",
          position: "U4 Electrical Rep",
          photo: "laurie.jpg",
          email: "electrical.u4rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 11,
          name: "Nicolas Bieber",
          position: "U3 Software Rep",
          photo: "nicolas.jpg",
          email: "software.u3rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 12,
          name: "Catherine Caron",
          position: "U3 Computer Rep",
          photo: "catherine.jpg",
          email: "computer.u3rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 13,
          name: "Julie Bellia",
          position: "U3 Electrical Rep",
          photo: "julie.jpg",
          email: "electrical.u3rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 14,
          name: "Adel Ahram",
          position: "U2 Software Rep",
          photo: "adel.jpg",
          email: "software.u2rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 15,
          name: "Benjamin St-Laurent",
          position: "U2 Computer Rep",
          photo: "ben.jpg",
          email: "computer.u2rep@mcgilleus.ca",
          blurb: "Hi!"
        },
        {
          id: 16,
          name: "Matthew Zeitouni",
          position: "U2 Electrical Rep",
          photo: "matt.jpg",
          email: "electrical.u2rep@mcgilleus.ca",
          blurb: "Hi!"
        },
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
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
</style>
