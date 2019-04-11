<template>
  <Layout>

    <h1 class="title">{{ title }}</h1>

  </Layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

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
