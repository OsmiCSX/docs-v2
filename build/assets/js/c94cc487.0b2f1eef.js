"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[2387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(3117),o=(r(7294),r(3905));const a={sidebar_position:1},i="Android",l={unversionedId:"platform/android",id:"version-1.0/platform/android",title:"Android",description:"Utilities for controlling your style only show in Android Platform.",source:"@site/versioned_docs/version-1.0/platform/android.md",sourceDirName:"platform",slug:"/platform/android",permalink:"/docs/platform/android",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-1.0/platform/android.md",tags:[],version:"1.0",lastUpdatedAt:1665139632,formattedLastUpdatedAt:"Oct 7, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Notch (iOS only)",permalink:"/docs/appearance/notch"},next:{title:"iOS",permalink:"/docs/platform/ios"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"android"},"Android"),(0,o.kt)("p",null,"Utilities for controlling your style only show in Android Platform."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"android:")," prefix on your style."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'apply("android:<other-syntax>");\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'apply("mt-0 android:mt-5");\n')))}d.isMDXComponent=!0}}]);