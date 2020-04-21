<template>
  <button class="btn-check mr-2" @click="toggleCheck">
    <v-icon v-show="!item.isChecked">mdi-checkbox-blank-outline</v-icon>
    <v-icon v-show="item.isChecked">mdi-checkbox-marked</v-icon>
  </button>
</template>

<script>
export default {
  name: "BtnCheck",
  props: ["id"],
  computed: {
    item() {
      return this.$store.getters.itemById(this.id);
    }
  },
  methods: {
    toggleCheck: function() {
      this.item.isChecked = !this.item.isChecked;
      this.$store.dispatch("updateItemById", {
        id: this.id,
        newItem: this.item
      });
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
