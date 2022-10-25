"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:1},o="Introduction",l={unversionedId:"intro",id:"version-0.6/intro",title:"Introduction",description:"What is OsmiCSX ?",source:"@site/versioned_docs/version-0.6/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/0.6/intro",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-0.6/intro.md",tags:[],version:"0.6",lastUpdatedAt:1625388521,formattedLastUpdatedAt:"Jul 4, 2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",next:{title:"Installation",permalink:"/docs/0.6/getting-started/installation"}},s={},p=[{value:"What is OsmiCSX ?",id:"what-is-osmicsx-",level:2},{value:"Why OsmiCSX ?",id:"why-osmicsx-",level:2},{value:"Features",id:"features",level:2},{value:"Updates",id:"updates",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-osmicsx-"},"What is OsmiCSX ?"),(0,i.kt)("p",null,"OsmiCSX is a utility React Native style framework for rapidly building custom user interfaces. We adopted the Tailwind concept and implement it for styling in React Native. OsmiCSX designed for customizing UI in React Native and makes a reusable component with the style as you want with very simple code."),(0,i.kt)("h2",{id:"why-osmicsx-"},"Why OsmiCSX ?"),(0,i.kt)("p",null,"Most Style/UI framework in React Native only focused on the UI Component and not really customizable. They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design."),(0,i.kt)("p",null,"OsmiCSX is different."),(0,i.kt)("p",null,"Instead of opinionated predesigned components, OsmiCSX provides low-level utility style that let you build completely custom designs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},"import React, { Component } from 'react'\nimport { StatusBar, View, Text } from 'react-native'\nimport { apply } from 'osmicsx'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props)\n  }\n\n  render(){\n    return (\n      <View style={apply(\"flex items-center justify-center\")}>\n        <Text style={apply(\"text-white text-center text-2xl\")}>Hello World!</Text>\n      </View>\n    )\n  }\n}\n")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pre-defined Styles"),": There are many pre-defined styles like ",(0,i.kt)("em",{parentName:"li"},"colors"),", ",(0,i.kt)("em",{parentName:"li"},"layout"),", ",(0,i.kt)("em",{parentName:"li"},"typography")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Templating Styles"),": You can separate styles code with render logic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dark/Light Theme"),": By only adding prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"dark:")," on when calling syntax color, it will automatically change when the device is using Dark Theme"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Typescript Support"),": We already finish to migrate the framework with Typescript support"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Light & Fast"),": Since we only pre-defined styles and didn't come with pre-defined UI, it will make our framework faster to load"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple Inline Style"),": With ",(0,i.kt)("inlineCode",{parentName:"li"},"apply()")," method, your project code will be more clean and readable")),(0,i.kt)("h2",{id:"updates"},"Updates"),(0,i.kt)("p",null,"We always keep up-to-date with TailwindCSS. Because our goal is to make utility style like TailwindCSS for React Native"))}m.isMDXComponent=!0}}]);