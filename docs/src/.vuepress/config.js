const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dr T\'s Keyboard Controlled Sequencer',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'KCS 1.6 Manual',
        link: '/guide/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'KCS 1.6 Manual',
          collapsable: false,
          children: [
            '',
            '02-track-mode-recording-tutorial',
            '03-open-mode-editing-tutorial',
            '04-open-and-track-mode-editing.md',
            '05-song-mode-editing.md',
            '06-track-mode-play-record',
            '07-open-mode-play-record',
            '08-song-mode-play',
            '09-step-time-recording',
            '10-load-save',
            '11-set-options',
            '12-midi',
            '13-tips-for-advanced-users',
            '14-troubleshooting',
            '15-application-notes',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
