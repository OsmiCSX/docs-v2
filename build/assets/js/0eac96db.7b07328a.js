(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[5288],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4049:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Dark Theme",p={unversionedId:"appearance/dark-theme",id:"appearance/dark-theme",isDocsHomePage:!1,title:"Dark Theme",description:"Usage",source:"@site/docs/appearance/dark-theme.md",sourceDirName:"appearance",slug:"/appearance/dark-theme",permalink:"/docs/next/appearance/dark-theme",editUrl:"https://github.com/OsmiCSX/docs-v2/docs/appearance/dark-theme.md",version:"current",lastUpdatedAt:1658373924,formattedLastUpdatedAt:"7/21/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Skew",permalink:"/docs/next/transforms/skew"},next:{title:"Showcase",permalink:"/docs/next/resources/showcase"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Switch Theme",id:"switch-theme",children:[{value:"switchTheme(value: string)",id:"switchthemevalue-string",children:[]}]}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dark-theme"},"Dark Theme"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use dark theme, you just need to add prefix syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"dark:")," to your styling color. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'apply("bg-white dark:bg-gray-900");\n')),(0,i.kt)("p",null,"when the appearance in light mode, it will use ",(0,i.kt)("inlineCode",{parentName:"p"},"bg-white"),". Otherwise, use ",(0,i.kt)("inlineCode",{parentName:"p"},"bg-gray-900")," in dark mode."),(0,i.kt)("h2",{id:"switch-theme"},"Switch Theme"),(0,i.kt)("p",null,"To switch theme between dark, light, and the system appearance. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"switch()")," method in ",(0,i.kt)("inlineCode",{parentName:"p"},"appearanceHook"),".\nExample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import React, { useState } from "react";\nimport { TouchableOpacity, View, Text } from "react-native";\nimport { useStyles } from "osmicsx";\n\nconst Settings = (props) => {\n  const { switchTheme } = useStyles();\n\n  return (\n    <View\n      style={apply(\n        "flex bg-white dark:bg-gray-900 items-center justify-center"\n      )}\n    >\n      <Text\n        style={apply(\n          "text-gray-900 dark:text-white text-center text-2xl font-bold"\n        )}\n        onPress={() => switchTheme("light")}\n      >\n        Switch to Light\n      </Text>\n      <Text\n        style={apply(\n          "text-gray-900 dark:text-white text-center text-2xl font-bold"\n        )}\n        onPress={() => switchTheme("dark")}\n      >\n        Switch to Dark\n      </Text>\n    </View>\n  );\n};\n')),(0,i.kt)("h3",{id:"switchthemevalue-string"},"switchTheme(value: string)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"light"))),(0,i.kt)("td",{parentName:"tr",align:null},"Switch theme to light")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"dark"))),(0,i.kt)("td",{parentName:"tr",align:null},"Switch theme to dark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"system"))),(0,i.kt)("td",{parentName:"tr",align:null},"Switch theme to system appearance")))))}u.isMDXComponent=!0}}]);