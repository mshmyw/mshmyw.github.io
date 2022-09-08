import{c as e}from"./index.1fa5d347.js";const a={},r="wrapper";function t({components:u,...n}){return e(r,{...a,...n,components:u,mdxType:"MDXLayout"},e("h2",null,"beat heart \u7684svg\u5F62\u5F0F"),e("pre",null,e("code",{parentName:"pre"},`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon footer-icon"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3.0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
`)),e("h2",null,"\u5C06svg\u8F6C\u5316\u4E3Areac\u7EC4\u4EF6"),e("p",null,"\u8F6C\u5316\u901A\u8FC7svgr\u5B8C\u6210\uFF0C\u9879\u76EE\u5730\u5740\uFF1A",e("inlineCode",{parentName:"p"},"https://github.com/smooth-code/svgr")),e("p",null,"\u7ED3\u679C:"),e("pre",null,e("code",{parentName:"pre"},`const SvgComponent = props => (
  <Svg
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
  </Svg>
)

export default SvgComponent

`)),e("h2",null,"\u52A8\u753B\u5904\u7406"),e("p",null,"\u9700\u8981\u501F\u52A9css animation\uFF0C\u5229\u7528",e("inlineCode",{parentName:"p"},"@keyframes"),"\u3002"),e("p",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Creact\u8C8C\u4F3C\u6CA1z\u76F4\u63A5\u5229\u7528css\u52A8\u753B\u7684@keyframes\uFF0C\u8FD9\u91CC\u4E3B\u8981\u501F\u52A9styled-component\u5B8C\u6210"),e("pre",null,e("code",{parentName:"pre"},`const SvgWrapper = styled.svg\`

width: 1em;

height: 1em;

display: inline-block;

animation: heartAnimate 1.33s ease-in-out infinite;

fill: #f06292;

margin: 0 0.5em 0 0.5em;


@keyframes heartAnimate {

  0%,100%{transform:scale(1);}

  10%,30%{transform:scale(0.9);}

  20%,40%,60%,80%{transform:scale(1.1);}

  50%,70%{transform:scale(1.1);

  }
`)),e("h2",null,"\u6700\u7EC8\u7EC4\u4EF6"),e("pre",null,e("code",{parentName:"pre"},`import React from 'react'
import styled from 'styled-components'

const SvgWrapper = styled.svg\`
width: 1em;
height: 1em;
display: inline-block;

animation: heartAnimate 1.33s ease-in-out infinite;
fill: #f06292;
margin: 0 0.5em 0 0.5em;

@keyframes heartAnimate {
  0%,100%{transform:scale(1);}
  10%,30%{transform:scale(0.9);}
  20%,40%,60%,80%{transform:scale(1.1);}
  50%,70%{transform:scale(1.1);
  }
\`
const SvgComponent = props => (
  <SvgWrapper
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
  </SvgWrapper>
)
export default SvgComponent
`)))}t.isMDXComponent=!0;var o=Object.freeze(Object.defineProperty({__proto__:null,default:t},Symbol.toStringTag,{value:"Module"}));const l={};l.main=o;export{l as default};
