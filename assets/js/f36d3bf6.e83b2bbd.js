"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[4353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=l,b=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1007:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(7294),l=t(6010);const i="browserWindow_my1Q",o="browserWindowHeader_jXSR",r="buttons_uHc7",s="browserWindowAddressBar_Pd8y",d="dot_giz1",p="browserWindowMenuIcon_Vhuh",m="bar_rrRL",c="browserWindowBody_Idgs";function u(e){let{children:n,minHeight:t,url:u="http://localhost:3000"}=e;return a.createElement("div",{className:i,style:{minHeight:t}},a.createElement("div",{className:o},a.createElement("div",{className:r},a.createElement("span",{className:d,style:{background:"#f25f58"}}),a.createElement("span",{className:d,style:{background:"#fbbe3c"}}),a.createElement("span",{className:d,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(s,"text--truncate")},u),a.createElement("div",{className:p},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:c},n))}},8577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),i=t(1007);const o={title:"domain",sidebar_position:3},r=void 0,s={unversionedId:"options/domain/index",id:"options/domain/index",title:"domain",description:"Specify all options related to the domain configuration",source:"@site/docs/options/domain/index.md",sourceDirName:"options/domain",slug:"/options/domain/",permalink:"/docs/options/domain/",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/domain/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"domain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"range",permalink:"/docs/options/range"},next:{title:"label",permalink:"/docs/options/domain/label"}},d={},p=[{value:"<code>type</code>",id:"type",level:2},{value:"Available domains type",id:"available-domains-type",level:3},{value:"<code>gutter</code>",id:"gutter",level:2},{value:"<code>padding</code>",id:"padding",level:2},{value:"<code>dynamicDimension</code>",id:"dynamicdimension",level:2},{value:"<code>label</code>",id:"label",level:2},{value:"<code>subLabel</code>",id:"sublabel",level:2},{value:"<code>sort</code>",id:"sort",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"subhead"},"Specify all options related to the domain configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type DomainOptions: {\n  type: string;\n  gutter: number;\n  padding: [number, number, number, number];\n  dynamicDimension: boolean;\n  label: LabelOptions;\n  subLabel: SubLabelOptions;\n  sort: 'asc' | 'desc';\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h2"},"type")),(0,l.kt)("p",null,"Domain's type, representing a time unit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type: string;\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"hour")),(0,l.kt)("h3",{id:"available-domains-type"},"Available domains type"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"year")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"month")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"week")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"day")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hour"))),(0,l.kt)("h2",{id:"gutter"},(0,l.kt)("inlineCode",{parentName:"h2"},"gutter")),(0,l.kt)("p",null,"Space between each domain, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gutter: number;\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4")),(0,l.kt)(i.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the gutter value to see result\ncal.paint({ itemSelector: '#example-gutter', domain: { gutter: 4 } });\n\nrender(<div id=\"example-gutter\"></div>);\n"))),(0,l.kt)("h2",{id:"padding"},(0,l.kt)("inlineCode",{parentName:"h2"},"padding")),(0,l.kt)("p",null,"Padding inside each domain, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"padding: [number, number, number, number];\n")),(0,l.kt)("p",null,"Expect an array of 4 numbers, in the same order as CSS padding property (top, right, bottom, left)"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"[0, 0, 0, 0]")),(0,l.kt)(i.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the padding value to see result\ncal.paint({\n  itemSelector: '#example-padding',\n  domain: { padding: [0, 0, 0, 0] },\n});\n\nrender(<div id=\"example-padding\"></div>);\n"))),(0,l.kt)("h2",{id:"dynamicdimension"},(0,l.kt)("inlineCode",{parentName:"h2"},"dynamicDimension")),(0,l.kt)("p",null,"Whether the domain's should be resized to fit its content."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"dynamicDimension: boolean;\n")),(0,l.kt)("p",null,"The domain dimension depends on the chosen subDomain type,\nwhich each have a different number of columns and rows count."),(0,l.kt)("p",null,"Some of the subDomain type, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", do not have a fixed number of items,\nas there can be 28, 29, 30 or 31 days in a ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),"."),(0,l.kt)("p",null,"This leads to different domains having different sizes, and\nmay cause the calendar total dimension to change on navigation."),(0,l.kt)("p",null,"When disabled, the domains will all take the same maximum size\nas defined by the subDomain template,\nand some blank space may appear between domains."),(0,l.kt)("p",null,"Usually, only either the width or the height will by dynamic."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h2",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h2"},"label")),(0,l.kt)("p",null,"Specify all options related to the domain\u2019s label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"label: LabelOptions;\n")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/domain/label"},"Domain Label section")," for more informations"),(0,l.kt)("h2",{id:"sublabel"},(0,l.kt)("inlineCode",{parentName:"h2"},"subLabel")),(0,l.kt)("p",null,"Specify all options related to the domain\u2019s subLabel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"subLabel: SubLabelOptions;\n")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/domain/sublabel"},"SubLabel section")," for more informations"),(0,l.kt)("h2",{id:"sort"},(0,l.kt)("inlineCode",{parentName:"h2"},"sort")),(0,l.kt)("p",null,"Sort order of the domains."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sort: 'asc' | 'desc';\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"asc")),(0,l.kt)(i.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the sort value to see result\ncal.paint({\n  itemSelector: '#example-sort',\n  domain: { type: 'day', sort: 'asc' },\n  subDomain: { type: 'hour' },\n});\n\nrender(<div id=\"example-sort\"></div>);\n"))),(0,l.kt)("admonition",{title:"Option scope",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This only affect the domain's order, not the subDomain.")))}c.isMDXComponent=!0}}]);