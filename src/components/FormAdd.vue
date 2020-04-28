<template>
  <div>
    <div class="c-form">
      <v-text-field v-model="tmpItem.title"></v-text-field>
      <p>
        期限：
        <input class="c-form__input" type="date" :value="tmpItem.deadline" @change="updateDate" />
      </p>
      <div class="d-flex">
        <p class="form-add__tag">タグ：</p>
        <TagsEdit />
      </div>
      <div>
        <p class="mb-2 form-add__tag">メモ：</p>
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
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "FormAdd",
  components: {
    TagsEdit
  },
  computed: {
    ...mapGetters(["tags", "isTagsLoaded"])
    // tmpItem() {
    //   return {
    //     title: "",
    //     deadline: this.getDate(),
    //     isChecked: false,
    //     memo: "",
    //     tagId: []
    //   };
    // }
  },
  methods: {
    ...mapMutations(["addItem"]),
    ...mapActions(["updateItemById", "updateTags"]),
    updateDate(e) {
      this.tmpItem.deadline = e.target.value;
    },
    // getDate() {
    //   let date = new Date();
    //   return (
    //     date.getFullYear() +
    //     "-" +
    //     ("00" + Number(date.getMonth() + 1)).slice(-2) +
    //     "-" +
    //     ("00" + date.getDate()).slice(-2)
    //   );
    // },
    // getId() {
    //   let date = new Date();
    //   return date.getTime();
    // },
    saveItem() {
      this.tmpItem.id = this.getId();
      this.updateItemById({
        id: this.tmpItem.id,
        newItem: {
          ...this.tmpItem,
          tagId: this.itemById(this.activeItemId).tagId
        }
      });
      this.updateTags({ tmpTags: this.tmpTags });
      this.$router.push("/");
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
