---
title: "Upload"
date: 2019-11-29T23:23:37+08:00
draft: false
categories: ["upload"]
series: ["upload"]
---

# [文件上传方式](https://juejin.im/post/5c1610cae51d455c627a967e)

# [formData](https://segmentfault.com/a/1190000015806229)

```
function demoUpload() {
            console.log('submit');
            var myFile = document.getElementById('upload').files[0];
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            var url = 'http://hqy.qunar.com:8080/';
            // for (var key in params) {    
            //     formData.append(key, params[key]);
            // }
            formData.append('uploadFile', myFile); // 文件
            formData.append('name', 'qunar');  // 其它数据
            xhr.open('POST', url, true);  //这里的url为本地起的一个服务地址
            xhr.send(formData);
```

# fetch (Json参数格式)

```
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```



# 文件下载

## fetch模拟a标签

```
fetch('http://somehost/somefile.zip').then(res => res.blob()).then(blob => {
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    var filename = 'myfile.zip';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}))
```