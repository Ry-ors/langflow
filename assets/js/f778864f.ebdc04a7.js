"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6638],{9047:(n,t,e)=>{e.d(t,{Z:()=>T});var o=e(7294),i=e(5893);function a(n){const{mdxAdmonitionTitle:t,rest:e}=function(n){const t=o.Children.toArray(n),e=t.find((n=>o.isValidElement(n)&&"mdxAdmonitionTitle"===n.type)),a=t.filter((n=>n!==e)),s=e?.props.children;return{mdxAdmonitionTitle:s,rest:a.length>0?(0,i.jsx)(i.Fragment,{children:a}):null}}(n.children),a=n.title??t;return{...n,...a&&{title:a},children:e}}var s=e(6905),r=e(5999),l=e(5281);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(n){let{type:t,className:e,children:o}=n;return(0,i.jsx)("div",{className:(0,s.Z)(l.k.common.admonition,l.k.common.admonitionType(t),c.admonition,e),children:o})}function u(n){let{icon:t,title:e}=n;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:t}),e]})}function h(n){let{children:t}=n;return t?(0,i.jsx)("div",{className:c.admonitionContent,children:t}):null}function g(n){const{type:t,icon:e,title:o,children:a,className:s}=n;return(0,i.jsxs)(d,{type:t,className:s,children:[(0,i.jsx)(u,{title:o,icon:e}),(0,i.jsx)(h,{children:a})]})}function m(n){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,i.jsx)(m,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(n){return(0,i.jsx)(g,{...f,...n,className:(0,s.Z)("alert alert--secondary",n.className),children:n.children})}function x(n){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function w(n){return(0,i.jsx)(g,{...j,...n,className:(0,s.Z)("alert alert--success",n.className),children:n.children})}function v(n){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(n){return(0,i.jsx)(g,{...N,...n,className:(0,s.Z)("alert alert--info",n.className),children:n.children})}function b(n){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(n){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...n,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const L={icon:(0,i.jsx)(k,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Z={icon:(0,i.jsx)(b,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const z={...{note:p,tip:w,info:y,warning:function(n){return(0,i.jsx)(g,{...C,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})},danger:function(n){return(0,i.jsx)(g,{...L,...n,className:(0,s.Z)("alert alert--danger",n.className),children:n.children})}},...{secondary:n=>(0,i.jsx)(p,{title:"secondary",...n}),important:n=>(0,i.jsx)(y,{title:"important",...n}),success:n=>(0,i.jsx)(w,{title:"success",...n}),caution:function(n){return(0,i.jsx)(g,{...Z,...n,className:(0,s.Z)("alert alert--warning",n.className),children:n.children})}}};var I=e(5108);function T(n){const t=a(n),e=(o=t.type,z[o]||(I.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),z.info));var o;return(0,i.jsx)(e,{...t})}},3414:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(7294),i=e(9965),a=e(4996),s=e(5893);const r=n=>{let{alt:t,sources:e,style:r}=n;const[l,c]=(0,o.useState)(!1),d=n=>{"Escape"===n.key&&c(!1)};(0,o.useEffect)((()=>(l?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[l]);return(0,s.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{c(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,s.jsx)(i.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,a.Z)(e.light),dark:(0,a.Z)(e.dark)}})})}},9396:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});e(7294);var o=e(5893),i=e(1151),a=(e(9047),e(9965),e(4996),e(3414));const s={},r="Introduction to Notion in Langflow",l={id:"integrations/notion/intro",title:"Introduction to Notion in Langflow",description:"The Notion integration in Langflow enables seamless connectivity with Notion databases, pages, and users, facilitating automation and improving productivity.",source:"@site/docs/integrations/notion/intro.md",sourceDirName:"integrations/notion",slug:"/integrations/notion/intro",permalink:"/integrations/notion/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to Contribute Components?",permalink:"/contributing/contribute-component"},next:{title:"Setting up a Notion App",permalink:"/integrations/notion/setup"}},c={},d=[{value:"Download Notion Components Bundle",id:"download-notion-components-bundle",level:4},{value:"Key Features of Notion Integration in Langflow",id:"key-features-of-notion-integration-in-langflow",level:3},{value:"Potential Use Cases for Notion Integration in Langflow",id:"potential-use-cases-for-notion-integration-in-langflow",level:3},{value:"Getting Started with Notion Integration in Langflow",id:"getting-started-with-notion-integration-in-langflow",level:3}];function u(n){const t=Object.assign({h1:"h1",p:"p",h4:"h4",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a"},(0,i.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction-to-notion-in-langflow",children:"Introduction to Notion in Langflow"}),"\n",(0,o.jsx)(t.p,{children:"The Notion integration in Langflow enables seamless connectivity with Notion databases, pages, and users, facilitating automation and improving productivity."}),"\n",(0,o.jsx)(a.Z,{alt:"Notion Components in Langflow",sources:{light:"img/notion/notion_bundle.jpg",dark:"img/notion/notion_bundle.jpg"},style:{width:"100%",margin:"20px 0"}}),"\n",(0,o.jsx)(t.h4,{id:"download-notion-components-bundle",children:(0,o.jsx)("a",{target:"\\_blank",href:"json_files/Notion_Components_bundle.json",download:!0,children:"Download Notion Components Bundle"})}),"\n",(0,o.jsx)(t.h3,{id:"key-features-of-notion-integration-in-langflow",children:"Key Features of Notion Integration in Langflow"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"List Pages"}),": Retrieve a list of pages from a Notion database and access data stored in your Notion workspace."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"List Database Properties"}),": Obtain insights into the properties of a Notion database, allowing for easy understanding of its structure and metadata."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Add Page Content"}),": Programmatically add new content to a Notion page, simplifying the creation and updating of pages."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"List Users"}),": Retrieve a list of users with access to a Notion workspace, aiding in user management and collaboration."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Update Property"}),": Update the value of a specific property in a Notion page, enabling easy modification and maintenance of Notion data."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"potential-use-cases-for-notion-integration-in-langflow",children:"Potential Use Cases for Notion Integration in Langflow"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Task Automation"}),": Automate task creation in Notion using Langflow's AI capabilities. Describe the required tasks, and they will be automatically created and updated in Notion."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Context Extraction from Meetings"}),": Leverage AI to analyze meeting contexts, extract key points, and update the relevant Notion pages automatically."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Content Creation"}),": Utilize AI to generate ideas, suggest templates, and populate Notion pages with relevant data, enhancing content management efficiency."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"getting-started-with-notion-integration-in-langflow",children:"Getting Started with Notion Integration in Langflow"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Set Up Notion Integration"}),": Follow the guide ",(0,o.jsx)(t.a,{href:"./setup",children:"Setting up a Notion App"})," to set up a Notion integration in your workspace."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Configure Notion Components"}),": Provide the necessary authentication details and parameters to configure the Notion components in your Langflow flows."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Connect Components"}),": Integrate Notion components with other Langflow components to build your workflow."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Test and Refine"}),": Ensure your Langflow flow operates as intended by testing and refining it."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Deploy and Run"}),": Deploy your Langflow flow to automate Notion-related tasks and processes."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The Notion integration in Langflow offers a powerful toolset for automation and productivity enhancement. Whether managing tasks, extracting meeting insights, or creating content, Langflow and Notion provide robust solutions for streamlining workflows."})]})}const h=function(n={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),n.components);return t?(0,o.jsx)(t,Object.assign({},n,{children:(0,o.jsx)(u,n)})):u(n)}},1151:(n,t,e)=>{e.d(t,{Zo:()=>r,ah:()=>a});var o=e(7294);const i=o.createContext({});function a(n){const t=o.useContext(i);return o.useMemo((()=>"function"==typeof n?n(t):{...t,...n}),[t,n])}const s={};function r({components:n,children:t,disableParentContext:e}){let r;return r=e?"function"==typeof n?n({}):n||s:a(n),o.createElement(i.Provider,{value:r},t)}}}]);