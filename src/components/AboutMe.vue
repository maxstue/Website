<template>
  <Layout>
    <div id="one" class="main style1">
        <div class="container">
            <div class="row gtr-150">
                <div class="col-6 col-12-medium">
                    <header class="major">
                        <h2>{{ $static.post.title }}</h2>
                    </header>
                    <div v-html="$static.post.content"/>
                </div>
                <div class="col-6 col-12-medium imp-medium">
                    <span class="image fit"><img src="../assets/images/pic01.jpg" alt="" /></span>
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>


<static-query>
query Post {
  post: post (path: "/blog/this-is-a-test-about-me-page") {
    title
    content
    path
    date
    slug
  }
}
</static-query>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'aboutme'
  }
}
  // import { Component, Vue } from 'vue-property-decorator';

  // @Component
  // export default class About extends Vue {
  //   public title = 'About';
  // }
</script>
<style>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>