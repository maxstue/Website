<template>
  <Layout>
    <transition name="fade-button" mode="out-in" v-if="showComponentOne">
      <div class="center_belowTitle">
        <button class="btn default" @click="toogleComponent">Show text</button>
        <div class="seperator_line"></div>
        <button class="btn default" @click="downloadCV">Export CV</button>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <AboutMe v-if="!showComponentOne"/>
      <about-me-timeline v-if="showComponentOne"/>
    </transition>

    <transition name="fade-button" mode="out-in" v-if="!showComponentOne">
      <div class="center_belowTitle">
        <button class="btn default" @click="toogleComponent">Show Timeline</button>
        <div class="seperator_line"></div>
        <button class="btn default" @click="downloadCV">Export CV</button>
      </div>
    </transition>
  </Layout>
</template>

<script>
import AboutMe from "~/components/Aboutme";
import AboutMeTimeline from "../components/AboutMeTimeline.vue";
export default {
  components: {
    AboutMe,
    AboutMeTimeline
  },
  metaInfo: {
    title: "About"
  },
  mounted() {
    console.log("about mounted");
  },
  data: () => {
    return {
      showComponentOne: false
    };
  },
  methods: {
    toogleComponent() {
      this.showComponentOne = !this.showComponentOne;
    },
    downloadCV() {
      console.log("download cv");
    }
  }
};
</script>
<style lang="scss" scoped>
.center_belowTitle {
  text-align: center;
  margin: 1em 0 3em 0;
}

.seperator_line {
  background: rgba(144, 144, 144, 0.5);
  content: "";
  display: inline-block;
  height: 1px;
  margin-top: 1.5em;
  width: 10%;
  margin: 0em 1em 0em 1em;
}

.btn {
  box-shadow: inset 0 0 0 1px var(--text-copy-secondary);
  color: inherit !important;
  border-radius: 4px;
  padding: 3px;
  margin: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 0.4s;
}

.fade-button-enter, .fade-button-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

