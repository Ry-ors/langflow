"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9985],{6187:(e,o,n)=>{n.r(o),n.d(o,{CH:()=>h,assets:()=>d,chCodeConfig:()=>g,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});n(7294);var r=n(5893),i=n(1151),c=n(9794);const s={},t="Docker",l={id:"deployment/docker",title:"Docker",description:"This guide will help you get LangFlow up and running using Docker and Docker Compose.",source:"@site/docs/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/deployment/docker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83c\udf1f RAG with Astra DB",permalink:"/tutorials/rag-with-astradb"},next:{title:"Backend-only",permalink:"/deployment/backend-only"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone repo and build Docker container",id:"clone-repo-and-build-docker-container",level:2},{value:"Docker Compose configuration",id:"docker-compose-configuration",level:2},{value:"LangFlow service",id:"langflow-service",level:3},{value:"PostgreSQL service",id:"postgresql-service",level:3},{value:"Switch to a specific LangFlow version",id:"switch-to-a-specific-langflow-version",level:2}],h={annotations:c.ds,Code:c.EK},g={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"};function p(e){const o=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",a:"a",h3:"h3"},(0,i.ah)(),e.components);return h||f("CH",!1),h.Code||f("CH.Code",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,r.jsx)(o.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(o.p,{children:"This guide will help you get LangFlow up and running using Docker and Docker Compose."}),"\n",(0,r.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Docker"}),"\n",(0,r.jsx)(o.li,{children:"Docker Compose"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"clone-repo-and-build-docker-container",children:"Clone repo and build Docker container"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Clone the LangFlow repository:"}),"\n",(0,r.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"git ",props:{style:{color:"#FFA657"}}},{content:"clone https://github.com/langflow-ai/langflow.git",props:{style:{color:"#A5D6FF"}}}]}],lang:"sh"},annotations:[]}]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Navigate to the ",(0,r.jsx)(o.code,{children:"docker_example"})," directory:"]}),"\n",(0,r.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"cd ",props:{style:{color:"#79C0FF"}}},{content:"langflow/docker_example",props:{style:{color:"#A5D6FF"}}}]}],lang:"sh"},annotations:[]}]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Run the Docker Compose file:"}),"\n",(0,r.jsx)(h.Code,{codeConfig:g,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"compose up",props:{style:{color:"#A5D6FF"}}}]}],lang:"sh"},annotations:[]}]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["LangFlow will now be accessible at ",(0,r.jsx)(o.a,{href:"http://localhost:7860/",children:"http://localhost:7860/"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"docker-compose-configuration",children:"Docker Compose configuration"}),"\n",(0,r.jsxs)(o.p,{children:["The Docker Compose configuration spins up two services: ",(0,r.jsx)(o.code,{children:"langflow"})," and ",(0,r.jsx)(o.code,{children:"postgres"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"langflow-service",children:"LangFlow service"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"langflow"})," service uses the ",(0,r.jsx)(o.code,{children:"langflowai/langflow:latest"})," Docker image and exposes port 7860. It depends on the ",(0,r.jsx)(o.code,{children:"postgres"})," service."]}),"\n",(0,r.jsx)(o.p,{children:"Environment variables:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"LANGFLOW_DATABASE_URL"}),": The connection string for the PostgreSQL database."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"LANGFLOW_CONFIG_DIR"}),": The directory where LangFlow stores logs, file storage, monitor data, and secret keys."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Volumes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"langflow-data"}),": This volume is mapped to ",(0,r.jsx)(o.code,{children:"/var/lib/langflow"})," in the container."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"postgresql-service",children:"PostgreSQL service"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"postgres"})," service uses the ",(0,r.jsx)(o.code,{children:"postgres:16"})," Docker image and exposes port 5432."]}),"\n",(0,r.jsx)(o.p,{children:"Environment variables:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"POSTGRES_USER"}),": The username for the PostgreSQL database."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"POSTGRES_PASSWORD"}),": The password for the PostgreSQL database."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"POSTGRES_DB"}),": The name of the PostgreSQL database."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Volumes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"langflow-postgres"}),": This volume is mapped to ",(0,r.jsx)(o.code,{children:"/var/lib/postgresql/data"})," in the container."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"switch-to-a-specific-langflow-version",children:"Switch to a specific LangFlow version"}),"\n",(0,r.jsxs)(o.p,{children:["If you want to use a specific version of LangFlow, you can modify the ",(0,r.jsx)(o.code,{children:"image"})," field under the ",(0,r.jsx)(o.code,{children:"langflow"})," service in the Docker Compose file. For example, to use version 1.0-alpha, change ",(0,r.jsx)(o.code,{children:"langflowai/langflow:latest"})," to ",(0,r.jsx)(o.code,{children:"langflowai/langflow:1.0-alpha"}),"."]})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,i.ah)(),e.components);return o?(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)};function f(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);