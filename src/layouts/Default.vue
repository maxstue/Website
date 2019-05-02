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
    <transition name="fade" appear>
      <main class="content">
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
  :root {
    --menu-speed: 0.75s;
    --primary-color: rgba(243, 120, 20);
    --overlay-color: rgba(2, 139, 252, 0.63);
  }

  #symbol {
    font-size: 40px;
    letter-spacing: 1vh;
    color: inherit;
    margin: 0 0 0 1em;
    color: inherit;
    text-decoration: none;
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

  /* burger menu für mobile view */
  .menu-wrap {
    display: none;
  }

  .menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }

  .menu-wrap .hamburger {
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Hamburger lines */
  .menu-wrap .hamburger > div {
    position: relative;
    width: 75%;
    height: 2px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }
  /* top and bottom line  */
  .menu-wrap .hamburger > div:before,
  .menu-wrap .hamburger > div:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
  }
  /* moves bottom line down */
  .menu-wrap .hamburger > div:after {
    top: 10px;
  }
  /*  Toggler animate */
  .menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }

  /* turn lines into X */
  .menu-wrap .toggler:checked + .hamburger > div:before,
  .menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  /* rotate on hover */
  .menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }

  /* show menu */
  .menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
  }

  .menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
  }
  .menu-wrap .toggler:checked ~ .menu > div > {
    opacity: 1;
    transition: opacity 0.4s ease;
  }

  .menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-wrap .menu > div {
    background: rgba(0, 0, 0, 0.568);
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
  }

  .menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    /* opacity: 0; */
    transition: opacity 0.4s ease;
  }

  .menu-wrap .menu > div > div > ul > li {
    list-style: none;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
  }

  .menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
  }

  @media screen and (max-width: 850px) {
    .navUl {
      display: none !important;
    }

    .nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 2em 0em 0;
    }

    .menu-wrap {
      display: flex;
      position: relative;
      margin: 0 3em 0 60%;
      transition: all 0.4s ease;
    }
  }
</style>
