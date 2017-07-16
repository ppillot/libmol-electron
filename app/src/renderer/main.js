import Vue from 'vue'
import Electron from 'vue-electron'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import store from './store'
import { locales } from './locales/locales'
import './assets/font/css/icons.css'
import 'element-ui/lib/theme-default/index.css'
import { ipcRenderer } from 'electron'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(Electron)
Vue.config.debug = true

import App from './App'

let language = [navigator.language]
if (navigator.languages) language = language.concat(navigator.languages)
let lang = language.find(navPreferedLanguage => {
  return locales.find(locale => {
    return navPreferedLanguage.substr(0, 2) === locale
  })
}).substr(0, 2).toLowerCase()

if (lang === undefined) lang = 'en'

/* eslint-disable */
import response from './locales/bundles/fr.json'
/* eslint-enable */
Vue.locale('fr', response)
Vue.config.lang = lang

  /* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  store,
    // template: '<App/>',
    // components: { App },
  render: h => h(App)
})

ipcRenderer.on('load', (ev, fileName, fileContent) => {
  console.log(app, fileName)
  app.$store.dispatch('loadNewFile', {
    file: new Blob([fileContent], {type: 'text/plain'}),
    value: fileName.substr(fileName.lastIndexOf('/') + 1),
    ext: 'pdb'
  })
})
