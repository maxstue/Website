<template>
    <div class="example-split">
      <div class="col-md-12 example-title">
        <h2>Career</h2>
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
  posts: allPost (sort:[{by: "enddate"},{by: "startdate"}], order: DESC, filter: {fileInfo: {directory: {regex: "blog/aboutMe/career"}}}) {
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


<script>
export default {
  components: {},
  metaInfo: {
    title: "aboutmeTimeline career"
  },
  data: () => {
    return {
      title: "aboutmeTimeline career",
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