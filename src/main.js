// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/css/index.scss';

import DefaultLayout from '~/layouts/Default.vue'

import * as Sentry from '@sentry/browser';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Sentry.init({ 
    dsn: 'https://a236966bb8e8432ebad6bcf9d4522e87@sentry.io/1385594',
    debug: true 
  });

}
