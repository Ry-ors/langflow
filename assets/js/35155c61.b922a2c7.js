"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9946],{9047:(e,n,t)=>{t.d(n,{Z:()=>Z});var i=t(7294),s=t(5893);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),o=t?.props.children;return{mdxAdmonitionTitle:o,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var o=t(6905),l=t(5999),a=t(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,o.Z)(a.k.common.admonition,a.k.common.admonitionType(n),c.admonition,t),children:i})}function h(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function p(e){const{type:n,icon:t,title:i,children:r,className:o}=e;return(0,s.jsxs)(d,{type:n,className:o,children:[(0,s.jsx)(h,{title:i,icon:t}),(0,s.jsx)(u,{children:r})]})}function m(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,s.jsx)(m,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,s.jsx)(p,{...x,...e,className:(0,o.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function w(e){return(0,s.jsx)(p,{...j,...e,className:(0,o.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,s.jsx)(p,{...y,...e,className:(0,o.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function T(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,s.jsx)(T,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const A={...{note:f,tip:w,info:b,warning:function(e){return(0,s.jsx)(p,{...N,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(p,{...C,...e,className:(0,o.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(f,{title:"secondary",...e}),important:e=>(0,s.jsx)(b,{title:"important",...e}),success:e=>(0,s.jsx)(w,{title:"success",...e}),caution:function(e){return(0,s.jsx)(p,{...L,...e,className:(0,o.Z)("alert alert--warning",e.className),children:e.children})}}};var P=t(5108);function Z(e){const n=r(e),t=(i=n.type,A[i]||(P.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),A.info));var i;return(0,s.jsx)(t,{...n})}},3414:(e,n,t)=>{t.d(n,{Z:()=>l});var i=t(7294),s=t(9965),r=t(4996),o=t(5893);const l=e=>{let{alt:n,sources:t,style:l}=e;const[a,c]=(0,i.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,i.useEffect)((()=>(a?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[a]);return(0,o.jsx)("div",{className:"zoomable-image "+(a?"fullscreen":""),onClick:()=>{c(!a)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...l},children:(0,o.jsx)(s.Z,{className:"zoomable-image-inner",alt:n,sources:{light:(0,r.Z)(t.light),dark:(0,r.Z)(t.dark)}})})}},9728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});t(7294);var i=t(5893),s=t(1151),r=(t(9965),t(4996),t(3414)),o=t(9047);const l={},a="\u26a1\ufe0f Quickstart",c={id:"getting-started/quickstart",title:"\u26a1\ufe0f Quickstart",description:"This guide demonstrates how to build a basic prompt flow and modify that prompt for different outcomes.",source:"@site/docs/getting-started/quickstart.mdx",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/getting-started/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83d\udce6 Install Langflow",permalink:"/getting-started/install-langflow"},next:{title:"\ud83c\udfa8 Langflow Canvas",permalink:"/getting-started/canvas"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hello World - Basic Prompting",id:"hello-world---basic-prompting",level:2},{value:"Run the basic prompting flow",id:"run-the-basic-prompting-flow",level:2},{value:"Modify the prompt for a different result",id:"modify-the-prompt-for-a-different-result",level:2},{value:"Next steps",id:"next-steps",level:2}];function u(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",ol:"ol",strong:"strong",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-quickstart",children:"\u26a1\ufe0f Quickstart"}),"\n",(0,i.jsx)(n.p,{children:"This guide demonstrates how to build a basic prompt flow and modify that prompt for different outcomes."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python >=3.10"})," and ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/pip/",children:"pip"})," or ",(0,i.jsx)(n.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/getting-started/install-langflow",children:"Langflow installed and running"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://platform.openai.com",children:"OpenAI API key"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.Z,{type:"info",children:(0,i.jsxs)(n.p,{children:["Langflow v1.0 alpha is also available in HuggingFace Spaces. ",(0,i.jsx)(n.a,{href:"https://huggingface.co/spaces/Langflow/Langflow-Preview?duplicate=true",children:"Clone the space\nusing this\nlink"}),"\nto create your own Langflow workspace in minutes."]})}),"\n",(0,i.jsx)(n.h2,{id:"hello-world---basic-prompting",children:"Hello World - Basic Prompting"}),"\n",(0,i.jsx)(n.p,{children:"Let's start with a Prompt component to instruct an OpenAI Model."}),"\n",(0,i.jsx)(n.p,{children:"Prompts serve as the inputs to a large language model (LLM), acting as the interface between human instructions and computational tasks."}),"\n",(0,i.jsx)(n.p,{children:"By submitting natural language requests in a prompt to an LLM, you can obtain answers, generate text, and solve problems."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["From the Langflow dashboard, click ",(0,i.jsx)(n.strong,{children:"New Project"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"Basic Prompting"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Basic Prompting"})," flow is created."]}),"\n"]}),"\n",(0,i.jsx)(r.Z,{alt:"Docusaurus themed image",sources:{light:"img/quickstart.png",dark:"img/quickstart.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,i.jsxs)(n.p,{children:["This flow allows you to chat with the ",(0,i.jsx)(n.strong,{children:"OpenAI"})," component via a ",(0,i.jsx)(n.strong,{children:"Prompt"}),".\nExamine the ",(0,i.jsx)(n.strong,{children:"Prompt"})," component. The ",(0,i.jsx)(n.strong,{children:"Template"})," field instructs the LLM to ",(0,i.jsx)(n.code,{children:"Answer the user as if you were a pirate."}),"\nThis should be interesting..."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["To create an environment variable for the ",(0,i.jsx)(n.strong,{children:"OpenAI"})," component, in the ",(0,i.jsx)(n.strong,{children:"OpenAI API Key"})," field, click the ",(0,i.jsx)(n.strong,{children:"Globe"})," button, and then click ",(0,i.jsx)(n.strong,{children:"Add New Variable"}),".","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Variable Name"})," field, enter ",(0,i.jsx)(n.code,{children:"openai_api_key"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Value"})," field, paste your OpenAI API Key (",(0,i.jsx)(n.code,{children:"sk-..."}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"run-the-basic-prompting-flow",children:"Run the basic prompting flow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Run"})," button.\nThe ",(0,i.jsx)(n.strong,{children:"Interaction Panel"})," opens, where you can chat with your bot."]}),"\n",(0,i.jsx)(n.li,{children:"Type a message and press Enter.\nAnd... Ahoy! \ud83c\udff4\u200d\u2620\ufe0f\nThe bot responds in a piratical manner!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"modify-the-prompt-for-a-different-result",children:"Modify the prompt for a different result"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["To modify your prompt results, in the ",(0,i.jsx)(n.strong,{children:"Prompt"})," template, click the ",(0,i.jsx)(n.strong,{children:"Template"})," field.\nThe ",(0,i.jsx)(n.strong,{children:"Edit Prompt"})," window opens."]}),"\n",(0,i.jsxs)(n.li,{children:["Change ",(0,i.jsx)(n.code,{children:"Answer the user as if you were a pirate"})," to a different character, perhaps ",(0,i.jsx)(n.code,{children:"Answer the user as if you were Harold Abelson."})]}),"\n",(0,i.jsx)(n.li,{children:"Run the basic prompting flow again.\nThe response will be markedly different."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsx)(n.p,{children:"Well done! You've built your first prompt in Langflow. \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"By adding Langflow components to your flow, you can create all sorts of interesting behaviors."}),"\n",(0,i.jsx)(n.p,{children:"Here are a couple of examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/starter-projects/memory-chatbot",children:"Memory chatbot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/starter-projects/blog-writer",children:"Blog writer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/starter-projects/document-qa",children:"Document QA"})}),"\n"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},1151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>r});var i=t(7294);const s=i.createContext({});function r(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:r(e),i.createElement(s.Provider,{value:l},n)}}}]);