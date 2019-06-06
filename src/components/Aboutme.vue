<template>
  <div>
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
            <span class="image fit">
              <!-- <img src="../assets/images/pic01.jpg" alt> -->
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="center_belowTitle">
      <button class="btn default" @click="toogleComponent">Show Timeline</button>
      <div class="seperator_line"></div>
      <button class="btn default" @click="downloadCV">Export CV</button>
    </div>

    <about-me-timeline v-if="showComponentOne"/>
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
  },
  data: () => {
    return {
      showComponentOne: false
    };
  },
  methods: {
    toogleComponent() {
      this.showComponentOne = !this.showComponentOne;
    },
    downloadCV() {
      console.log("download cv");
    }
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  margin: 36px auto 24px;
}
</style>