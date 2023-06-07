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
            <!-- partial:index.partial.html -->
            <div class="user-card">
              <div class="container">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cookies.jpg"
                  alt="cookies"
                  class="hero-image"
                />

                <div class="information">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/avatar.png"
                    alt="avatar"
                    class="avatar"
                  />
                  <div class="name">Dorr</div>
                  <div class="position">道阻且长，行则将至</div>

                  <div class="stats">
                    <span class="followers">
                      <span class="value">323</span>
                      <span class="label">点赞</span>
                    </span>
                    <!-- end followers -->

                    <span class="following">
                      <span class="value">290</span>
                      <span class="label">收藏</span>
                    </span>

                    <span class="stories">
                      <span class="value">22</span>
                      <span class="label">文章</span>
                    </span>
                  </div>
                  <!-- end stats -->
                </div>
                <!-- end information -->
              </div>
              <!-- end container -->
            </div>
            <!-- end user-card -->
            <!-- partial -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
let currentToggle = ref(false);
const toggle = () => {
  currentToggle.value = !currentToggle.value;
};
const articlesList = await queryContent("/articles").find();

const router = useRouter();
const toDetail = (item: any) => {
  router.push({
    path: "/posts",
    query: {
      title: item,
    },
  });
};
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

  .userinfo {
    width: 30%;
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

.user-card {
  width: 30%;
  font: 13px/23px "Raleway", Arial, sans-serif;
  color: #303336;
  padding: 40px 0;
}

.container {
  margin: 0 auto;
  width: 300px;
  height: 465px;
  background: white;
  border-radius: 3px;
  position: relative;
}

.information {
  text-align: center;
}

.avatar {
  margin: 0 auto;
  margin: -82px auto 15px;
  display: block;
}

.name {
  font-size: 22px;
}

.position {
  font-size: 16px;
  color: #8c98a8;
  margin-bottom: 24px;
}

.stats {
  margin: auto;
  border-top: 1px solid #ced5e0;
  width: 240px;
}

.stats .followers,
.stats .following,
.stats .stories {
  display: inline-block;
  padding: 6px 10px 0;
}

.stats .followers,
.stats .following {
  border-right: 1px solid #ced5e0;
}

.stats .value {
  font-size: 18px;
  font-weight: 600;
}

.stats .label {
  display: block;
  font-size: 14px;
  color: #8c98a8;
}
</style>
