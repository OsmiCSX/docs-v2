"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[5264],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8619:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:4},l="Z-Index",i={unversionedId:"layout/z-index",id:"version-0.5/layout/z-index",title:"Z-Index",description:"Utilities for controlling the stack order of an element.",source:"@site/versioned_docs/version-0.5/layout/z-index.md",sourceDirName:"layout",slug:"/layout/z-index",permalink:"/docs/0.5/layout/z-index",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-0.5/layout/z-index.md",tags:[],version:"0.5",lastUpdatedAt:1625388521,formattedLastUpdatedAt:"Jul 4, 2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.5/tutorialSidebar",previous:{title:"Top / Right / Bottom / Left",permalink:"/docs/0.5/layout/top-right-bottom-left"},next:{title:"Flex",permalink:"/docs/0.5/flexbox/flex"}},d={},p=[],c={toc:p};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"z-index"},"Z-Index"),(0,a.kt)("p",null,"Utilities for controlling the stack order of an element."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("th",{parentName:"tr",align:null},"Output"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-0")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 0 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-10")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 10 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-20")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 20 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-30")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 30 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-40")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 40 }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"z-50")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ zIndex: 50 }"))))))}s.isMDXComponent=!0}}]);