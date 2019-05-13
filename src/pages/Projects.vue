<template>
  <Layout>
    <div id="three" class="main style1 special">
      <div class="container">
        <header class="major">
          <h1 class="title">{{title}}</h1>
          <div class="center_belowTitle">
            <button class="btn default">List view</button>
            <div class="seperator_line"></div>
            <button class="btn default">Timeline view</button>
          </div>
        </header>

        <!-- <p>These are all my bigger and showcaseable projects</p> -->
        <!-- every project  -->
        <div class="row gtr-150">
          <div v-for="project in $page.posts.edges" :key="project.node.id">
            <g-link :to="project.node.path">
              <div class="col-4 col-12-medium">
                <span class="image resizePic">
                  <img
                    class="image resizePic"
                    v-if="project.node.featuredImage"
                    :src="project.node.featuredImage"
                    alt
                  >
                  <img class="image resizePic" v-else src="../assets/images/pic02.jpg" alt>
                </span>
                <h3>{{project.node.title}}</h3>
                <!-- <div v-html="project.node.content"/> -->
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<page-query>
query Post {
  posts: allPost (sortBy:"date", order: ASC, filter: {fileInfo: {directory: {regex: "blog/projects"}}}) {
    edges {
      node {
        id
        title
        content
        date
        path
        featuredImage
        fileInfo {
          directory
        }
      }
    }
  }
}
</page-query>

<script>
  export default {
    components: {},
    metaInfo: {
      title: "projects"
    },
    data: () => {
      return {
        title: "Projects"
      };
    },
    mounted() {
      console.log("projects mounted");
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    margin: 36px auto 24px;
    font-size: 43px;
    font-weight: bold;
  }

  .resizePic {
    width: 368px;
    height: 240px;
  }

  h3 {
    text-decoration: none;
    color: var(--text-greyish);
  }

</style>
