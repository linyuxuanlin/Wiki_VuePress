module.exports = [
    '@vuepress/back-to-top', // 回到顶部
    'reading-progress', // 阅读进度条插件
    ['vuepress-plugin-code-copy', true], // 代码块一键复制按钮
    '@vuepress/google-analytics', // Google 分析
    {
        'ga': 'UA-152900803-1' // 改为你自己的
    },

    'sitemap': {
        hostname: 'https://wiki-power.com'
    },


    '@vssue/vuepress-plugin-vssue': {

        platform: 'github',

        // 其他的 Vssue 配置
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
    },
];