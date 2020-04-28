<template>
  <div class="tags">
    <span>
      <span v-for="(elm, idx) in tagId" :key="idx">
        <v-chip class="mr-1" small label close @click:close="removeTag(idx)">{{tags[elm]}}</v-chip>
      </span>
      <v-btn v-show="!tagAddMode" class="mr-2" color="primary" icon @click="tagAddMode=true">
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>
      <div v-show="tagAddMode" class="mt-2">
        <div class="d-flex">
          <input type="text" v-model="newTag" list="tags" class="c-form__input tags__newtag" />
          <v-btn class="mr-2" color="primary" icon @click="addNewTag()">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </div>
        <datalist id="tags">
          <option v-for="n in tags.length" :key="n">{{tags[n-1]}}</option>
        </datalist>
      </div>
    </span>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Tags",
  data() {
    return {
      tagAddMode: false,
      newTag: ""
    };
  },
  computed: {
    ...mapGetters([
      "activeItemId",
      "itemById",
      "tags",
      "items",
      "isItemsLoaded"
    ]),
    tagId() {
      return this.isItemsLoaded
        ? [...this.itemById(this.activeItemId).tagId]
        : [];
    }
  },
  methods: {
    ...mapMutations(["addTag", "updateItem"]),
    addNewTag() {
      if (!this.newTag) {
        this.tagAddMode = false;
        return;
      }
      let _newTagId = this.tags.indexOf(this.newTag);
      if (_newTagId >= 0) {
        if (this.tagId.indexOf(_newTagId) < 0) {
          this.addTagId(_newTagId);
        }
      } else {
        this.addTag(this.newTag);
        this.addTagId(this.tags.length);
      }
      this.tagAddMode = false;
      this.newTag = "";
    },
    addTagId(newId) {
      this.tagId.push(newId);
      this.tagId.sort((a, b) => {
        return a - b;
      });
      this.updateItem({
        id: this.activeItemId,
        newItem: {
          ...this.itemById(this.activeItemId),
          tagId: this.tagId
        }
      });
    },
    removeTag(idx) {
      this.tagId.splice(idx, 1);
      this.updateItem({
        id: this.activeItemId,
        newItem: {
          ...this.itemById(this.activeItemId),
          tagId: this.tagId
        }
      });
    }
  }
};
</script>

<style lang="scss">
.tags__newtag {
  max-width: 200px;
  @include mq("md-and-up") {
    max-width: 400px;
  }
}
</style>
