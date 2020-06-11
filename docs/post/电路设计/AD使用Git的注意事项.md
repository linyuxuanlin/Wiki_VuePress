# AD 使用 Git 的注意事项

## .gitignore 文件

在使用 Altium Designer 时，软件会自动生成一些缓存文件（例如 `History` 文件夹），它们不但拖慢了提交速度，也污染了提交记录。这时候就要使用 `.gitignore`，用来忽略这些缓存文件。

直接下载：[**.gitignore**](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/.gitignore)

适用于 Altium Designer 的 `.gitignore` 文件包含以下内容：

```gitignore
# ============================= Projects =============================
*.DesWrk
# Altium Workspace

*.DsnWrk
# Altium Project Group

!*.LibPkg
# Altium Inegrated Library Package

*.PrjGrp
# Altium Project Group

!*.PrjMbd
# Altium Muti-board Design Project

!*.PrjPcb
# Altium PCB Project

*.PrjScr
# Altium Script Project

*.PrjPCBStructure

# ============================= Schematic =============================
*.Dot
# Altium Schematic Template

!*.MbsDoc
# Altium Multi-board Schematic

!*.Sch
# Altium Schematic Document

!*.SchDoc
# Altium Schematic Document

*.SchDot
# Altium Schematic Template

!*.SchLib
# Altium Schematic Library

# ============================= PCB =============================
!*.MbaDoc
# Altium Multi-board Assembly

!*.Pcb
# Protel PCB Document

!*.PcbDoc
# Altium PCB Document

!*.PcbLib
# Altium PCB Library

# ============================= Libraries =============================
*.CmpLib
# Altium Component Library

!*.IntLib
# Altium Compiled Library

!*.Lib
# Altium Library

*.PvLib
# Altium Pad Via Library

# ============================= CAMtastic =============================
*.Apr
# CAMtastic Aperture Data

*.Apt
# CAMtastic Aperture Data

*.Cam
# Altium CAMtastic Document

*.Drl
# CAMtastic NC Drill Binary Data

# ============================= Gerber =============================
*.G[1-30]
# CAMtastic Mid Layer 1-30 Gerber Data

# ============================= Outputs =============================
*.Drc
# Design Rule Check Report

*.Drr
# Altium NC Drill Report File

*.Net
# Altium Netlist File

*.Nsx
# Simulation Netlist Document

*.OutJob
# Altium Output Job File

*.Rep
# Report File

*.Rpt
# Report File

# ============================= Scripts =============================
*.Bas
# Altium Script Document

*.SrcDoc
# Altium Script Document

*.Tcl
# Altium Script Document

# ============================= Simulation =============================
*.Ckt
# Simulation Sub-Circuit

*.LaxAn
# Logic Analyser Analog File

*.LaxDig
# Logic Analyser Digital File

*.Mdl
# Simulation Model

*.Pld
# CUPL PLD File

*.Pwl
# Simulation Piecewise Linear Description

*.Sdf
# Altium Simulation Data File

*.Si
# CUPL Simulation Input File

*.So
# Digital Waveform File

# ============================= Folders =============================
__Previews/

History/

Project Logs for */

# ============================= Other =============================
*.BomDoc
# Bom Document

*.DBLib
# Altium Database Library File

*.DBLink
# Altium Database Link File
```

## 参考与致谢

- [.gitignore 文件配置：Altium Designer 工程文件类型](https://blog.csdn.net/u010160335/article/details/80100232)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
