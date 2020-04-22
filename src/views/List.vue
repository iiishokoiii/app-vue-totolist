<template>
  <v-content>
    <toolbar />
    <div class="c-wrapper d-flex flex-column">
      <div v-for="item in items" v-bind:key="item.id" class="mb-2 d-flex .align-self-strech">
        <BtnCheck :id="item.id" />
        <ToDo :id="item.id" />
      </div>

      <div class="d-flex justify-center mt-4">
        <v-btn color="primary" @click="toAddItem">新規作成</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
import Toolbar from "../components/Toolbar";
import BtnCheck from "../components/BtnCheck";
import ToDo from "../components/ToDo";

export default {
  name: "List",
  components: {
    Toolbar,
    BtnCheck,
    ToDo
  },
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  methods: {
    toAddItem() {
      this.$router.push("/add/");
    }
  }
};
</script>

<style lang="scss"></style>
