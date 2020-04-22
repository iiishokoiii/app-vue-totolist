<template>
  <v-content>
    <ToolbarSub link="/" :itemid="id" enDeleteBtn="true" />
    <div class="c-wrapper">
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
  props: ["id"]
};
</script>

<style lang="scss"></style>
