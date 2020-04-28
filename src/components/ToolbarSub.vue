<template>
  <v-card flat tile class="mb-5">
    <v-toolbar color="#9edfe6" dense>
      <v-icon @click="goBack()">mdi-chevron-left</v-icon>
      <v-toolbar-title class="toolbar__ttl"></v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="editMode&&!deleteMode">
        <v-btn fab icon @click="goDeleteMode()">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ToolbarSub",
  computed: {
    ...mapGetters(["activeItemId", "deleteMode", "editMode"])
  },
  methods: {
    goDeleteMode() {
      this.$router.push("/delete/" + this.activeItemId);
    },
    goBack() {
      if (this.deleteMode) {
        this.$router.push("/edit/" + this.activeItemId);
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss"></style>
