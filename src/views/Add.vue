<template>
  <v-content>
    <ToolbarSub />
    <div class="c-form-wrapper">
      <FormAdd />
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import FormAdd from "../components/FormAdd";

export default {
  name: "Add",

  components: {
    ToolbarSub,
    FormAdd
  },
  data: () => ({})
};
</script>

<style lang="scss"></style>
