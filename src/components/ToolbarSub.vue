<template>
  <v-card flat tile class="mb-5">
    <v-toolbar color="#9edfe6" dense>
      <router-link to="/" tag="div">
        <!-- <v-btn icon @click.stop="closeEditMode"> -->
        <v-icon>mdi-chevron-left</v-icon>
        <!-- </v-btn> -->
      </router-link>
      <v-toolbar-title class="toolbar__ttl">{{ title }}</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarSub",
  data: () => ({
    title: ""
  }),
  props: ["itemid"],
  methods: {}
};
</script>

<style lang="scss"></style>
