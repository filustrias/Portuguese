import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import '@fontsource-variable/source-sans-3'
import '@fontsource-variable/source-sans-3/wght-italic.css'
import '@fontsource-variable/literata'
import '@fontsource-variable/literata/wght-italic.css'
import '@fontsource-variable/inter'
import '@fontsource-variable/inter/wght-italic.css'
import '@fontsource-variable/fraunces'
import './estilo.css'

import Lat from './Lat.vue'
import BarraAula from './BarraAula.vue'
import Leitura from './Leitura.vue'
import Capa from './Capa.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(Capa),
      'doc-before': () => h(BarraAula),
      'nav-bar-content-after': () => h(Leitura)
    })
  },
  enhanceApp({ app }) {
    app.component('Lat', Lat)
  }
} satisfies Theme
