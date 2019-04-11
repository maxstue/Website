<template>

  <div class="is-preload">
    <!-- Header -->
    <head>
     <!-- <link rel="stylesheet" href="src/assets/css/main.css"> -->
    </head>
			<div id="header">
        <nav>
          <strong id="symbol">
            <g-link to="/">MS</g-link>
          </strong>
          <ul class="mainbar navUl">
            <li><a><g-link to="/">Home</g-link></a></li>
            <li><a><g-link to="/projects">Projects</g-link></a></li>
            <li><a><g-link to="/blog">Blog</g-link></a></li>
            <li><a><g-link to="/about">About me</g-link></a></li>
          </ul>
          <div class="menu-wrap">
            <input type="checkbox" class="toggler">
            <div class="hamburger">
              <i class="fas fa-bars"></i>
              <div></div>
            </div>
            <div class="menu" >
              <div>
                <div>
                  <ul class="mainbar navBurger">
                    <li><a><g-link to="/">Home</g-link></a></li>
                    <li><a><g-link to="/projects">Projects</g-link></a></li>
                    <li><a><g-link to="/blog">Blog</g-link></a></li>
                    <li><a><g-link to="/about">About me</g-link></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
			</div>
      <!-- Body -->
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <!-- Footer -->
			<section id="footer">
				<ul class="icons">
          <li><a href="https://github.com/lTimeless" target="_blank" class="icon"><i class="fab fa-github"></i></a></li>
          <li><a href="https://gitlab.com/Imaximilian?nav_source=navbar" target="_blank" class="icon"><i class="fab fa-gitlab"></i></a></li>
          <li><a href="https://www.xing.com/profile/Maximilian_Stuempfl/cv?sc_o=mxb_p" target="_blank" class="icon"><i class="fab fa-xing"></i></a></li>
          <li><a href="mailto:maximilian.stuempfl@t-online.de" target="_blank" class="icon"><i class="fas fa-envelope"></i></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Maximilian Stümpfl</li>
          <!-- <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> -->
				</ul>
			</section>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class HomePage extends Vue {
    public title = 'Hello I am Maximilian Stümpfl';
    // Todo: das der title so getypped auftaucht
  }
</script>


<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style scoped>

  #header {
		padding: 4em 0 8em 0 ;
		background-color: #4686a0;
		color: rgb(255, 255, 255);
		background-attachment: fixed,							fixed,							fixed;
		background-image: url("../assets/css/images/overlay2.png"), url("../assets/css/images//overlay3.svg"), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
		background-position: top left,						center center,					center center;
		background-size: auto,							cover,							cover;
    text-align: center;
  }

  #symbol {
    font-size: 40px;
    letter-spacing: 1vh;
    color: inherit;
    margin: 0 0 0 1em;
  }

  nav {
    display: flex;
    justify-content: space-around;
  }

  ul {
		padding-left: 1em;
  }

  ul li {
    padding-left: 2em;
    font-size: 24px;
    list-style: none;
    display: inline-block;
  }

  .navUl {
    position: relative;
    display: flex;
    margin: 0 1em 0 0;
  }

  .mainbar:hover a {
    opacity: .5;
  }
    .mainbar li a:hover {
      opacity: 1;
    }

/* burger menu für mobile view */
  .menu-wrap {
    display: none;
  }

  @media screen and (max-width: 850px){

    body {
      overflow-x: hidden;
    }

    .menu-wrap {
      display: flex;
      position: relative;
      margin: 0 3em 0 60%;
    }

    .navUl {
      display: none !important;
    }

    .navBurger {
      display: none;
    }


  }

</style>
