"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[5223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const o={sidebar_position:1},a="Introduction",l={unversionedId:"intro",id:"version-1.0/intro",title:"Introduction",description:"What is OsmiCSX ?",source:"@site/versioned_docs/version-1.0/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-1.0/intro.md",tags:[],version:"1.0",lastUpdatedAt:1665139632,formattedLastUpdatedAt:"Oct 7, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},s={},c=[{value:"What is OsmiCSX ?",id:"what-is-osmicsx-",level:2},{value:"Why OsmiCSX ?",id:"why-osmicsx-",level:2},{value:"Features",id:"features",level:2},{value:"Updates",id:"updates",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-osmicsx-"},"What is OsmiCSX ?"),(0,i.kt)("p",null,"OsmiCSX is a utility React Native style framework for rapidly building custom user interfaces. We adopted the Tailwind concept and implement it for styling in React Native. OsmiCSX designed for customizing UI in React Native and makes a reusable component with the style as you want with very simple code."),(0,i.kt)("h2",{id:"why-osmicsx-"},"Why OsmiCSX ?"),(0,i.kt)("p",null,"Most Style/UI framework in React Native only focused on the UI Component and not really customizable. They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design."),(0,i.kt)("p",null,"OsmiCSX is different."),(0,i.kt)("p",null,"Instead of opinionated predesigned components, OsmiCSX provides low-level utility style that let you build completely custom designs."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pre-defined Styles"),": There are many pre-defined styles like ",(0,i.kt)("em",{parentName:"li"},"colors"),", ",(0,i.kt)("em",{parentName:"li"},"layout"),", ",(0,i.kt)("em",{parentName:"li"},"typography"),", etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Templating Styles"),": You can separate styles code with render logic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dark/Light Theme"),": By only adding prefix ",(0,i.kt)("inlineCode",{parentName:"li"},"dark:")," on when calling syntax color, it will automatically change when the device is using Dark Theme"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Typescript Support"),": We are fully support with TypeScript"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Light & Fast"),": Since we only pre-defined styles and didn't come with pre-defined UI, it will make our framework faster to load"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Specific Platform"),": We provide platform processor so you can put style for specific platform (android/ios)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple Inline Style"),": With ",(0,i.kt)("inlineCode",{parentName:"li"},"apply()")," method, your project code will be more clean and readable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using Hooks / HoC"),": Styling with the hooks for functional component or use HoC for class component.")),(0,i.kt)("h2",{id:"updates"},"Updates"),(0,i.kt)("p",null,"We always keep up-to-date with TailwindCSS. Because our goal is to make utility style like TailwindCSS for React Native"))}u.isMDXComponent=!0}}]);