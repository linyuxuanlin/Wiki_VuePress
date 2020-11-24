(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{616:function(t,r,a){"use strict";a.r(r);var e=a(14),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自制-cmsis-dap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自制-cmsis-dap"}},[t._v("#")]),t._v(" 自制 CMSIS-DAP")]),t._v(" "),a("p",[t._v("CMSIS DAP 是 ARM 官方推出的开源仿真器，支持所有的 Cortex - ARM 器件，支持 JTAG / SWD 接口，在最新的固件版本中，还支持单线 SWO 接口，可以直接在程序里把相应的数据通过 SWO 接口输出到调试窗口，起到类似串口调试的目的。DAP 主要有以下特点：")]),t._v(" "),a("ol",[a("li",[t._v("完全开源，没有版权限制，所以相应的价格会很便宜")]),t._v(" "),a("li",[t._v("无须驱动，即插即用")]),t._v(" "),a("li",[t._v("在新版本的 DAP 里集成了串口，除了下载调试外还能充当 USB 转串口模块，一机两用")]),t._v(" "),a("li",[t._v("性能方面已经可以满足一般用户的需求")])]),t._v(" "),a("p",[t._v("（未完成）")]),t._v(" "),a("p",[t._v("GitHub 仓库："),a("a",{attrs:{href:"https://github.com/linyuxuanlin/DashDAP",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("linyuxuanlin/DashDAP")]),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考与致谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/x893/CMSIS-DAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("x893/CMSIS-DAP"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.keil.com/pack/doc/cmsis/DAP/html/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARM 官网的 DAP 介绍"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.stmcu.org.cn/module/forum/thread-610968-1-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("电子屌丝的的情怀：CMSIS DAP 仿真器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w5003-21405148310.36.78726a3dta5ieC&id=550828063764&scene=taobao_shop",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMSIS DAP 仿真器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/konosubakonoakua/Various_MCU_Debugger_DIY",target:"_blank",rel:"noopener noreferrer"}},[t._v("konosubakonoakua/Various_MCU_Debugger_DIY"),a("OutboundLink")],1)])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("code",[t._v("2.0 版本编辑中")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200613154907.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("CMSIS-DAP / DAP-Link 相比 J-Link / ST-Link 有以下优势：")]),t._v(" "),a("ul",[a("li",[t._v("完全开源，无法律风险")]),t._v(" "),a("li",[t._v("支持虚拟串口")]),t._v(" "),a("li",[t._v("免驱")]),t._v(" "),a("li",[t._v("DAPLink 是 CMSIS-DAP，支持 U 盘拖拽烧录 / 固件升级")])]),t._v(" "),a("h2",{attrs:{id:"硬件部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件部分"}},[t._v("#")]),t._v(" 硬件部分")]),t._v(" "),a("h3",{attrs:{id:"mcu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mcu"}},[t._v("#")]),t._v(" MCU")]),t._v(" "),a("h4",{attrs:{id:"晶振"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#晶振"}},[t._v("#")]),t._v(" 晶振")]),t._v(" "),a("p",[t._v("选用村田 8MHz 无源晶振，型号为 CSTCE8M00G53-R0，封装为 3213，电容为 15pF. 为什么选用这个呢？是因为它体积相对小，并且把两个起振电容整合进去了，硬件设计上能省很多事。至于村田晶振型号的命名方式，可以参考下表：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200612143451.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"电源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),a("h3",{attrs:{id:"功能模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能模块"}},[t._v("#")]),t._v(" 功能模块")]),t._v(" "),a("h2",{attrs:{id:"软件部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件部分"}},[t._v("#")]),t._v(" 软件部分")]),t._v(" "),a("h3",{attrs:{id:"驱动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#驱动"}},[t._v("#")]),t._v(" 驱动")]),t._v(" "),a("p",[t._v("在 Win10 / MacOS / Linux 不需要手动安装驱动；Win8 及更老的系统需要手动安装驱动。")]),t._v(" "),a("h3",{attrs:{id:"拖拽式下载-msc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拖拽式下载-msc"}},[t._v("#")]),t._v(" 拖拽式下载（MSC）")]),t._v(" "),a("p",[t._v("讲编译生成的 "),a("code",[t._v(".hex")]),t._v(" 或 "),a("code",[t._v(".bin")]),t._v(" 文件直接拖进 DAPLink 的虚拟 U 盘，即可完成烧录。如果发生错误，错误的信息就会存放在 "),a("code",[t._v("FAIL.txt")]),t._v(" 中。")]),t._v(" "),a("h3",{attrs:{id:"虚拟串口-cdc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟串口-cdc"}},[t._v("#")]),t._v(" 虚拟串口（CDC）")]),t._v(" "),a("p",[t._v("CDC 虚拟串口功能具备一般的串口功能，允许双向通信，允许发送中断命令来重置目标板。")]),t._v(" "),a("h2",{attrs:{id:"参考与致谢-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢-2"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/zhouml_msn/article/details/105298776",target:"_blank",rel:"noopener noreferrer"}},[t._v("JLink、STLink、DAPLink、CMSIS DAP 使用区别"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jixin.pro/bbs/topic/4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("技新 · DAPLink 仿真器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wuxx/nanoDAP",target:"_blank",rel:"noopener noreferrer"}},[t._v("wuxx / nanoDAP"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/LGG001/DAPLink-Brochure",target:"_blank",rel:"noopener noreferrer"}},[t._v("LGG001 / DAPLink-Brochure"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("文章作者："),a("strong",[t._v("Power Lin")]),a("br"),t._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),t._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);r.default=n.exports}}]);