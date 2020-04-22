<template>
  <v-content>
    <ToolbarSub :link="link" />
    <div class="c-wrapper">
      <Msg :msg="msg" />
      <p class="todolist__addbtn" outlined>
        <v-btn text @click="$router.push(link)">Back</v-btn>
      </p>
    </div>
  </v-content>
</template>

<script>
import ToolbarSub from "../components/ToolbarSub";
import Msg from "../components/Msg";

export default {
  name: "Error",
  components: {
    ToolbarSub,
    Msg
  },
  data() {
    return {
      msg: "通信エラーが発生しました",
      link: "/"
    };
  }
};
</script>

<style lang="scss"></style>
