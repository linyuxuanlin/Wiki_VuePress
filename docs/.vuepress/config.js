const navConf = require('../../config/navConf.js');
const siderbarConf = require('../../config/siderbarConf.js');
const pluginConf = require('../../config/pluginConf.js');

module.exports = {
    title: 'Power\'s Wiki', // 网站标题，改为你自己的
    description: '个人知识库', // 网站描述，改为你自己的
    //base: '/Wiki-book/', // 不自定义链接的时候才需要

    // 让时间格式符合国内习惯
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },


    // 解决搜索框放大问题
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#5d85c8'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],

    plugins: pluginConf,

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