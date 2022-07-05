<template>
  <page-layout class="search">
    <template #content>
      <div class="ml-8 mt-6">
        <h2 class="white--text">Your top genres</h2>
      </div>
      <div class="mx-8 mt-2">
        <v-row>
          <v-col v-for="(item, index) of topGenres" :key="index" cols="3">
            <v-card
              :class="item.color"
              width="250"
              height="150"
              rounded="lg"
              class="pointer"
            >
              <p class="white--text font-weight-bold text-h5 pt-4 pl-3">
                {{ item.name }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "@/layout/PageLayout.vue";
export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      topGenres: [
        { name: "Pop", color: "red" },
        { name: "Dance/Electronic", color: "blue" },
        { name: "Hip-Hop", color: "green" },
        { name: "Rock", color: "pink" },
      ],
    };
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer !important;
}
</style>
