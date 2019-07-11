// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/index.scss';
import DefaultLayout from '~/layouts/Default.vue'

import * as Sentry from '@sentry/browser';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'
  })

  Sentry.init({ 
    dsn: 'https://ee01ed30ae3d49438c89747d9d3b8d10@sentry.io/1448310',
    debug: false 
  });
}
