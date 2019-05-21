<template>
  <Layout>
    <!-- <h2 class="title">Latest blog posts</h2> -->
    <div class="empty_seperator"></div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <div id="one" class="main style1">
        <div class="container">
          <g-link :to="edge.node.path">
            <div class="row gtr-150 card">
              <div class="col-6 col-12-medium">
                <header class="major">
                  <h2 id="blogTitle">{{ edge.node.title }}</h2>
                  <div class="date">{{edge.node.date.split("T")[0]}}</div>
                  <!-- <div class="seperator_line"></div> -->
                </header>
                <div
                  class="content"
                  v-if="edge.node.content.length < 200"
                  v-html="edge.node.content + ' ...' "
                />
                <div
                  class="content"
                  v-if="edge.node.content.length >= 300"
                  v-html="edge.node.content.substring(0,300) + ' ...' "
                />
              </div>

              <!-- <div class="col-6 col-12-medium imp-medium">
              <span class="image fit">
                <g-link :to="edge.node.path">
                  <img src="../assets/images/pic01.jpg" alt>
                </g-link>
              </span>
              <span>{{edge.node.date}}</span>
              </div>-->
            </div>
          </g-link>
        </div>
      </div>
    </div>
    <div class="empty_seperator"></div>
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

<script >
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

  #blogTitle {
    font-weight: 400;
    text-decoration: none;
    text-decoration-color: black;
    color: var(--text-greyish);
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

  .content {
    text-decoration: none;
    color: var(--text-greyish);
    font-size: 15px;
  }

  .date {
    margin: 5px 0 0 0;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 700;
  }

  .row > .col-6 {
    width: 100%;
  }

  .card {
    padding: 0 5em 0 2em;
  }
</style>
