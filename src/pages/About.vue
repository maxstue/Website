<template>
  <Layout>
    <AboutMe />
  </Layout>
</template>

<script>
import AboutMe from "~/components/Aboutme";
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
