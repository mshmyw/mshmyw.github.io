import{c as e}from"./index.1fa5d347.js";const o={},u="wrapper";function r({components:a,...t}){return e(u,{...o,...t,components:a,mdxType:"MDXLayout"},e("h1",null,e("a",{parentName:"h1",href:"https://juejin.im/post/5c1610cae51d455c627a967e"},"\u6587\u4EF6\u4E0A\u4F20\u65B9\u5F0F")),e("h1",null,e("a",{parentName:"h1",href:"https://segmentfault.com/a/1190000015806229"},"formData")),e("pre",null,e("code",{parentName:"pre"},`function demoUpload() {
            console.log('submit');
            var myFile = document.getElementById('upload').files[0];
            var xhr = new XMLHttpRequest();
            var formData = new FormData();
            var url = 'http://hqy.qunar.com:8080/';
            // for (var key in params) {    
            //     formData.append(key, params[key]);
            // }
            formData.append('uploadFile', myFile); // \u6587\u4EF6
            formData.append('name', 'qunar');  // \u5176\u5B83\u6570\u636E
            xhr.open('POST', url, true);  //\u8FD9\u91CC\u7684url\u4E3A\u672C\u5730\u8D77\u7684\u4E00\u4E2A\u670D\u52A1\u5730\u5740
            xhr.send(formData);
`)),e("h1",null,"fetch (Json\u53C2\u6570\u683C\u5F0F)"),e("pre",null,e("code",{parentName:"pre"},`var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be \`string\` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
`)),e("h1",null,"\u6587\u4EF6\u4E0B\u8F7D"),e("h2",null,"fetch\u6A21\u62DFa\u6807\u7B7E"),e("pre",null,e("code",{parentName:"pre"},`fetch('http://somehost/somefile.zip').then(res => res.blob()).then(blob => {
    var a = document.createElement('a');
    var url = window.URL.createObjectURL(blob);
    var filename = 'myfile.zip';
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}))
`)))}r.isMDXComponent=!0;var n=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"}));const l={};l.main=n;export{l as default};
