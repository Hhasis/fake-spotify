<template>
  <v-container fluid class="container">
    <div class="d-flex">
      <side-bar :menuNavs="menuNavs"></side-bar>
      <div>
        <!-- <app-bar></app-bar> -->
        <router-view />
      </div>
    </div>
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
</style>
