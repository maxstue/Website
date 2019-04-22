<template>
  <AboutMe />
</template>



<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import AboutMe from '~/components/AboutMe.vue';

  @Component({
    components: {
      AboutMe
    }
  })
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