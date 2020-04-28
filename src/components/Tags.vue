<template>
  <div class="tags">
    <span v-for="(elm, idx) in itemById(itemid).tagId" :key="idx">
      <v-chip class="mr-1" small label>{{tags[elm]}}</v-chip>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Tags",
  props: ["itemid"],
  computed: {
    ...mapGetters(["tags", "itemById"])
  }
};
</script>
