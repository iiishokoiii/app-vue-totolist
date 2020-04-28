<template>
  <div class="btn-filter d-flex justify-end mb-4">
    <v-menu transition="slide-y-transition" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn color="primary" class="col-grey" v-on="on">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="clearFilterItemsByTag">
          <v-list-item-title>全て</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="n in tags.length" :key="n" @click="filterItemsByTag(n-1)">
          <v-list-item-title>{{tags[n-1]}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BtnFilterByTag",
  computed: {
    ...mapGetters(["tags", "isFilterdByTag", "filterTagId"])
  },
  methods: {
    ...mapMutations(["setFilterdByTag", "setFiterTagId", "setFilterMode"]),
    filterItemsByTag(_id) {
      this.setFilterdByTag(true);
      this.setFilterMode(0);
      this.setFiterTagId(_id);
    },
    clearFilterItemsByTag() {
      this.setFilterdByTag(false);
    }
  }
};
</script>

<style lang="scss">
.btn-filter {
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
