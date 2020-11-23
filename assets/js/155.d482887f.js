(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{613:function(t,a,v){"use strict";v.r(a);var _=v(14),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"硬件模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬件模块"}},[t._v("#")]),t._v(" 硬件模块")]),t._v(" "),v("h2",{attrs:{id:"单片机最小系统的设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单片机最小系统的设计"}},[t._v("#")]),t._v(" 单片机最小系统的设计")]),t._v(" "),v("p",[t._v("作为无人驾驶车的心脏，单片机扮演了管理底层硬件的角色。谈及单片机的构成，我们可以将其抽象为最小系统，即能实现最基础的功能的最简化设计。以 STM32（F1 系列）单片机为例，最小系统包含以下几部分："),v("strong",[t._v("电源、复位、时钟、启动模式、下载调试")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605234144.jpg",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"电源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),v("p",[t._v("STM32 的电源有以下几种类型：")]),t._v(" "),v("h4",{attrs:{id:"主电源-vdd-vss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主电源-vdd-vss"}},[t._v("#")]),t._v(" 主电源（VDD / VSS）")]),t._v(" "),v("p",[t._v("主电源指的是标记为 VDD1、VDD2... 的引脚。"),v("br"),t._v("\n每个引脚必须加一个 100nF 的滤波电容，且尽量靠近引脚放置，此外需要一个 10uF 的钽电容公用。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163136.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163204.png",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"后备电源-vbat"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后备电源-vbat"}},[t._v("#")]),t._v(" 后备电源（VBAT）")]),t._v(" "),v("p",[t._v("VBAT 引脚可用于电池供电。如果不用，可以与 VDD 连接在一起。VBAT 也需要一个 100nF 电容滤波。"),v("br"),t._v("\n可参考以下的电源选择电路：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163337.jpg",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"adc-电源-vdda-vssa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#adc-电源-vdda-vssa"}},[t._v("#")]),t._v(" ADC 电源（VDDA / VSSA）")]),t._v(" "),v("p",[t._v("为了提高转换精度，ADC 设备可以从这里取电。一般将 VDDA 通过一个电感后， 与 VDD 相连接。")]),t._v(" "),v("p",[t._v("若不用到 ADC，可将 VDD, VDDA, VREF+（如果有的话） 接在一起，并对地接 1uF 钽电容 + 10nF 陶瓷电容滤波。")]),t._v(" "),v("h3",{attrs:{id:"复位"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复位"}},[t._v("#")]),t._v(" 复位")]),t._v(" "),v("p",[t._v("因为 STM32 内部有上拉电阻，所以外部只接 100nF 电容 + 按键即可：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163429.png",alt:""}})]),t._v(" "),v("p",[t._v("上电时，CPU 处于复位状态，此时电容充电，NRST 引脚电位持续拉低，当电容充满电后，NRST 电位变为高电平，此时 CPU 退出复位模式，进入正常运行状态。当按钮被按下时，电容被短路清空电量，按钮松开后重新充电，触发复位。")]),t._v(" "),v("p",[t._v("根据官方设计指南，电容选取 100nF 即可，以保证 NRST 低电平持续的时间满足 CPU 复位的最小脉宽要求，能正常触发复位。")]),t._v(" "),v("p",[t._v("如果不需要手动复位功能，也可以略去按键。")]),t._v(" "),v("h3",{attrs:{id:"时钟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时钟"}},[t._v("#")]),t._v(" 时钟")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605155729.png",alt:""}})]),t._v(" "),v("p",[t._v("如上图，STM32 的时钟分以下几种：")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("HSI")]),t._v("：高速内部时钟，是内部的 RC 振荡器，频率为 8MHz")]),t._v(" "),v("li",[v("strong",[t._v("HSE")]),t._v("：高速外部时钟，可接石英 / 陶瓷谐振器，或者接外部时钟源，频率范围为 4MHz~16MHz")]),t._v(" "),v("li",[v("strong",[t._v("LSI")]),t._v("：低速内部时钟，RC 振荡器，频率为 40kHz. 独立看门狗的时钟源只能是它，同时它也可以作为 RTC 的时钟源")]),t._v(" "),v("li",[v("strong",[t._v("LSE")]),t._v("：低速外部时钟，接频率为 32.768kHz 的石英晶体。LSE 是给 RTC 用的时钟源")]),t._v(" "),v("li",[v("strong",[t._v("PLL")]),t._v("：锁相环倍频输出，其时钟输入源可选择为 HSI/2, HSE 或 HSE/2. 倍频可为 2~16 倍，但是输出频率最大不得超过 72MHz")])]),t._v(" "),v("p",[t._v("从稳定性上考虑，我们在设计的时候一般使用外部晶振作为时钟源。"),v("strong",[t._v("一般选取 8MHz 晶振作为 HSE")]),t._v("，便于倍频（一般倍频到 72MHz）；"),v("strong",[t._v("选取 32.768kHz 晶振作为 LSE")]),t._v("，RTC 使用便于分频（32768 是 2 的 15 次方，可以得到精准的时间）。")]),t._v(" "),v("p",[t._v("至于晶振的选用，有源的精度高，无源的成本低，一般无源就足够了。"),v("br"),t._v("\n如果选用无源晶振，则需要在两端要加上起振电容，滤除晶振波形中的高频杂波。容值可选 10 ～ 40pF.")]),t._v(" "),v("p",[t._v("晶振输入输出引脚之间可加一个 1M 的电阻，产生负反馈，保证放大器工作在高增益的线性区。同时还起到限流作用，防止反相器驱动过载损坏晶振。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605171011.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"启动模式配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启动模式配置"}},[t._v("#")]),t._v(" 启动模式配置")]),t._v(" "),v("p",[v("strong",[t._v("一般来说，将 BOOT0 引脚下拉")]),t._v("（串接 10K 电阻再接地），"),v("strong",[t._v("BOOT1 任意")]),t._v(" 即可，如果需要模式切换，也可以参照以下的设计：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163537.png",alt:""}})]),t._v(" "),v("p",[t._v("STM32 提供了 BOOT1 与 BOOT0 引脚，可以通过设置引脚的状态，以选择上电复位后的启动模式。")]),t._v(" "),v("p",[t._v("以下为三种启动模式：")]),t._v(" "),v("h4",{attrs:{id:"_1-从主闪存存储器启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-从主闪存存储器启动"}},[t._v("#")]),t._v(" 1. 从主闪存存储器启动")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("低")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("任意")])])])]),t._v(" "),v("p",[t._v("从片上 Flash 存储器启动（就是参数为 64K / 128K / 256K 的 Flash），一般正常情况下是这样配置的。")]),t._v(" "),v("h4",{attrs:{id:"_2-从系统存储器启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-从系统存储器启动"}},[t._v("#")]),t._v(" 2. 从系统存储器启动")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("低")])])])]),t._v(" "),v("p",[t._v("使用串口 / ISP 下载程序时，需要配置这种模式。")]),t._v(" "),v("h4",{attrs:{id:"_3-从内置-sram-启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-从内置-sram-启动"}},[t._v("#")]),t._v(" 3. 从内置 SRAM 启动")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT0")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("BOOT1")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("高")])])])]),t._v(" "),v("p",[t._v("从内置 SRAM 启动，用途有两个：")]),t._v(" "),v("ul",[v("li",[t._v("用于反复下载调试时，提高效率（因为下载到 Flash 相对慢）。需要注意的是，断电程序将丢失")]),t._v(" "),v("li",[t._v("用于解除芯片的读保护功能 / 擦除 Flash 恢复出厂")])]),t._v(" "),v("h3",{attrs:{id:"下载调试接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下载调试接口"}},[t._v("#")]),t._v(" 下载调试接口")]),t._v(" "),v("p",[t._v("一般我们用 SWD 接口（接线少，方便），"),v("strong",[t._v("直接引出 SWDIO, SWCLK, VCC, GND 即可")]),t._v("。"),v("br"),t._v("\n不需要添加外部上拉／下拉电阻，因为 STM32 内部已经有集成了。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605170741.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"单片机最小系统的编程与调试"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单片机最小系统的编程与调试"}},[t._v("#")]),t._v(" 单片机最小系统的编程与调试")]),t._v(" "),v("p",[t._v("靖高写：拿到最小系统板之后，截个点灯代码，简单提一下原理就行")]),t._v(" "),v("h2",{attrs:{id:"实验效果-或仿真效果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实验效果-或仿真效果"}},[t._v("#")]),t._v(" 实验效果（或仿真效果）")]),t._v(" "),v("p",[t._v("靖高写：最好有个板子亮灯的照片，如果没有我找找")])])}),[],!1,null,null,null);a.default=s.exports}}]);