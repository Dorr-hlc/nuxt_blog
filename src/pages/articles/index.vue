<template>
  <div>
    <ContentList :query="query" path="/articles">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.date }}</p>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/articles",
//   where: [{ layout: "article" }],
  limit: 2,
  sort: [{ date: -1 }],
};

</script>
<style lang="less" scoped></style>
