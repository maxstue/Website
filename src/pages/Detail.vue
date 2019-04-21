<template>
  <Layout>

    <h1 class="title">{{ title }}</h1>

    <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <h2>{{ edge.node.title }}</h2>
    </div>    
  </div>

  </Layout>
</template>

<page-query>

</page-query>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  //import * as contentful from 'contentful';

  @Component
  export default class Detail extends Vue {
    public title = 'Blog Detail';
   

  }
</script>

<style>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>
