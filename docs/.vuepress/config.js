const navConf = require('../../config/navConf.js');
const siderbarConf = require('../../config/siderbarConf.js');

module.exports = {
    title: 'Power\'s Wiki',
    description: '个人知识库',
    //base: '/Wiki-book/',

    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },

    // PWA
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
            // 自定义弹窗
            // popupComponent: 'MySWUpdatePopup',
        }
    },



    plugins: [
        '@vuepress/back-to-top', // 回到顶部
        '@vuepress/google-analytics',
        {
            'ga': '' // UA-00000000-0
        },

        // RSS 插件
        'vuepress-plugin-rss',
        {
            base_url: '/', // required
            site_url: 'https://wiki-power.com', // required
            copyright: '2020 Power Lin', // optional
            // filter some post
            filter: (frontmatter) => {
                return [true | false]
            },
            // How much articles
            count: 100,
        },

        // 阅读进度
        'reading-progress',

        // 代码块一键复制按钮
        ['vuepress-plugin-code-copy', true],
    ],
    //theme: 'reco', //reco 主题，会拖慢加载速度
    //theme: 'antdocs',

    // 解决搜索框放大问题
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],

    themeConfig: {

        nav: navConf,
        sidebar: siderbarConf,

        //logo: '/logo.png', 
        lastUpdated: 'Last Updated',
        smoothScroll: true, // 干嘛用的？


        // Edit on GitHub
        repo: 'linyuxuanlin/Wiki-book',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '本站源码',
        docsDir: 'docs',
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页面',

        themePicker: {
            colorName1: 'red',
            colorName2: 'yellow',
            colorName3: 'blue'
        },





    }
}