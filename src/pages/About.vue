<template>
  <AboutMe />
</template>


<script>
import AboutMe from "~/components/AboutMe";
export default {
  components: {
    AboutMe
  },
  metaInfo: {
    title: 'About'
  },
  mounted(){
    console.log("about mounted");
  }
}
</script>
<style>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>