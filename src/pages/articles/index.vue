<template>
  <div>
    <ContentDoc class="prose" :path="articlePath" />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const articlePath = ref(`${route.query?._path}`)

</script>
<style lang="less" scoped></style>
