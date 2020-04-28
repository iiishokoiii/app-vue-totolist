<template>
  <div>
    <div class="c-form form-edit">
      <v-text-field v-model="tmpItem.title"></v-text-field>
      <p>
        期限：
        <input class="c-form__input" type="date" :value="tmpItem.deadline" @change="updateDate" />
      </p>
      <div class="d-flex">
        <p class="form-edit__tag">タグ：</p>
        <TagsEdit />
      </div>
      <div>
        <p class="mb-2">メモ：</p>
        <v-textarea outlined class="mt-1" v-model="tmpItem.memo"></v-textarea>
      </div>
    </div>
    <div class="d-flex justify-center mt-4">
      <v-btn class="mr-2" color="white" @click="$router.push('/')">
        <v-icon>mdi-chevron-left</v-icon>キャンセル
      </v-btn>
      <v-btn class="mr-2" color="primary" @click="saveItem()">保存</v-btn>
    </div>
  </div>
</template>

<script>
import TagsEdit from "../components/TagsEdit";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FormEdit",
  components: {
    TagsEdit
  },
  computed: {
    ...mapGetters([
      "activeItemId",
      "itemById",
      "items",
      "tags",
      "isItemsLoaded",
      "isTagsLoaded"
    ]),
    tmpItem() {
      return this.isItemsLoaded ? { ...this.itemById(this.activeItemId) } : {};
    }
  },
  methods: {
    ...mapActions(["saveUpdateItemById", "saveUpdate", "saveUpdateTags"]),
    updateDate(e) {
      this.tmpItem.deadline = e.target.value;
    },
    saveItem() {
      this.saveUpdate({
        id: this.activeItemId,
        newItem: {
          ...this.tmpItem,
          tagId: this.itemById(this.activeItemId).tagId
        }
      });
      this.saveUpdateTags({ tmpTags: this.tags });
    }
  }
};
</script>

<style lang="scss">
.form-edit {
  &__tag {
    min-width: 55px;
  }
}
</style>
