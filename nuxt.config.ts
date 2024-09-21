// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title:"Nuxt 3 Crud",
      meta: [
        {charset : 'utf-8'},
        {name: '', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name:'description', content:'Nuxt 3 Crud meta desc'},
        {name: 'format-detection', content:'telephone-no'}
      ],
      link:[      
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        },
        {
          rel:'stylesheet',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        }
      ],
      script: [
        {
           src:'https://code.jquery.com/jquery-3.7.1.min.js',
            type: 'test-javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          type: 'test-javascript'
        }
      ],
    }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css', 
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@pinia/nuxt'
  ],

  imports:{
    dirs:['stores']
  },

  generate: {
    fallback: true
  },

  compatibilityDate: '2024-09-20'
})