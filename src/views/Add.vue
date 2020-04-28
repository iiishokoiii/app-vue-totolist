<template>
  <v-content>
    <ToolbarSub />
    <div class="c-wrapper">
      <FormEdit />
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import FormEdit from "../components/FormEdit";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Add",
  components: {
    ToolbarSub,
    FormEdit
  },
  created() {
    const initId = this.getId();
    this.addItem({
      id: initId,
      title: "",
      deadline: this.getDate(),
      isChecked: false,
      memo: "",
      tagId: []
    });
    this.setActiveItemId(initId);
    this.setEditMode(false);
    this.setDeleteMode(false);
  },
  data() {
    return {
      maxItem: 10
    };
  },
  computed: {
    ...mapGetters(["activeItemId", "isItemsLoaded"])
  },
  methods: {
    ...mapMutations([
      "setActiveItemId",
      "setEditMode",
      "setDeleteMode",
      "addItem"
    ]),
    getDate() {
      let date = new Date();
      return (
        date.getFullYear() +
        "-" +
        ("00" + Number(date.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + date.getDate()).slice(-2)
      );
    },
    getId() {
      let date = new Date();
      return date.getTime();
    }
  }
};
</script>

<style lang="scss"></style>
