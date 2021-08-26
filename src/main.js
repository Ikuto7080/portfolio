import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles'
import VueSmoothScroll from 'vue2-smooth-scroll'

// import VueTyperPlugin from 'vue-typer'

import "./sass/main.scss"

import router from './router'

Vue.config.productionTip = false
// Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
Vue.use(VueSmoothScroll, {
  duration: 1000,
  offset: 0,
  updateHistory: false
})


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
