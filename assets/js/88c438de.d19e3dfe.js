"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5142],{9047:(e,t,n)=>{n.d(t,{Z:()=>R});var o=n(7294),i=n(5893);function s(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=t.filter((e=>e!==n)),r=n?.props.children;return{mdxAdmonitionTitle:r,rest:s.length>0?(0,i.jsx)(i.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}var r=n(6905),a=n(5999),d=n(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(e){let{type:t,className:n,children:o}=e;return(0,i.jsx)("div",{className:(0,r.Z)(d.k.common.admonition,d.k.common.admonitionType(t),c.admonition,n),children:o})}function h(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:c.admonitionContent,children:t}):null}function p(e){const{type:t,icon:n,title:o,children:s,className:r}=e;return(0,i.jsxs)(l,{type:t,className:r,children:[(0,i.jsx)(h,{title:o,icon:n}),(0,i.jsx)(u,{children:s})]})}function m(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,i.jsx)(m,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,i.jsx)(p,{...x,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,i.jsx)(p,{...f,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,i.jsx)(p,{...w,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function T(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const k={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const I={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const D={icon:(0,i.jsx)(T,{}),title:(0,i.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const N={...{note:j,tip:y,info:b,warning:function(e){return(0,i.jsx)(p,{...k,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(p,{...I,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(j,{title:"secondary",...e}),important:e=>(0,i.jsx)(b,{title:"important",...e}),success:e=>(0,i.jsx)(y,{title:"success",...e}),caution:function(e){return(0,i.jsx)(p,{...D,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}}};var S=n(5108);function R(e){const t=s(e),n=(o=t.type,N[o]||(S.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),N.info));var o;return(0,i.jsx)(n,{...t})}},3414:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(7294),i=n(9965),s=n(4996),r=n(5893);const a=e=>{let{alt:t,sources:n,style:a}=e;const[d,c]=(0,o.useState)(!1),l=e=>{"Escape"===e.key&&c(!1)};(0,o.useEffect)((()=>(d?document.addEventListener("keydown",l):document.removeEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)})),[d]);return(0,r.jsx)("div",{className:"zoomable-image "+(d?"fullscreen":""),onClick:()=>{c(!d)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...a},children:(0,r.jsx)(i.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,s.Z)(n.light),dark:(0,s.Z)(n.dark)}})})}},6050:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>u,assets:()=>h,chCodeConfig:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>m});n(7294);var o=n(5893),i=n(1151),s=n(9794),r=n(9047),a=n(3414);const d={},c="Inputs and Outputs",l={id:"components/inputs-and-outputs",title:"Inputs and Outputs",description:"Inputs and Outputs are a category of components that are used to define where data comes in and out of your flow.",source:"@site/docs/components/inputs-and-outputs.mdx",sourceDirName:"components",slug:"/components/inputs-and-outputs",permalink:"/components/inputs-and-outputs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Chat Widget",permalink:"/administration/chat-widget"},next:{title:"Text and Record",permalink:"/components/text-and-record"}},h={},u={annotations:s.ds,Code:s.EK},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},m=[{value:"Inputs",id:"inputs",level:2},{value:"Chat Input",id:"chat-input",level:3},{value:"Text Input",id:"text-input",level:3},{value:"Outputs",id:"outputs",level:2},{value:"Chat Output",id:"chat-output",level:3},{value:"Text Output",id:"text-output",level:3},{value:"Prompts",id:"prompts",level:2},{value:"Prompt",id:"prompt",level:3},{value:"PromptTemplate",id:"prompttemplate",level:3}];function x(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",a:"a",h3:"h3",strong:"strong",ul:"ul",li:"li"},(0,i.ah)(),e.components);return u||g("CH",!1),u.Code||g("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(t.h1,{id:"inputs-and-outputs",children:"Inputs and Outputs"}),"\n",(0,o.jsx)(t.p,{children:"Inputs and Outputs are a category of components that are used to define where data comes in and out of your flow.\nThey also dynamically change the Playground and can be renamed to facilitate building and maintaining your flows."}),"\n",(0,o.jsx)(t.h2,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(t.p,{children:"Inputs are components used to define where data enters your flow. They can receive data from the user, a database, or any other source that can be converted to Text or Record."}),"\n",(0,o.jsx)(t.p,{children:"The difference between Chat Input and other Input components is the output format, the number of configurable fields, and the way they are displayed in the Playground."}),"\n",(0,o.jsxs)(t.p,{children:["Chat Input components can output ",(0,o.jsx)(t.code,{children:"Text"})," or ",(0,o.jsx)(t.code,{children:"Record"}),". When you want to pass the sender name or sender to the next component, use the ",(0,o.jsx)(t.code,{children:"Record"})," output. To pass only the message, use the ",(0,o.jsx)(t.code,{children:"Text"})," output, useful when saving the message to a database or memory system like Zep."]}),"\n",(0,o.jsxs)(t.p,{children:["You can find out more about Chat Input and other Inputs ",(0,o.jsx)(t.a,{href:"#chat-input",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"chat-input",children:"Chat Input"}),"\n",(0,o.jsx)(t.p,{children:"This component collects user input from the chat."}),"\n",(0,o.jsx)(a.Z,{alt:"Docusaurus themed image",sources:{light:"img/chat-input-expanded.png",dark:"img/chat-input-expanded.png"},style:{width:"40%",margin:"20px auto"}}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Sender Type:"})," Specifies the sender type. Defaults to ",(0,o.jsx)(t.code,{children:"User"}),". Options are ",(0,o.jsx)(t.code,{children:"Machine"})," and ",(0,o.jsx)(t.code,{children:"User"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Sender Name:"})," Specifies the name of the sender. Defaults to ",(0,o.jsx)(t.code,{children:"User"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Message:"})," Specifies the message text. It is a multiline text input."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Session ID:"})," Specifies the session ID of the chat history. If provided, the message will be saved in the Message History."]}),"\n"]}),"\n",(0,o.jsx)(r.Z,{type:"note",title:"Note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"As Record"})," is ",(0,o.jsx)(t.code,{children:"true"})," and the ",(0,o.jsx)(t.code,{children:"Message"})," is a ",(0,o.jsx)(t.code,{children:"Record"}),", the data of the\n",(0,o.jsx)(t.code,{children:"Record"})," will be updated with the ",(0,o.jsx)(t.code,{children:"Sender"}),", ",(0,o.jsx)(t.code,{children:"Sender Name"}),", and ",(0,o.jsx)(t.code,{children:"Session ID"}),"."]})})}),"\n",(0,o.jsx)(t.p,{children:"One significant capability of the Chat Input component is its ability to transform the Playground into a chat window. This feature is particularly valuable for scenarios requiring user input to initiate or influence the flow."}),"\n",(0,o.jsx)(a.Z,{alt:"Docusaurus themed image",sources:{light:"img/playground-chat.png",dark:"img/playground-chat.png"},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsx)(t.h3,{id:"text-input",children:"Text Input"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Text Input"})," component adds an ",(0,o.jsx)(t.strong,{children:"Input"})," field on the Playground. This enables you to define parameters while running and testing your flow."]}),"\n",(0,o.jsx)(a.Z,{alt:"Docusaurus themed image",sources:{light:"img/text-input-expanded.png",dark:"img/text-input-expanded.png"},style:{width:"50%",margin:"20px auto"}}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Value:"})," Specifies the text input value. This is where the user inputs text data that will be passed to the next component in the sequence. If no value is provided, it defaults to an empty string."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Record Template:"})," Specifies how a ",(0,o.jsx)(t.code,{children:"Record"})," should be converted into ",(0,o.jsx)(t.code,{children:"Text"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"Record Template"})," field is used to specify how a ",(0,o.jsx)(t.code,{children:"Record"})," should be converted into ",(0,o.jsx)(t.code,{children:"Text"}),". This is particularly useful when you want to extract specific information from a ",(0,o.jsx)(t.code,{children:"Record"})," and pass it as text to the next component in the sequence."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, if you have a ",(0,o.jsx)(t.code,{children:"Record"})," with the following structure:"]}),"\n",(0,o.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "name"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"John Doe"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "age"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:"30",props:{style:{color:"#79C0FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "email"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"johndoe@email.com"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,o.jsxs)(t.p,{children:["A template with ",(0,o.jsx)(t.code,{children:"Name: {name}, Age: {age}"})," will convert the ",(0,o.jsx)(t.code,{children:"Record"})," into a text string of ",(0,o.jsx)(t.code,{children:"Name: John Doe, Age: 30"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you pass more than one ",(0,o.jsx)(t.code,{children:"Record"}),", the text will be concatenated with a new line separator."]}),"\n",(0,o.jsx)(t.h2,{id:"outputs",children:"Outputs"}),"\n",(0,o.jsx)(t.p,{children:"Outputs are components that are used to define where data comes out of your flow. They can be used to send data to the user, to the Playground, or to define how the data will be displayed in the Playground."}),"\n",(0,o.jsx)(t.p,{children:"The Chat Output works similarly to the Chat Input but does not have a field that allows for written input. It is used as an Output definition and can be used to send data to the user."}),"\n",(0,o.jsxs)(t.p,{children:["You can find out more about it and the other Outputs ",(0,o.jsx)(t.a,{href:"#chat-output",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"chat-output",children:"Chat Output"}),"\n",(0,o.jsx)(t.p,{children:"This component sends a message to the chat."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Sender Type:"})," Specifies the sender type. Default is ",(0,o.jsx)(t.code,{children:'"Machine"'}),". Options are ",(0,o.jsx)(t.code,{children:'"Machine"'})," and ",(0,o.jsx)(t.code,{children:'"User"'}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Sender Name:"})," Specifies the sender's name. Default is ",(0,o.jsx)(t.code,{children:'"AI"'}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Session ID:"})," Specifies the session ID of the chat history. If provided, messages are saved in the Message History."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Message:"})," Specifies the text of the message."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.Z,{type:"note",title:"Note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"As Record"})," is ",(0,o.jsx)(t.code,{children:"true"})," and the ",(0,o.jsx)(t.code,{children:"Message"})," is a ",(0,o.jsx)(t.code,{children:"Record"}),", the data in the\n",(0,o.jsx)(t.code,{children:"Record"})," is updated with the ",(0,o.jsx)(t.code,{children:"Sender"}),", ",(0,o.jsx)(t.code,{children:"Sender Name"}),", and ",(0,o.jsx)(t.code,{children:"Session ID"}),"."]})})}),"\n",(0,o.jsx)(t.h3,{id:"text-output",children:"Text Output"}),"\n",(0,o.jsx)(t.p,{children:"This component displays text data to the user. It is useful when you want to show text without sending it to the chat."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Value:"})," Specifies the text data to be displayed. Defaults to an empty string."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"TextOutput"})," component provides a simple way to display text data. It allows textual data to be visible in the chat window during your interaction flow."]}),"\n",(0,o.jsx)(t.h2,{id:"prompts",children:"Prompts"}),"\n",(0,o.jsx)(t.p,{children:"A prompt is the input provided to a language model, consisting of multiple components and can be parameterized using prompt templates. A prompt template offers a reproducible method for generating prompts, enabling easy customization through input variables."}),"\n",(0,o.jsx)(t.h3,{id:"prompt",children:"Prompt"}),"\n",(0,o.jsx)(t.p,{children:"This component creates a prompt template with dynamic variables. This is useful for structuring prompts and passing dynamic data to a language model."}),"\n",(0,o.jsx)(a.Z,{alt:"Docusaurus themed image",sources:{light:"img/prompt-with-template.png",dark:"img/prompt-with-template.png"},style:{width:"50%",margin:"20px auto"}}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Parameters"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Template:"})," The template for the prompt. This field allows you to create other fields dynamically by using curly brackets ",(0,o.jsx)(t.code,{children:"{}"}),". For example, if you have a template like ",(0,o.jsx)(t.code,{children:"Hello {name}, how are you?"}),", a new field called ",(0,o.jsx)(t.code,{children:"name"})," will be created. Prompt variables can be created with any name inside curly brackets, e.g. ",(0,o.jsx)(t.code,{children:"{variable_name}"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"prompttemplate",children:"PromptTemplate"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"PromptTemplate"})," component enables users to create prompts and define variables that control how the model is instructed. Users can input a set of variables which the template uses to generate the prompt when a conversation starts."]}),"\n",(0,o.jsxs)(t.p,{children:["After defining a variable in the prompt template, it acts as its own component input. See ",(0,o.jsx)(t.a,{href:"../administration/prompt-customization",children:"Prompt Customization"})," for more details."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"template:"})," The template used to format an individual request."]}),"\n"]})]})}const j=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(x,e)})):x(e)};function g(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);