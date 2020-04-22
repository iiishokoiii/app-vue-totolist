<template>
  <v-content>
    <ToolbarSub link="/" />
    <div class="c-wrapper">
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
  }
};
</script>

<style lang="scss"></style>
