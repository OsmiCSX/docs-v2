"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:3},i="Custom Spacing",c={unversionedId:"spacing/custom-spacing",id:"spacing/custom-spacing",title:"Custom Spacing",description:"Config",source:"@site/docs/spacing/custom-spacing.md",sourceDirName:"spacing",slug:"/spacing/custom-spacing",permalink:"/docs/next/spacing/custom-spacing",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/docs/spacing/custom-spacing.md",tags:[],version:"current",lastUpdatedAt:1664965897,formattedLastUpdatedAt:"Oct 5, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Margin",permalink:"/docs/next/spacing/margin"},next:{title:"Font Family",permalink:"/docs/next/typography/font-family"}},p={},s=[{value:"Config",id:"config",level:2},{value:"Usage",id:"usage",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-spacing"},"Custom Spacing"),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"osmi.config.js"),", you can define custom spacing and it will automatically generate pre-defined ",(0,a.kt)("inlineCode",{parentName:"p"},"padding"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"margin"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"position (top, left, right, bottom)")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  spacing: {\n    30: 120,\n    77: 154,\n  },\n};\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'apply("m-30 p-77");\n')))}u.isMDXComponent=!0}}]);