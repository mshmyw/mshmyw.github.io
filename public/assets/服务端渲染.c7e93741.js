import{c as u}from"./index.1fa5d347.js";const l={},t="wrapper";function e({components:a,...o}){return u(t,{...l,...o,components:a,mdxType:"MDXLayout"},u("h1",null,"\u670D\u52A1\u7AEF\u6E32\u67D3(SSR)"),u("p",null,"\u670D\u52A1\u7AEF\u6E32\u67D3\u89E3\u51B3\u4E86\u9996\u5C4F\u52A0\u8F7D\u901F\u5EA6\u6162\u4EE5\u53CAseo\u4E0D\u53CB\u597D\u7684\u7F3A\u70B9"),u("h1",null,"\u5C0F\u7A0B\u5E8F\u8BBF\u95EE \u97F3\u9891"),u("h2",null,u("a",{parentName:"h2",href:"https://developers.weixin.qq.com/community/develop/doc/000ea26c9089f8eb70f7c67365bc00?_at=1563290103719"},"https://developers.weixin.qq.com/community/develop/doc/000ea26c9089f8eb70f7c67365bc00?_at=1563290103719")," \u5C0F\u7A0B\u5E8F\u5982\u4F55\u672C\u5730\u9009\u62E9\u97F3\u9891\u6587\u4EF6"),u("ol",null,u("li",{parentName:"ol"},"\u5C06\u672C\u5730\u6587\u4EF6\uFF08\u97F3\u9891\uFF09\u8F6C\u5230\u5FAE\u4FE1\u4F1A\u8BDD\u4E2D\uFF0C\u6BD4\u5982\u201C\u6587\u4EF6\u4F20\u8F93\u52A9\u624B\u201D"),u("li",{parentName:"ol"},"\u901A\u8FC7wx.chooseMessageFile\u63A5\u53E3\u83B7\u53D6\u672C\u5730\u6587\u4EF6\u8DEF\u5F84"),u("li",{parentName:"ol"},"\u518D\u4F7F\u7528uploadFile\u63A5\u53E3\u4E0A\u4F20\u6587\u4EF6")),u("p",null,u("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html"},"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html")),u("pre",null,u("code",{parentName:"pre"},`
chooseMessageFile: function (e) {
    var that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        var filename = res.tempFiles[0].name
        console.info(filename);
        that.setData({filename:filename});
 
 
        wx.uploadFile({
          url: app.globalData._server + "/test/object/upload",
          filePath: res.tempFiles[0].path,
          name: 'uploadFile',
          success(res) {
            //json\u5B57\u7B26\u4E32 \u9700\u7528JSON.parse \u8F6C
          }
        })
 
 
 
      }
    });
  }
`)))}e.isMDXComponent=!0;var s=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));const F={};F.main=s;export{F as default};
