<template>
  <div class="btn-sort d-flex justify-end mb-4">
    <v-menu transition="slide-y-transition" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="white" :disabled="filterMode!==0" class="col-grey" v-on="on">
          <v-icon
            class="mr-1 ml-1"
            :class="{isActive: !isSortByStatus&&(filterMode===0)}"
          >mdi-calendar-clock</v-icon>|
          <v-icon
            class="mr-1 ml-1"
            :class="{isActive: isSortByStatus&&(filterMode===0)}"
          >mdi-sort-bool-ascending-variant</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="setSortByStatus(false)">
          <v-list-item-title>期限でソート</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setSortByStatus(true)">
          <v-list-item-title>ステータスでソート</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu transition="slide-y-transition" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="white" class="col-grey ml-2" v-on="on">
          <span class="mr-1 ml-1" :class="{isActive: filterMode===0}">All</span>|
          <v-icon class="mr-1 ml-1" :class="{isActive: filterMode===1}">mdi-checkbox-blank-outline</v-icon>|
          <v-icon class="mr-1 ml-1" :class="{isActive: filterMode===2}">mdi-checkbox-marked</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="setFilterMode(0)">
          <v-list-item-title>全て</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setFilterMode(1)">
          <v-list-item-title>未完了</v-list-item-title>
        </v-list-item>
        <v-list-item @click="setFilterMode(2)">
          <v-list-item-title>完了済み</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BtnSort",
  computed: {
    ...mapGetters(["isSortByStatus", "filterMode"]),
    item() {
      return this.itemById(this.id);
    }
  },
  methods: {
    ...mapMutations(["setSortByStatus", "setFilterMode"])
  }
};
</script>

<style lang="scss">
.btn-sort {
  .col-grey {
    color: $col-grey-4;
  }
  .col-primary {
    color: $col-primary;
  }
  .v-icon {
    font-size: 1.2rem;
    &.isActive::before {
      color: $col-primary;
    }
  }
  span.isActive {
    color: $col-primary;
    font-weight: bold;
  }
}
</style>
