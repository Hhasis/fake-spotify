<template>
  <div>
    <div>test</div>
    <div class="pa-8" style="width: 135%">
      <h2 class="white--text">{{ bless }}</h2>
      <v-row class="mt-4">
        <v-col
          v-for="(item, index) in topMenu"
          :key="index"
          cols="4"
          class="text-left"
        >
          <v-btn
            plain
            class="grey lignten-1"
            elevation="8"
            color="white"
            style="width: 100%"
            ><span class="test">{{ item.name }}</span></v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import SectionLayout from "@/layout/SectionLayout.vue";
import { getBless } from "@/utils";
export default {
  components: { SectionLayout },
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

<style lang="scss"></style>
