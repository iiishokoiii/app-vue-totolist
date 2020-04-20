<template>
  <v-content>
    <ToolbarSub />
    <p>タスク追加画面</p>
    <div class="editcard__wrapper">
      <FormEdit :itemid="itemid" />
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import FormEdit from "../components/FormEdit";

export default {
  name: "Add",

  components: {
    ToolbarSub,
    FormEdit
  },
  data: () => ({}),
  computed: {
    itemid: function() {
      return this.$store.state.items.length;
    }
  }
};
</script>

<style lang="scss">
body {
  background-color: #ccc;
}
.editcard__wrapper {
  max-width: 344px;
  margin: 0 auto;
  @include mq("md-and-up") {
    max-width: 700px;
  }
}
</style>
