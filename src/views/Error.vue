<template>
  <v-content>
    <ToolbarSub :link="link" />
    <div class="c-wrapper">
      <Msg :msg="msg" />
      <p v-if="isNoItem" class="d-flex justify-center">
        <v-btn class="mr-2" color="white" @click="$router.push('/')">
          <v-icon>mdi-chevron-left</v-icon>戻る
        </v-btn>
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
