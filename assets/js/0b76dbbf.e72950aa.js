"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9429],{9668:(e,t,o)=>{o.r(t),o.d(t,{CH:()=>h,assets:()=>i,chCodeConfig:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>l});o(7294);var n=o(5893),s=o(1151),r=o(9794);const c={},d="Text and Record",a={id:"components/text-and-record",title:"Text and Record",description:"In Langflow 1.0, we added two main input and output types: Text and Record.",source:"@site/docs/components/text-and-record.mdx",sourceDirName:"components",slug:"/components/text-and-record",permalink:"/components/text-and-record",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Inputs and Outputs",permalink:"/components/inputs-and-outputs"},next:{title:"Data",permalink:"/components/data"}},i={},l=[{value:"Records To Text",id:"records-to-text",level:2},{value:"Create Record",id:"create-record",level:2},{value:"Documents To Records",id:"documents-to-records",level:2},{value:"Why is this useful?",id:"why-is-this-useful",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],h={annotations:r.ds,Code:r.EK,InlineCode:r.ZM},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"};function u(e){const t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,s.ah)(),e.components);return h||m("CH",!1),h.Code||m("CH.Code",!0),h.InlineCode||m("CH.InlineCode",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,n.jsx)(t.h1,{id:"text-and-record",children:"Text and Record"}),"\n",(0,n.jsxs)(t.p,{children:["In Langflow 1.0, we added two main input and output types: ",(0,n.jsx)(t.code,{children:"Text"})," and ",(0,n.jsx)(t.code,{children:"Record"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Text"})," is a simple string input and output type, while ",(0,n.jsx)(t.code,{children:"Record"})," is a structure very similar to a dictionary in Python. It is a key-value pair data structure."]}),"\n",(0,n.jsx)(t.p,{children:"We've created a few components to help you work with these types. Let's see how a few of them work."}),"\n",(0,n.jsx)(t.h2,{id:"records-to-text",children:"Records To Text"}),"\n",(0,n.jsxs)(t.p,{children:["This is a component that takes in Records and outputs a ",(0,n.jsx)(t.code,{children:"Text"}),". It does this using a template string and concatenating the values of the ",(0,n.jsx)(t.code,{children:"Record"}),", one per line."]}),"\n",(0,n.jsx)(t.p,{children:"If we have the following Records:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "sender_name"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Alice"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "message"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hello!"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"{",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "sender_name"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"John"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:'  "message"',props:{style:{color:"#7EE787"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"Hi!"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}",props:{style:{color:"#C9D1D9"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,n.jsxs)(t.p,{children:["And the template string is: ",(0,n.jsx)(h.InlineCode,{codeConfig:p,code:{lines:[{tokens:[{content:"{sender_name}: {message}",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"{sender_name}: {message}"})]}),"\n",(0,n.jsx)(t.p,{children:"The output is:"}),"\n",(0,n.jsx)(h.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Alice: Hello!",props:{}}]},{tokens:[{content:"John: Hi!",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,n.jsx)(t.h2,{id:"create-record",children:"Create Record"}),"\n",(0,n.jsxs)(t.p,{children:["This component allows you to create a ",(0,n.jsx)(t.code,{children:"Record"})," from a number of inputs. You can add as many key-value pairs as you want (as long as it is less than 15). Once you've picked that number you'll need to write the name of the Key and can pass ",(0,n.jsx)(t.code,{children:"Text"})," values from other components to it."]}),"\n",(0,n.jsx)(t.h2,{id:"documents-to-records",children:"Documents To Records"}),"\n",(0,n.jsxs)(t.p,{children:["This component takes in a LangChain ",(0,n.jsx)(t.code,{children:"Document"})," and outputs a ",(0,n.jsx)(t.code,{children:"Record"}),". It does this by extracting the ",(0,n.jsx)(t.code,{children:"page_content"})," and the ",(0,n.jsx)(t.code,{children:"metadata"})," from the ",(0,n.jsx)(t.code,{children:"Document"})," and adding them to the ",(0,n.jsx)(t.code,{children:"Record"})," as text and data respectively."]}),"\n",(0,n.jsx)(t.h2,{id:"why-is-this-useful",children:"Why is this useful?"}),"\n",(0,n.jsx)(t.p,{children:"The idea was to create a unified way to work with complex data in Langflow and to make it easier to work with data that is not just a simple string. This way you can create more complex workflows and use the data in more ways."}),"\n",(0,n.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,n.jsx)(t.p,{children:"We are planning to integrate an array of modalities to Langflow, such as images, audio, and video. This will allow you to create even more complex workflows and use cases. Stay tuned for more updates! \ud83d\ude80"})]})}const g=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);