<template>
    <!-- <p>These are all my bigger and showcaseable projects</p> -->
    <!-- every project  -->
    <div class="row gtr-150">
        <div v-for="project in $static.posts.edges" :key="project.node.id">
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
</template>

<static-query>
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
</static-query>


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
      console.log("projectscomponent mounted");
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