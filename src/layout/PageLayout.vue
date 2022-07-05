<template>
  <div>
    <div class="ml-3 mt-1 d-flex">
      <div class="ml-4 mt-3">
        <v-icon color="white" size="30">mdi-arrow-left-circle</v-icon>
        <v-icon color="white" size="30" class="ml-2"
          >mdi-arrow-right-circle</v-icon
        >
      </div>
      <div class="ml-4 mt-2">
        <v-text-field
          solo
          rounded
          dense
          placeholder="Artists, songs, or podcasts"
          prepend-inner-icon="mdi-magnify"
          v-if="$route.name == 'SearchPage'"
        >
        </v-text-field>
      </div>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
