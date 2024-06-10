"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4406],{3414:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(7294),r=n(9965),a=n(4996),o=n(5893);const c=e=>{let{alt:t,sources:n,style:c}=e;const[i,l]=(0,s.useState)(!1),d=e=>{"Escape"===e.key&&l(!1)};(0,s.useEffect)((()=>(i?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[i]);return(0,o.jsx)("div",{className:"zoomable-image "+(i?"fullscreen":""),onClick:()=>{l(!i)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...c},children:(0,o.jsx)(r.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,a.Z)(n.light),dark:(0,a.Z)(n.dark)}})})}},3081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});n(7294);var s=n(5893),r=n(1151),a=(n(9965),n(4996),n(3414),n(2004)),o=n.n(a);n(9047);const c={},i="Create Record",l={id:"examples/create-record",title:"Create Record",description:"In Langflow, a Record has a structure very similar to a Python dictionary. It is a key-value pair data structure.",source:"@site/docs/examples/create-record.mdx",sourceDirName:"examples",slug:"/examples/create-record",permalink:"/examples/create-record",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Combine Text",permalink:"/examples/combine-text"},next:{title:"Pass",permalink:"/examples/pass"}},d={},u=[];function m(e){const t=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"create-record",children:"Create Record"}),"\n",(0,s.jsxs)(t.p,{children:["In Langflow, a ",(0,s.jsx)(t.code,{children:"Record"})," has a structure very similar to a Python dictionary. It is a key-value pair data structure."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Create Record"})," component allows you to dynamically create a ",(0,s.jsx)(t.code,{children:"Record"})," from a specified number of inputs. You can add as many key-value pairs as you want (as long as it is less than 15 \ud83d\ude05). Once you've chosen the number of ",(0,s.jsx)(t.code,{children:"Records"}),", add keys and fill up values, or pass on values from other components to the component using the input handles."]}),"\n",(0,s.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,s.jsx)(o(),{playing:!0,controls:!0,url:"/videos/create_record.mp4"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}},1151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>a});var s=n(7294);const r=s.createContext({});function a(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:a(e),s.createElement(r.Provider,{value:c},t)}}}]);