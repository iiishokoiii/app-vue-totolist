<template>
  <div class="tags">
    <p
      class="tags__item mr-1 mt-1 mb-0"
      v-for="idx in item.tagIdx"
      v-bind:key="idx"
    >
      {{ tags[idx] }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return { idx: this.itemid - 1 };
  },
  props: ["itemid"],
  computed: {
    item() {
      return this.$store.getters.item(this.idx);
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
