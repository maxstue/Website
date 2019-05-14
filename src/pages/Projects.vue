<template>
  <Layout>
    <div id="three" class="main style1 special">
      <div class="container">
        <header class="major">
          <h1 class="title">{{title}}</h1>
          <div class="center_belowTitle">
            <button class="btn default" @click="toogleComponent">List view</button>
            <div class="seperator_line" ></div>
            <button class="btn default" @click="toogleComponent">Timeline view</button>
          </div>
        </header>
          <projects v-if="showComponentOne"/>
          <projects-timeline v-if="showComponentTwo"/>
      </div>
    </div>
  </Layout>
</template>



<script>
import Projects from "../components/Projects.vue";
import ProjectsTimeline from "../components/ProjectTimeline.vue";
  export default {
    components: {
      Projects,
      ProjectsTimeline
    },
    metaInfo: {
      title: "projects"
    },
    data: () => {
      return {
        title: "Projects",
        showComponentOne: true,
        showComponentTwo: false
      };
    },
    methods: {
      toogleComponent(){
        this.showComponentOne = !this.showComponentOne;
        this.showComponentTwo = !this.showComponentTwo;
      }
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
