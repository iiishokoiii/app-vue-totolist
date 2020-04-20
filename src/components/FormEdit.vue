<template>
  <div>
    <div class="form-edit">
      <v-text-field v-model="tmpItem.title"> </v-text-field>
      <p>
        期限：
        <input type="date" :value="tmpItem.deadline" @change="updateDate" />
      </p>
      <!-- <p>タグ： {{ tmpItem.tag }}</p> -->
      <div class="d-flex">
        <p>タグ：</p>
        <Tags :itemid="itemid" />
      </div>
    </div>
    <p><button @click="updateItem(tmpItem.title)">Save</button></p>
    <p><button @click="$router.push('/')">Cancel</button></p>
  </div>
</template>

<script>
import Tags from "../components/Tags";
export default {
  name: "FormEdit",
  components: {
    Tags
  },
  data: () => ({}),
  props: ["itemid"],

  computed: {
    tmpItem() {
      return this.$store.getters.item(this.itemid - 1);
    }
  },
  methods: {
    updateDate(e) {
      this.tmpItem.deadline = e.target.value;
    },
    updateItem() {
      this.$store.commit("updateItem", {
        idx: this.itemid - 1,
        newItem: this.tmpItem
      });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.form-edit {
  padding: 10px 20px;
  background: $col-white;
}
</style>
