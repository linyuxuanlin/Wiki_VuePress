# Ubuntu 配置笔记

【施工中】

## 安装系统

参考 https://www.bilibili.com/read/cv2480151/

1. 用 PE 盘清除原有 Windows 系统
2. 下载 .iso 镜像文件
3. 用 UltralISO 烧进新 U 盘
4. 进 BIOS 并安装 Ubuntu

## 安装软件

第三方软件不能安装的问题：https://linux.cn/article-12183-1.html

1. Chrome
2. VS Code
3. Qv2ray（https://qv2ray.net/）
4. Git
   - `$ sudo apt install git`
   - `$ git config --global user.name "John Doe"`
   - `$ git config --global user.email johndoe@example.com`

## 技巧

### 命令

注： `<xx>` 表示必须， `(xx)` 表示可选

- cd
  - 切换工作目录
  - `$ cd <目录路径>`
- pwd
  - 查看当前绝对路径
  - `$ pwd`
- mkdir
  - 创建目录
  - `$ mkdir （选项） <目录名称>`
- ls
  - 列出目录下的内容
  - `$ ls （选项） （目录名称）`
- touch
  - 改变文件 / 目录时间
  - `$ touch （选项） <文件名称>`
- mv
  - 剪切
  - `$ mv （选项） （源文件/目录） <目的地文件/目录>`
- cp
  - 复制
  - `$ cp （选项） （源文件名/目录名） <目的地文件名/目录名>`
- rm
  - 删除
  - `$ rm （选项） <文件名/目录名>`

### 快捷键

- 终端：`Ctrl` `Alt` `T`
- 显示隐藏文件：`Ctrl` `H`

## ROS

### 安装

编译器：

- `$ sudo apt-get install g++`
- `$ sudo apt-get install python`

1. 添加软件源：
   - $ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
2. 添加密钥：
   - `$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654`
3. 安装 ROS：
   - `$ sudo apt update`
   - `$ sudo apt install ros-noetic-desktop-full`
4. 初始化 rosdep
   - `$ sudo apt-get install python3-rosdep`
   - `$ sudo rosdep init`
   - `$ rosdep update`
5. 设置环境变量
   - `$ echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc`
   - `$ source ~/.bashrc`
6. 安装 rosinstall
   - `$ sudo apt install python3-rosinstall python3-rosinstall-generator python3-wstool build-essential`

## 卸载

步骤：

- `sudo apt-get autoremove --purge ros-*`
- `sudo apt-get autoremove`
- 检查～/.bashrc 　以及／opt / 目录是否有 ros 文件夹存在

## 参考与致谢

- []()

> 文章作者：**Power Lin**  
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。
