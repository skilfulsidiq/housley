import colors from 'vuetify/es5/util/colors'
const webpack = require("webpack");
const APIURL = process.env.NODE_ENV !== 'production' ? process.env.LOCAL_API_URL : process.env.API_URL;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    titleTemplate: '%s - housley',
    title: 'housley',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/print.css"
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
      src: "~plugins/filter.js",
      mode: 'client'
    },
    {
      src: "~plugins/vuex-persist.js",
      mode: 'client'
    },
    {
      src: "~plugins/app_toast.js",
      mode: 'client'
    },
    {
      src: "~plugins/vuelidate.js",
      mode: 'client'
    },
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
    baseURL: APIURL
    // baseURL: 'http://police.test/api/'
  },
  // axios: {
  //   proxy: true // Can be also an object with default options

  // },

  // proxy: {
  //     '/api/': { target: APIURL, pathRewrite: {'^/api/': ''} }
  // },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
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
  loading: {
    color: '#006633',
    height: '8px'
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          // primary: '#0D4566',
          // secondary: '#006633',
          primary: '#0D4566',
          secondary: '#006633',
          accent: '#039c71',
          accent_text: '#006633',
          error: '#FF5252',
          info: '#FF5252',
          success: '#C4C4C4',
          warning: '#FFC107',
          link: '#FF5252'
        },
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
    middleware: ['auth'],
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
