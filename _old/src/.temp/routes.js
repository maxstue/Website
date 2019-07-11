export default [
  {
    name: "projects",
    path: "/projects",
    component: () => import(/* webpackChunkName: "component--projects" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\src\\pages\\Projects.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\src\\pages\\Index.vue")
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import(/* webpackChunkName: "component--blog" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\src\\pages\\Blog.vue")
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\src\\pages\\About.vue"),
    meta: { isStatic: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "post",
    path: "/blog/:slug",
    component: () => import(/* webpackChunkName: "component--post" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\src\\templates\\Post.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "C:\\Users\\Max\\Desktop\\_Projekte\\portfolio\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

