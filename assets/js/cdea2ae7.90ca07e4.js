"use strict";(self.webpackChunkosmicsx=self.webpackChunkosmicsx||[]).push([[4643],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(f,o(o({ref:e},m),{},{components:n})):a.createElement(f,o({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8065:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const l={sidebar_position:1},o="Translate",s={unversionedId:"transforms/translate",id:"version-1.0/transforms/translate",title:"Translate",description:"Control the Translate of an element using the syntax list below. It will automatically generate width based on amount.",source:"@site/versioned_docs/version-1.0/transforms/translate.md",sourceDirName:"transforms",slug:"/transforms/translate",permalink:"/docs/transforms/translate",draft:!1,editUrl:"https://github.com/OsmiCSX/docs-v2/versioned_docs/version-1.0/transforms/translate.md",tags:[],version:"1.0",lastUpdatedAt:1665139632,formattedLastUpdatedAt:"Oct 7, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.6/tutorialSidebar",previous:{title:"Opacity",permalink:"/docs/effects/opacity"},next:{title:"Scale",permalink:"/docs/transforms/scale"}},i={},p=[{value:"Example",id:"example",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3}],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"translate"},"Translate"),(0,r.kt)("p",null,"Control the Translate of an element using the syntax list below. It will automatically generate width based on amount."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"translate-x-{amount}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ transform: [{ translateX: {amount} }] }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"translate-y-{amount}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ transform: [{ translateY: {amount} }] }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"-translate-x-{amount}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ transform: [{ translateX: -{amount} }] }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"-translate-y-{amount}")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ transform: [{ translateY: -{amount} }] }"))))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'apply("translate-x-50")\napply("translate-y-50")\napply("-translate-x-100")\napply("-translate-y-100")\n')),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  transform: [{ translateX: 50 }]\n}\n{\n  transform: [{ translateY: 50 }]\n}\n{\n  transform: [{ translateX: -100 }]\n}\n{\n  transform: [{ translateY: -100 }]\n}\n")))}u.isMDXComponent=!0}}]);