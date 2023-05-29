<template>
    <div>
        <h1>222333</h1>
    </div>
</template>
<script setup lang='ts'>
useHead({
    title: 'My App',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ children: 'console.log(\'Hello world\')' }]
})
</script>
<style scoped lang='less'></style>