"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[802],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),g=i,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9217:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const a={id:"Intro",sidebar_position:1,description:"Intro"},r=void 0,l={unversionedId:"gcp/Intro",id:"gcp/Intro",title:"Intro",description:"Intro",source:"@site/docs/gcp/intro.md",sourceDirName:"gcp",slug:"/gcp/Intro",permalink:"/learning/docs/gcp/Intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gcp/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"Intro",sidebar_position:1,description:"Intro"},sidebar:"tutorialSidebar",previous:{title:"GCP",permalink:"/learning/docs/category/gcp"},next:{title:"Getting Started",permalink:"/learning/docs/gcp/Getting Started"}},s={},u=[{value:"What is Cloud Computing?",id:"what-is-cloud-computing",level:2},{value:"How did we get here? Where are we going?",id:"how-did-we-get-here-where-are-we-going",level:2},{value:"GCP computing architectures meet you where you are",id:"gcp-computing-architectures-meet-you-where-you-are",level:2},{value:"Google Cloud Platform is organized into regions and zones",id:"google-cloud-platform-is-organized-into-regions-and-zones",level:2},{value:"Zonal resources",id:"zonal-resources",level:3},{value:"Regional resources",id:"regional-resources",level:3},{value:"Multi-regional resources",id:"multi-regional-resources",level:3},{value:"Google offers customer-friendly pricing",id:"google-offers-customer-friendly-pricing",level:2},{value:"Open APIs and open source mean customers can leave",id:"open-apis-and-open-source-mean-customers-can-leave",level:2},{value:"Security is designed into Google\u2019s technical infrastructure",id:"security-is-designed-into-googles-technical-infrastructure",level:2},{value:"Google Cloud Platform services",id:"google-cloud-platform-services",level:2},{value:"Quiz",id:"quiz",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:o(6371).Z},"Module 1 PDF")),(0,i.kt)("h2",{id:"what-is-cloud-computing"},"What is Cloud Computing?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud computing has five fundamental attributes, according to the definition of cloud computing proposed by the United States National Institute of Standards and Technology.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(3035).Z,width:"1866",height:"782"})),(0,i.kt)("h2",{id:"how-did-we-get-here-where-are-we-going"},"How did we get here? Where are we going?"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(3092).Z,width:"2016",height:"832"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first wave of the trend towards cloud computing was colocation. Colocation gave users the financial efficiency of renting physical space, instead of investing in data center real estate."),(0,i.kt)("li",{parentName:"ul"},"The second wave, share similarities with the private data centers and colocation facilities of decades past. The components of virtualized data centers match the physical building blocks of hosted computing\u2014servers, CPUs, disks, load balancers, and so on\u2014but now they are virtual devices."),(0,i.kt)("li",{parentName:"ul"},"The Third wave - Google switched to a container-based architecture\u2014a fully automated, elastic third-wave cloud that consists of a combination of automated services and scalable data. Services automatically provision and configure the infrastructure used to run applications.")),(0,i.kt)("h2",{id:"gcp-computing-architectures-meet-you-where-you-are"},"GCP computing architectures meet you where you are"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(2743).Z,width:"1870",height:"822"})),(0,i.kt)("h2",{id:"google-cloud-platform-is-organized-into-regions-and-zones"},"Google Cloud Platform is organized into regions and zones"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(7976).Z,width:"1884",height:"906"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regions are independent geographic areas that consist of zones."),(0,i.kt)("li",{parentName:"ul"},"A zone is a deployment area for Google Cloud Platform resources within a region"),(0,i.kt)("li",{parentName:"ul"},"Think of a zone as a single failure domain within a region. In order to deploy fault-tolerant applications with high availability, you should deploy your applications across multiple zones in a region to help protect against unexpected failures."),(0,i.kt)("li",{parentName:"ul"},"To protect against the loss of an entire region due to natural disaster, you should have a disaster recovery plan and know how to bring up your application in the unlikely event that your primary region is lost."),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Platform's services and resources can be zonal, regional, or managed by Google across multiple regions.")),(0,i.kt)("h3",{id:"zonal-resources"},"Zonal resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zonal resources operate within a single zone. If a zone becomes unavailable, all of the zonal resources in that zone are unavailable until service is restored."),(0,i.kt)("li",{parentName:"ul"},"Google Compute Engine VM instance resides within a specific zone.")),(0,i.kt)("h3",{id:"regional-resources"},"Regional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regional resources are deployed with redundancy within a region. This gives them higher availability relative to zonal resources.")),(0,i.kt)("h3",{id:"multi-regional-resources"},"Multi-regional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A few Google Cloud Platform services are managed by Google to be redundant and distributed within and across regions. These services optimize availability, performance, and resource efficiency. As a result, these services require a trade-off on either latency or the consistency model. These trade-offs are documented on a product-specific basis."),(0,i.kt)("li",{parentName:"ul"},"The following services have one or more multi-regional deployments in addition to any regional deployments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Google App Engine and its features"),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Datastore"),(0,i.kt)("li",{parentName:"ul"},"Google Cloud Storage"),(0,i.kt)("li",{parentName:"ul"},"Google BigQuery")))),(0,i.kt)("h2",{id:"google-offers-customer-friendly-pricing"},"Google offers customer-friendly pricing"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(9890).Z,width:"1866",height:"658"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google was the first major cloud provider to deliver per-second billing for its Infrastructure-as-a-Service compute offering, Google Compute Engine."),(0,i.kt)("li",{parentName:"ul"},"Per-second billing is offered for users of",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compute Engine"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes Engine (container infrastructure as a service)"),(0,i.kt)("li",{parentName:"ul"},"Cloud Dataproc (the open-source Big Data system Hadoop as a service)"),(0,i.kt)("li",{parentName:"ul"},"App Engine flexible environment VMs (a Platform as a Service)."))),(0,i.kt)("li",{parentName:"ul"},"Google Compute Engine offers automatically applied sustained-use discounts, which are automatic discounts that you get for running a virtual-machine instance for a significant portion of the billing month. Specifically, when you run an instance for more than 25% of a month, Compute Engine automatically gives you a discount for every incremental minute you use for that instance.")),(0,i.kt)("h2",{id:"open-apis-and-open-source-mean-customers-can-leave"},"Open APIs and open source mean customers can leave"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8595).Z,width:"1866",height:"836"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Google gives customers the ability to run their applications elsewhere if Google becomes no longer the best provider for their needs.")),(0,i.kt)("h2",{id:"security-is-designed-into-googles-technical-infrastructure"},"Security is designed into Google\u2019s technical infrastructure"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(6859).Z,width:"1916",height:"866"})),(0,i.kt)("h2",{id:"google-cloud-platform-services"},"Google Cloud Platform services"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(4517).Z,width:"2054",height:"868"})),(0,i.kt)("h2",{id:"quiz"},"Quiz"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Name some of Google Cloud Platform\u2019s pricing innovations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sub-hour billing"),(0,i.kt)("li",{parentName:"ul"},"Sustained-use discounts"),(0,i.kt)("li",{parentName:"ul"},"Compute Engine custom machine types"))),(0,i.kt)("li",{parentName:"ol"},"Name some benefits of using Google Cloud Platform other than its pricing.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Commitment to environmental responsibility"),(0,i.kt)("li",{parentName:"ul"},"Commitment to open-source technologies"),(0,i.kt)("li",{parentName:"ul"},"Robust infrastructure")))))}d.isMDXComponent=!0},6371:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/files/file-module-1_en-4e7d6b0d55156bb46397256e45c788b7.pdf"},3035:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-05-54-58-ff2cd181735df94785de0d5990676a42.png"},3092:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-05-56-21-795581a2ce7091b27739a76c77f5e525.png"},2743:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-05-59-59-9d64f5edbeb1ab7c9f3e4a59a6a25a52.png"},7976:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-06-00-44-b7433a7d9bfe8b375d104b084b4c4047.png"},9890:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-06-06-15-a9f72404d3e457643dff22a6350c7da4.png"},8595:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-06-08-41-d9fbfdfe16db165ed18a40ca135d0a5b.png"},6859:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-06-09-44-d8c949199c76652de2988c8a80b7bb92.png"},4517:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2022-07-22-06-11-13-22d425d39d2086cff3d6d4cc45022798.png"}}]);