<template>
  <div>
    <h1>222333</h1>
    <!-- <ContentDoc :path="a" /> -->

  </div>
</template>
<script setup lang="ts">
// import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
// const query: QueryBuilderParams = {
//   path: "/articles",
//   where: [{ layout: "articles" }],
//   limit: 5,
//   sort: [{ date: -1 }],
// };

import { ref } from "vue";
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ children: "console.log('Hello world')" }],
});
let a = "/index211212";
ref(a);
</script>
<style scoped lang="less"></style>
