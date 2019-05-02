<template>
  <Layout>
    <!-- One -->
  <section id="one" class="main style1">
    <div class="container">
      <div class="row gtr-150">
        <div class="col-6 col-12-medium">
          <header class="major">
            <h2>
              {{title}}
              <br>amet dolor consequat
            </h2>
          </header>
          <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
        </div>
        <div class="col-6 col-12-medium imp-medium">
          <g-image class="image fit" src="../assets/images/pic01.jpg" fit="contain"/>
        </div>
      </div>
    </div>
  </section>

  <!-- Two -->
  <section id="two" class="main style2">
    <div class="container">
      <div class="row gtr-150">
        <div class="col-6 col-12-medium rel">
          <ul class="major-icons">
            <li>
              <span class="icon style1 major fas fa-code"></span>
            </li>
            <li>
              <span class="icon style2 major fab fa-code-branch"></span>
            </li>
            <li>
              <span class="icon style4 major fab fa-bolt"></span>
            </li>
            <li>
              <span class="icon style5 major fa-desktop"></span>
            </li>
          </ul>
        </div>
        <div class="col-6 col-12-medium">
          <header class="major">
            <h2>
              Lorem ipsum dolor adipiscing
              <br>amet dolor consequat
            </h2>
          </header>
          <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
          <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
          <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Three -->
  <section id="three" class="main style1 special">
    <div class="container">
      <header class="major title">
        <h2>Latest Projects</h2>
      </header>
      <!-- <p class="title">These are all my bigger and showcaseable projects</p> -->
      <!-- every project  -->
      <div class="row gtr-150">
        <div v-for="project in $page.projects.edges" :key="project.node.id">
          <div class="col-4 col-12-medium">
            <span class="image resizePic">
              <img
                class="image resizePic"
                v-if="project.node.featuredImage"
                :src="project.node.featuredImage"
                alt
              >
          <g-image class="image fit" v-else src="../assets/images/pic02.jpg" fit="contain"/>
            </span>
            <h3 class="title">{{project.node.title}}</h3>
            <ul class="actions special">
              <li>
                <a class="button">
                  <g-link :to="project.node.path">Go to</g-link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  </Layout>
</template>


<page-query>
query Peoject {
  projects: allPost (sortBy:"date", order: ASC, filter: {fileInfo: {directory: {regex: "blog/projects"}}}) {
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
  metaInfo: {
    title: 'Home'
  },
  data() {
    return{
      title: 'Max'
    }
  },
  mounted() {
    console.log("home mounted");
    
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
