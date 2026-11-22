import { defineConfig } from 'vitepress'
import { latinizadoNasTabelas } from './theme/latinizado-markdown'

// Pimsleur lessons already written: raise this number when adding the next one.
const totalLicoes = 10
const licoes = Array.from({ length: totalLicoes }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return { text: `Lesson ${n}`, link: `/pimsleur_portuguese_${n}` }
})

export default defineConfig({
  lang: 'en-US',
  title: 'Portuguese Notebook',
  description: 'Study notes for learning European Portuguese, written in English.',
  base: '/Portuguese/',
  cleanUrls: false,

  head: [
    // Applies the chosen font and size before the page appears, so it does not flicker.
    ['script', {}, `try{var d=document.documentElement,f=localStorage.getItem('leitura-fonte'),t=localStorage.getItem('leitura-tamanho');if(f)d.dataset.fonte=f;if(t)d.dataset.tamanho=t}catch(e){}`]
  ],

  markdown: {
    config: (md) => md.use(latinizadoNasTabelas)
  },

  themeConfig: {
    nav: [
      { text: 'Pronunciation', link: '/pronunciation' },
      { text: 'Pimsleur', items: licoes },
      { text: 'Textbook vs. street', link: '/textbook-vs-everyday' }
    ],

    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Pronunciation guide', link: '/pronunciation' }
        ]
      },
      { text: 'Pimsleur', items: licoes },
      {
        text: 'Reference',
        items: [{ text: 'Textbook vs. everyday Portuguese', link: '/textbook-vs-everyday' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/filustrias/Portuguese' }],

    editLink: {
      pattern: 'https://github.com/filustrias/Portuguese/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    sidebarMenuLabel: 'Chapters',
    notFound: {
      title: 'Page not found',
      quote: 'Esta página não existe. This page does not exist.',
      linkText: 'Back to the home page'
    }
  }
})
