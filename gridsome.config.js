// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Maximilian Stümpfl | Personal Portfolio',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: 'tag/:id',
            create: true
          },
          tags:{
            typeName: 'Edu',
            route: 'edu/:id',
            create: true
          },
          tags:{
            typeName: 'Career',
            route: 'career/:id',
            create: true
          }
        }
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
    } ,
  ],
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
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
