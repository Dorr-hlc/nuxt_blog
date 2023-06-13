<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <myAside @change="toggle" />
    <!-- Main -->
    <div id="main" :class="{ inactive: currentToggle }">
      <div class="inner">
        <!-- Header -->
        <MyHeader />
        <!-- Section -->
        <section>
          <header class="major">
            <h2>博客列表</h2>
          </header>
          <div class="blog-box">
            <div class="posts">
              <article v-for="_post in articlesList" :key="_post._id">
                <div class="info">
                  <div class="time">
                    <span class="post-time">{{ _post.date }}</span>
                    <span class="post-year"></span>
                  </div>

                  <h3>{{ _post.title }}</h3>
                </div>

                <p class="desc">
                  {{ _post.title }}
                </p>

                <ul class="actions">
                  <li @click="toDetail(_post.title)">阅读更多</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { articlesInfo } from "@/store/articles";

import publicMethos from "@/hooks/publicMethos";
export default defineComponent({
  async setup() {
    let { toggle, currentToggle, toDetail } = publicMethos();
    const articlesList = ref();
    const useArticle = articlesInfo();
    await useArticle.getAllArticle();
    articlesList.value = await useArticle.allArticle;
    return {
      articlesList,
      toggle,
      currentToggle,
      toDetail,
    };
  },
});
</script>
<style lang="less" scoped>
.blog-box {
  display: flex;
  align-items: center;

  article {
    position: relative;
    width: 70%;
    background: #fff;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 24px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &::before {
      position: absolute;
      left: 0px;
      top: 0px;
      content: "";
      display: inline-block;
      width: 6px;
      height: 100%;
      background: #f56a6a;
      border-radius: 10px 0 0 10px;
    }
  }

  ul.actions {
    justify-content: flex-end;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;

    h3 {
      margin: 0px;
    }

    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f56a6a;
      color: #fff;
      font-size: 16px;
      line-height: 1;
      font-weight: 600;
      border-radius: 4px;
      padding: 2px 5px;
      margin-right: 10px;

      span {
        display: inline-block;
      }

      .post-year {
        font-size: 14px;
      }
    }
  }

  .desc {
    margin: 30px 0;
  }
}
</style>
