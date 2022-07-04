<template>
  <div class="menu">
    <v-list dense dark>
      <v-img :src="logo" width="60%" class="img"></v-img>
      <v-list-item-group class="group">
        <v-list-item
          v-for="(item, index) in menuNavs"
          :key="index"
          :disabled="item.disable"
          :to="item.to"
          exact
        >
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import logo from "@/assets/logos/SpotifyLogo.png";
export default {
  props: {
    menuNavs: {
      type: Array,
    },
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss">
.img {
  margin-top: 20px;
  margin-left: 20px;
}
.group {
  margin-top: 25px;
  margin-left: 10px;
}
</style>
