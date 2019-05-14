<template>
    <div class="container">
      <div class="example-split">
        <div class="col-md-12 example-title">
          <h2>Education</h2>
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



/*----- TIMELINE ITEM -----*/

  .timeline-item {
    padding-left: 40px;
    position: relative;
    &:last-child {
      padding-bottom: 0;
    }
  }

  /*----- TIMELINE INFO -----*/

  .timeline-info {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0 0 0.5em 0;
    text-transform: uppercase;
    white-space: nowrap;
  }
  /*----- TIMELINE MARKER -----*/

  .timeline-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15px;
    &:before {
      background: var(--timeline_dots);
      border: 3px solid transparent;
      border-radius: 100%;
      content: "";
      display: block;
      height: 15px;
      position: absolute;
      top: 2px;
      left: -2px;
      width: 15px;
      transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
    }
    &:after {
      content: "";
      width: 3px;
      background: #ccd5db;
      display: block;
      position: absolute;
      top: 24px;
      bottom: 0;
      left: 7px;
    }
    .timeline-item:last-child &:after {
      content: none;
    }
  }
  .timeline-item:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid var(--timeline_dots);
  }

  /*----- TIMELINE CONTENT -----*/

  .timeline-content {
    padding-bottom: 40px;
    p:last-child {
      margin-bottom: 0;
    }
  }

  /*----- TIMELINE PERIOD -----*/

  .period {
    padding: 0;
    .timeline-info {
      display: none;
    }
    .timeline-marker {
      &:before {
        background: transparent;
        content: "";
        width: 15px;
        height: auto;
        border: none;
        border-radius: 0;
        top: 0;
        bottom: 30px;
        left: 1px;
        position: absolute;
        border-top: 3px solid #ccd5db;
        border-bottom: 3px solid #ccd5db;
      }
      &:after {
        content: "";
        height: 32px;
        top: auto;
      }
    }
    .timeline-content {
      padding: 40px 0 70px;
    }
    .timeline-title {
      margin: 0;
    }
  }

  /*----------------------------------------------
              MOD: TIMELINE SPLIT
          ----------------------------------------------*/

  .timeline-split {
    @media (min-width: 768px) {
      .timeline {
        display: table;
      }
      .timeline-item {
        display: table-row;
        padding: 0;
      }
      .timeline-info,
      .timeline-marker,
      .timeline-content,
      .period .timeline-info {
        display: table-cell;
        vertical-align: top;
      }
      .timeline-marker {
        position: relative;
      }
      .timeline-content {
        padding-left: 30px;
      }
      .timeline-info {
        padding-right: 30px;
      }
      .period .timeline-title {
        position: relative;
        left: -45px;
      }
    }
  }
  
  /*----------------------------------------------
              MOD: MARKER OUTLINE
          ----------------------------------------------*/

  .marker-outline {
    .timeline-marker {
      &:before {
        background: transparent;
        border-color: var(--timeline_dots);
      }
    }
    .timeline-item:hover .timeline-marker:before {
      background: var(--timeline_dots);
    }
  }
  /*#endregion */
</style>