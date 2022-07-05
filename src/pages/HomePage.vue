<template>
  <div>
    <page-layout>
      <template #content>
        <div class="pa-8" style="width: 190%">
          <h2 class="white--text">{{ bless }}</h2>
          <v-row class="mt-4">
            <v-col
              v-for="(item, index) in topMenu"
              :key="index"
              cols="4"
              class="text-left"
            >
              <v-card class="background">
                <p
                  style="height: 70px"
                  class="font-weight-bold d-flex align-center"
                >
                  {{ item.name }}
                </p>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </template>
    </page-layout>
  </div>
</template>

<script>
import PageLayout from "@/layout/PageLayout.vue";
import SectionLayout from "@/layout/SectionLayout.vue";
import { getBless } from "@/utils";
export default {
  components: { SectionLayout, PageLayout },
  name: "HomePage",
  data() {
    return {
      bless: null,
      topMenu: [
        { name: "Liked Songs", img: "" },
        { name: "DancehallMix", img: "" },
        { name: "Podacasts", img: "" },
        { name: "Pop Mix", img: "" },
        { name: "2022", img: "" },
        { name: "Gym", img: "" },
      ],
    };
  },
  beforeMount() {
    this.bless = getBless();
  },
};
</script>

<style lang="scss">
.background {
  background-color: rgb(150, 154, 154) !important;
  transition: 0.5s background-color;
  color: white !important;
  cursor: pointer !important;
}

.background:hover {
  background-color: rgb(182, 185, 185) !important;
}
</style>
