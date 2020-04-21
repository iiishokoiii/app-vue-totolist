<template>
  <div>
    <div class="msg mb-4">
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Msg",
  props: ["msg"]
};
</script>

<style lang="scss">
.msg {
  padding: 100px 20px;
  background: $col-white;
  text-align: center;
}
</style>
