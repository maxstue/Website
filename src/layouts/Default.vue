<template>
  <div class="is-preload">
    <!-- Header -->
			<div id="header">
        <div class="headerrow">
          <strong id="symbol">
            <g-link to="/">MS</g-link>
          </strong>
          <nav>
            <ul>
              <li><a><g-link to="/">Home</g-link></a></li>
              <li><a><g-link to="/projects">Projects</g-link></a></li>
              <li><a><g-link to="/blog">Blog</g-link></a></li>
              <li><a><g-link to="/about">About me</g-link></a></li>
            </ul>
          </nav>
        </div>
			</div>
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <!-- Footer -->
			<section id="footer">
				<ul class="icons">
					<li><a href="https://github.com/lTimeless" class="icon fa-github"><span class="label">GitHub</span></a></li>
          <li><a href="https://gitlab.com/Imaximilian?nav_source=navbar" class="icon alt fa-github"><span class="label">GitLab</span></a></li>
					<li><a href="mail:maximilian.stuempfl@t-online.de" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy; Maximilian Stümpfl</li>
				</ul>
			</section>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
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

<style>
  .layout {
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  #header {
		padding: 4em 0 8em 0 ;
		background-color: #4686a0;
		color: rgb(255, 255, 255);
		background-attachment: fixed,							fixed,							fixed;
		background-image: url("../assets/css/images/overlay2.png"), url("../assets/css/images//overlay3.svg"), linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
		background-position: top left,						center center,					center center;
		background-size: auto,							cover,							cover;
		overflow: hidden;
		position: relative;
		text-align: center;
  }

  #header strong {
    color:  inherit;
  }
  #header #symbol {
    font-size: 40px;
  }

  #header .nav {
    font-size: 24px;
  }
  
  .headerrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 150px;
    width: 75em;
  }
  
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter {
    opacity: 0;
  }

  li {
    margin: 20px;
    font-size: 24px;
    list-style: none;
    display: inline-block;
  }

  nav:hover a {
    opacity: .5;
  }

  nav li a:hover {
    opacity: 1;
  }
  
</style>
