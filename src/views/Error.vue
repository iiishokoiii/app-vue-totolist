<template>
  <v-content>
    <ToolbarSub />
    <div class="msg__wrapper">
      <Msg :msg="msg" />
      <p class="todolist__addbtn" outlined>
        <v-btn text @click="$router.push('/')">Back</v-btn>
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
  data: () => ({
    msg: "通信エラーが発生しました"
  }),
  computed: {}
};
</script>

<style lang="scss">
.msg__wrapper {
  max-width: 344px;
  margin: 0 auto;
  @include mq("sm-and-up") {
    max-width: 700px;
  }
}
</style>
