export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 8080
  },
  target: 'static',
  head: {
    title: 'request form - made by @Yefee8',
    htmlAttrs: {
      lang: 'en'
    },
    link:[{rel:'preconnect', href: 'https://fonts.googleapis.com'}, 
          {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
          {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'}
    ],
    meta: [
      {
        charset:
          'utf-8'
      },
      {
        name: 'viewport', content:
          'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'request form makes you easy to creating form with sending request to your backend!'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'request-form yefee request form form-request sending request with form yefee8'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  }
}
