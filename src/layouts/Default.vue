<template>
  <div class="wrapper">
    <header id="header">
      <div class="nav">
        <nav>
          <strong>
            <g-link id="symbol" to="/">MS</g-link>
          </strong>
          <ul class="mainbar navUl">
            <li class="nav__link">
              <g-link to="/">Home</g-link>
            </li>
            <li class="nav__link">
              <g-link to="/projects">Projects</g-link>
            </li>
            <li class="nav__link">
              <g-link to="/blog">Blog</g-link>
            </li>
            <li class="nav__link">
              <g-link to="/about">About me</g-link>
            </li>
          </ul>
        </nav>
        <div class="menu-wrap">
          <input type="checkbox" class="toggler">
          <div class="hamburger">
            <!-- <i class="fas fa-bars"></i> -->
            <div></div>
          </div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <g-link to="/">Home</g-link>
                  </li>
                  <li>
                    <g-link to="/projects">Projects</g-link>
                  </li>
                  <li>
                    <g-link to="/blog">Blog</g-link>
                  </li>
                  <li>
                    <g-link to="/about">About me</g-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Body -->
    <transition class="content" name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>

    <!-- Footer -->
    <footer id="footer">
      <ul class="icons">
        <li>
          <a href="https://github.com/lTimeless" target="_blank" class="icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/Imaximilian?nav_source=navbar" target="_blank" class="icon">
            <i class="fab fa-gitlab"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Maximilian_Stuempfl/cv?sc_o=mxb_p"
            target="_blank"
            class="icon"
          >
            <i class="fab fa-xing"></i>
          </a>
        </li>
        <li>
          <a href="mailto:maximilian.stuempfl@t-online.de" target="_blank" class="icon">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Maximilian Stümpfl</li>
        <!-- <li>Design: <a href="http://html5up.net">HTML5 UP</a></li> -->
      </ul>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style scoped>

  .wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1 0 auto;
  }

  #symbol {
    font-size: 40px;
    letter-spacing: 1vh;
    color: inherit;
    margin: 0 0 0 1em;
    color: inherit;
    text-decoration: none;
  }

  .fade-enter-active {
    transition: opacity 0.8s;
  }

  .fade-enter {
    opacity: 0;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
  }

  .mainbar {
    padding-left: 1em;
  }

  .nav__link {
    margin-left: 20px;
    text-decoration: none;
    color: inherit;
  }
  a:-webkit-any-link {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  .mainbar .nav__link {
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
    opacity: 0.5;
  }
  .mainbar li a:hover {
    opacity: 1;
  }

</style>
