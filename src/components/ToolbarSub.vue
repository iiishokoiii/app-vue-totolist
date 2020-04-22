<template>
  <v-card flat tile class="mb-5">
    <v-toolbar color="#9edfe6" dense>
      <router-link :to="link" tag="div">
        <v-icon>mdi-chevron-left</v-icon>
      </router-link>
      <v-toolbar-title class="toolbar__ttl"></v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="enDeleteBtn">
        <v-btn fab icon @click="$router.push('/delete/' + itemid)">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarSub",
  props: ["link", "itemid", "enDeleteBtn"]
};
</script>

<style lang="scss"></style>
