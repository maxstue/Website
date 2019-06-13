<template>
  <div>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $static.post.title }}</h1>
      <!-- <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div> -->
      
      <div class="markdown-body mb-8" v-html="$static.post.content" />
      <div class="mb-8" >
        <g-link to="/" class="font-bold uppercase">Back to Home</g-link>
      </div>
      
    </div>
  </div>
</template>


<static-query>
query Post {
  post: post (path: "/blog/this-is-a-test-about-me-page") {
    title
    content
    path
    date
  }
}
</static-query>

<script>
import Layout from "~/layouts/Default.vue";
import AboutMeTimeline from "../components/AboutMeTimeline.vue";
export default {
  components: {
    Layout,
    AboutMeTimeline
  },
  metaInfo: {
    title: "aboutme"
  }
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 36px auto 24px;
}
</style>