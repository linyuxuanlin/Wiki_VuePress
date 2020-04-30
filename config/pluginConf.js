module.exports = [
  ["@vuepress/back-to-top"], // 回到顶部
  ["latex"],
  ["reading-progress"], // 阅读进度条插件
  ["vuepress-plugin-code-copy", true], // 代码块一键复制按钮
  [
    "@vuepress/google-analytics", // Google 分析
    {
      ga: "UA-152900803-1",
    },
  ],

  /*
  [
    "vuepress-plugin-comment",
    {
      choosen: "valine",
      // options选项中的所有参数，会传给 Valine 的配置
      options: {
        el: "#valine-vuepress-comment",
        appId: "erDx4QpfFAmXydF6nCRQxMhQ-gzGzoHsz",
        appKey: "5DHVcLGeYkA1q8gSNY7wsb3z"
      }
    }
  ],
  */
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      popupComponent: "MySWUpdatePopup",
      updatePopup: true,
    },
  ],
  [
    "vuepress-plugin-rss",
    {
      base_url: "/", // required
      site_url: "https://wiki-power.com", // required
      //copyright: "2018 Coralo", // optional
      // filter some post
      //filter: (frontmatter) => {
      //  return [true | false];
      //},
      // How much articles
      count: 100,
    },
  ],
];
