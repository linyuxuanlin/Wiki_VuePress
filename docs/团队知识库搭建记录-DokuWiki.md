# 团队知识库搭建记录 - DokuWiki

## 参考与致谢

- [dokuwiki 学习（一）—— 增加页面命名空间](https://blog.csdn.net/wszll_Alex/article/details/80246721)
- [dokuwiki 学习（二）—— 新增页面（文章）](https://blog.csdn.net/wszll_Alex/article/details/80246836)
- [dokuwiki 学习（三）—— 删除页面（文章）](https://blog.csdn.net/wszll_Alex/article/details/80252098)
- [dokuwiki 学习（四）—— 移动页面（文章）](https://blog.csdn.net/wszll_Alex/article/details/80252132)

- [dokuwiki 学习（六）—— 增加媒体命名空间](https://blog.csdn.net/wszll_Alex/article/details/80252201)

对比：

- MoinMoin Wiki
- FosWiki
- xwiki
- mm-wiki
- MinDoc

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
- Indexmenu Plugin：索引目录

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

## 新增文章

1. 搜索安装插件：`Add New Page Plugin`
2. 网址后缀 id 改为 `sidebar` 访问
3. 创建页面，写入 `{{NEWPAGE}}`

## 删除文章

把文章内容删空，页面就自动删除了。没有文章的命名空间也会被自动移除

## 移动文章 / 修改名字

1. 搜索安装插件：`Move Plugin`
2. 在右侧工具栏 - `页面重命名`

## 定制

### 删除页面内的编辑按钮

`inc/html.php` 中搜索

```
return "<div class='secedit editbutton_" . $data['target'] .
                   " editbutton_" . $secid . "'>" .
       html_btn('secedit', $ID, '',
                array_merge(array('do'  => 'edit',
                                  'rev' => $INFO['lastmod'],
                                  'summary' => '['.$name.'] '), $data),
                'post', $name) . '</div>';
```

注释掉。
