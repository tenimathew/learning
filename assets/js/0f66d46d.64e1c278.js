"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"Section 2. Querying data",sidebar_position:2,description:"SELECT, DUAL"},i=void 0,l={unversionedId:"oracle/Section 2. Querying data",id:"oracle/Section 2. Querying data",title:"Section 2. Querying data",description:"SELECT, DUAL",source:"@site/docs/oracle/2_querying-data.md",sourceDirName:"oracle",slug:"/oracle/Section 2. Querying data",permalink:"/learning/docs/oracle/Section 2. Querying data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracle/2_querying-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Section 2. Querying data",sidebar_position:2,description:"SELECT, DUAL"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/learning/docs/oracle/Intro"},next:{title:"Section 3. Sorting data",permalink:"/learning/docs/oracle/Section 3. Sorting data"}},c={},s=[{value:"SELECT",id:"select",level:2},{value:"Syntax",id:"syntax",level:3},{value:"DUAL",id:"dual",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"select"},"SELECT"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column_1, column_2\nFROM table_name;\n")),(0,a.kt)("p",null,"You can use the shorthand asterisk (","*",") to instruct Oracle to return data from all columns of a table as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM table_name;\n")),(0,a.kt)("p",null,"When you embed the query in applications, it is a good practice to explicitly specify the columns from which you want to query data even when you want to retrieve data from all columns of a table."),(0,a.kt)("p",null,"You should use the asterisk (","*",") shorthand for ad-hoc queries only."),(0,a.kt)("p",null,"This is because a table may have more or fewer columns in the future due to the business changes."),(0,a.kt)("p",null,"If you use the asterisk (","*",") in the application code and assume that the table has a fixed set of columns, the application may either not process the additional columns or access the removed columns."),(0,a.kt)("h2",{id:"dual"},"DUAL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DUAL")," table which is a special table that belongs to the schema of the user SYS but it is accessible to all users."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DUAL")," table has one column named ",(0,a.kt)("inlineCode",{parentName:"p"},"DUMMY")," whose data type is ",(0,a.kt)("inlineCode",{parentName:"p"},"VARCHAR2()")," and contains one row with a value ",(0,a.kt)("inlineCode",{parentName:"p"},"X"),"."))}p.isMDXComponent=!0}}]);