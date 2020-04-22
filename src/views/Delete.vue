<template>
  <v-content>
    <ToolbarSub :link="link" />
    <div class="c-wrapper">
      <Msg :msg="msg" />
      <div class="d-flex justify-center mt-4">
        <v-btn class="mr-2" color="white" @click="$router.push(link)">
          <v-icon>mdi-chevron-left</v-icon>キャンセル
        </v-btn>
        <v-btn class="mr-2" color="primary" @click="deleteItem()">OK</v-btn>
      </div>
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
  data() {
    return {
      msg: "削除してよろしいですか？",
      link: "/edit/" + this.id
    };
  },
  methods: {
    ...mapActions(["deleteItemById"]),
    deleteItem() {
      this.deleteItemById({ id: this.id });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss"></style>
