<template>
  <Layout>
    <!-- TODO: better title styling -->
    <h2 class="title">Latest blog posts</h2>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <div id="one" class="main style1">
        <div class="container">
          <div class="row gtr-150">
            <div class="col-6 col-12-medium">
              <header class="major">
                <h2 id="blogTitle">{{ edge.node.title }}</h2>
              </header>
              <div v-html="edge.node.content" />
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <span class="image fit">
                <img src="../assets/css/images/pic01.jpg" alt>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </Layout>
</template>

<page-query>
query Post {
  posts: allPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>


<script lang="ts">
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
  }

		
</style>
