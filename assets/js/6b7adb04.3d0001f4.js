"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[8979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1},i="Hooks",l={unversionedId:"api/hooks",id:"version-1.0/api/hooks",title:"Hooks",description:"OsmiCSX provide custom hooks to make styling more easier inside functional component.",source:"@site/versioned_docs/version-1.0/api/hooks.md",sourceDirName:"api",slug:"/api/hooks",permalink:"/docs/api/hooks",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-1.0/api/hooks.md",tags:[],version:"1.0",lastUpdatedAt:1665139632,formattedLastUpdatedAt:"Oct 7, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Usage",permalink:"/docs/getting-started/usage"},next:{title:"HoC",permalink:"/docs/api/hoc"}},s={},p=[{value:"useStyles",id:"usestyles",level:2},{value:"Return Type",id:"return-type",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks"},"Hooks"),(0,a.kt)("p",null,"OsmiCSX provide custom hooks to make styling more easier inside functional component."),(0,a.kt)("h2",{id:"usestyles"},"useStyles"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},'import { useStyles } from "osmicsx";\n\nexport const Button = () => {\n  const { apply } = useStyles();\n\n  return (\n    <TouchableOpacity\n      activeOpacity={0.8}\n      style={apply("py-2 px-5 rounded-lg bg-blue-500")}\n    >\n      <Text style={apply("text-sm font-semibold text-white")}>Click Me</Text>\n    </TouchableOpacity>\n  );\n};\n')),(0,a.kt)("h2",{id:"return-type"},"Return Type"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apply"),(0,a.kt)("td",{parentName:"tr",align:null},"(...args: string[]) => any"),(0,a.kt)("td",{parentName:"tr",align:null},"return an object styles or string (if only apply ",(0,a.kt)("inlineCode",{parentName:"td"},"color-name"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"switchTheme"),(0,a.kt)("td",{parentName:"tr",align:null},"(mode: keyof typeof ThemeMode) => void"),(0,a.kt)("td",{parentName:"tr",align:null},"mode can be ",(0,a.kt)("inlineCode",{parentName:"td"},"dark"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"light"),", or ",(0,a.kt)("inlineCode",{parentName:"td"},"system"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scaleWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"(width: number) => number"),(0,a.kt)("td",{parentName:"tr",align:null},"return width in number depends on screen resolution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scaleHeight"),(0,a.kt)("td",{parentName:"tr",align:null},"(height: number) => number"),(0,a.kt)("td",{parentName:"tr",align:null},"return height in number depends on screen resolution")))))}c.isMDXComponent=!0}}]);