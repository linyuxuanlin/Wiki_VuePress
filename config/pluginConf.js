module.exports = [
  ["@vuepress/back-to-top"], // 回到顶部

  ["reading-progress"], // 阅读进度条插件
  ["vuepress-plugin-code-copy", false], // 代码块一键复制按钮
  [
    "@vuepress/google-analytics", // Google 分析
    {
      ga: "UA-152900803-1",
    },
  ],

  [
    "vuepress-plugin-comment",
    {
      choosen: "valine",
      // options选项中的所有参数，会传给 Valine 的配置
      options: {
        el: "#valine-vuepress-comment",
        appId: "erDx4QpfFAmXydF6nCRQxMhQ-gzGzoHsz",
        appKey: "5DHVcLGeYkA1q8gSNY7wsb3z",
        meta: ["nick", "mail"], // 评论人信息填写昵称和邮箱
        path: "<%- frontmatter.to.path %>", // 定位评论使用的是页面文件名，否则定向错误
        placeholder: "随便写写~", // 评论的输入框提示
      },
    },
  ],

  [
    "@vuepress/pwa",
    {
      serviceWorker: true, //用于缓存页面的内容以供离线使用
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
