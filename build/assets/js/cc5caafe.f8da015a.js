(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[1887],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s="Configuration",c={unversionedId:"getting-started/configuration",id:"version-0.5/getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"Setup",source:"@site/versioned_docs/version-0.5/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/docs/0.5/getting-started/configuration",editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-0.5/getting-started/configuration.md",version:"0.5",lastUpdatedAt:1625388521,formattedLastUpdatedAt:"7/4/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.5/tutorialSidebar",previous:{title:"Installation",permalink:"/docs/0.5/getting-started/installation"},next:{title:"Overflow",permalink:"/docs/0.5/layout/overflow"}},u=[{value:"Setup",id:"setup",children:[{value:"Custom Theme",id:"custom-theme",children:[]},{value:"Provider",id:"provider",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Inline Style",id:"inline-style",children:[]},{value:"Separate Style File",id:"separate-style-file",children:[]}]}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("h3",{id:"custom-theme"},"Custom Theme"),(0,i.kt)("p",null,"Create custom file ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomTheme.js")," (",(0,i.kt)("em",{parentName:"p"},"optional"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n}\n")),(0,i.kt)("h3",{id:"provider"},"Provider"),(0,i.kt)("p",null,"Create OsmiProvider config file ",(0,i.kt)("inlineCode",{parentName:"p"},"OsmiProvider.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { OsmiProvider } from "osmicsx"\nimport CustomTheme from "./CustomTheme" // your custom style file\n\nconst provider = new OsmiProvider(CustomTheme)\n\nconst { apply, connect } = provider\n\nexport {\n  apply,\n  connect\n}\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"inline-style"},"Inline Style"),(0,i.kt)("p",null,"Use osmicsx as inline style via style attribute"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { View } from "react-native"\nimport { apply } from "../Themes/OsmiProvider"\n\nconst Rectangle = () => {\n  return (\n    <View style={apply("w-100 h-100 bg-blue-500 rounded")} />\n  )\n}\n\nexport default Rectangle\n')),(0,i.kt)("h3",{id:"separate-style-file"},"Separate Style File"),(0,i.kt)("p",null,"Create your styling file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { connect } from "../Themes/OsmiProvider"\n\nexport default connect({\n  container: "flex items-center justify-center",\n  rectangle: "w-100 h-100 bg-blue-500 rounded"\n})\n')),(0,i.kt)("p",null,"Import style file in your screen/component file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { View } from "react-native"\n\n// styles\nimport styles from "./HomeScreenStyle.js"\n\nconst HomeScreen = () => {\n  return (\n    <View style={styles.container}>\n      <View style={styles.rectangle} />\n    </View>\n  )\n}\n\nexport default HomeScreen\n')))}m.isMDXComponent=!0}}]);