(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[445],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5286:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={slug:"2021/07/04/official-release-v0-6",title:"Official Release v0.6",author:"Rully Ardiansyah",author_title:"Core Engineer @ OsmiCSX",author_url:"https://github.com/devoresyah",author_image_url:"https://avatars.githubusercontent.com/u/8052370?v=4",tags:["announcement"]},c=void 0,s={permalink:"/blog/2021/07/04/official-release-v0-6",source:"@site/blog/2021-07-04-official-release-v0-6.md",title:"Official Release v0.6",description:"It has been 8 months since last update v0.5.1. After preparing carefully, we finally develop a new version of OsmiCSX and complete on July 2021. So, what's new inside OsmiCSX v0.6 ?",date:"2021-07-04T00:00:00.000Z",formattedDate:"July 4, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],readingTime:1.94,truncated:!1,prevItem:{title:"Switch Theme Engine",permalink:"/blog/2021/07/07/switch-theme-engine"}},p=[{value:"Typescript Migration",id:"typescript-migration",children:[]},{value:"Colors Improvement",id:"colors-improvement",children:[{value:"Extend Color Palettes",id:"extend-color-palettes",children:[]},{value:"Colors Opacity",id:"colors-opacity",children:[]}]},{value:"Custom Theme Enhancement",id:"custom-theme-enhancement",children:[]},{value:"Dark &amp; Light Theme",id:"dark--light-theme",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It has been 8 months since last update ",(0,o.kt)("strong",{parentName:"p"},"v0.5.1"),". After preparing carefully, we finally develop a new version of OsmiCSX and complete on July 2021. So, what's new inside OsmiCSX v0.6 ?"),(0,o.kt)("h2",{id:"typescript-migration"},"Typescript Migration"),(0,o.kt)("p",null,"We finally migrate to typescript, we hope by this migration more people can contribute to this project. And also if you found something that not best practice in our typescript migration, don't hesitate to contribute \ud83e\udd42"),(0,o.kt)("h2",{id:"colors-improvement"},"Colors Improvement"),(0,o.kt)("h3",{id:"extend-color-palettes"},"Extend Color Palettes"),(0,o.kt)("p",null,"Like TailwindCSS, we added more color palettes. Now every color has a 50 value.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'apply("bg-red-50")\n')),(0,o.kt)("h3",{id:"colors-opacity"},"Colors Opacity"),(0,o.kt)("p",null,"We also add new features like TailwindCSS, colors opacity. Now you can add color opacity for Background Color, Border Color, and Text Color\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'apply("bg-red-500 bg-opacity-50")\napply("text-blue-500 text-opacity-25")\n')),(0,o.kt)("h2",{id:"custom-theme-enhancement"},"Custom Theme Enhancement"),(0,o.kt)("p",null,"We created a new algorithm for Custom Theme. With this algorithm, you just need to define small pre-defined styles on your custom theme. Take a look at our new custom theme rules :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  colors: {\n    // custom colors\n  },\n  spacing: {\n    // custom spacing\n  },\n  border: {\n    width: {\n    // border width\n    },\n    radius: {\n    // border radius\n    }\n  },\n  font: {\n    family: {\n    // font family\n    },\n    size: {\n    // font size\n    }\n  }\n}\n")),(0,o.kt)("p",null,"And here's a usage example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // this will automatically generate background color, border color, and text color\n  colors: {\n    primary: "#f56565",\n    secondary: "rgba(107, 114, 128, --osmi-opacity)"\n  },\n  // this will automatically generate margin, padding, top, right, left, bottom\n  spacing: {\n    "30": 120\n  },\n  // generate border width and radius\n  border: {\n    width: {\n      "30": 120\n    },\n    radius: {\n      "super-xl": 120\n    }\n  },\n  // generate font family & font size\n  font: {\n    family: {\n      "font-regular": "OpenSans-Regular"\n    },\n    size: {\n      "xxl": 40\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"dark--light-theme"},"Dark & Light Theme"),(0,o.kt)("p",null,"Finally, we can support the dark theme, you don't need to manually check if the mobile device is using a dark theme or not. We do it for you. You just need to tell us which color you want to use if the device is using a dark theme."),(0,o.kt)("p",null,"By using prefix dark: and then following with the type of color (background/border/text)\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'apply("bg-white dark:gray-900")\n')),(0,o.kt)("p",null,"It means that the default/light background will use ",(0,o.kt)("inlineCode",{parentName:"p"},"white")," and for the dark them it will use ",(0,o.kt)("inlineCode",{parentName:"p"},"gray-900")))}m.isMDXComponent=!0}}]);