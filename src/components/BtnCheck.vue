<template>
  <button class="btn-check mr-2" @click="toggleCheck">
    <v-icon v-show="!item.isChecked">mdi-checkbox-blank-outline</v-icon>
    <v-icon v-show="item.isChecked">mdi-checkbox-marked</v-icon>
  </button>
</template>

<script>
export default {
  name: "BtnCheck",
  data() {
    return { idx: this.itemid - 1 };
  },
  props: ["itemid"],
  computed: {
    item() {
      return this.$store.getters.item(this.idx);
    }
  },
  methods: {
    toggleCheck: function() {
      this.item.isChecked = !this.item.isChecked;
      this.$store.commit("updateItem", { idx: this.idx, newItem: this.item });
    }
  }
};
</script>

<style lang="scss">
.btn-check {
  .v-icon {
    font-size: 2rem;
    color: $col-primary;
    text-shadow: 0px 3px 6px $col-dropshadow;
  }
}
</style>
