<template>
  <Layout :title="$page.post.title">
    <h2>{{$page.post.title}}</h2>
    <div v-html="$page.post.content"/>
    
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post (path: $path) {
    title
    content
  }
}
</page-query>


<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
      
      
  });
</script>

<style>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>
