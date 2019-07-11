<template>
  <div class="container-inner mx-auto my-16">
    <div >
      <div class="col-md-12 mb-6">
        <h2 class="font-bold text-lg">Projects</h2>
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul class="timeline timeline-split">
          <li class="timeline-item" v-for="post in $static.posts.edges" :key="post.id">
            <div class="timeline-info">
              <div>
                <span v-if="post.node.enddate == 'Invalid date'">today - </span>  
                <span v-else>{{post.node.enddate}}</span>
              </div>
              <span  class="startdate">{{post.node.startdate}} </span>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{post.node.title}}</h3>
              <div v-if="post.node.content.length < 200" v-html="post.node.content "></div>
              <div
                v-if="post.node.content.length >= 200"
                v-html="post.node.content.substring(0,300)"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Timeline3></Timeline3>
    <Timeline2></Timeline2>
    <div class="mb-8">
      <g-link to="/" class="font-bold uppercase">Back to Home</g-link>
    </div>
  </div>
</template>

<static-query>
query Post {
  posts: allPost (sortBy:"date", order: DESC, filter: {fileInfo: {directory: {regex: "blog/projects"}}}) {
    edges {
      node {
        id
        title
        content
        startdate (format: "MMMM D, Y")
        enddate (format: "MMMM D, Y")
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
import Timeline2 from "../components/AboutMeTimelineEducation.vue";
import Timeline3 from "../components/AboutMeTimelineCareer.vue";
export default {
  components: {
    Timeline2,
    Timeline3
  },
  metaInfo: {
    title: "aboutmeTimeline"
  },
  data: () => {
    return {
      title: "aboutmeTimeline",
    };
  }
};
</script>

<style lang="scss"  scoped>
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
.startdate {
    font-size: 10px;
    font-weight: 500;
}
</style>