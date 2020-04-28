<template>
  <v-content>
    <ToolbarSub />
    <div class="c-wrapper">
      <template v-if="!isNoItem">
        <FormEdit />
      </template>
      <template v-if="isNoItem">
        <Msg v-if="isNoItem" msg="URLが不正です" />
        <p v-if="isNoItem" class="d-flex justify-center">
          <v-btn class="mr-2" color="white" @click="$router.push('/')">
            <v-icon>mdi-chevron-left</v-icon>戻る
          </v-btn>
        </p>
      </template>
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import FormEdit from "../components/FormEdit";
import Msg from "../components/Msg";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Edit",
  components: {
    ToolbarSub,
    FormEdit,
    Msg
  },
  props: ["id"],
  created() {
    this.setActiveItemId(this.id);
    this.setEditMode(true);
    this.setDeleteMode(false);
    this.fetchItems();
    this.fetchTags();
  },
  computed: {
    ...mapGetters(["items", "activeItemId", "isItemsLoaded", "isNoItem"])
  },
  methods: {
    ...mapMutations(["setActiveItemId", "setEditMode", "setDeleteMode"]),
    ...mapActions(["fetchItems", "fetchTags"])
  }
};
</script>

<style lang="scss"></style>
