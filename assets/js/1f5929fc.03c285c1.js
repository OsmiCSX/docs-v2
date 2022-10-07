"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[8103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const l={sidebar_position:3},o="Usage",s={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"Usage",description:"Inline Style",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/next/getting-started/usage",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/docs/getting-started/usage.md",tags:[],version:"current",lastUpdatedAt:1664965897,formattedLastUpdatedAt:"Oct 5, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/getting-started/configuration"},next:{title:"Hooks",permalink:"/docs/next/api/hooks"}},i={},p=[{value:"Inline Style",id:"inline-style",level:2},{value:"Separate Style File",id:"separate-style-file",level:2},{value:"Multiple Style",id:"multiple-style",level:2},{value:"Example",id:"example",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("h2",{id:"inline-style"},"Inline Style"),(0,a.kt)("p",null,"Use osmicsx as inline style via style attribute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { View } from "react-native";\nimport { useStyles } from "osmicsx";\n\nconst Rectangle = () => {\n  const { apply } = useStyles();\n\n  return <View style={apply("w-100 h-100 bg-blue-500 rounded")} />;\n};\n\nexport default Rectangle;\n')),(0,a.kt)("h2",{id:"separate-style-file"},"Separate Style File"),(0,a.kt)("p",null,"Create your styling file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'export default {\n  container: "flex items-center justify-center",\n  rectangle: "w-100 h-100 bg-blue-500 rounded",\n};\n')),(0,a.kt)("p",null,"Import style file in your screen/component file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { View } from "react-native";\n\n// styles\nimport { useStyles } from "osmicsx";\nimport styles from "./HomeScreenStyle.js";\n\nconst HomeScreen = () => {\n  const { apply } = useStyles();\n\n  return (\n    <View style={apply(styles.container)}>\n      <View style={apply(styles.rectangle)} />\n    </View>\n  );\n};\n\nexport default HomeScreen;\n')),(0,a.kt)("h2",{id:"multiple-style"},"Multiple Style"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { Pressable, View } from "react-native";\n\n// styles\nimport { useStyles } from "osmicsx";\nimport styles from "./HomeScreenStyle.js";\n\nconst HomeScreen = () => {\n  const { apply } = useStyles();\n\n  return (\n    <View style={apply(styles.container)}>\n      <Pressable\n        style={apply(\n          styles.button,\n          "bg-primary-500",\n          disabled && "bg-opacity-50"\n        )}\n      />\n    </View>\n  );\n};\n\nexport default HomeScreen;\n')))}u.isMDXComponent=!0}}]);