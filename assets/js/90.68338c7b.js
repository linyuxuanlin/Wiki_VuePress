(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{542:function(t,v,_){"use strict";_.r(v);var s=_(14),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"hal-系列教程-1-gpio"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hal-系列教程-1-gpio"}},[t._v("#")]),t._v(" HAL 系列教程 1 — GPIO")]),t._v(" "),_("p",[t._v("这是 HAL 系列教程的第一篇。本教程面对的是机器人班的同学们，希望这个系列比较通俗易懂，而又不赘述过多。"),_("br"),t._v("\n市面上 HAL 的中文教程并不多。其中，硬石的 HAL 教程写得比较不错，本系列将参考它，为大家详细展开讲解。如果你觉得过于浅薄，推荐直接阅读硬石的教程。废话不多说，我们从 GPIO 这个最基本的东西开始吧。")]),t._v(" "),_("h2",{attrs:{id:"gpio-基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gpio-基础知识"}},[t._v("#")]),t._v(" GPIO 基础知识")]),t._v(" "),_("p",[t._v("GPIO 是什么？"),_("br"),t._v("\n其实就是 General Purpose Input Output 的缩写，即通用输入输出。有多通用呢？咱拿出一片单片机芯片看看：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615205256.jpg",alt:""}})]),t._v(" "),_("p",[t._v("可以看到，除了电源及功能引脚（图中有颜色的），剩下的引脚，都可以称为 GPIO.")]),t._v(" "),_("p",[t._v("GPIO 可以干嘛？"),_("br"),t._v("\n看名字，Input / Output 说明它既可以输入信号，也可以输出信号。那么，输入输出的都是些什么信号？其实就是我们在数电模电里学过的数字信号和模拟信号：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615210739.jpg",alt:""}})]),t._v(" "),_("p",[t._v("接下来，我们来看看 GPIO 的内部结构：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615211744.jpg",alt:""}})]),t._v(" "),_("p",[t._v("看起来很复杂是吧。其实并没有想象中那么复杂，咱一部分一部分解构：")]),t._v(" "),_("ol",[_("li",[t._v("最右边的 "),_("code",[t._v("I/O 引脚")]),t._v(" ，其实就是实物芯片的引脚。上下的 "),_("code",[t._v("保护二极管")]),t._v(" 在 "),_("strong",[t._v("一定程度上")]),t._v(" 防止外部不正常电压通过引脚烧毁芯片（不防熊孩子行为）")]),t._v(" "),_("li",[t._v("红色虚线框内是输入功能（芯片读取外部信号）。两个带开关的上拉 / 下拉电阻，用来实现 "),_("strong",[t._v("上拉 / 下拉输入功能")]),t._v("。"),_("strong",[t._v("如果两个开关都不闭合，我们则称其为浮空输入")]),t._v("（上不顶天下不着地，没有参考电平）。这三种输入模式读取的都是数字量（高 / 低电平）。还有模拟输入功能，顾名思义就是直接读取引脚上的模拟量。（复用功能输入我们后面再提及）")]),t._v(" "),_("li",[t._v("蓝色虚线框内是输出功能。输出有 4 种模式：推挽、开漏、复用推挽、复用开漏")])]),t._v(" "),_("h3",{attrs:{id:"gpio-模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gpio-模式"}},[t._v("#")]),t._v(" GPIO 模式")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("浮空输入")]),t._v("：既不上拉也不下拉， STM32 复位之后的默认模式")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("上拉输入")]),t._v("：闭合上拉电阻的开关，使参考电平永远保持在高位，当输入信号为低电平时触发")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("下拉输入")]),t._v("：同理，闭合下拉电阻的开关，使参考电平永远保持在低位，当输入信号为高电平时触发")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("模拟输入")]),t._v("：这个模式下，既不上拉也不下拉，也不经过 TTL 触发器，STM32 直接读取引脚上的模拟信号")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("开漏输出")]),t._v("：开漏指的是开 MOS 管的漏极（上面那只脚），这个模式仅仅用到下方的 N-MOS 管。我们知道，MOS 管是电压控的元器件，可以理解为水龙头。给 N-MOS 的栅极（左边那只脚）输入低电平时，N-MOS 就导通")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);