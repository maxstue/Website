<template>
  <Layout>
    <h2 class="title">Latest blog posts</h2>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <div id="one" class="main style1">
        <div class="container">
          <div class="row gtr-150 card">
            <div class="col-6 col-12-medium">
              <header class="major">
                <g-link :to="edge.node.path">
                  <h2 id="blogTitle">{{ edge.node.title }}</h2>
                </g-link>
                <div class="seperator_line"></div>
              </header>
              <div v-html="edge.node.content"/>
            </div>

            <div class="col-6 col-12-medium imp-medium">
              <span class="image fit">
                <g-link :to="edge.node.path">
                  <img src="../assets/images/pic01.jpg" alt>
                </g-link>
              </span>
              <span>{{edge.node.date}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post {
  posts: allPost (sortBy:"date", order: ASC, filter: {fileInfo: {directory: {regex: "blog/blog"}}}) {
    edges {
      node {
        id
        title
        content
        date
        path
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
      title: "Blog"
    },
    mounted() {
      console.log("blog mounted");
    }
  };
</script>

<style scoped>
  .title {
    text-align: center;
    margin: 36px auto 24px;
    font-size: 43px;
    font-weight: bold;
  }

  hr {
    border: 0;
    border-bottom: solid 1px rgba(144, 144, 144, 0.5);
    margin: 0em 7% 0em 7%; /*top right bottom left*/
  }

  #blogTitle {
    font-weight: bolder;
    text-decoration: none;
    text-decoration-color: black;
  }

  .seperator_line {
    background: rgba(144, 144, 144, 0.5);
    content: "";
    display: inline-block;
    height: 1px;
    margin-top: 1.5em;
    width: 10em;
    margin: 0em 1em 0em 0em;
  }
</style>
