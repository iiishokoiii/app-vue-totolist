<template>
  <v-content>
    <toolbar />
    <div class="todolist__wrapper d-flex flex-column">
      <div
        v-for="id in itemsLength"
        v-bind:key="id"
        class="mb-2 d-flex .align-self-strech"
      >
        <BtnCheck :itemid="id" />
        <ToDo :itemid="id" />
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
    itemsLength: function() {
      return this.$store.getters.itemLength;
    }
  },
  methods: {
    toAddItem: function() {
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
