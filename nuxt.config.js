import colors from 'vuetify/es5/util/colors'
const webpack = require("webpack");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
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
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   { src:"~plugins/filter.js", mode: 'client'},
    {src:"~plugins/vuex-persist.js", mode: 'client'},
    {src:"~plugins/app_toast.js", mode: 'client'},
    {src:"~plugins/vuelidate.js", mode: 'client'},
    // {src:"~plugins/range_slider.js", mode: 'client'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
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
      baseURL: process.env.NODE_ENV != 'production' ? process.env.LOCAL_API_URL : process.env.API_URL
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
     babel: {
       plugins: [
         ["@babel/plugin-proposal-class-properties", {
           "loose": true
         }],
         ["@babel/plugin-proposal-private-methods", {
           "loose": true
         }],
         ["@babel/plugin-proposal-private-property-in-object", {
           "loose": true
         }]
       ]
     }
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
