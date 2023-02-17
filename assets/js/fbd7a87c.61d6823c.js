"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010);const i="browserWindow_my1Q",o="browserWindowHeader_jXSR",s="buttons_uHc7",c="browserWindowAddressBar_Pd8y",l="dot_giz1",p="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function u(e){let{children:t,minHeight:n,url:u="http://localhost:3000"}=e;return r.createElement("div",{className:i,style:{minHeight:n}},r.createElement("div",{className:o},r.createElement("div",{className:s},r.createElement("span",{className:l,style:{background:"#f25f58"}}),r.createElement("span",{className:l,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(c,"text--truncate")},u),r.createElement("div",{className:p},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:m},t))}},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(1007);const o={title:"Quick Start",description:"Paint your first calendar in 3 lines",sidebar_position:2},s="Quick start",c={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start",description:"Paint your first calendar in 3 lines",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick Start",description:"Paint your first calendar in 3 lines",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Browser support",permalink:"/docs/getting-started/browser-support"}},l={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/installation"},"Install")," the script"),(0,a.kt)("li",{parentName:"ol"},"Insert ",(0,a.kt)("inlineCode",{parentName:"li"},'<div id="cal-heatmap"></div>')," where you want to render the calendar in your page"),(0,a.kt)("li",{parentName:"ol"},"Instantiate and paint the calendar with your desired options/plugins")),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const cal = new CalHeatmap();\ncal.paint({});\nrender(<div id="cal-heatmap"></div>);\n'))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can customize the calendar by passing an ",(0,a.kt)("a",{parentName:"p",href:"/docs/options/"},(0,a.kt)("inlineCode",{parentName:"a"},"Options"))," object and/or\na ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins/"},"Plugins list")," to ",(0,a.kt)("a",{parentName:"p",href:"/docs/API/paint"},(0,a.kt)("inlineCode",{parentName:"a"},"paint()")),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"../showcase"},"showcase")," section for more examples.")))}m.isMDXComponent=!0}}]);