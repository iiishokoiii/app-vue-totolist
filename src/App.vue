<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
    this.fetchItems();
    this.fetchTags();
  },
  methods: {
    ...mapActions(["fetchItems", "fetchTags"])
  }
};
</script>
