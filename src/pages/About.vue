<template>
  <Layout>
    <h1 class="title">{{ title }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class About extends Vue {
    public title = 'About';
  }
</script>
<style>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>