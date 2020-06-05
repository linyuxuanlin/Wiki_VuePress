# （填坑中）STM32 系统硬件电路设计

## 背景

在硬件学习的路上，随着知识的逐渐深入，越来越离不开软硬件结合的设计。基本的电路，配合单片机编程，可以更好实现项目的功能。而我发现，平时整理通用的电路模块、以方便复用设计的方法，似乎已经不适用于复杂多变的单片机系统。  
在单片机中，STM32 强大而通用。而网上大部分关于 STM32 的硬件设计教程过于零散（或深奥），故开此坑，总结学习经验，方便日后的工作。

注：因 `100nF 的陶瓷电容` 比较常见，故下文将以 `104 电容` `104` 的简称代替。

## 电源电路

STM32 需运行在 2.0V-3.6V 的电压环境下（VDD）。当 VDD 关闭时，实时时钟（RTC）与备份寄存器（Backup regosters）可从 VBAT 取电。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200223195956.png)

STM32 提供一组独立的引脚 VDDA/VSSA 给 ADC 供电，可以被单独滤波和屏蔽（不受噪音干扰），以提高转换精度。

STM32 各电源引脚需遵守以下设计规则：

- **VDD**
  - 若使用了 ADC，则需提供 2.4V-3.6V 电压
  - 若没有使用 ADC，则可以提供 2.4V-3.6V 电压
  - 总体来一个去耦电容（陶瓷 / 钽电容，标准值 10uF，最小 4.7uF）
  - 每个 VDD 引脚端都需要一个 104 电容
- **VBAT**
  - 若不使用 VBAT，则需连接至 VDD，并增加 104 电容去耦
  - VBAT 输入电压范围在 1.8V-3.6V 之间
- **VDDA/VSSA**
  - 需分别与 VDD/VSS 连接
  - 若芯片有 VREF- 引脚，则需连接至 VSSA
  - VDDA 需要两个去耦电容（104 + 1uF 陶瓷 / 钽电容），连接在 VDDA/VSSA 之间
- **VREF+**
  - 一般情况下，连接至 VDD
  - 如果使用单独的外部参考电压，则需连接 104 + 1uF 的去耦电容
  - 无论如何，VREF+ 的电压范围只能 2.4V-VDDA 之间

## 复位电路

系统复位时，除了时钟标志位 CSR 与备份域寄存器，其他的所有寄存器都会被复位。系统复位的触发条件有以下几种：

1. NRST 复位引脚低电平（外部复位）
2. 窗口看门狗计数终止（WWDG 复位）
3. 独立看门狗计数终止（IWDG 复位）
4. 软件复位（SW 复位）
5. 低功耗管理器复位
   我们可以通过查看控制 / 状态寄存器（RCC_CSR）中的复位标志，以识别复位源。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200223205021.png)

## 时钟电路

驱动系统时钟（SYSCLK），可以用到三个不同的时钟源：

- HSI 晶振时钟（内部高速时钟信号）
- HSE 晶振时钟（外部高速时钟信号）
- PLL 时钟

除此之外，STM32 还有两个二级时钟源：

### 高速外部时钟信号（HSE）

- 外部时钟源（HSE 旁路）（图 6）
  - 此模式下，需提供一个外部时钟源。需将外部时钟信号连接至 OSC_IN 引脚，同时 OSC_OUT 悬空。芯片型号对应时钟频率如下：
    - **STM32F100xx**：24 MHz
    - **STM32F101xx/STM32F102xx/STM32F103xx**：25 MHz
    - **互联型产品**：50 MHz
- 外部晶体 / 陶瓷谐振器（HSE 晶体）（图 7）

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200223212710.png)

- [AN2586: Getting started with STM32F10xxx hardware development](https://www.st.com/content/ccc/resource/technical/document/application_note/6c/a3/24/49/a5/d4/4a/db/CD00164185.pdf/files/CD00164185.pdf/jcr:content/translations/en.CD00164185.pdf)

## 电源

STM32 的电源分几种类型：

### 1. 主电源（VDD/VSS）

主电源指的是标记为 VDD1、VDD2... 的引脚。  
每个引脚必须加一个 100nF 的滤波电容，且尽量靠近引脚放置，此外需要一个 10uF 的钽电容公用。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163136.png)

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163204.png)

### 2. 后备电源（VBAT）

VBAT 引脚可用于电池供电。如果不用，可以与 VDD 连接在一起。VBAT 也需要一个 100nF 电容滤波。  
可参考以下的电源选择电路：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163337.jpg)

### 3. ADC 电源（VDDA/VSSA）

在不用到 ADC 的情况下，可将 VDD, VDDA, VREF+ 接在一起，并对地接 1uF 钽电容 + 10nF 陶瓷电容滤波。

## 复位

因为 STM32 内部有上拉电阻，所以外部只接 100nF 电容 + 按键即可：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163429.png)

如果不需要手动复位功能，也可以略去按键。

## 时钟

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605155729.png)

如上图，STM32 的时钟分以下几种：

1. **HSI**：高速内部时钟，是内部的 RC 振荡器，频率为 8MHz
2. **HSE**：高速外部时钟，可接石英 / 陶瓷谐振器，或者接外部时钟源，频率范围为 4MHz~16MHz
3. **LSI**：低速内部时钟，RC 振荡器，频率为 40kHz. 独立看门狗的时钟源只能是它，同时 它也可以作为 RTC 的时钟源
4. **LSE**：低速外部时钟，接频率为 32.768kHz 的石英晶体。给 RTC 用的时钟源
5. **PLL**：锁相环倍频输出，其时钟输入源可选择为 HSI/2, HSE 或 HSE/2. 倍频可为 2~16 倍，但是输出频率最大不得超过 72MHz

为了稳定，我们在设计的时候一般外接晶振作为时钟源。**一般选取 8MHz 晶振作为 HSE**，便于倍频（一般倍频到 72MHz）；**选取 32.768kHz 晶振作为 LSE**，给 RTC 使用便于分频。

无源晶振两端要加电容，滤除晶振波形中的高频杂波。容值可选 10 ～ 40pF.

晶振输入输出引脚之间可加一个 1M 的电阻，产生负反馈，保证放大器工作在高增益的线性区。同时还起到限流作用，防止反相器驱动过载损坏晶振。

## 启动模式配置

一般将 BOOT0 引脚串接 10K 电阻接地即可。

如果需要模式切换，也可以参照以下的设计：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200605163537.png)

启动模式详见 [**STM32 的启动模式**](https://wiki-power.com/post/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%BC%80%E5%8F%91/STM32%E7%9A%84%E5%90%AF%E5%8A%A8%E6%A8%A1%E5%BC%8F.html)

## 下载调试接口

一般我们用 SWD 接口（接线少），引出 SWDIO, SWCLK, VCC, GND 即可。  
因为 STM32 内部已经集成了上拉／下拉电阻，所以不需要在外部添加。

## 参考与致谢

- [STM32F1 系列单片机硬件设计方法](https://blog.csdn.net/Creative_Team/article/details/80006705?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-7&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-7)
- [STM32 硬件设计](https://cedar-renjun.github.io/2015/12/12/STM32-Hardware-Design/)
- [STM32 时钟系统](http://blog.chinaunix.net/uid-24219701-id-4081961.html)
- [AN2586 应用笔记-STM32F10xxx 硬件开发使用入门](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/AN2586%E5%BA%94%E7%94%A8%E7%AC%94%E8%AE%B0-STM32F10xxx%E7%A1%AC%E4%BB%B6%E5%BC%80%E5%8F%91%E4%BD%BF%E7%94%A8%E5%85%A5%E9%97%A8.pdf)
- [AN2867 应用笔记-ST 微控制器振荡器电路设计指南](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/doc/AN2867%E5%BA%94%E7%94%A8%E7%AC%94%E8%AE%B0-ST%E5%BE%AE%E6%8E%A7%E5%88%B6%E5%99%A8%E6%8C%AF%E8%8D%A1%E5%99%A8%E7%94%B5%E8%B7%AF%E8%AE%BE%E8%AE%A1%E6%8C%87%E5%8D%97.pdf)

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
