<template>
  <v-content>
    <ToolbarSub />
    <div class="c-form-wrapper">
      <FormEdit :itemid="id" />
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import FormEdit from "../components/FormEdit";

export default {
  name: "Edit",

  components: {
    ToolbarSub,
    FormEdit
  },
  data: () => ({}),
  props: ["id"],
  computed: {}
};
</script>

<style lang="scss">
.form-edit__wrapper {
  max-width: 344px;
  margin: 0 auto;
  @include mq("sm-and-up") {
    max-width: 700px;
  }
}
</style>
