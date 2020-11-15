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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/jobf/kcs-manuals/',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [

    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Manuals',
          children: [
            '',
            {
              title: 'KCS 1.6 Manual',
              path: '/guide/1.6-manual/',
              children: [
                '/guide/1.6-manual/',
                '/guide/1.6-manual/02-track-mode-recording-tutorial',
                '/guide/1.6-manual/03-open-mode-editing-tutorial',
                '/guide/1.6-manual/04-open-and-track-mode-editing.md',
                '/guide/1.6-manual/05-song-mode-editing.md',
                '/guide/1.6-manual/06-track-mode-play-record',
                '/guide/1.6-manual/07-open-mode-play-record',
                '/guide/1.6-manual/08-song-mode-play',
                '/guide/1.6-manual/09-step-time-recording',
                '/guide/1.6-manual/10-load-save',
                '/guide/1.6-manual/11-set-options',
                '/guide/1.6-manual/12-midi',
                '/guide/1.6-manual/13-tips-for-advanced-users',
                '/guide/1.6-manual/14-troubleshooting',
                '/guide/1.6-manual/15-application-notes',
              ]
            },
            {
              title: 'PVG and Master Edit',
              path: '/guide/pvg-and-master-edit/',
              children: [
                '/guide/pvg-and-master-edit/',
                '/guide/pvg-and-master-edit/01-understanding-the-pvg',
                '/guide/pvg-and-master-edit/02-a-quick-overview-of-pvg-operations',
                '/guide/pvg-and-master-edit/03-general-options',
                '/guide/pvg-and-master-edit/04-protection',
                '/guide/pvg-and-master-edit/05-restrictions',
                '/guide/pvg-and-master-edit/06-defaults',
                '/guide/pvg-and-master-edit/07-changes',
                '/guide/pvg-and-master-edit/08-swap-copy',
                '/guide/pvg-and-master-edit/09-set-values',
                '/guide/pvg-and-master-edit/10-global-changes',
                '/guide/pvg-and-master-edit/11-split-pattern',
                '/guide/pvg-and-master-edit/12-in-betweens',
                '/guide/pvg-and-master-edit/13-ornaments',
                '/guide/pvg-and-master-edit/14-add-controllers',
                '/guide/pvg-and-master-edit/15-vary-controllers',
                '/guide/pvg-and-master-edit/16-get-store-load-save',
                '/guide/pvg-and-master-edit/17-macros',
                '/guide/pvg-and-master-edit/18-master-editor',
                '/guide/pvg-and-master-edit/19-polyphonic-key-pressure',
              ]
            }
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
}
