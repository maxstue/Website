module.exports = {
  siteName: 'MaximilianStuempfl',
  icon: 'src/assets/favicon.png',
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
    { use: 'gridsome-plugin-typescript',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',

      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        // modulePath: `src/cms/index.js`,
        configPath: `static/admin/config.yml`,
        // htmlPath: `src/admin/index.html`,
        publicPath: `/admin`,
        htmlTitle: `My CMS`
      }
    } 
  ],
}