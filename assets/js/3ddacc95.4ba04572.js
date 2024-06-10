"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5058],{3414:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(7294),i=n(9965),a=n(4996),s=n(5893);const r=t=>{let{alt:e,sources:n,style:r}=t;const[m,c]=(0,o.useState)(!1),p=t=>{"Escape"===t.key&&c(!1)};(0,o.useEffect)((()=>(m?document.addEventListener("keydown",p):document.removeEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)})),[m]);return(0,s.jsx)("div",{className:"zoomable-image "+(m?"fullscreen":""),onClick:()=>{c(!m)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,s.jsx)(i.Z,{className:"zoomable-image-inner",alt:e,sources:{light:(0,a.Z)(n.light),dark:(0,a.Z)(n.dark)}})})}},8258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});n(7294);var o=n(5893),i=n(1151),a=(n(9965),n(4996)),s=n(3414);const r={},m="Prompt Customization",c={id:"administration/prompt-customization",title:"Prompt Customization",description:"The prompt template allows users to create prompts and define variables that provide control over instructing the model.",source:"@site/docs/administration/prompt-customization.mdx",sourceDirName:"administration",slug:"/administration/prompt-customization",permalink:"/administration/prompt-customization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},p={},l=[];function d(t){const e=Object.assign({h1:"h1",p:"p",code:"code"},(0,i.ah)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"prompt-customization",children:"Prompt Customization"}),"\n",(0,o.jsx)(e.p,{children:"The prompt template allows users to create prompts and define variables that provide control over instructing the model."}),"\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,a.Z)("img/prompt_customization.png"),dark:(0,a.Z)("img/prompt_customization.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsxs)(e.p,{children:["Variables can be used to define instructions, questions, context, inputs, or examples for the model and can be created with any chosen name in curly brackets, e.g., ",(0,o.jsx)(e.code,{children:"{variable_name}"}),". They act as placeholders for parts of the text that can be easily modified."]}),"\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,a.Z)("img/prompt_customization2.png"),dark:(0,a.Z)("img/prompt_customization2.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsx)(e.p,{children:"Once inserted, these variables are immediately recognized as new fields in the prompt component. Here, you can define their values within the component itself or leave a field empty to be adjusted over the chat interface."}),"\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,a.Z)("img/prompt_customization3.png"),dark:(0,a.Z)("img/prompt_customization3.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsx)(e.p,{children:"You can also use documents or output parsers as prompt variables. By plugging them into prompt handles, they\u2019ll disable and feed that input field."}),"\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,a.Z)("img/prompt_customization4.png"),dark:(0,a.Z)("img/prompt_customization4.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}}),"\n",(0,o.jsx)(e.p,{children:"With this, users can interact with documents, webpages, or any other type of content directly from the prompt, which allows for seamless integration of external resources with the language model."}),"\n",(0,o.jsx)(e.p,{children:"If working with an interactive (chat-like) flow, remember to keep one of the input variables empty to behave as the chat input."}),"\n"," ","\n",(0,o.jsx)(s.Z,{alt:"Docusaurus themed image",sources:{light:(0,a.Z)("img/prompt_customization5.png"),dark:(0,a.Z)("img/prompt_customization5.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"}})]})}const u=function(t={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,o.jsx)(e,Object.assign({},t,{children:(0,o.jsx)(d,t)})):d(t)}},1151:(t,e,n)=>{n.d(e,{Zo:()=>r,ah:()=>a});var o=n(7294);const i=o.createContext({});function a(t){const e=o.useContext(i);return o.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const s={};function r({components:t,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof t?t({}):t||s:a(t),o.createElement(i.Provider,{value:r},e)}}}]);