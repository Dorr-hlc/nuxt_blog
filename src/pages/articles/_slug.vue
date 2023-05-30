<template>
  <div><slot :list="files" /></div>
</template>
<script setup lang="ts">
import { ref } from "vue";
let files = {
  title: "2112",
  tags: "12321",
};
ref({
  files,
});
</script>
<style lang="less" scoped></style>
