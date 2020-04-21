<template>
  <div>
    <div class="c-form">
      <v-text-field v-model="tmpItem.title"> </v-text-field>
      <p>
        期限：
        <input type="date" :value="tmpItem.deadline" @change="updateDate" />
      </p>
      <div class="d-flex">
        <p>タグ：</p>
      </div>
      <p>
        メモ：
        <input type="textarea" v-model="tmpItem.memo" />
      </p>
    </div>
    <p><button @click="saveItem()">Save</button></p>
    <p><button @click="$router.push('/')">Cancel</button></p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FormAdd",
  components: {},
  data() {
    return {
      idx: this.$store.getters.itemLength
    };
  },
  computed: {
    tmpItem() {
      return {
        title: "",
        deadline: this.getDate(),
        isChecked: false,
        memo: ""
      };
    }
  },
  methods: {
    ...mapActions(["updateItemById"]),
    updateDate(e) {
      this.tmpItem.deadline = e.target.value;
    },
    getDate() {
      let date = new Date();
      return (
        date.getFullYear() +
        "-" +
        ("00" + Number(date.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + date.getDate()).slice(-2)
      );
    },
    getId() {
      let date = new Date();
      return date.getTime();
    },
    saveItem() {
      this.tmpItem.id = this.getId();
      this.updateItemById({ id: this.tmpItem.id, newItem: this.tmpItem });
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss"></style>
