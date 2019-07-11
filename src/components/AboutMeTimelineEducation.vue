<template>
    <div >
      <div class="col-md-12 mb-6">
        <h2 class="font-bold text-lg">Education</h2>
      </div>
      <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul class="timeline timeline-split">
          <li class="timeline-item" v-for="post in $static.posts.edges" :key="post.id">
            <div class="timeline-info">
              <div><span>{{post.node.enddate}}</span> - </div>
              <span class="startdate">{{post.node.startdate}} </span>
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
</template>

<static-query>
query Post {
  posts: allPost(
    sortBy: "date"
    order: DESC
    filter: { fileInfo: { directory: { regex: "blog/aboutMe/education" } } }
  ) {
    edges {
      node {
        id
        title
        content
        startdate (format: "MMMM D, Y")
        enddate (format: "MMMM D, Y")
        path
        fileInfo {
          directory
        }
      }
    }
  }
}
</static-query>


<script scoped> 
export default {
  components: {},
  metaInfo: {
    title: "aboutmeTimeline Education"
  },
  data: () => {
    return {
      title: "aboutmeTimeline Education",
    };
  }
};
</script>

<style lang="scss"  scoped>
// h2 {
//   font-size: 16px;
//   font-weight: bold;
// }

.resizePic {
  width: 368px;
  height: 240px;
}

.title {
  text-decoration: none;
  color: var(--text-greyish);
}

.startdate {
    font-size: 10px;
    font-weight: 500;
}
</style>