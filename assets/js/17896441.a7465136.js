"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7918],{5288:(e,t,s)=>{s.r(t),s.d(t,{default:()=>pe});var n=s(7294),a=s(1944),i=s(902),l=s(5893);const o=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var u=s(6905),m=s(7524),h=s(5999),b=s(3692);function p(e){const{permalink:t,title:s,subLabel:n,isNext:a}=e;return(0,l.jsxs)(b.Z,{className:(0,u.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function x(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(p,{...s,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var v=s(2263),j=s(143),f=s(5281),_=s(373),N=s(4477);const Z={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=Z[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.Z,{to:s,onClick:n,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,v.Z)(),{pluginId:a}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,_.J)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.Jo)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:n,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(k,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function L(e){let{className:t}=e;const s=(0,N.E)();return s.banner?(0,l.jsx)(T,{className:t,versionMetadata:s}):null}function w(e){let{className:t}=e;const s=(0,N.E)();return s.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const U={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function y(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(b.Z,{href:t,className:(0,u.Z)(U.tag,n?U.tagWithCount:U.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}const M={tags:"tags_jXut",tag:"tag_QGVx"};function B(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(M.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:M.tag,children:(0,l.jsx)(y,{label:t,permalink:s})},s)}))})]})}const I={iconEdit:"iconEdit_Z9Sw"};function A(e){let{className:t,...s}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(I.iconEdit,t),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function E(e){let{editUrl:t}=e;return(0,l.jsxs)(b.Z,{to:t,className:f.k.common.editThisPage,children:[(0,l.jsx)(A,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function V(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,v.Z)(),s=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,v.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:s,...e})}function H(e){let{lastUpdatedAt:t}=e;const s=new Date(t),n=V({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(s);return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:s.toISOString(),itemProp:"dateModified",children:n})})},children:" on {date}"})}function P(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function D(e){let{lastUpdatedAt:t,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:f.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(H,{lastUpdatedAt:t}):"",byUser:s?(0,l.jsx)(P,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const S={lastUpdated:"lastUpdated_JAkA"};function F(e){let{className:t,editUrl:s,lastUpdatedAt:n,lastUpdatedBy:a}=e;return(0,l.jsxs)("div",{className:(0,u.Z)("row",t),children:[(0,l.jsx)("div",{className:"col",children:s&&(0,l.jsx)(E,{editUrl:s})}),(0,l.jsx)("div",{className:(0,u.Z)("col",S.lastUpdated),children:(n||a)&&(0,l.jsx)(D,{lastUpdatedAt:n,lastUpdatedBy:a})})]})}function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,o=!!(t||s||n);return i||o?(0,l.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(B,{tags:a})})}),o&&(0,l.jsx)(F,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var z=s(6043),O=s(3743);const G={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function J(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,u.Z)("clean-btn",G.tocCollapsibleButton,!t&&G.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const W={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,z.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(W.tocCollapsible,!i&&W.tocCollapsibleExpanded,s),children:[(0,l.jsx)(J,{collapsed:i,onClick:o}),(0,l.jsx)(z.z,{lazy:!0,className:W.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(O.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const Q={tocMobile:"tocMobile_ITEo"};function X(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,Q.tocMobile)})}var Y=s(9407);function $(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var K=s(2503),ee=s(1724);function te(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(K.Z,{as:"h1",children:s})}),(0,l.jsx)(ee.Z,{children:t})]})}var se=s(2802),ne=s(8596),ae=s(4996);function ie(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const le={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function oe(){const e=(0,ae.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(ie,{className:le.breadcrumbHomeIcon})})})}const re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ce(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,l.jsx)(b.Z,{className:a,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function de(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ue(){const e=(0,se.s1)(),t=(0,ne.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(f.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(oe,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(de,{active:n,index:s,addMicrodata:!!a,children:(0,l.jsx)(ce,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var me=s(2212);const he={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function be(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,m.i)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,l.jsx)(X,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)($,{})}}(),{metadata:{unlisted:n}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!s.hidden&&he.docItemCol),children:[n&&(0,l.jsx)(me.Z,{}),(0,l.jsx)(L,{}),(0,l.jsxs)("div",{className:he.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ue,{}),(0,l.jsx)(w,{}),s.mobile,(0,l.jsx)(te,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(g,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function pe(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(be,{children:(0,l.jsx)(s,{})})]})})}}}]);