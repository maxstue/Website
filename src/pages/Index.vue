<template>
  <Layout>
		 <head>
      <!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> -->
    </head>
    <!-- <g-image class="image" alt="Gridsome" src="~/assets/favicon.png" width="135" />

    <h1 class="title">{{ title }}</h1>

    <p>
      This is a starter template for Gridsome using Typescript.
      It uses <strong>wotan</strong> for command line code analisys
      and <strong>tslint</strong> for integration with vscode.
      In order to work with Visual Studio Code, you'll need to install
      <strong>TSLint</strong> and <strong>TSLint Vue</strong>
      extensions for the editor.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->
<!-- One -->
			<section id="one" class="main style1">
				<div class="container">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>{{title}}<br />
								amet dolor consequat</h2>
							</header>
							<p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
						</div>
						<div class="col-6 col-12-medium imp-medium">
							<span class="image fit"><img src="../assets/css/images/pic01.jpg" alt="" /></span>
						</div>
					</div>
				</div>
			</section>

		<!-- Two -->
			<section id="two" class="main style2">
				<div class="container">
					<div class="row gtr-150">
						<div class="col-6 col-12-medium">
							<ul class="major-icons">
								<!-- TODO: turn these pics so they are straight or replace it with some pics -->
								<li><span class="icon style1 major fas fa-code"></span></li>
								<li><span class="icon style2 major fab fa-code-branch"></span></li>
								<li><span class="icon style4 major fab fa-bolt"></span></li>
								<li><span class="icon style5 major fa-desktop"></span></li>
							</ul>
						</div>
						<div class="col-6 col-12-medium">
							<header class="major">
								<h2>Lorem ipsum dolor adipiscing<br />
								amet dolor consequat</h2>
							</header>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
							<p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
							<p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
						</div>
					</div>
				</div>
			</section>

		<!-- Three -->
			<section id="three" class="main style1 special">
				<div class="container">
					<header class="major">
						<h2>Adipiscing amet consequat</h2>
					</header>
					<p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
					<div class="row gtr-150">
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="../assets/css/images/pic02.jpg" alt="" /></span>
							<h3>Magna feugiat TEST</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul class="actions special">
								<li><a class="button"><g-link to="/detail">Projects</g-link></a></li>
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="../assets/css/images/pic03.jpg" alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul class="actions special">
								<li><a href="#" class="button">More</a></li>
							</ul>
						</div>
						<div class="col-4 col-12-medium">
							<span class="image fit"><img src="../assets/css/images/pic04.jpg" alt="" /></span>
							<h3>Magna feugiat lorem</h3>
							<p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
							<ul class="actions special">
								<li><a href="#" class="button">More</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

		
  </Layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class HomePage extends Vue {
    public title = 'This is my Test Portfolio';
  }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }

  .image {
    display: block;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    margin: 36px auto 24px;
  }
</style>
