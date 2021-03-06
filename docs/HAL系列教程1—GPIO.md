# HAL 系列教程 1 — GPIO

这是 HAL 系列教程的第一篇。本教程面对的是机器人班的同学们，希望这个系列比较通俗易懂，而又不赘述过多。  
市面上 HAL 的中文教程并不多。其中，硬石的 HAL 教程写得比较不错，本系列将参考它，为大家详细展开讲解。如果你觉得过于浅薄，推荐直接阅读硬石的教程。废话不多说，我们从 GPIO 这个最基本的东西开始吧。

## GPIO 基础知识

GPIO 是什么？  
其实就是 General Purpose Input Output 的缩写，即通用输入输出。有多通用呢？咱拿出一片单片机芯片看看：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615205256.jpg)

可以看到，除了电源及功能引脚（图中有颜色的），剩下的引脚，都可以称为 GPIO.

GPIO 可以干嘛？  
看名字，Input / Output 说明它既可以输入信号，也可以输出信号。那么，输入输出的都是些什么信号？其实就是我们在数电模电里学过的数字信号和模拟信号：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615210739.jpg)

接下来，我们来看看 GPIO 的内部结构：

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200615211744.jpg)

看起来很复杂是吧。其实并没有想象中那么复杂，咱一部分一部分解构：

1. 最右边的 `I/O 引脚` ，其实就是实物芯片的引脚。上下的 `保护二极管` 在 **一定程度上** 防止外部不正常电压通过引脚烧毁芯片（不防熊孩子行为）
2. 红色虚线框内是输入功能（芯片读取外部信号）。两个带开关的上拉 / 下拉电阻，用来实现 **上拉 / 下拉输入功能**。**如果两个开关都不闭合，我们则称其为浮空输入**（上不顶天下不着地，没有参考电平）。这三种输入模式读取的都是数字量（高 / 低电平）。还有模拟输入功能，顾名思义就是直接读取引脚上的模拟量。（复用功能输入我们后面再提及）
3. 蓝色虚线框内是输出功能。输出有 4 种模式：推挽、开漏、复用推挽、复用开漏

### GPIO 模式

- **浮空输入**：既不上拉也不下拉， STM32 复位之后的默认模式
- **上拉输入**：闭合上拉电阻的开关，使参考电平永远保持在高位，当输入信号为低电平时触发
- **下拉输入**：同理，闭合下拉电阻的开关，使参考电平永远保持在低位，当输入信号为高电平时触发
- **模拟输入**：这个模式下，既不上拉也不下拉，也不经过 TTL 触发器，STM32 直接读取引脚上的模拟信号

- **开漏输出**：开漏指的是开 MOS 管的漏极（上面那只脚），这个模式仅仅用到下方的 N-MOS 管。我们知道，MOS 管是电压控的元器件，可以理解为水龙头。给 N-MOS 的栅极（左边那只脚）输入低电平时，N-MOS 就导通
