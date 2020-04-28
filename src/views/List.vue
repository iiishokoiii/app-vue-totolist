<template>
  <v-content>
    <toolbar />
    <div class="c-wrapper d-flex flex-column">
      <div class="d-flex justify-end">
        <BtnSort />
        <BtnFilterByTag class="ml-2" />
      </div>
      <div v-for="item in sortItems" v-bind:key="item.id" class="mb-2 d-flex .align-self-strech">
        <BtnCheck :id="item.id" />
        <ToDo :id="item.id" />
      </div>
      <template v-if="isItemsLoaded&&sortItems.length===0">
        <Msg msg="表示するアイテムがありません" />
      </template>
      <div class="d-flex justify-center mt-4 mb-5">
        <v-btn color="primary" @click="goAddMode">新規作成</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
import Toolbar from "../components/Toolbar";
import BtnCheck from "../components/BtnCheck";
import BtnSort from "../components/BtnSort";
import BtnFilterByTag from "../components/BtnFilterByTag";
import Msg from "../components/Msg";
import ToDo from "../components/ToDo";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "List",
  components: {
    Toolbar,
    BtnCheck,
    BtnSort,
    ToDo,
    BtnFilterByTag,
    Msg
  },
  created() {
    this.fetchItems();
    this.fetchTags();
    this.setEditMode(false);
  },
  computed: {
    ...mapGetters([
      "isSortByStatus",
      "filterMode",
      "isFilterdByTag",
      "filterTagId",
      "items",
      "isItemsLoaded"
    ]),
    filterdItemsByTag() {
      return this.isFilterdByTag
        ? this.items.filter(item => {
            return item.tagId.indexOf(this.filterTagId) > 0;
          })
        : this.items.slice();
    },
    filterdItems() {
      let _items = this.filterdItemsByTag;
      switch (this.filterMode) {
        case 1:
          _items = this.filterItemsByStatus(_items, false);
          break;
        case 2:
          _items = this.filterItemsByStatus(_items, true);
          break;
        default:
      }
      return _items;
    },
    sortItems() {
      let _items = this.filterdItems;
      return this.isSortByStatus
        ? this.sortItemsByStatus(_items)
        : this.sortItemsByDeadline(_items);
    }
  },
  methods: {
    ...mapMutations(["setEditMode"]),
    ...mapActions(["fetchItems", "fetchTags"]),
    goAddMode() {
      this.$router.push("/add/");
    },
    sortItemsByDeadline(_items) {
      return _items.sort((a, b) => {
        return a.deadline < b.deadline ? -1 : 1;
      });
    },
    sortItemsByStatus(_items) {
      return [
        ...this.filterItemsByStatus(_items, false),
        ...this.filterItemsByStatus(_items, true)
      ];
    },
    filterItemsByStatus(_items, isChecked) {
      return this.sortItemsByDeadline(
        _items.filter(item => {
          return item.isChecked === isChecked;
        })
      );
    }
  }
};
</script>

<style lang="scss"></style>
