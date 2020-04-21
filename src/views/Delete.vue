<template>
  <v-content>
    <ToolbarSub />
    <div class="msg__wrapper">
      <Msg :msg="msg" />
      <p class="todolist__addbtn" outlined>
        <v-btn text @click="$router.push('/edit/' + id)">Cancel</v-btn>
        <v-btn text @click="deleteItem()">OK</v-btn>
      </p>
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import Msg from "../components/Msg";
import { mapActions } from "vuex";

export default {
  name: "Delete",
  components: {
    ToolbarSub,
    Msg
  },
  props: ["id"],
  data: () => ({
    msg: "削除してよろしいですか？"
  }),
  methods: {
    ...mapActions(["deleteItemById"]),
    deleteItem() {
      this.deleteItemById({ id: this.id });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.msg__wrapper {
  max-width: 344px;
  margin: 0 auto;
  @include mq("sm-and-up") {
    max-width: 700px;
  }
}
</style>
