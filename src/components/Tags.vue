<template>
  <div class="tags">
    <p class="tags__item mr-1 mt-1 mb-0" v-for="n in item.tags" v-bind:key="n">
      {{ tags[n] }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: ["itemid"],
  computed: {
    item() {
      return this.$store.getters.itemById(this.itemid);
    },
    tags() {
      return this.$store.getters.tags;
    }
  }
};
</script>

<style lang="scss">
.tags__item {
  color: $col-grey-4;
  display: inline-block;
  font-size: 0.8rem;
  background-color: $col-grey-1;
  padding: 0.1rem 10px;
}
</style>
