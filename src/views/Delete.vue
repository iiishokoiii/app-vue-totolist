<template>
  <v-content>
    <ToolbarSub />
    <div class="c-wrapper">
      <Msg :msg="msg" />
      <div class="d-flex justify-center mt-4">
        <v-btn class="mr-2" color="white" @click="goBack()">
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
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Delete",
  components: {
    ToolbarSub,
    Msg
  },
  props: ["id"],
  data() {
    return {
      msg: "削除してよろしいですか？"
    };
  },
  created() {
    this.setDeleteMode(true);
    this.setEditMode(false);
    this.setActiveItemId(this.id);
  },
  computed: {
    ...mapGetters(["activeItemId", "deleteMode"])
  },
  methods: {
    ...mapMutations(["setDeleteMode", "setEditMode", "setActiveItemId"]),
    ...mapActions(["deleteItemById"]),
    goBack() {
      this.$router.push("/edit/" + this.activeItemId);
    },
    deleteItem() {
      this.deleteItemById(this.activeItemId);
    }
  }
};
</script>

<style lang="scss"></style>
