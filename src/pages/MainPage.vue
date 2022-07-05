<template>
  <v-container fluid class="container">
    <div class="d-flex">
      <side-bar :menuNavs="menuNavs"></side-bar>
      <div>
        <!-- <app-bar></app-bar> -->
        <router-view />
      </div>
    </div>
    <v-bottom-navigation
      class="bottom d-flex justify-space-between"
      background-color="#2a2a2b"
    >
      <div>
        <p>test</p>
      </div>
      <div>
        <div class="center" style="width: 200%" >
          <v-icon size="20" color="white">mdi-shuffle-variant</v-icon>
          <v-icon size="35" color="white">mdi-skip-previous</v-icon>
          <v-icon size="40" color="white">mdi-play-circle-outline</v-icon>
          <v-icon size="35" color="white">mdi-skip-next</v-icon>
          <v-icon size="20" color="white">mdi-repeat</v-icon>
          <v-progress-linear
            value="15"
            style="width: 100%"
            class=""
          ></v-progress-linear>
        </div>
      </div>
      <div>
        <p>test</p>
      </div>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import AppBar from "@/components/AppBar.vue";
export default {
  name: "MainPage",
  components: {
    SideBar,
    AppBar,
  },
  data() {
    return {
      menuNavs: [
        {
          name: "Home",
          icon: "mdi-home-variant",
          to: {
            name: "HomePage",
          },
        },
        {
          name: "Search",
          icon: "mdi-magnify",
          to: {
            name: "SearchPage",
          },
        },
        {
          name: "Your Library",
          icon: "mdi-library-shelves",
          to: {
            name: "LibraryPage",
          },
        },
        {
          disable: true,
        },
        {
          name: "Create Playlist",
          icon: "mdi-plus",
        },
        {
          name: "Liked Songs",
          icon: "mdi-cards-heart",
        },
        {
          name: "Your Episodes",
          icon: "mdi-bookmark-outline",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  padding: 0 !important;
}
.bottom {
  margin-top: 190px;
  height: 40%;
}
</style>
