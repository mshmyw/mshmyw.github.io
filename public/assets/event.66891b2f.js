import{c as u}from"./index.1fa5d347.js";const n={},l="wrapper";function e({components:t,...F}){return u(l,{...n,...F,components:t,mdxType:"MDXLayout"},u("h1",null,"\u4E8B\u4EF6\u59D4\u6258 \u4EE3\u7406  ",u("a",{parentName:"h1",href:"https://segmentfault.com/a/1190000018140493"},"\u5192\u6CE1")),u("h2",null,"\u6807\u51C6\u4E8B\u4EF6\u6D41"),u("p",null,`1\u3001\u6355\u83B7\u9636\u6BB5 \uFF08\u5148\u4ECE\u6700\u5916\u5C42\u5411\u5185\u67E5\u627E\uFF09
2\u3001\u76EE\u6807\u9636\u6BB5\uFF08\u627E\u5230\u4E8B\u4EF6\u5143\uFF08\u5F53\u524D\u70B9\u51FB\u7684dom\uFF09\uFF09
3\u3001\u5192\u6CE1\u9636\u6BB5\uFF08\u5411\u4E0A\u5192\u6CE1\u4F20\u9012\u4E8B\u4EF6\uFF09`),u("pre",null,u("code",{parentName:"pre"},`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>\u5192\u6CE1</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    div {
        padding: 30px;
    }
    
    .div1 {
        background: red
    }
    
    .div2 {
        background: blueviolet
    }
    
    .div3 {
        background: yellowgreen
    }
</style>

<body>
    <div class="div1">
        \u7236
        <div class="div2">
            \u5B50
            <div class="div3">
                \u5B59
            </div>
        </div>
    </div>
    <script>
       // javascript\u4E8B\u4EF6\u7ED1\u5B9AaddEventListener\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF0C
       //  1\u3001\u4E8B\u4EF6\u540D\u79F0\u5B57\u7B26\u4E32\u4E14\u4E0D\u5E26on
       //  2\u3001\u56DE\u8C03\u51FD\u6570
       //  3\u3001\u4E8B\u4EF6\u6D41\u65B9\u5F0F\uFF08\u9ED8\u8BA4\u4E3A\u5192\u6CE1\uFF08false\uFF09\uFF0C\u6355\u83B7\u4E3Atrue\uFF09
        window.onload = function() {
            document.querySelector('.div1').addEventListener('click', function() {
                console.log('\u70B9\u51FBdiv1')
            }, false)
            document.querySelector('.div2').addEventListener('click', function() {
                console.log('\u70B9\u51FBdiv2')
            }, false)
            document.querySelector('.div3').addEventListener('click', function() {
                console.log('\u70B9\u51FBdiv3')
            }, false)
        }
    <\/script>
</body>

</html>

\u4E0A\u8FF0\u4E3A\u5192\u6CE1\u8FC7\u7A0B\uFF0C\u70B9\u51FB\`div3\`\uFF0C\u8F93\u51FA\uFF1A
\u70B9\u51FB\u5B59
\u70B9\u51FB\u5B50
\u70B9\u51FB\u7236
`)),u("h2",null,"\u4E8B\u4EF6\u59D4\u6258"),u("p",null,`\u6211\u7406\u89E3\u7684\u4E8B\u4EF6\u59D4\u6258\u7684\u597D\u5904\u6709\u4E24\u70B9
1\u3001\u51CF\u5C11\u4E8B\u4EF6\u7ED1\u5B9A\u6B21\u6570
2\u3001\u53EF\u4EE5\u7ED9\u672A\u77E5\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\uFF08\u4F8B\u5982\u52A8\u6001\u6E32\u67D3\u7684List\uFF09`),u("p",null,"\u5176\u539F\u7406\u5C31\u662F\u5229\u7528\u4E8B\u4EF6\u5192\u6CE1\u5411\u5916\u4F20\u9012\u7684\u7279\u6027"),u("h1",null,"formdata\u53C2\u6570\u683C\u5F0F"),u("p",null,u("a",{parentName:"p",href:"https://www.jianshu.com/p/3d7817a2e461"},"https://www.jianshu.com/p/3d7817a2e461")),u("p",null,"\u4E0B\u8F7D\u6587\u4EF6\u7684\u51E0\u79CD\u65B9\u5F0F"),u("p",null,u("a",{parentName:"p",href:"https://scarletsky.github.io/2016/07/03/download-file-using-javascript/"},"https://scarletsky.github.io/2016/07/03/download-file-using-javascript/")))}e.isMDXComponent=!0;var E=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));const a={};a.main=E;export{a as default};
