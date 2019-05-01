// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        // modulePath: `src/cms/index.js`,
        configPath: `static/admin/config.yml`,
        // htmlPath: `src/admin/index.html`,
        publicPath: `/admin`,
        htmlTitle: `My CMS`
      }
    } ,
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',

      }
    },
  ]
}
