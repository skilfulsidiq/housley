import colors from 'vuetify/es5/util/colors'
const webpack = require("webpack");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - housley',
    title: 'housley',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
       { rel: 'stylesheet', href:"/css/scss/style.css"  },
     {rel:"preconnect", href:"https://fonts.googleapis.com"},
     {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:'true'},
     {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap"},
     
     {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" },

     {rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
     crossorigin:'anonymous', integrity : "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
     },
     {rel: 'stylesheet', href:"/css/libraries/swiper/swiper-bundle.min.css"},
     {rel: 'stylesheet',href:"https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"},
     {rel: 'stylesheet',href:"/css/custom/custom.css" },
     { rel: 'stylesheet', href:"/css/custom/main.css"  },
     { rel: 'stylesheet', href:"/css/custom/responsive.css"  },
     { rel: 'stylesheet', href:"/override.css"  },
     ],
     script: [
       {src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"},
       {src: "/js/custom/property-search.js" },
       {src: "/js/custom/transparent-header.js"},
       {src: "/js/custom/loader.js"},
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
   plugins: [{
       src: '~/plugins/app_toast',
       ssr: false
     },
     {
       src: '~/plugins/moment',
       ssr: false
     },
     {
       src: '~/plugins/filter',
       ssr: false
     },
     {
       src: '~/plugins/vuex-persist',
       // mode: 'client',
       ssr: false
     },
     {
       src:'~plugins/bootstrap'
     }
   ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      baseURL: process.env.NODE_ENV == 'production' ? 'https://profilerapi.afreal.one/api/' : 'http://police.test/api/'
      // baseURL: 'http://police.test/api/'
    },

    auth: {
      redirect: {
        login: '/login',
        logout: '/login',
        callback: '/login',
        home: '/dashboard'
      },
      strategies: {
        local: {
          token: {
            property: 'data',
            global: true,
            // required: true,
            type: 'Bearer'
          },
          // user: false,
          user: {
            property: 'data',
            // autoFetch: false
          },
          endpoints: {
            login: {
              url: '/auth/login',
              method: 'post',
              // propertyName: 'data.data'
            },
            logout: {
              url: '/user/logout',
              method: 'post'
            },
            user: {
              url: '/user/profile',
              method: 'get',
              propertyName: ''
            },
          }
        }

      },
    },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
   router: {
    //  middleware: ['auth'],
    //  linkExactActiveClass: 'active',
     // extendRoutes(routes, resolve) {
     //   routes.push({
     //     name: 'base',
     //     path: '/',
     //     component: resolve(__dirname, 'pages/login.vue')
     //   })
     // }
   }
}
