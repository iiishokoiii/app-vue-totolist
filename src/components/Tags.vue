<template>
  <div class="tags">
    <span v-if="enEdit">
      <span v-for="(elm, idx) in tagIds" :key="idx">
        <v-chip class="mr-1" small label close @click:close="removeTag(idx)">{{tags[elm]}}</v-chip>
      </span>
      <v-btn v-show="!enAddTags" class="mr-2" color="primary" icon @click="enAddTags=true">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
      <div v-show="enAddTags" class="mt-2">
        <div class="d-flex">
          <input type="text" v-model="newTag" list="tags" class="c-form__input" />
          <v-btn class="mr-2" color="primary" icon @click="addTag()">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </div>
        <datalist id="tags">
          <option v-for="n in tags.length" :key="n">{{tags[n-1]}}</option>
        </datalist>
      </div>
    </span>
    <span v-if="!enEdit">
      <span v-for="(elm, idx) in tagIds" :key="idx">
        <v-chip class="mr-1" small label>{{tags[elm]}}</v-chip>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: "Tags",
  props: ["arr", "enEdit"],
  data() {
    return {
      enAddTags: false,
      newTag: ""
    };
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    tagIds() {
      return this.arr;
    }
  },
  methods: {
    selectTag(idx) {
      this.newTag = this.suggestTags[idx];
    },
    addTag() {
      if (!this.newTag) {
        this.enAddTags = false;
        return;
      }
      let _newTagId = this.tags.indexOf(this.newTag);
      if (_newTagId >= 0) {
        if (this.tagIds.indexOf(_newTagId) < 0) {
          this.tagIds.push(_newTagId);
        }
      } else {
        this.$store.commit("addTag", this.newTag);
        this.tagIds.push(this.tags.length - 1);
      }
      this.enAddTags = false;
      this.newTag = "";
    },
    removeTag(idx) {
      this.tagIds.splice(idx, 1);
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
