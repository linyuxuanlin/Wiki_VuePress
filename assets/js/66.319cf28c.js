(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{514:function(t,e,v){"use strict";v.r(e);var _=v(23),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"个人知识库极简搭建指南-vuepress"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#个人知识库极简搭建指南-vuepress"}},[t._v("#")]),t._v(" 个人知识库极简搭建指南 - VuePress")]),t._v(" "),v("p",[t._v("我们所用到的技术栈：")]),t._v(" "),v("ul",[v("li",[t._v("框架：VuePress")]),t._v(" "),v("li",[t._v("托管及自动编译：GitHub")]),t._v(" "),v("li",[t._v("部署：Vercel")])]),t._v(" "),v("p",[t._v("为了让不想折腾的小伙伴，能够快速搭起一个知识库，所以这篇教程顺时而生。"),v("br"),t._v("\n至于某些详细步骤的操作，后续会慢慢补充完善，理解万岁！搭建知识库也就啪那一下，很快的！")]),t._v(" "),v("h2",{attrs:{id:"第一步-配置域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一步-配置域名"}},[t._v("#")]),t._v(" 第一步：配置域名")]),t._v(" "),v("p",[t._v("咱上 GoGaddy / 腾讯云 / 阿里云买个自己的域名，咱 "),v("strong",[t._v("假设")]),t._v(" 你买的域名是 "),v("code",[t._v("xx.com")]),t._v(" , 记住它。"),v("br"),t._v("\n（国内买的一般要提交实名信息，按着提示操作就行了）")]),t._v(" "),v("p",[t._v("修改域名解析：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("主机记录")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("记录类型")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("记录值")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("TTL（秒）")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("@")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("CNAME")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[v("code",[t._v("alias.zeit.co.")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("600")])])])]),t._v(" "),v("p",[t._v("没提到的项视为默认。")]),t._v(" "),v("h2",{attrs:{id:"第二步-克隆仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二步-克隆仓库"}},[t._v("#")]),t._v(" 第二步：克隆仓库")]),t._v(" "),v("p",[t._v("（这里以我的知识库作为模板）打开链接："),v("a",{attrs:{href:"https://github.com/linyuxuanlin/VuePress",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("linyuxuanlin/VuePress")]),v("OutboundLink")],1),v("br"),t._v("\n将仓库克隆到本地。咱 "),v("strong",[t._v("假设")]),t._v(" 你的仓库名字为 "),v("code",[t._v("xxx/Wiki-book")]),t._v("（其中 "),v("code",[t._v("xxx")]),t._v(" 是你的 GitHub 用户名），记住它。")]),t._v(" "),v("h2",{attrs:{id:"第三步-修改变量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三步-修改变量"}},[t._v("#")]),t._v(" 第三步：修改变量")]),t._v(" "),v("p",[t._v("在克隆下来的仓库内，全局搜索以下变量，并把它们改掉：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("vuepress.wiki-power.com")]),t._v("：替换为你的自定义域名 "),v("code",[t._v("xx.com")])]),t._v(" "),v("li",[v("code",[t._v("linyuxuanlin/VuePress")]),t._v("：替换为你的 GitHub 用户名和仓库名 "),v("code",[t._v("xxx/Wiki-book")]),t._v(" "),v("ul",[v("li",[t._v("（如果仓库名称不为 "),v("code",[t._v("Wiki-book")]),t._v("，则需全局搜索并修改对应的仓库名）")])])]),t._v(" "),v("li",[v("code",[t._v("master")]),t._v("：替换为 "),v("code",[t._v("main")]),t._v(".")])]),t._v(" "),v("h2",{attrs:{id:"第四步-配置部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第四步-配置部署"}},[t._v("#")]),t._v(" 第四步：配置部署")]),t._v(" "),v("p",[t._v("本来可以直接部署在 GitHub Pages 的，由于某些不可描述的原因，国内网络访问可能出问题，所以这里我们借助第三方部署工具 Vercel.")]),t._v(" "),v("p",[t._v("点开 "),v("a",{attrs:{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer"}},[v("strong",[t._v("vercel.com")]),v("OutboundLink")],1),t._v(" , 直接使用 GitHub 账户完成注册。"),v("br"),t._v("\n完成之后，在个人主页点击 "),v("code",[t._v("Import Project（导入项目）")]),t._v(" 按钮，把 GitHub 仓库的 "),v("strong",[t._v("完整链接")]),t._v(" 粘贴进去：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122232933.jpg",alt:""}})]),t._v(" "),v("p",[t._v("接下来提示 "),v("code",[t._v("Please select the directory（请选择目录）")]),t._v(" ，直接点 "),v("code",[t._v("Continue")]),t._v(" 继续就行。")]),t._v(" "),v("p",[t._v("在接下来的页面，我们只需在 "),v("code",[t._v("OUTPUT DIRECTORY（输出目录）")]),t._v(" 处，填入 "),v("code",[t._v("docs/.vuepress/dist")]),t._v(" 即可：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122235715.jpg",alt:""}})]),t._v(" "),v("p",[t._v("在提示 "),v("strong",[t._v("部署成功")]),t._v(" 后，我们点击页面右上角的 "),v("code",[t._v("Settings（设置）")]),t._v(" , 切换到 "),v("code",[t._v("Domains（域名）")]),t._v(" 栏目，在输入框内填写你买的域名 "),v("code",[t._v("xx.com")]),t._v(" ，点击 "),v("code",[t._v("Add（添加）")]),t._v("。")]),t._v(" "),v("p",[t._v("然后我们切换到 "),v("code",[t._v("Git（没得翻译）")]),t._v(" 栏目，滚轮下滑到 "),v("code",[t._v("Production Branch（生产分支）")]),t._v("，选择 "),v("code",[t._v("Custom")]),t._v(" , 填写 "),v("code",[t._v("gh-pages")]),t._v(" , 如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122232843.jpg",alt:""}})]),t._v(" "),v("p",[t._v("点击 "),v("code",[t._v("Save")]),t._v(" 保存。")]),t._v(" "),v("h2",{attrs:{id:"胜利在望"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#胜利在望"}},[t._v("#")]),t._v(" 胜利在望！")]),t._v(" "),v("p",[t._v("在本地仓库随便做点改动（注意：Commit message 不要少于 4 个英文字符），"),v("code",[t._v("Push")]),t._v(" 到 GitHub（目的是生成一次 Commit 让 GitHub Action 重新编译到 gh-pages 分支，再让 Vercel 完成重新部署。")]),t._v(" "),v("p",[t._v("等泡一杯茶的时间，访问你买的域名 "),v("code",[t._v("xx.com")]),t._v(" , 如果你能够顺利看到这个画面：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122233838.jpg",alt:""}})]),t._v(" "),v("p",[t._v("恭喜你！拥有了一个属于自己的知识库！")]),t._v(" "),v("br"),t._v(" "),v("br"),t._v(" "),v("blockquote",[v("p",[t._v("文章作者："),v("strong",[t._v("Power Lin")]),v("br"),t._v("\n原文地址："),v("a",{attrs:{href:"https://vuepress.wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuepress.wiki-power.com"),v("OutboundLink")],1),v("br"),t._v("\n版权声明：文章采用 "),v("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),v("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);