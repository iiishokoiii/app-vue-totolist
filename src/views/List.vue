<template>
  <v-content>
    <toolbar />
    <div class="c-wrapper d-flex flex-column">
      <div v-for="item in sortItems" v-bind:key="item.id" class="mb-2 d-flex .align-self-strech">
        <BtnCheck :id="item.id" />
        <ToDo :id="item.id" />
      </div>

      <div class="d-flex justify-center mt-4">
        <v-btn color="primary" @click="toAddItem">新規作成</v-btn>
      </div>
      <div class="d-flex justify-center mt-4">
        <v-btn class="mr-2 mt-4" color="primary" @click="changeSortMode(0)">byDate</v-btn>
        <v-btn class="mr-2 mt-4" color="primary" @click="changeSortMode(1)">byChecked</v-btn>
        <v-btn class="mr-2 mt-4" color="primary" @click="changeSortMode(2)">Checked</v-btn>
        <v-btn class="mr-2 mt-4" color="primary" @click="changeSortMode(3)">unChecked</v-btn>
        <v-btn class="mr-2 mt-4" color="primary" @click="filterItemsByTag(0)">test</v-btn>
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
    sortMode() {
      return this.$store.getters.sortMode;
    },
    isFilterd() {
      return this.$store.getters.isFilterd;
    },
    filterTagId() {
      return this.$store.getters.filterTagId;
    },
    items() {
      return this.$store.getters.items;
    },
    filterdItems() {
      console.log(this.filterTagId);

      return this.isFilterd
        ? this.items.filter(item => {
            return item.tagId.indexOf(this.filterTagId) > 0;
          })
        : this.items.slice();
    },
    sortItems() {
      let _items = this.filterdItems;
      switch (this.sortMode) {
        case 1:
          _items = this.sortItemsByStatus(_items);
          break;
        case 2:
          _items = this.filterItemsByStatus(_items, true);
          break;
        case 3:
          _items = this.filterItemsByStatus(_items, false);
          break;
        default:
          _items = this.sortItemsByDeadline(_items);
      }
      return _items;
    }
  },
  methods: {
    toAddItem() {
      this.$router.push("/add/");
    },
    changeSortMode(_mode) {
      this.$store.commit("changeSortMode", { mode: _mode });
    },
    filterItemsByTag(_id) {
      this.$store.commit("changeIsFilterd", { isActive: true });
      this.$store.commit("changeFiterTagId", { id: _id });
    },
    clearfilterItemsByTag() {
      this.$store.commit("changeIsFilterd", { isActive: false });
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
