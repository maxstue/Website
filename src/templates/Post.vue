<template>
  <Layout :title="$page.post.title">
    <div id="one" class="main style1">
        <div class="container">
            <div class="row gtr-150">
                <div class="col-6 col-12-medium">
                    <header class="major">
                        <h2>{{$page.post.title}}</h2>
                    </header>
                    <div v-html="$page.post.content"/>
                </div>
                <div class="col-6 col-12-medium imp-medium">
                    <span class="image fit"><img src="../assets/images/pic01.jpg" alt="" /></span>
                </div>
            </div>
        </div>
    </div>



  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post (path: $path) {
    title
    content
  }
}
</page-query>


<script >
export default {
  components: {
  },
  metaInfo: {
    title: 'post'
  },
  mounted(){
    console.log("post mounted");
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }

  h2 {
    text-decoration: none;
  }
</style>
