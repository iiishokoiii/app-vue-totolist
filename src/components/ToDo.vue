<template>
  <div class="todo">
    <div class="todo__content">
      <p class="mb-0">{{ item.title }}</p>
      <div class="d-md-flex">
        <p class="todo__deadline mr-2 mb-0">
          <v-icon class="mr-1">mdi-calendar-clock</v-icon>
          {{ item.deadline }}
        </p>
        <Tags :arr="item.tagId" :enEdit="false" />
      </div>
    </div>
    <button class="todo__arrow" @click="toEditMode()">
      <v-icon>mdi-chevron-right</v-icon>
    </button>
  </div>
</template>

<script>
import Tags from "../components/Tags";
export default {
  name: "ToDo",
  components: {
    Tags
  },
  props: ["id"],
  computed: {
    item() {
      return this.$store.getters.itemById(this.id);
    }
  },
  methods: {
    toEditMode() {
      this.$router.push("/edit/" + this.id);
    }
  }
};
</script>

<style lang="scss">
.todo {
  width: 100%;
  padding: 10px 0 10px 15px;
  background: $col-white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px $col-dropshadow;
  display: flex;
  align-self: center;
  &__content {
    width: 80%;
  }
  &__arrow {
    width: 20%;
    .v-icon {
      font-size: 2.4rem;
      color: $col-grey-1;
    }
  }
  &__deadline {
    color: $col-grey-4;
    display: inline-block;
    font-size: 1rem;
    padding: 0.1rem 0;
    .v-icon {
      font-size: 1em;
    }
  }
}
</style>
