<template>
  <Layout>
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
              <img src="../assets/images/pic01.jpg" alt>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="timecontainer left">
        <div class="content">
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
      <div class="timecontainer right">
        <div class="content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
      <div class="timecontainer left">
        <div class="content">
          <h2>2015</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
    </div>
  </Layout>
</template>


<static-query>
query Post {
  post: post (path: "/blog/this-is-a-test-about-me-page") {
    title
    content
    path
    date
    slug
  }
}
</static-query>

<script>
  import Layout from "~/layouts/Default.vue";
  export default {
    components: {
      Layout
    },
    metaInfo: {
      title: "aboutme"
    }
  };
  // import { Component, Vue } from 'vue-property-decorator';

  // @Component
  // export default class About extends Vue {
  //   public title = 'About';
  // }
</script>
<style scoped>
  .title {
    text-align: center;
    margin: 36px auto 24px;
  }

/*#region timeline*/

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #474e5d;
    font-family: Helvetica, sans-serif;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: rgb(138, 132, 132);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .timecontainer {
    padding: 10px 40px;
    position: relative;
    background-color: rgb(252, 252, 252);
    width: 50%;
  }

  /* The circles on the timeline */
  .timecontainer::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  /* Add arrows to the left container (pointing right) */
  .left::before {
    content: "";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 25px;
    border: medium solid rgb(255, 255, 255);
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent rgb(0, 0, 0);
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 25px;
    border: medium solid rgb(255, 255, 255);
    border-width: 10px 10px 10px 0;
    border-color: transparent rgb(0, 0, 0) transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    background-color: rgb(192, 189, 189);
    position: relative;
    border-radius: 6px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }

    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid rgb(180, 178, 178);
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
/*#endregion */
</style>