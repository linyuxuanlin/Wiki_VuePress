(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{458:function(t,s,n){"use strict";n.r(s);var r=n(23),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ad-使用-git-的注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ad-使用-git-的注意事项"}},[t._v("#")]),t._v(" AD 使用 Git 的注意事项")]),t._v(" "),n("h2",{attrs:{id:"使用-git-管理项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-管理项目"}},[t._v("#")]),t._v(" 使用 Git 管理项目")]),t._v(" "),n("p",[t._v("Altium Designer 支持使用 Git/SVN 用以版本控制。如果使用 Git, 直接在项目所在路径建立 Git 仓库即可。重启 Altium Designer, 会看到文件树边上出现了版本状态：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200421100348.png",alt:""}})]),t._v(" "),n("p",[t._v("图标的含义如下：\n"),n("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200421101221.png",alt:""}})]),t._v(" "),n("p",[t._v("可以在 "),n("code",[t._v("工程（C） - 版本控制（E）")]),t._v(" 菜单直接进行 Git 操作，甚至可以直接提交 GitHub.")]),t._v(" "),n("h2",{attrs:{id:"gitignore-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-文件"}},[t._v("#")]),t._v(" .gitignore 文件")]),t._v(" "),n("p",[t._v("在使用 Altium Designer 时，软件会自动生成一些缓存文件（例如 "),n("code",[t._v("History")]),t._v(" 文件夹），它们不但拖慢了提交速度，也污染了提交记录。这时候就要使用 "),n("code",[t._v(".gitignore")]),t._v("，用来忽略这些缓存文件。")]),t._v(" "),n("p",[t._v("直接下载："),n("a",{attrs:{href:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/.gitignore",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v(".gitignore")]),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("直接将其放在 Git 仓库的根目录即可，如果显示重复，则需与原先的 "),n("code",[t._v(".gitignore")]),t._v(" 合并。")]),t._v(" "),n("p",[t._v("适用于 Altium Designer 的 "),n("code",[t._v(".gitignore")]),t._v(" 文件包含以下内容：")]),t._v(" "),n("div",{staticClass:"language-gitignore extra-class"},[n("pre",{pre:!0,attrs:{class:"language-gitignore"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Projects =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".DesWrk")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Workspace")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".DsnWrk")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Project Group")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".LibPkg")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Inegrated Library Package")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PrjGrp")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Project Group")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PrjMbd")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Muti-board Design Project")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PrjPcb")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium PCB Project")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PrjScr")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Script Project")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PrjPCBStructure")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Schematic =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Dot")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Schematic Template")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".MbsDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Multi-board Schematic")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Sch")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Schematic Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".SchDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Schematic Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".SchDot")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Schematic Template")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".SchLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Schematic Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= PCB =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".MbaDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Multi-board Assembly")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Pcb")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Protel PCB Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PcbDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium PCB Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PcbLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium PCB Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Libraries =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".CmpLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Component Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".IntLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Compiled Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Lib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".PvLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Pad Via Library")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= CAMtastic =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Apr")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CAMtastic Aperture Data")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Apt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CAMtastic Aperture Data")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Cam")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium CAMtastic Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Drl")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CAMtastic NC Drill Binary Data")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Gerber =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".G"),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("[1-30]")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CAMtastic Mid Layer 1-30 Gerber Data")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Outputs =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Drc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Design Rule Check Report")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Drr")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium NC Drill Report File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Net")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Netlist File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Nsx")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simulation Netlist Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".OutJob")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Output Job File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Rep")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Report File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Rpt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Report File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Scripts =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Bas")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Script Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".SrcDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Script Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Tcl")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Script Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Simulation =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Ckt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simulation Sub-Circuit")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".LaxAn")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logic Analyser Analog File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".LaxDig")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Logic Analyser Digital File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Mdl")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simulation Model")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Pld")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CUPL PLD File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Pwl")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Simulation Piecewise Linear Description")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Sdf")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Simulation Data File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".Si")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CUPL Simulation Input File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".So")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Digital Waveform File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Folders =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[t._v("__Previews"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[t._v("History"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[t._v("Project Logs for "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ============================= Other =============================")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".BomDoc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bom Document")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".DBLib")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Database Library File")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token entry string"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(".DBLink")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Altium Database Link File")]),t._v("\n")])])]),n("h2",{attrs:{id:"参考与致谢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/u010160335/article/details/80100232",target:"_blank",rel:"noopener noreferrer"}},[t._v(".gitignore 文件配置：Altium Designer 工程文件类型"),n("OutboundLink")],1)])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("blockquote",[n("p",[t._v("文章作者："),n("strong",[t._v("Power Lin")]),n("br"),t._v("\n原文地址："),n("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),n("OutboundLink")],1),n("br"),t._v("\n版权声明：文章采用 "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),n("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);