---
title: "China Map"
date: 2020-02-07T20:24:51+08:00
draft: false
categories: [""]
series: [""]
---

# 参考

## 武汉病毒相关

1 清华：http://ncov.deepeye.tech/

2 viz: https://github.com/wuhan2020/map-viz

3 time: https://echarts.apache.org/examples/en/editor.html?c=mix-timeline-finance

4 https://app.slack.com/client/TT5U1VCPQ/CSTGKFRCH/starred_items

5 nextstrain https://nextstrain.org/docs/getting-started/introduction

6 openstreetmap https://www.openstreetmap.org/

7 https://github.com/nextstrain

8 https://www.gisaid.org/

9 https://weileizeng.github.io/OpenSourceWuhan/

10 https://github.com/2019ncovmemory/nCovMemory

11 https://github.com/BlankerL/DXY-2019-nCoV-Crawler

12 https://github.com/nextstrain/ncov

13 https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6

14 http://2019ncov.chinacdc.cn/2019-ncov/

15 https://virus-vis.now.sh/

16 https://webstack.cc/cn/index.html

17 https://github.com/WebStackPage/WebStackPage.github.io

18 https://github.com/wuhan2020/2019-nCoV-Nav

# 借助echart 

# 地图数据

github: https://github.com/apache/incubator-echarts/blob/master/map/json/china.json

## [使用](http://xukf.me/2018/06/06/Echarts-Echarts%E4%B8%AD%E5%9B%BD%E5%9C%B0%E5%9B%BE%E5%88%86%E7%9C%81%E7%9D%80%E8%89%B2/)

由于Echarts官方API推荐使用百度地图，所以`china.js`以及对应的json文件并没有在API中提供下载地址，但可以到[Echarts的GitHub](https://github.com/apache/incubator-echarts)上自行下载。~~（微软收购GitHub的第三天……）~~

中国地图需要`china.js`与*`china.json`*，如果有需要，可以将map目录下的所有文件都下载下来。其中`js`文件与`json`文件的使用方式不同：

- 直接`script`标签引入的`js`文件，引入后会自动注册地图名字和数据
- `JSON`文件，需要通过`AJAX`异步加载后手动注册

关于地图的主题也可以去官网下载js文件，引入：

```
<script type="text/javascript" src="echarts/shine.js"></script> 
```



