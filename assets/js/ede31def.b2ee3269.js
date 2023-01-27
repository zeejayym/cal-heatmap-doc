"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),a=n(6010);const o="browserWindow_my1Q",i="browserWindowHeader_jXSR",l="buttons_uHc7",c="browserWindowAddressBar_Pd8y",s="dot_giz1",p="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function u(e){let{children:t,minHeight:n,url:u="http://localhost:3000"}=e;return r.createElement("div",{className:o,style:{minHeight:n}},r.createElement("div",{className:i},r.createElement("div",{className:l},r.createElement("span",{className:s,style:{background:"#f25f58"}}),r.createElement("span",{className:s,style:{background:"#fbbe3c"}}),r.createElement("span",{className:s,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(c,"text--truncate")},u),r.createElement("div",{className:p},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:m},t))}},8720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(1007);const i={title:"verticalOrientation",sidebar_position:10},l=void 0,c={unversionedId:"options/verticalOrientation",id:"options/verticalOrientation",title:"verticalOrientation",description:"Whether the domains should be arranged on top of each other, or side by side.",source:"@site/docs/options/verticalOrientation.md",sourceDirName:"options",slug:"/options/verticalOrientation",permalink:"/cal-heatmap-doc/docs/options/verticalOrientation",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/verticalOrientation.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"verticalOrientation",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"data",permalink:"/cal-heatmap-doc/docs/options/data"},next:{title:"scale",permalink:"/cal-heatmap-doc/docs/options/scale"}},s={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whether the domains should be arranged on top of each other, or side by side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"verticalOrientation: boolean;\n")),(0,a.kt)("p",null,"Default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const cal = new CalHeatmap();\n// Set the options to true to view result\ncal.paint({ verticalOrientation: false });\n\nrender(<div id="cal-heatmap"></div>);\n'))))}m.isMDXComponent=!0}}]);