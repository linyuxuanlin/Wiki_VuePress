(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{489:function(e,t,r){"use strict";r.r(t);var a=r(23),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"platformio-搭配-cubemx-食用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#platformio-搭配-cubemx-食用"}},[e._v("#")]),e._v(" PlatformIO 搭配 CubeMX 食用")]),e._v(" "),r("h2",{attrs:{id:"背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),r("p",[e._v("在 "),r("a",{attrs:{href:"https://vuepress.wiki-power.com/post/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91/PlatformIO%E2%80%94%E4%B8%80%E7%AB%99%E5%BC%8F%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7.html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("上一篇文章")]),r("OutboundLink")],1),e._v(" 中，我们可以看到，PlatformIO 用起来比 Keil 优雅多了。"),r("br"),e._v("\n众所周知，STM32 打开方式中，HAL 库比标准库更方便易用（配合神器 CubeMX），但 PlatformIO 官方对 CubeMX 的兼容不是特别完美（需通过 Python 中间件来进行代码转换）")]),e._v(" "),r("p",[e._v("在这篇文章中，我将介绍一种独特的方法，让 PlatformIO 配合 CubeMX 食用起来更加美味。")]),e._v(" "),r("h2",{attrs:{id:"初始化项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[e._v("#")]),e._v(" 初始化项目")]),e._v(" "),r("p",[e._v("太长不看：我把以下步骤创建的项目文件夹放在 "),r("a",{attrs:{href:"https://github.com/linyuxuanlin/Template_of_PlatformIO_with_CubeMX",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("这个仓库")]),r("OutboundLink")],1),e._v("，直接克隆即可。")]),e._v(" "),r("h3",{attrs:{id:"cubemx-的初始化操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cubemx-的初始化操作"}},[e._v("#")]),e._v(" CubeMX 的初始化操作")]),e._v(" "),r("ol",[r("li",[e._v("新建项目")]),e._v(" "),r("li",[e._v("选择 MCU 型号")]),e._v(" "),r("li",[e._v("配置 Pinout & Configuration\n"),r("ol",[r("li",[e._v("配置 RCC（选外部 / 内部时钟，视情况可略）")]),e._v(" "),r("li",[e._v("配置 SYS（将 DEBUG 选项由 "),r("code",[e._v("No Debug")]),e._v(" 修改为 "),r("code",[e._v("Serial Wire")]),e._v("）")])])]),e._v(" "),r("li",[e._v("配置 Clock Configuration")]),e._v(" "),r("li",[e._v("配置 Project Manager\n"),r("ol",[r("li",[e._v("Project 页面\n"),r("ol",[r("li",[e._v("填写项目名称 （Project Name） e.g. "),r("code",[e._v("Template_of_PlatformIO_with_CubeMX")])]),e._v(" "),r("li",[e._v("修改项目路径 （Project Location） e.g. "),r("code",[e._v("D:/Desktop")])]),e._v(" "),r("li",[e._v("将工具链（Toolchain / IDE）修改为 "),r("code",[e._v("Other Toolchains")])])])]),e._v(" "),r("li",[e._v("Code Generator 页面\n"),r("ol",[r("li",[e._v("将软件包选项（STM32Cube Firmware Library Package）选择为 "),r("code",[e._v("Copy only the necessary library files")])]),e._v(" "),r("li",[e._v("在文件生成选项（Generated files）勾选 "),r("code",[e._v("Generate peripheral initialization as a pair of '.c/.h' files per peripheral")])])])])])])]),e._v(" "),r("p",[e._v("终于配置完成了，我们点击右上角 "),r("code",[e._v("Generate Code")]),e._v(" 生成代码吧。")]),e._v(" "),r("h3",{attrs:{id:"platformio-的初始化操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#platformio-的初始化操作"}},[e._v("#")]),e._v(" PlatformIO 的初始化操作")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("打开 PlatformIO 的主页")])]),e._v(" "),r("li",[r("p",[e._v("点击 "),r("code",[e._v("New Project")]),e._v(" 新建工程")]),e._v(" "),r("ol",[r("li",[e._v("填写工程的名字。注意：一定要与 CubeMX 中配置的相同！（e.g. "),r("code",[e._v("Template_of_PlatformIO_with_CubeMX")]),e._v("）")]),e._v(" "),r("li",[e._v("选择板子 / MCU 型号。这儿可以直接选择 MCU 的型号（e.g. STM32F103C8），也可以直接选择版型（e.g. BluePill F103C8）。注意：一定要与 CubeMX 中配置的相同！")]),e._v(" "),r("li",[e._v("代码框架 "),r("code",[e._v("Framework")]),e._v(" 选择 "),r("code",[e._v("STM32Cube")])]),e._v(" "),r("li",[e._v("将路径 "),r("code",[e._v("Location")]),e._v(" 下 "),r("code",[e._v("Use default location")]),e._v(" 取消掉，我们自定义路径。注意：一定要与 CubeMX 中配置的相同！（e.g. "),r("code",[e._v("D:/Desktop")]),e._v("）")])])]),e._v(" "),r("li",[r("p",[e._v("打开项目中 "),r("code",[e._v("platformio.ini")]),e._v(" 文件，添加如下几行：")]),e._v(" "),r("div",{staticClass:"language-ini extra-class"},[r("pre",{pre:!0,attrs:{class:"language-ini"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[platformio]")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("include_dir")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("Inc")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[e._v("src_dir")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v("Src")]),e._v("\n")])])]),r("p",[e._v("这里是因为 PlatformIO 与 CubeMX 默认生成的框架文件夹不一样，为了兼容性，我们顺从 CubeMX.")])]),e._v(" "),r("li",[r("p",[e._v("可以将项目中的 "),r("code",[e._v("include")]),e._v(" 文件夹删了。而因为 Windows 文件命名不区分大小写，所以 "),r("code",[e._v("src")]),e._v(" 文件夹顺理成章变为 "),r("code",[e._v("Src")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"尽情享用吧"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尽情享用吧"}},[e._v("#")]),e._v(" 尽情享用吧！")]),e._v(" "),r("p",[e._v("项目中， "),r("code",[e._v(".c")]),e._v(" 存放于 "),r("code",[e._v("Src")]),e._v(" 文件夹中，"),r("code",[e._v(".h")]),e._v(" 在 "),r("code",[e._v("Inc")]),e._v(" 中。"),r("br"),e._v("\n只要在 "),r("code",[e._v("/* USER CODE BEGIN */")]),e._v(" 与 "),r("code",[e._v("/* USER CODE END */")]),e._v(" 之间的代码，后续从 CubeMX 生成的过程中，都将得以保留，不会被覆盖掉。")]),e._v(" "),r("p",[e._v("PlatformIO 可以用快捷键 "),r("code",[e._v("Ctrl + Alt + B")]),e._v(" 编译，用 "),r("code",[e._v("Ctrl + Alt + U")]),e._v(" 编译并上传，按 "),r("code",[e._v("F5")]),e._v(" 开启调试。")]),e._v(" "),r("p",[e._v("接下来的探索，就是 HAL 库的学习了。未完待续 ~")]),e._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[e._v("#")]),e._v(" 参考与致谢")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.strongerhuang.com/STM32Cube/STM32CubeMX/STM32CubeMX%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B03_%E5%88%9B%E5%BB%BA%E5%B9%B6%E7%94%9F%E6%88%90%E4%BB%A3%E7%A0%81%E5%B7%A5%E7%A8%8B.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("STM32CubeMX 系列教程 03_创建并生成代码工程"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.strongerhuang.com/STM32Cube/STM32CubeMX/STM32CubeMX%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B06_Project%20Manager%E5%B7%A5%E7%A8%8B%E7%AE%A1%E7%90%86%E5%99%A8%E8%AF%A6%E7%BB%86%E8%AF%B4%E6%98%8E.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("STM32CubeMX 系列教程 06_Project Manager 工程管理器详细说明"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/49cfa03d6164",target:"_blank",rel:"noopener noreferrer"}},[e._v("用 VScode 作为 stm32 开发平台（platformIO）"),r("OutboundLink")],1)])]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("blockquote",[r("p",[e._v("文章作者："),r("strong",[e._v("Power Lin")]),r("br"),e._v("\n原文地址："),r("a",{attrs:{href:"https://vuepress.wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.wiki-power.com"),r("OutboundLink")],1),r("br"),e._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);