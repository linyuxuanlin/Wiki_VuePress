module.exports = [
    ['@vuepress/back-to-top'], // 回到顶部
    ['reading-progress'], // 阅读进度条插件
    ['vuepress-plugin-code-copy', true], // 代码块一键复制按钮
    ['@vuepress/google-analytics', // Google 分析
        {
            'ga': 'UA-152900803-1'
        }
    ],
    ['@vuepress/pwa',
        {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: true
        }
    ]
];
