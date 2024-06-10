"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[2633],{9047:(e,n,t)=>{t.d(n,{Z:()=>B});var o=t(7294),i=t(5893);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=o.Children.toArray(e),t=n.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),l=t?.props.children;return{mdxAdmonitionTitle:l,rest:s.length>0?(0,i.jsx)(i.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var l=t(6905),r=t(5999),a=t(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:o}=e;return(0,i.jsx)("div",{className:(0,l.Z)(a.k.common.admonition,a.k.common.admonitionType(n),c.admonition,t),children:o})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function p(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:c.admonitionContent,children:n}):null}function g(e){const{type:n,icon:t,title:o,children:s,className:l}=e;return(0,i.jsxs)(d,{type:n,className:l,children:[(0,i.jsx)(h,{title:o,icon:t}),(0,i.jsx)(p,{children:s})]})}function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,i.jsx)(u,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function m(e){return(0,i.jsx)(g,{...f,...e,className:(0,l.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function y(e){return(0,i.jsx)(g,{...j,...e,className:(0,l.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const w={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function F(e){return(0,i.jsx)(g,{...w,...e,className:(0,l.Z)("alert alert--info",e.className),children:e.children})}function b(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const A={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const N={...{note:m,tip:y,info:F,warning:function(e){return(0,i.jsx)(g,{...C,...e,className:(0,l.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(g,{...L,...e,className:(0,l.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(m,{title:"secondary",...e}),important:e=>(0,i.jsx)(F,{title:"important",...e}),success:e=>(0,i.jsx)(y,{title:"success",...e}),caution:function(e){return(0,i.jsx)(g,{...A,...e,className:(0,l.Z)("alert alert--warning",e.className),children:e.children})}}};var H=t(5108);function B(e){const n=s(e),t=(o=n.type,N[o]||(H.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),N.info));var o;return(0,i.jsx)(t,{...n})}},3414:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(7294),i=t(9965),s=t(4996),l=t(5893);const r=e=>{let{alt:n,sources:t,style:r}=e;const[a,c]=(0,o.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,o.useEffect)((()=>(a?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[a]);return(0,l.jsx)("div",{className:"zoomable-image "+(a?"fullscreen":""),onClick:()=>{c(!a)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,l.jsx)(i.Z,{className:"zoomable-image-inner",alt:n,sources:{light:(0,s.Z)(t.light),dark:(0,s.Z)(t.dark)}})})}},8771:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>p,assets:()=>h,chCodeConfig:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});t(7294);var o=t(5893),i=t(1151),s=t(9794),l=(t(9965),t(4996),t(3414)),r=t(9047);const a={},c="\ud83d\udce6 Install Langflow",d={id:"getting-started/install-langflow",title:"\ud83d\udce6 Install Langflow",description:"Langflow requires Python version 3.10 or greater.",source:"@site/docs/getting-started/install-langflow.mdx",sourceDirName:"getting-started",slug:"/getting-started/install-langflow",permalink:"/getting-started/install-langflow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83d\udc4b Welcome to Langflow",permalink:"/"},next:{title:"\u26a1\ufe0f Quickstart",permalink:"/getting-started/quickstart"}},h={},p={annotations:s.ds,Code:s.EK},g={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},u=[{value:"Install Langflow pre-release",id:"install-langflow-pre-release",level:2},{value:"Having a problem?",id:"having-a-problem",level:2},{value:"\u26d3\ufe0f Run Langflow",id:"\ufe0f-run-langflow",level:2},{value:"HuggingFace Spaces",id:"huggingface-spaces",level:2}];function f(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",code:"code",h2:"h2",ol:"ol",li:"li"},(0,i.ah)(),e.components);return p||x("CH",!1),p.Code||x("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n","\n",(0,o.jsx)(n.h1,{id:"-install-langflow",children:"\ud83d\udce6 Install Langflow"}),"\n",(0,o.jsx)(r.Z,{type:"info",children:(0,o.jsxs)(n.p,{children:["Langflow ",(0,o.jsx)(n.strong,{children:"requires"})," Python version 3.10 or greater."]})}),"\n",(0,o.jsxs)(n.p,{children:["Langflow ",(0,o.jsx)(n.strong,{children:"requires"})," ",(0,o.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python >=3.10"})," and ",(0,o.jsx)(n.a,{href:"https://pypi.org/project/pip/",children:"pip"})," or ",(0,o.jsx)(n.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})," to be installed on your system."]}),"\n",(0,o.jsx)(n.p,{children:"Install Langflow with pip:"}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"-U",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"Install Langflow with pipx:"}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10 --fetch-missing-python",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["Pipx can fetch the missing Python version for you with ",(0,o.jsx)(n.code,{children:"--fetch-missing-python"}),", but you can also install the Python version manually."]}),"\n",(0,o.jsx)(n.h2,{id:"install-langflow-pre-release",children:"Install Langflow pre-release"}),"\n",(0,o.jsx)(n.p,{children:"To install a pre-release version of Langflow:"}),"\n",(0,o.jsx)(n.p,{children:"pip:"}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"pip install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--pre --force-reinstall",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.p,{children:"pipx:"}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"pipx ",props:{style:{color:"#FFA657"}}},{content:"install langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--python ",props:{style:{color:"#79C0FF"}}},{content:"python3.",props:{style:{color:"#A5D6FF"}}},{content:"10 --fetch-missing-python --pip-args=",props:{style:{color:"#79C0FF"}}},{content:'"--pre --force-reinstall"',props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"--force-reinstall"})," to ensure you have the latest version of Langflow and its dependencies."]}),"\n",(0,o.jsx)(n.h2,{id:"having-a-problem",children:"Having a problem?"}),"\n",(0,o.jsxs)(n.p,{children:["If you encounter a problem, see ",(0,o.jsx)(n.a,{href:"/migration/possible-installation-issues",children:"Common Installation Issues"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To get help in the Langflow CLI:"}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow ",props:{style:{color:"#A5D6FF"}}},{content:"--help",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsx)(n.h2,{id:"\ufe0f-run-langflow",children:"\u26d3\ufe0f Run Langflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"To run Langflow, enter the following command."}),"\n"]}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langflow run",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Confirm that a local Langflow instance starts by visiting ",(0,o.jsx)(n.code,{children:"http://127.0.0.1:7860"})," in a Chromium-based browser."]}),"\n"]}),"\n",(0,o.jsx)(p.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"Welcome to \u26d3 Langflow                             \u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502                                                   ",props:{style:{color:"#FFA657"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"Access http://127.0.0.1:",props:{style:{color:"#A5D6FF"}}},{content:"7860                      ",props:{style:{color:"#79C0FF"}}},{content:"\u2502",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"\u2502 ",props:{style:{color:"#FFA657"}}},{content:"Collaborate, and contribute at our GitHub Repo \ud83d\ude80 \u2502",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Continue on to the ",(0,o.jsx)(n.a,{href:"/getting-started/quickstart",children:"Quickstart"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"huggingface-spaces",children:"HuggingFace Spaces"}),"\n",(0,o.jsx)(n.p,{children:"HuggingFace provides a great alternative for running Langflow in their Spaces environment. This means you can run Langflow without any local installation required."}),"\n",(0,o.jsxs)(n.p,{children:["In a Chromium-based browser, go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/spaces/Langflow/Langflow?duplicate=true",children:"Langflow Space"})," or ",(0,o.jsx)(n.a,{href:"https://huggingface.co/spaces/Langflow/Langflow-Preview?duplicate=true",children:"Langflow v1.0 alpha Preview Space"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You'll be presented with the following screen:"}),"\n",(0,o.jsx)(l.Z,{alt:"Docusaurus themed image",sources:{light:"img/duplicate-space.png",dark:"img/duplicate-space.png"},style:{width:"80%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsxs)(n.p,{children:["Name your Space, define the visibility (Public or Private), and click on ",(0,o.jsx)(n.strong,{children:"Duplicate Space"})," to start the installation process. When installation is finished, you'll be redirected to the Space's main page to start using Langflow right away!"]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(f,e)})):f(e)};function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);