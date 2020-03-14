const navConf = require('../../config/navConf.js');
const siderbarConf = require('../../config/siderbarConf.js');

module.exports = {
    title: 'Power\'s Wiki', // 网站标题，改为你自己的
    //description: '个人知识库',
    //base: '/Wiki-book/', // 不自定义链接的时候才需要

    // 让时间格式符合国内习惯
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
        'reading-progress', // 阅读进度条插件
        ['vuepress-plugin-code-copy', true], // 代码块一键复制按钮
        '@vuepress/google-analytics', // Google 分析
        {
            'ga': 'UA-152900803-1' // 改为你自己的
        },
    ],

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

        lastUpdated: 'Last Updated',

        // 平滑滚动
        smoothScroll: true,


        // 显示 'Edit on GitHub'
        repo: 'linyuxuanlin/Wiki-book',
        repoLabel: '本站源码', // 显示在 NavBar
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页面', // 显示在文章底部
    },
}
}