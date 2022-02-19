 module.exports = {
     plugins: [
      '@vuepress/back-to-top', 
      '@vuepress/medium-zoom',
      'vuepress-plugin-code-copy',
    ],
     title: 'Nvoid',
     theme: 'default-prefers-color-scheme',
     description: 'Docs for Nvoid',
     themeConfig: {
       nav: [
         { text: 'Getting Started', link: '/get-started/' },
         { text: 'Configuration', link: '/configuration/' },
         { text: "Acknowledgements", link: "/acknowledgements/", },  
         { text: "About Me", link: "/about/", },  
       ],
       repo: "https://github.com/nvoid-lua/nvoid",
       docsRepo: "https://github.com/nvoid-lua/ysfgrgO7.github.io.src",
       docsBranch: "master",
       docsDir: "docs",
       sidebar: {
         '/get-started/' : [
           '/get-started/',
           '01-after-install'
          ],
          '/configuration/' : [
            '/configuration/',
            '01-settings',
            '02-colorschemes',
            '03-lsp',
            '04-treesitter',
            '05-nerd-fonts',
        ],
        '/acknowledgements/' : [
           '/acknowledgements/',
         ],
        '/about/' : [
           '/about/',
         ],
       } 
    }
 }
