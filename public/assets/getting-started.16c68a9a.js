import{a as o,c as e}from"./index.89b4627b.js";const l="_example_wdaz8_1";var r={example:l};const s=t=>o("iframe",{className:r.example,src:"https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",title:"antd reproduction template",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),i={},p="wrapper";function a({components:t,...n}){return e(p,{...i,...n,components:t,mdxType:"MDXLayout"},e("h1",null,"Getting Started React"),e("p",null,"Ant Design React is dedicated to providing a ",e("strong",{parentName:"p"},"good development experience")," for programmers. Before starting, it is recommended to learn ",e("a",{parentName:"p",href:"https://reactjs.org"},"React")," and ",e("a",{parentName:"p",href:"http://babeljs.io/docs/learn-es2015/"},"ES2015")," first, and correctly install and configure ",e("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," v8 or above."),e("p",null,"The official guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step."),e("p",null,"Finally, if you are working in a local development environment, please refer to ",e("a",{parentName:"p",href:"/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"),' section of "Use in create-react-app".'),e("hr",null),e("h2",null,"Your First Example"),e("p",null,"Here is a simple online codesandbox demo of an Ant Design component to show the usage of Ant Design React."),e(s,{mdxType:"FirstExample"}),e("p",null,"Follow the steps below to play around with Ant Design yourself:"),e("h3",null,"1. Create a codesandbox"),e("p",null,"Visit ",e("a",{parentName:"p",href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro")," to create a codesandbox -- don't forget to press the save button as well to create a new instance."),e("h3",null,"2. Use and modify an antd component"),e("p",null,"Replace the contents of ",e("inlineCode",{parentName:"p"},"index.js")," with the following code. As you can see, there is no difference between antd's components and typical React components."),e("p",null,"If you have already set things up by following the ",e("a",{parentName:"p",href:"/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"),' section of "Use in create-react-app", replace the content of ',e("inlineCode",{parentName:"p"},"/src/index.js")," as follows:"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`import React, { useState } from 'react'
import { render } from 'react-dom'
import { DatePicker, message } from 'antd'
import 'antd/dist/antd.css'
import './index.css'

const App = () => {
  const [date, setDate] = useState(null)
  const handleChange = (value) => {
    message.info(
      \`Selected Date: \${value ? value.format('YYYY-MM-DD') : 'None'}\`
    )
    setDate(value)
  }
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
`)),e("h3",null,"3. Explore more components"),e("p",null,"You can view the list of components in the side menu of the Components page, such as the ",e("a",{parentName:"p",href:"/components/alert"},"Alert")," component. Plenty of examples are also provided in the component pages and API documentation as well."),e("p",null,'Click the "Open in Editor" icon in the first example to open an editor with source code to use out-of-the-box. Now you can import the ',e("inlineCode",{parentName:"p"},"Alert")," component into the codesandbox:"),e("pre",null,e("code",{parentName:"pre",className:"language-diff"},`- import { DatePicker, message } from 'antd';
+ import { DatePicker, message, Alert } from 'antd';
`)),e("p",null,"Now add the following jsx inside the ",e("inlineCode",{parentName:"p"},"render")," function."),e("pre",null,e("code",{parentName:"pre",className:"language-diff"},`  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 20 }}>
-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
+   <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
  </div>
`)),e("p",null,"Select a date, and you can see the effect in the preview area on the right:"),e("img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/JrXptUm1Nz/6b50edc4-3a3c-4b2a-843e-f9f0af2c4667.png",alt:"codesandbox screenshot"}),e("p",null,"OK! Now that you know the basics of using antd components, you are welcome to explore more components in the codesandbox. When reporting a bug with ant design, we also strongly recommend using codesandbox to provide a reproducible demo as well."),e("h3",null,"4. Next Steps"),e("p",null,"During actual real-world project development, you will most likely need a development workflow consisting of ",e("inlineCode",{parentName:"p"},"compile/build/deploy/lint/debug/")," deployment. You can read the following documents on the subject or use the following scaffolds and examples provided below:"),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"http://pro.ant.design/"},"Ant Design Pro")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/zuiidea/antd-admin"},"antd-admin")),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/d2-projects/d2-admin"},"d2-admin")),e("li",{parentName:"ul"},"More scaffolds at ",e("a",{parentName:"li",href:"http://scaffold.ant.design/"},"Scaffold Market"))),e("h2",null,"Test with Jest"),e("p",null,"If you use ",e("inlineCode",{parentName:"p"},"create-react-app")," follow the instructions ",e("a",{parentName:"p",href:"/docs/react/use-with-create-react-app#Test-with-Jest"},"here")," instead."),e("p",null,"Jest does not support ",e("inlineCode",{parentName:"p"},"esm")," modules, and Ant Design uses them. In order to test your Ant Design application with Jest you have to add the following to your Jest config :"),e("pre",null,e("code",{parentName:"pre",className:"language-json"},`"transform": { "^.+\\\\.(ts|tsx|js|jsx)?$": "ts-jest" }
`)),e("h2",null,"Import on Demand"),e("p",null,e("inlineCode",{parentName:"p"},"antd")," supports tree shaking of ES modules, so using ",e("inlineCode",{parentName:"p"},"import { Button } from 'antd';")," would drop js code you didn't use."),e("p",null,"If you see logs like in the screenshot below, you might still be using ",e("inlineCode",{parentName:"p"},"webpack@1.x")," or have a wrong webpack config which can't support tree shaking."),e("pre",null,e("code",{parentName:"pre"},`You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Please upgrade webpack or check the config.
`)),e("blockquote",null,e("p",{parentName:"blockquote"},e("img",{parentName:"p",src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"console warning"}))),e("h2",null,"Customize your Workflow"),e("p",null,"If you want to customize your workflow, we recommend using ",e("a",{parentName:"p",href:"http://webpack.github.io/"},"webpack")," to build and debug code. You can try out plenty of ",e("a",{parentName:"p",href:"https://github.com/enaqx/awesome-react#react-tools"},"boilerplates")," available in the React ecosystem."),e("p",null,"There are also some ",e("a",{parentName:"p",href:"http://scaffold.ant.design/"},"scaffolds")," which have already been integrated into antd, so you can try and start with one of these and even contribute."))}a.isMDXComponent=!0;var d=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));const c={};c.main=d;export{c as default};