<template>
  <v-content>
    <toolbar />
    <div class="todolist__wrapper d-flex flex-column">
      <div
        v-for="item in items"
        v-bind:key="item.id"
        class="mb-2 d-flex .align-self-strech"
      >
        <BtnCheck :id="item.id" />
        <ToDo :id="item.id" />
      </div>
      <p class="todolist__addbtn" outlined>
        <v-btn text @click="toAddItem">Add Task</v-btn>
      </p>
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

<style lang="scss">
body {
  background-color: #ccc;
  .todolist__wrapper {
    max-width: 344px;
    margin: 0 auto;
    @include mq("sm-and-up") {
      max-width: 700px;
    }
  }
}
</style>
