(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[9671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},s="Introduction",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"What is OsmiCSX ?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",editUrl:"https://github.com/OsmiCSX/docs-v2/docs/intro.md",version:"current",lastUpdatedAt:1658373924,formattedLastUpdatedAt:"7/21/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/next/getting-started/installation"}},u=[{value:"What is OsmiCSX ?",id:"what-is-osmicsx-",children:[]},{value:"Why OsmiCSX ?",id:"why-osmicsx-",children:[]},{value:"Features",id:"features",children:[]},{value:"Updates",id:"updates",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"what-is-osmicsx-"},"What is OsmiCSX ?"),(0,o.kt)("p",null,"OsmiCSX is a utility React Native style framework for rapidly building custom user interfaces. We adopted the Tailwind concept and implement it for styling in React Native. OsmiCSX designed for customizing UI in React Native and makes a reusable component with the style as you want with very simple code."),(0,o.kt)("h2",{id:"why-osmicsx-"},"Why OsmiCSX ?"),(0,o.kt)("p",null,"Most Style/UI framework in React Native only focused on the UI Component and not really customizable. They come with all sorts of predesigned components like buttons, cards, and alerts that might help you move quickly at first, but cause more pain than they cure when it comes time to make your site stand out with a custom design."),(0,o.kt)("p",null,"OsmiCSX is different."),(0,o.kt)("p",null,"Instead of opinionated predesigned components, OsmiCSX provides low-level utility style that let you build completely custom designs."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pre-defined Styles"),": There are many pre-defined styles like ",(0,o.kt)("em",{parentName:"li"},"colors"),", ",(0,o.kt)("em",{parentName:"li"},"layout"),", ",(0,o.kt)("em",{parentName:"li"},"typography"),", etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Templating Styles"),": You can separate styles code with render logic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dark/Light Theme"),": By only adding prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"dark:")," on when calling syntax color, it will automatically change when the device is using Dark Theme"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Typescript Support"),": We are fully support with TypeScript"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Light & Fast"),": Since we only pre-defined styles and didn't come with pre-defined UI, it will make our framework faster to load"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Specific Platform"),": We provide platform processor so you can put style for specific platform (android/ios)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple Inline Style"),": With ",(0,o.kt)("inlineCode",{parentName:"li"},"apply()")," method, your project code will be more clean and readable")),(0,o.kt)("h2",{id:"updates"},"Updates"),(0,o.kt)("p",null,"We always keep up-to-date with TailwindCSS. Because our goal is to make utility style like TailwindCSS for React Native"))}d.isMDXComponent=!0}}]);