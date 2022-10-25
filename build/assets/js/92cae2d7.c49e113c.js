"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2905:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const o={sidebar_position:1},i="Dark Theme",l={unversionedId:"appearance/dark-theme",id:"version-0.6/appearance/dark-theme",title:"Dark Theme",description:"Usage",source:"@site/versioned_docs/version-0.6/appearance/dark-theme.md",sourceDirName:"appearance",slug:"/appearance/dark-theme",permalink:"/docs/0.6/appearance/dark-theme",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-0.6/appearance/dark-theme.md",tags:[],version:"0.6",lastUpdatedAt:1625662733,formattedLastUpdatedAt:"Jul 7, 2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Responsive Font",permalink:"/docs/0.6/responsive/responsive-font"},next:{title:"Showcase",permalink:"/docs/0.6/resources/showcase"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Switch Theme",id:"switch-theme",level:2},{value:"switch(value: string)",id:"switchvalue-string",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dark-theme"},"Dark Theme"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use dark theme, you just need to add prefix syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"dark:")," to your styling color. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'apply("bg-white dark:bg-gray-900")\n')),(0,a.kt)("p",null,"when the appearance in light mode, it will use ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-white"),". Otherwise, use ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-gray-900")," in dark mode."),(0,a.kt)("h2",{id:"switch-theme"},"Switch Theme"),(0,a.kt)("p",null,"To switch theme between dark, light, and the system appearance. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"switch()")," method in ",(0,a.kt)("inlineCode",{parentName:"p"},"appearanceHook"),".\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import React, { useState } from "react"\nimport { TouchableOpacity, View, Text } from "react-native"\nimport { appearanceHook } from "osmicsx"\n\nconst Settings = props => {\n  const [currentTheme, setCurrentTheme] = useState(appearanceHook.theme)\n\n  const switchTheme = (value) => {\n    appearanceHook.switch(value)\n    setCurrentTheme(value)\n  }\n\n  return (\n    <View style={apply("flex bg-white dark:bg-gray-900 items-center justify-center")}>\n      <Text style={apply("text-gray-900 dark:text-white text-center text-2xl font-bold")} onPress={() => switchTheme("light")}>Switch to Light</Text>\n      <Text style={apply("text-gray-900 dark:text-white text-center text-2xl font-bold")} onPress={() => switchTheme("dark")}>Switch to Dark</Text>\n    </View>\n  )\n}\n')),(0,a.kt)("h3",{id:"switchvalue-string"},"switch(value: string)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"light"))),(0,a.kt)("td",{parentName:"tr",align:null},"Switch theme to light")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"dark"))),(0,a.kt)("td",{parentName:"tr",align:null},"Switch theme to dark")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"system"))),(0,a.kt)("td",{parentName:"tr",align:null},"Switch theme to system appearance")))))}m.isMDXComponent=!0}}]);