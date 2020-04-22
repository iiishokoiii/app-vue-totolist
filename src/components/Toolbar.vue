<template>
  <v-card flat tile class="mb-5">
    <v-toolbar color="primary" dark dense>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="toolbar__ttl">{{ title }}</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Toolbar",
  data: () => ({
    title: "ToDo List"
  }),
  methods: {
    toggleSideMenu: () => {}
  }
};
</script>

<style lang="scss"></style>
