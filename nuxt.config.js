export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alfin Reynaldi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_io/favicon.ico' },
      { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-type.js',
    {src: '~/plugins/vue-confetti.js', mode: 'client'},
    '~/plugins/vue-gtag.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/ngrok',
    ['@nuxtjs/google-analytics', {
      id: 'G-2QBTMFDD8X'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ngrok: {
    // module options
    authtoken: '29eZrEES82BHu4MpcTtclzZYowf_38zVKwB2UGg4saXKyr16X'
  },
  googleAnalytics: {
    id: 'G-2QBTMFDD8X',
    autoTracking: {
      screenview: true
    },
    debug: {
      enabled: true,
      sendHitTask: true
    } // Used as fallback if no runtime config is provided
  },
}
