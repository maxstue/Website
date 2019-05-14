<template>
    <div class="container">
      <div class="example-split">
        <div class="col-md-12 example-title">
          <h2>Projects</h2>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline timeline-split">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 12, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                  eu pede mollis pretium. Pellentesque ut neque.
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                  eu pede mollis pretium. Pellentesque ut neque.
                </p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">April 2016</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                  eu pede mollis pretium. Pellentesque ut neque.
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                  eu pede mollis pretium. Pellentesque ut neque.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>  
    </div> 
</template>

<static-query>
query Post {
  posts: allPost (sortBy:"date", order: ASC, filter: {fileInfo: {directory: {regex: "blog/projects"}}}) {
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
</static-query>


<script>
  export default {
    components: {},
    metaInfo: {
      title: "projectstimeline"
    },
    data: () => {
      return {
        title: "Projectstimeline"
      };
    },
    mounted() {
      console.log("projectstimeline mounted");
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