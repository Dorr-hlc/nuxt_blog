<template>
  <div>
    <ContentDoc class="prose" :value="data" />
    <!-- <h1>{{ articles.title }}</h1> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const title = route.query.title;
// const articles = ref(
//   await queryContent("/articles").where({ title: title }).findOne()
// );
// console.log(articles);
const { data } = await useAsyncData("mountains", () =>
  queryContent("/articles").where({ title: title }).findOne()
);
</script>
<style lang="less" scoped></style>
