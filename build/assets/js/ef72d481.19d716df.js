"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[7676],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=a,N=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(N,i(i({ref:e},s),{},{components:n})):r.createElement(N,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8255:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const l={sidebar_position:2},i="Font Size",o={unversionedId:"typography/font-size",id:"typography/font-size",title:"Font Size",description:"Font Size",source:"@site/docs/typography/font-size.md",sourceDirName:"typography",slug:"/typography/font-size",permalink:"/docs/next/typography/font-size",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/docs/typography/font-size.md",tags:[],version:"current",lastUpdatedAt:1658373924,formattedLastUpdatedAt:"Jul 21, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Font Family",permalink:"/docs/next/typography/font-family"},next:{title:"Font Style",permalink:"/docs/next/typography/font-style"}},p={},d=[{value:"Font Size",id:"font-size-1",level:2},{value:"Custom Font Size",id:"custom-font-size",level:2},{value:"Create Pre-defined",id:"create-pre-defined",level:3},{value:"Usage",id:"usage",level:3},{value:"Responsive Font Size",id:"responsive-font-size",level:2},{value:"Pre-defined Responsive Size",id:"pre-defined-responsive-size",level:3},{value:"Dynamic Responsive Size",id:"dynamic-responsive-size",level:3}],s={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"font-size"},"Font Size"),(0,a.kt)("h2",{id:"font-size-1"},"Font Size"),(0,a.kt)("p",null,"Utilities for controlling the font size of an element."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("th",{parentName:"tr",align:null},"Output"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-xs")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 12 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-sm")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 14 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-base")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 16 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-lg")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 18 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 20 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-2xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 22 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-3xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 24}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-4xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 26}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-5xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 28}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-6xl")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ fontSize: 30}"))))),(0,a.kt)("h2",{id:"custom-font-size"},"Custom Font Size"),(0,a.kt)("p",null,"If you didn't get suitable font size for your project app, you can define your font size by adding in ",(0,a.kt)("inlineCode",{parentName:"p"},"osmi.config.js")," file."),(0,a.kt)("h3",{id:"create-pre-defined"},"Create Pre-defined"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  // font family\n  font: {\n    size: {\n      "super-big": 50,\n      "super-large": 60,\n      "crazy-large": 80,\n    },\n  },\n};\n')),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'apply("text-super-big");\n')),(0,a.kt)("h2",{id:"responsive-font-size"},"Responsive Font Size"),(0,a.kt)("p",null,"Utilities for controlling the font size of an element with automatically resize depends on device resolution."),(0,a.kt)("h3",{id:"pre-defined-responsive-size"},"Pre-defined Responsive Size"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-xs")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-xs"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-sm")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-sm"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-base")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-base"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-lg")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-lg"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-xl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-2xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-2xl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-3xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-3xl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-4xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-4xl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-5xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-5xl"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"text-r-6xl")),(0,a.kt)("td",{parentName:"tr",align:null},"Responsive version for ",(0,a.kt)("inlineCode",{parentName:"td"},"text-6xl"))))),(0,a.kt)("h3",{id:"dynamic-responsive-size"},"Dynamic Responsive Size"),(0,a.kt)("p",null,"If you want to have responsive text size based on screen width resolution. Use this syntax:"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'apply("text/50"); // 50% of screen width resolution\n')))}m.isMDXComponent=!0}}]);