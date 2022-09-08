import{c as u}from"./index.1fa5d347.js";const n={},o="wrapper";function F({components:e,...E}){return u(o,{...n,...E,components:e,mdxType:"MDXLayout"},u("h1",null,"JS\u539F\u578B"),u("h2",null,"\u6784\u9020\u51FD\u6570\u548C\u5BF9\u8C61"),u("pre",null,u("code",{parentName:"pre",className:"language-javascript"},`function Person() {

}
// \u867D\u7136\u5199\u5728\u6CE8\u91CA\u91CC\uFF0C\u4F46\u662F\u4F60\u8981\u6CE8\u610F\uFF1A
// prototype\u662F\u51FD\u6570\u624D\u4F1A\u6709\u7684\u5C5E\u6027
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
`)),u("h3",null,"\u51FD\u6570\u7684prototype"),u("p",null,"\u51FD\u6570\u5177\u6709prototype\u5C5E\u6027\uFF0C\u5B83\u7684\u6307\u5411\u662F\u4EC0\u4E48\u5462\uFF1F\u7B54\u6848\u662F\uFF1A"),u("p",null,"\u5B83\u6307\u5411\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u6B63\u662F\u8C03\u7528\u8BE5\u6784\u9020\u51FD\u6570\u800C\u521B\u5EFA\u7684",u("strong",{parentName:"p"},"\u5B9E\u4F8B"),"\u7684\u539F\u578B\uFF0C\u5982\u4E0B\u56FE\uFF1A"),u("p",null,u("img",{parentName:"p",src:"/Users/chuixueximen/Development/easyops-doc/201905/js-proto-dm.png",alt:"js-proto-dm"})),u("h2",null,"\u5BF9\u8C61\u7684",u("strong",{parentName:"h2"},"proto")),u("p",null,"\u6BCF\u4E00\u4E2AJavaScript\u5BF9\u8C61(\u9664\u4E86 null )\u90FD\u5177\u6709\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u53EB",u("strong",{parentName:"p"},"proto"),"\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u5982\u4E0A\u56FE\u3002"),u("h2",null,"\u539F\u578B\u7684constructor"),u("p",null,"\u6BCF\u4E2A\u539F\u578B\u90FD\u6709\u4E00\u4E2A constructor \u5C5E\u6027\u6307\u5411\u5173\u8054\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5982\u4E0A\u56FE"),u("h2",null,"\u5B9E\u4F8B\u4E0E\u539F\u578B"),u("p",null,"\u5F53\u8BFB\u53D6\u5B9E\u4F8B\u7684\u5C5E\u6027\u65F6\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5C31\u4F1A\u67E5\u627E\u4E0E\u5BF9\u8C61\u5173\u8054\u7684\u539F\u578B\u4E2D\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u8FD8\u67E5\u4E0D\u5230\uFF0C\u5C31\u53BB\u627E\u539F\u578B\u7684\u539F\u578B\uFF0C\u4E00\u76F4\u627E\u5230\u6700\u9876\u5C42\u4E3A\u6B62\u3002"),u("pre",null,u("code",{parentName:"pre",className:"language-javascript"},`function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
`)),u("p",null,"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u7ED9\u5B9E\u4F8B\u5BF9\u8C61 person \u6DFB\u52A0\u4E86 name \u5C5E\u6027\uFF0C\u5F53\u6211\u4EEC\u6253\u5370 person.name \u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u81EA\u7136\u4E3A Daisy\u3002"),u("p",null,"\u4F46\u662F\u5F53\u6211\u4EEC\u5220\u9664\u4E86 person \u7684 name \u5C5E\u6027\u65F6\uFF0C\u8BFB\u53D6 person.name\uFF0C\u4ECE person \u5BF9\u8C61\u4E2D\u627E\u4E0D\u5230 name \u5C5E\u6027\u5C31\u4F1A\u4ECE person \u7684\u539F\u578B\u4E5F\u5C31\u662F person.",u("strong",{parentName:"p"},"proto")," \uFF0C\u4E5F\u5C31\u662F Person.prototype\u4E2D\u67E5\u627E\uFF0C\u5E78\u8FD0\u7684\u662F\u6211\u4EEC\u627E\u5230\u4E86 name \u5C5E\u6027\uFF0C\u7ED3\u679C\u4E3A Kevin\u3002"),u("h2",null,"\u539F\u578B\u7684\u539F\u578B"),u("p",null,"\u4E0A\u8FF0\u5982\u679C\u8FD8\u672A\u627E\u5230\u5462\uFF1F"),u("h2",null,"\u539F\u578B\u94FE"),u("p",null,"\u90A3 Object.prototype \u7684\u539F\u578B\u5462\uFF1F"),u("p",null,"null\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6253\u5370\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`console.log(Object.prototype.__proto__ === null) // true
`)),u("h2",null,"\u7EE7\u627F\uFF1F"),u("p",null,"\u901A\u8FC7\u51FD\u6570Person.prototype\u6216\u8005\u5B9E\u4F8Bperson.",u("strong",{parentName:"p"},"proto"),"\uFF0C\u6211\u4EEC\u5EFA\u7ACB\u4E86\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u7684\u5173\u8054\uFF0C\u8FD9\u5F88\u5BB9\u6613\u8BA9\u4EBA\u8054\u60F3\u5230\u9762\u5411\u5BF9\u8C61\u7684\u7EE7\u627F\u673A\u5236\uFF0C\u800C\u4E14\u6709\u4E00\u79CD\u8BF4\u6CD5\u662F\uFF1A\u201C\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u4ECE\u539F\u578B\u2018\u7EE7\u627F\u2019\u5C5E\u6027\u201D\uFF0C\u7136\u800C\u771F\u7684\u662F\u7EE7\u627F\u5417\uFF1F"),u("p",null,"\u7EE7\u627F\u610F\u5473\u7740\u590D\u5236\u64CD\u4F5C\uFF0C\u7136\u800C JavaScript \u9ED8\u8BA4\u5E76\u4E0D\u4F1A\u590D\u5236\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u76F8\u53CD\uFF0CJavaScript \u53EA\u662F\u5728\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u521B\u5EFA\u4E00\u4E2A\u5173\u8054\uFF0C\u8FD9\u6837\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u5C31\u53EF\u4EE5\u901A\u8FC7\u59D4\u6258\u8BBF\u95EE\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u51FD\u6570\uFF0C\u6240\u4EE5\u4E0E\u5176\u53EB\u7EE7\u627F\uFF0C\u59D4\u6258\u7684\u8BF4\u6CD5\u53CD\u800C\u66F4\u51C6\u786E\u4E9B\u3002"),u("h2",null,"\u4E3A\u4EC0\u4E48\u8981\u6709\u539F\u578B\u548C\u539F\u578B\u94FE\u5462\uFF1F"),u("p",null,"\u5982\u679C\u521A\u4ECE\u9762\u5411\u5BF9\u8C61\u8FC7\u6765\uFF0C\u5176\u5B9E\u5F88\u591A\u4EBA\u5E94\u8BE5\u5F88\u61F5\u903C\uFF0C\u539F\u578B\u548C\u94FE\u5230\u5E95\u8BE5\u600E\u4E48\u7406\u89E3\u5462\uFF1F"),u("p",null,"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`function Foo() {
    this.bar = 1
    this.show = function() {
        console.log(this.bar)
    }
}

(new Foo()).show()
`)),u("p",null,"\u4E0A\u8FF0Foo\u53EF\u4EE5\u770B\u505A\u4E00\u4E2A\u7C7B\uFF0C\u5176\u5185\u90E8\u5B9A\u4E49\u4E86\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u7C7B\u53EF\u4EE5\u521B\u5EFA\u5BF9\u8C61\u3002\u4E0A\u8FF0\u5B58\u5728\u7684\u4E00\u4E2A\u95EE\u9898\u662F\uFF1A"),u("p",null,u("strong",{parentName:"p"},"\u6BCF\u5F53\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2AFoo\u5BF9\u8C61\u65F6\uFF0C",u("inlineCode",{parentName:"strong"},"this.show = function..."),"\u5C31\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u8FD9\u4E2A",u("inlineCode",{parentName:"strong"},"show"),"\u65B9\u6CD5\u5B9E\u9645\u4E0A\u662F\u7ED1\u5B9A\u5728\u5BF9\u8C61\u4E0A\u7684\uFF0C\u800C\u4E0D\u662F\u7ED1\u5B9A\u5728\u201C\u7C7B\u201D\u4E2D")),u("p",null,"\u6211\u5E0C\u671B\u5728\u521B\u5EFA\u7C7B\u7684\u65F6\u5019\u53EA\u521B\u5EFA\u4E00\u6B21",u("inlineCode",{parentName:"p"},"show"),"\u65B9\u6CD5\uFF0C\u8FD9\u65F6\u5019\u5C31\u5219\u9700\u8981\u4F7F\u7528\u539F\u578B\uFF08prototype\uFF09\u4E86"),u("pre",null,u("code",{parentName:"pre"},`function Foo() {
    this.bar = 1
}

Foo.prototype.show = function show() {
    console.log(this.bar)
}

let foo = new Foo()
foo.show()
`)),u("p",null,"\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u539F\u578B",u("inlineCode",{parentName:"p"},"prototype"),"\u662F\u7C7B",u("inlineCode",{parentName:"p"},"Foo"),"\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u800C\u6240\u6709\u7528",u("inlineCode",{parentName:"p"},"Foo"),"\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\uFF0C\u90FD\u5C06\u62E5\u6709\u8FD9\u4E2A\u5C5E\u6027\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\u53D8\u91CF\u548C\u65B9\u6CD5\u3002\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684",u("inlineCode",{parentName:"p"},"foo"),"\u5BF9\u8C61\uFF0C\u5176\u5929\u751F\u5C31\u5177\u6709",u("inlineCode",{parentName:"p"},"foo.show()"),"\u65B9\u6CD5\u3002"),u("p",null,"\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u539F\u578B",u("inlineCode",{parentName:"p"},"prototype"),"\u662F\u7C7B",u("inlineCode",{parentName:"p"},"Foo"),"\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u800C\u6240\u6709\u7528",u("inlineCode",{parentName:"p"},"Foo"),"\u7C7B\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\uFF0C\u90FD\u5C06\u62E5\u6709\u8FD9\u4E2A\u5C5E\u6027\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\u53D8\u91CF\u548C\u65B9\u6CD5\u3002\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684",u("inlineCode",{parentName:"p"},"foo"),"\u5BF9\u8C61\uFF0C\u5176\u5929\u751F\u5C31\u5177\u6709",u("inlineCode",{parentName:"p"},"foo.show()"),"\u65B9\u6CD5\u3002"),u("p",null,"\u603B\u7ED3\u4E00\u4E0B\uFF1A"),u("ol",null,u("li",{parentName:"ol"},u("inlineCode",{parentName:"li"},"prototype"),"\u662F\u4E00\u4E2A\u7C7B\u7684\u5C5E\u6027\uFF0C\u6240\u6709\u7C7B\u5BF9\u8C61\u5728\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u5C06\u4F1A\u62E5\u6709",u("inlineCode",{parentName:"li"},"prototype"),"\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5"),u("li",{parentName:"ol"},"\u4E00\u4E2A\u5BF9\u8C61\u7684",u("inlineCode",{parentName:"li"},"__proto__"),"\u5C5E\u6027\uFF0C\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\u6240\u5728\u7684\u7C7B\u7684",u("inlineCode",{parentName:"li"},"prototype"),"\u5C5E\u6027")),u("h2",null,"\u539F\u578B\u94FE\u7EE7\u627F"),u("p",null,"\u6240\u6709\u7C7B\u5BF9\u8C61\u5728\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u5C06\u4F1A\u62E5\u6709",u("inlineCode",{parentName:"p"},"prototype"),"\u4E2D\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u7279\u6027\u88AB\u7528\u6765\u5B9E\u73B0JavaScript\u4E2D\u7684\u7EE7\u627F\u673A\u5236\u3002"),u("pre",null,u("code",{parentName:"pre"},`function Father() {
    this.first_name = 'Donald'
    this.last_name = 'Trump'
}

function Son() {
    this.first_name = 'Melania'
}

Son.prototype = new Father()

let son = new Son()
console.log(\`Name: \${son.first_name} \${son.last_name}\`)
`)),u("p",null,"Son\u7C7B\u7EE7\u627F\u4E86Father\u7C7B\u7684",u("inlineCode",{parentName:"p"},"last_name"),"\u5C5E\u6027\uFF0C\u6700\u540E\u8F93\u51FA\u7684\u662F",u("inlineCode",{parentName:"p"},"Name: Melania Trump"),"\u3002"),u("p",null,"\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5BF9\u4E8E\u5BF9\u8C61son\uFF0C\u5728\u8C03\u7528",u("inlineCode",{parentName:"p"},"son.last_name"),"\u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0AJavaScript\u5F15\u64CE\u4F1A\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A"),u("ol",null,u("li",{parentName:"ol"},"\u5728\u5BF9\u8C61son\u4E2D\u5BFB\u627Elast_name"),u("li",{parentName:"ol"},"\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u5728",u("inlineCode",{parentName:"li"},"son.__proto__"),"\u4E2D\u5BFB\u627Elast_name"),u("li",{parentName:"ol"},"\u5982\u679C\u4ECD\u7136\u627E\u4E0D\u5230\uFF0C\u5219\u7EE7\u7EED\u5728",u("inlineCode",{parentName:"li"},"son.__proto__.__proto__"),"\u4E2D\u5BFB\u627Elast_name"),u("li",{parentName:"ol"},"\u4F9D\u6B21\u5BFB\u627E\uFF0C\u76F4\u5230\u627E\u5230",u("inlineCode",{parentName:"li"},"null"),"\u7ED3\u675F\u3002\u6BD4\u5982\uFF0C",u("inlineCode",{parentName:"li"},"Object.prototype"),"\u7684",u("inlineCode",{parentName:"li"},"__proto__"),"\u5C31\u662F",u("inlineCode",{parentName:"li"},"null"))),u("p",null,"JavaScript\u7684\u8FD9\u4E2A\u67E5\u627E\u7684\u673A\u5236\uFF0C\u88AB\u8FD0\u7528\u5728\u9762\u5411\u5BF9\u8C61\u7684\u7EE7\u627F\u4E2D\uFF0C\u88AB\u79F0\u4F5Cprototype\u7EE7\u627F\u94FE\u3002"),u("p",null,"\u4EE5\u4E0A\u5C31\u662F\u6700\u57FA\u7840\u7684JavaScript\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u6211\u4EEC\u5E76\u4E0D\u6DF1\u5165\u7814\u7A76\u66F4\u7EC6\u8282\u7684\u5185\u5BB9\uFF0C\u53EA\u8981\u7262\u8BB0\u4EE5\u4E0B\u51E0\u70B9\u5373\u53EF\uFF1A"),u("ol",null,u("li",{parentName:"ol"},"\u6BCF\u4E2A\u6784\u9020\u51FD\u6570(constructor)\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61(prototype)"),u("li",{parentName:"ol"},"\u5BF9\u8C61\u7684",u("inlineCode",{parentName:"li"},"__proto__"),"\u5C5E\u6027\uFF0C\u6307\u5411\u7C7B\u7684\u539F\u578B\u5BF9\u8C61",u("inlineCode",{parentName:"li"},"prototype")),u("li",{parentName:"ol"},"JavaScript\u4F7F\u7528prototype\u94FE\u5B9E\u73B0\u7EE7\u627F\u673A\u5236")),u("blockquote",null,u("p",{parentName:"blockquote"},u("a",{parentName:"p",href:"https://github.com/mqyqingfeng/Blog/issues/2"},"https://github.com/mqyqingfeng/Blog/issues/2")),u("p",{parentName:"blockquote"},u("a",{parentName:"p",href:"https://www.leavesongs.com/PENETRATION/javascript-prototype-pollution-attack.html"},"https://www.leavesongs.com/PENETRATION/javascript-prototype-pollution-attack.html"))),u("h2",null,"Promise.resolve()"),u("p",null,"Promise.resolve()\u65B9\u6CD5\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u5E76\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5904\u4E8E\u5DF2\u5B8C\u6210\u72B6\u6001\u7684 Promise \uFF0C\u5728then()\u65B9\u6CD5\u4E2D\u4F7F\u7528\u5B8C\u6210\u5904\u7406\u51FD\u6570\u624D\u80FD\u63D0\u53D6\u8BE5\u5B8C\u6210\u6001\u7684Promise\u4F20\u9012\u7684\u503C"),u("h1",null,"for ... in"),u("p",null,"\u5FAA\u73AF\u5C06\u904D\u5386\u5BF9\u8C61\u672C\u8EAB\u7684\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5BF9\u8C61\u4ECE\u5176",u("strong",{parentName:"p"},"\u6784\u9020\u51FD\u6570\u539F\u578B\u4E2D\u7EE7\u627F"),"\u7684\u5C5E\u6027"),u("h1",null,"\u5B9E\u73B0\u6DF1\u62F7\u8D1D"),u("pre",null,u("code",{parentName:"pre",className:"language-javascript"},`    const deepClone = (obj) => {
        const newObj = obj instanceof Object ? {} : [];
        for(const props in obj) {
          newObj[props] = typeof obj[props] === 'object' ? deepClone(obj[props]) : obj[props];
        }
        
        return newObj;
    }

// test data
const obj = {
    number: 1,
    string: 'abc',
    bool: true,
    undefined: undefined,
    null: null,
    symbol: Symbol('s'),
    arr: [1, 2, 3],
    date: new Date(),
    userInfo: {
        name: 'Better',
        position: 'front-end engineer',
        skill: ['React', 'Vue', 'Angular', 'Nodejs', 'mini programs']
    },
    func: function () {
        console.log('hello better');
    }
}

`)),u("p",null,"\u53E6\u4E00\u79CD\u5DE7\u5999\u7684\u65B9\u5F0F\uFF1A\u7ED3\u5408JSON.stringify() \u548CJSON.parse()"))}F.isMDXComponent=!0;var C=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const t={};t.main=C;export{t as default};
