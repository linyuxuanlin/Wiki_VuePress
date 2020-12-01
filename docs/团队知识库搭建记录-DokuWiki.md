# 团队知识库搭建记录 - DokuWiki

## 参考与致谢

- []()

<br />

<br />

> 文章作者：**Power Lin**
>
> 原文地址：<https://wiki-power.com>  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

## 拓展

- discussion plugin
- Markdowku
- MathJax plugin
- Pagelist Plugin
- simplenavi plugin
- Wrap Plugin

模板

- vector template

## 命名空间与文章

DokuWiki 的文章数据在 `dokuwiki/data/pages` 目录下。命名空间相当于文件夹，`.txt` 文件相当于单篇文章。

中文目录不能正常显示的解决方法：

1. 进入 `DokuWiki` 目录下的 `/inc` 文件夹，打开 `pageutils.php` 文件，将如下两行注释：

   ```
   // $file = urlencode($file);
   // $file = str_replace('%2F','/',$file);
   ```

2. 将如下一行代码注释，并添加另外一行：

   ```
   // return urldecode($file);
   return $file;
   ```
