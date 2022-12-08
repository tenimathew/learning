"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[7719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={id:"Virtual Machines",sidebar_position:3,description:"Virtual Machines"},l=void 0,r={unversionedId:"gcp/Virtual Machines",id:"gcp/Virtual Machines",title:"Virtual Machines",description:"Virtual Machines",source:"@site/docs/gcp/virtual-machines.md",sourceDirName:"gcp",slug:"/gcp/Virtual Machines",permalink:"/learning/docs/gcp/Virtual Machines",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gcp/virtual-machines.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Virtual Machines",sidebar_position:3,description:"Virtual Machines"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/learning/docs/gcp/Getting Started"},next:{title:"Storage",permalink:"/learning/docs/gcp/Storage"}},s={},c=[{value:"Virtual Private Cloud (VPC) Networking",id:"virtual-private-cloud-vpc-networking",level:2},{value:"Compute Engine",id:"compute-engine",level:2},{value:"VPC Capabilities",id:"vpc-capabilities",level:2},{value:"Cloud Load Balancing",id:"cloud-load-balancing",level:2},{value:"Google VPC offers a suite of load-balancing options",id:"google-vpc-offers-a-suite-of-load-balancing-options",level:3},{value:"Cloud DNS",id:"cloud-dns",level:2},{value:"Cloud CDN (Content Delivery Network)",id:"cloud-cdn-content-delivery-network",level:2},{value:"Google Cloud Platform offers many interconnect options",id:"google-cloud-platform-offers-many-interconnect-options",level:2},{value:"Quiz",id:"quiz",level:2},{value:"Lab",id:"lab",level:2},{value:"Create a virtual machine using the Cloud console",id:"create-a-virtual-machine-using-the-cloud-console",level:3},{value:"Create a virtual machine using the gcloud command line",id:"create-a-virtual-machine-using-the-gcloud-command-line",level:3},{value:"Connect between VM instances- In the Navigation menu, click Compute Engine &gt; VM instances.",id:"connect-between-vm-instances--in-the-navigation-menu-click-compute-engine--vm-instances",level:3}],u={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(4783).Z},"Module 3 PDF")),(0,o.kt)("h2",{id:"virtual-private-cloud-vpc-networking"},"Virtual Private Cloud (VPC) Networking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your VPC networks connect your Google Cloud Platform resources to each other and to the internet."),(0,o.kt)("li",{parentName:"ul"},"Google Cloud VPC networks are global; subnets are regional"),(0,o.kt)("li",{parentName:"ul"},"Subnets can span the zones that make up a region. You can have resources in different zones on the same subnet.\n",(0,o.kt)("img",{src:a(9019).Z,width:"1176",height:"698"})),(0,o.kt)("li",{parentName:"ul"},"You can dynamically increase the size of a subnet in a custom network by expanding the range of IP addresses allocated to it. Doing that doesn\u2019t affect already configured VMs.")),(0,o.kt)("h2",{id:"compute-engine"},"Compute Engine"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Compute Engine lets you create and run virtual machines on Google infrastructure."),(0,o.kt)("li",{parentName:"ul"},"You can create a virtual machine instance by using the Google Cloud Platform Console or the gcloud command-line tool."),(0,o.kt)("li",{parentName:"ul"},"You can choose two kinds of persistent storage standard or ssd"),(0,o.kt)("li",{parentName:"ul"},"If your application needs high performance scratch space you can attach a local ssd but be sure to store data of permanent value somewhere else because local ssd's content doesn't last past when the vm terminates that's why the other kinds are called persistent disks"),(0,o.kt)("li",{parentName:"ul"},"Compute Engine bills by the second for use of virtual machines, with a one-minute minimum. And discounts apply automatically to virtual machines that run for substantial fractions of a month. For each VM that you run for more than 25% of a month, Compute Engine automatically gives you a discount for every incremental minute. You can get up to a 30% net discount for VMs that run the entire month."),(0,o.kt)("li",{parentName:"ul"},"Compute Engine offers the ability to purchase committed use contracts in return for deeply discounted prices for VM usage. These discounts are known as ",(0,o.kt)("strong",{parentName:"li"},"committed use discounts"),". If your workload is stable and predictable, you can purchase a specific amount of vCPUs and memory for up to a 57% discount off of normal prices in return for committing to a usage term of 1 year or 3 years."),(0,o.kt)("li",{parentName:"ul"},"Suppose you have a workload that no human being is sitting around waiting to finish. Say, a batch job analyzing a large dataset. You can save money by choosing ",(0,o.kt)("strong",{parentName:"li"},"Preemptible VMs")," to run the job. A Preemptible VM is different from an ordinary Compute Engine VM in only one respect: you\u2019ve given Compute Engine permission to terminate it if its resources are needed elsewhere. You can save a lot of money with preemptible VMs, although be sure to make your job able to be stopped and restarted."),(0,o.kt)("li",{parentName:"ul"},"You don\u2019t have to select a particular option or machine type to get high throughput between your processing and your persistent disks. That\u2019s the default."),(0,o.kt)("li",{parentName:"ul"},"You can choose the machine properties of your instances, such as the number of virtual CPUs and the amount of memory, by using a set of predefined machine types or by creating your own custom machine types."),(0,o.kt)("li",{parentName:"ul"},"Compute Engine has a feature called ",(0,o.kt)("strong",{parentName:"li"},"Autoscaling")," that lets you add and take away VMs from your application based on load metrics. The other part of making that work is balancing the incoming traffic among the VMs. And Google VPC supports several different kinds of load balancing!")),(0,o.kt)("h2",{id:"vpc-capabilities"},"VPC Capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Much like physical networks, VPCs have ",(0,o.kt)("strong",{parentName:"li"},"routing tables"),". These are used to forward traffic from one instance to another instance within the same network, even across subnetworks and even between GCP zones, without requiring an external IP address. VPCs\u2019 routing tables are built in; you don\u2019t have to provision or manage a router."),(0,o.kt)("li",{parentName:"ul"},"Another thing you don\u2019t have to provision or manage for GCP: a ",(0,o.kt)("strong",{parentName:"li"},"firewall"),". VPCs give you a global distributed firewall you can control to restrict access to instances, both incoming and outgoing traffic. You can define firewall rules in terms of metadata tags on Compute Engine instances, which is really convenient. For example, you can tag all your web servers with, say, \u201cWEB,\u201d and write a firewall rule saying that traffic on ports 80 or 443 is allowed into all VMs with the \u201cWEB\u201d tag, no matter what their IP address happens to be."),(0,o.kt)("li",{parentName:"ul"},"VPCs belong to GCP projects."),(0,o.kt)("li",{parentName:"ul"},"But what if your company has several GCP projects, and the VPCs need to talk to each other",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you simply want to establish a peering relationship between two VPCs, so that they can exchange traffic, configure ",(0,o.kt)("strong",{parentName:"li"},"VPC Peering")," does."),(0,o.kt)("li",{parentName:"ul"},"If you want to use the full power of IAM to control who and what in one project can interact with a VPC in another, configure ",(0,o.kt)("strong",{parentName:"li"},"Shared VPC"),".")))),(0,o.kt)("h2",{id:"cloud-load-balancing"},"Cloud Load Balancing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Virtual machines can autoscale to respond to changing load. But how do your customers get to your application when it might be provided by four VMs one moment and forty VMs at another? ",(0,o.kt)("strong",{parentName:"li"},"Cloud Load Balancing")," is the answer."),(0,o.kt)("li",{parentName:"ul"},"Cloud Load Balancing is a fully distributed, software-defined, managed service for all your traffic. And because the load balancers don\u2019t run in VMs you have to manage, you don\u2019t have to worry about scaling or managing them. You can put Cloud Load Balancing in front of all of your traffic: HTTP(S), other TCP and SSL traffic, and UDP traffic too."),(0,o.kt)("li",{parentName:"ul"},"With Cloud Load Balancing, a single anycast IP front-ends all your backend instances in regions around the world. It provides cross-region load balancing, including automatic multi-region failover, which gently moves traffic in fractions if backends become unhealthy. Cloud Load Balancing reacts quickly to changes in users, traffic, network, backend health, and other related conditions."),(0,o.kt)("li",{parentName:"ul"},"Users get a single, global anycast IP address."),(0,o.kt)("li",{parentName:"ul"},"Traffic goes over the Google backbone from the closest point-of-presence to the user."),(0,o.kt)("li",{parentName:"ul"},"Backends are selected based on load."),(0,o.kt)("li",{parentName:"ul"},"Only healthy backends receive traffic."),(0,o.kt)("li",{parentName:"ul"},"And what if you anticipate a huge spike in demand? Say, your online game is already a hit; do you need to file a support ticket to warn Google of the incoming load? No. No so-called \u201c",(0,o.kt)("strong",{parentName:"li"},"pre-warming"),"\u201d is required.")),(0,o.kt)("h3",{id:"google-vpc-offers-a-suite-of-load-balancing-options"},"Google VPC offers a suite of load-balancing options"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8433).Z,width:"1538",height:"736"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you need cross-regional load balancing for a Web application, use HTTP(S) load balancing."),(0,o.kt)("li",{parentName:"ul"},"For Secure Sockets Layer traffic that is not HTTP, use the Global SSL Proxy load balancer."),(0,o.kt)("li",{parentName:"ul"},"If it\u2019s other TCP traffic that does not use Secure Sockets Layer, use the Global TCP Proxy load balancer."),(0,o.kt)("li",{parentName:"ul"},"Those two proxy services only work for specific port numbers, and they only work for TCP."),(0,o.kt)("li",{parentName:"ul"},"If you want to load balance UDP traffic, or traffic on any port number, you can still load balance across a GCP region with the Regional load balancer."),(0,o.kt)("li",{parentName:"ul"},"What all those services have in common is that they\u2019re intended for traffic coming into the Google network from the Internet."),(0,o.kt)("li",{parentName:"ul"},"But what if you want to load balance traffic inside your project, say, between the presentation layer and the business layer of your application? For that, use the ",(0,o.kt)("strong",{parentName:"li"},"Internal load balancer"),". It accepts traffic on a GCP internal IP address and load balances it across Compute Engine VMs.")),(0,o.kt)("h2",{id:"cloud-dns"},"Cloud DNS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One of the most famous Google services that people don\u2019t pay for is 8.8.8.8, which provides a public Domain Name Service to the world. DNS is what translates Internet hostnames to addresses"),(0,o.kt)("li",{parentName:"ul"},"But what about the Internet hostnames and addresses of applications you build in GCP?"),(0,o.kt)("li",{parentName:"ul"},"GCP offers Cloud DNS to help the world find them. It\u2019s a managed DNS service running on the same infrastructure as Google. It has low latency and high availability, and it\u2019s a cost-effective way to make your applications and services available to your users. The DNS information you publish is served from redundant locations around the world."),(0,o.kt)("li",{parentName:"ul"},"Cloud DNS is also programmable. You can publish and manage millions of DNS zones and records using the GCP Console, the command-line interface, or the API.")),(0,o.kt)("h2",{id:"cloud-cdn-content-delivery-network"},"Cloud CDN (Content Delivery Network)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google has a global system of edge caches. You can use this system to accelerate content delivery in your application using Google Cloud CDN. Your customers will experience lower network latency, the origins of your content will experience reduced load, and you can save money too. Once you've set up HTTP(S) Load Balancing, simply enable Cloud CDN with a single checkbox."),(0,o.kt)("li",{parentName:"ul"},"There are lots of other CDNs out there, of course. If you are already using one, chances are, it is a part of GCP\u2019s CDN Interconnect partner program, and you can continue to use it.")),(0,o.kt)("h2",{id:"google-cloud-platform-offers-many-interconnect-options"},"Google Cloud Platform offers many interconnect options"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1277).Z,width:"1616",height:"802"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lots of GCP customers want to interconnect their other networks to their Google VPCs. such as on-premises networks or their networks in other clouds. There are many good choices."),(0,o.kt)("li",{parentName:"ul"},"Many customers start with a Virtual Private Network connection over the Internet, using the ",(0,o.kt)("em",{parentName:"li"},"IPsec protocol"),". To make that dynamic, they use a GCP feature called ",(0,o.kt)("strong",{parentName:"li"},"Cloud Router"),". Cloud Router lets your other networks and your Google VPC exchange route information over the VPN using the ",(0,o.kt)("em",{parentName:"li"},"Border Gateway Protocol"),". For instance, if you add a new subnet to your Google VPC, your on-premises network will automatically get routes to it."),(0,o.kt)("li",{parentName:"ul"},"But some customers don\u2019t want to use the Internet, either because of security concerns or because they need more reliable bandwidth. They can consider peering with Google using ",(0,o.kt)("strong",{parentName:"li"},"Direct Peering"),". Peering means putting a router in the same public datacenter as a Google point of presence and exchanging traffic. Google has more than 100 points of presence around the world. Customers who aren\u2019t already in a point of presence can contract with a partner in the ",(0,o.kt)("strong",{parentName:"li"},"Carrier Peering program")," to get connected."),(0,o.kt)("li",{parentName:"ul"},"One downside of peering, though, is that it isn\u2019t covered by a ",(0,o.kt)("em",{parentName:"li"},"Google Service Level Agreement"),". Customers who want the highest uptimes for their interconnection with Google should use ",(0,o.kt)("strong",{parentName:"li"},"Dedicated Interconnect"),", in which customers get one or more direct, private connections to Google. If these connections have topologies that meet Google\u2019s specifications, they can be covered by up to a 99.99% SLA. These connections can be backed up by a VPN for even greater reliability."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Partner Interconnect")," provides connectivity between your on-premises network and your VPC network through a supported service provider. A Partner Interconnect connection is useful if your data center is in a physical location that can't reach a Dedicated Interconnect colocation facility or if your data needs don't warrant an entire 10 Gbps connection. Depending on your availability needs, you can configure Partner Interconnect to support mission-critical services or applications that can tolerate some downtime. As with Dedicated Interconnect, if these connections have topologies that meet Google\u2019s specifications, they can be covered by up to a 99.99% SLA, but note that Google is not responsible for any aspects of Partner Interconnect provided by the third party service provider nor any issues outside of Google's network.")),(0,o.kt)("h2",{id:"quiz"},"Quiz"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Name 3 robust networking services available to your applications on Google Cloud Platform.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Cloud Virtual Network"),(0,o.kt)("li",{parentName:"ul"},"Cloud Interconnect"),(0,o.kt)("li",{parentName:"ul"},"Cloud DNS"),(0,o.kt)("li",{parentName:"ul"},"Cloud Load Balancing"),(0,o.kt)("li",{parentName:"ul"},"Cloud CDN."))),(0,o.kt)("li",{parentName:"ol"},"Name 3 Compute Engine pricing features.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Per-second billing"),(0,o.kt)("li",{parentName:"ul"},"Custom machine types"),(0,o.kt)("li",{parentName:"ul"},"Preemptible instances."))),(0,o.kt)("li",{parentName:"ol"},"True or False: Google Cloud Load Balancing lets you balance HTTP traffic across multiple Compute Engine regions.",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","True"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","False"))),(0,o.kt)("li",{parentName:"ol"},"True or false? In Google Cloud VPCs, subnets have regional scope",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","True"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","False"))),(0,o.kt)("li",{parentName:"ol"},"True or false: If you increase the size of a subnet in a custom VPC network, the IP addresses of virtual machines already on that subnet might be affected.",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","True"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","False"))),(0,o.kt)("li",{parentName:"ol"},"True or false: You can create Compute Engine virtual machines from the command line.",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","False"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","True"))),(0,o.kt)("li",{parentName:"ol"},"What is the main reason customers choose Preemptible VMs?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","To reduce cost."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","To improve performance."))),(0,o.kt)("li",{parentName:"ol"},"Which statement is true about Google VPC networks and subnets?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Networks and subnets are global"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Networks are global; subnets are zonal"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Networks are global; subnets are regional"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Networks are regional; subnets are zonal"))),(0,o.kt)("li",{parentName:"ol"},"An application running in a Compute Engine virtual machine needs high-performance scratch space. Which type of storage meets this need?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Standard persistent"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Local standard"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Local SSD"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","SSD persistent"))),(0,o.kt)("li",{parentName:"ol"},"For which of these interconnect options is a Service Level Agreement available?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","VPNs with Cloud Router"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Carrier Peering"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Dedicated Interconnect"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Direct Peering"))),(0,o.kt)("li",{parentName:"ol"},"A GCP customer wants to load-balance traffic among the back-end VMs that form part of a multi-tier application. Which load-balancing option should this customer choose?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","The regional internal load balancer"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The global SSL proxy"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The global TCP proxy"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The regional load balancer"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The global HTTP(S) load balancer"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"True or False"),": Google Cloud Load Balancing allows you to balance HTTP-based traffic across multiple Compute Engine ",(0,o.kt)("em",{parentName:"li"},"regions."),(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","False"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","True"))),(0,o.kt)("li",{parentName:"ol"},"How do Compute Engine customers choose between big VMs and many VMs?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use big VMs for fault tolerance and elasticity; use many VMs for in-memory databases and CPU-intensive analytics"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use big VMs for in-memory databases and CPU-intensive analytics; use many VMs for fault tolerance and elasticity"))),(0,o.kt)("li",{parentName:"ol"},"Choose an application that would be suitable for running in a Preemptible VM.",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","A batch job that cannot be checkpointed and restarted"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","An online relational database"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","A batch job that can be checkpointed and restarted"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","An interactive website"))),(0,o.kt)("li",{parentName:"ol"},"How do VPC routers and firewalls work?",(0,o.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Customers provision virtual machines and run their routers and firewalls in them."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","They are managed by Google in virtual machines, which customers may never modify."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","They are managed by Google as a built-in feature."),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","They are managed by Google in virtual machines, which customers may tune or turn off.")))),(0,o.kt)("h2",{id:"lab"},"Lab"),(0,o.kt)("p",null,"In this lab, you will create virtual machine (VM) instances and connect to them. You will also connect between both instances."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a Compute Engine virtual machine using the Google Cloud Platform Console"),(0,o.kt)("li",{parentName:"ul"},"Create a Compute Engine virtual machine using the gcloud command-line interface"),(0,o.kt)("li",{parentName:"ul"},"Connect between the two instances")),(0,o.kt)("h3",{id:"create-a-virtual-machine-using-the-cloud-console"},"Create a virtual machine using the Cloud console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Navigation menu (Navigation menu), click Compute Engine > VM instances."),(0,o.kt)("li",{parentName:"ul"},"Click CREATE INSTANCE."),(0,o.kt)("li",{parentName:"ul"},"On the Create an Instance page, for Name, type my-vm-1."),(0,o.kt)("li",{parentName:"ul"},"For Region and Zone, select the region and zone assigned by Google Cloud Skills Boost."),(0,o.kt)("li",{parentName:"ul"},"For Machine type, accept the default."),(0,o.kt)("li",{parentName:"ul"},"For Boot disk, if the Image shown is not Debian GNU/Linux 10 (Buster), click Change and select Debian GNU/Linux 10 (Buster)."),(0,o.kt)("li",{parentName:"ul"},"Leave the defaults for Identity and API access unmodified."),(0,o.kt)("li",{parentName:"ul"},"For Firewall, click Allow HTTP traffic."),(0,o.kt)("li",{parentName:"ul"},"Leave all other defaults unmodified."),(0,o.kt)("li",{parentName:"ul"},"To create and launch the VM, click Create.")),(0,o.kt)("h3",{id:"create-a-virtual-machine-using-the-gcloud-command-line"},"Create a virtual machine using the gcloud command line"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Cloud console, on the top right toolbar, click the Activate Cloud Shell button (Cloud Shell icon)."),(0,o.kt)("li",{parentName:"ul"},"Click Continue."),(0,o.kt)("li",{parentName:"ul"},"To display a list of all the zones in the region to which Google Cloud Skills Boost assigned you, enter this partial command gcloud compute zones list | grep followed by the region that Google Cloud Skills Boost or your instructor assigned you to."),(0,o.kt)("li",{parentName:"ul"},"Your completed command will look like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute zones list | grep us-central1\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose a zone from that list other than the zone to which Google Cloud Skills Boost assigned you. For example, if Google Cloud Skills Boost assigned you to region us-central1 and zone us-central1-a you might choose zone us-central1-b."),(0,o.kt)("li",{parentName:"ul"},"To set your default zone to the one you just chose, enter this partial command gcloud config set compute/zone followed by the zone you chose."),(0,o.kt)("li",{parentName:"ul"},"Your completed command will look like this:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/zone us-central1-b\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To create a VM instance called my-vm-2 in that zone, execute this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud compute instances create "my-vm-2" \\\n--machine-type "n1-standard-1" \\\n--image-project "debian-cloud" \\\n--image-family "debian-10" \\\n--subnet "default"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Note: The VM can take about two minutes to launch and be fully available for use."),(0,o.kt)("li",{parentName:"ul"},"To close the Cloud Shell, execute the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"exit\n")),(0,o.kt)("h3",{id:"connect-between-vm-instances--in-the-navigation-menu-click-compute-engine--vm-instances"},"Connect between VM instances- In the Navigation menu, click Compute Engine > VM instances."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will see the two VM instances you created, each in a different zone."),(0,o.kt)("li",{parentName:"ul"},"Notice that the Internal IP addresses of these two instances share the first three bytes in common. They reside on the same subnet in their Google Cloud VPC even though they are in different zones."),(0,o.kt)("li",{parentName:"ul"},"To open a command prompt on the my-vm-2 instance, click SSH in its row in the VM instances list."),(0,o.kt)("li",{parentName:"ul"},"Use the ping command to confirm that my-vm-2 can reach my-vm-1 over the network:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ping my-vm-1.us-central1-a\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notice that the output of the ping command reveals that the complete hostname of my-vm-1 is my-vm-1.us-central1-a.c.PROJECT_ID.internal, where PROJECT_ID is the name of your Google Cloud Platform project. The Cloud console automatically supplies Domain Name Service (DNS) resolution for the internal IP addresses of VM instances."),(0,o.kt)("li",{parentName:"ul"},"Press Ctrl+C to abort the ping command."),(0,o.kt)("li",{parentName:"ul"},"Return to the Cloud Console tab."),(0,o.kt)("li",{parentName:"ul"},"Click SSH in the my-vm-1 row in the VM instances list."),(0,o.kt)("li",{parentName:"ul"},"At the command prompt on my-vm-1, install the Nginx web server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install nginx-light -y\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the nano text editor to add a custom message to the homepage of the web server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /var/www/html/index.nginx-debian.html\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the arrow keys to move the cursor to the line just below the h1 header. Add text like this, and replace YOUR_NAME with your name:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Hi from YOUR_NAME\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press Ctrl+O and then press Enter to save your edited file, and then press Ctrl+X to exit the nano text editor."),(0,o.kt)("li",{parentName:"ul"},"Confirm that the web server is serving your new page. At the command prompt on my-vm-1, execute this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The response will be the HTML source of the web server's home page, including your line of custom text."),(0,o.kt)("li",{parentName:"ul"},"Return to the command prompt on my-vm-2"),(0,o.kt)("li",{parentName:"ul"},"To confirm that my-vm-2 can reach the web server on my-vm-1, at the command prompt on my-vm-2, execute this command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://my-vm-1.us-central1-a/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The response will again be the HTML source of the web server's home page, including your line of custom text."),(0,o.kt)("li",{parentName:"ul"},"In the Navigation menu, click Compute Engine > VM instances."),(0,o.kt)("li",{parentName:"ul"},"Copy the External IP address for my-vm-1 and paste it into the address bar of a new browser tab."),(0,o.kt)("li",{parentName:"ul"},"You will see your web server's home page, including your custom text."),(0,o.kt)("li",{parentName:"ul"},"Note: If you forgot to click Allow HTTP traffic when you created the my-vm-1 VM instance, your attempt to reach your web server's home page will fail. You can add a firewall rule to allow inbound traffic to your instances, although this topic is out of scope for this course.")))}m.isMDXComponent=!0},4783:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/file-module-3_en-24d30f8f3928655403afd363d8086b67.pdf"},9019:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2022-07-22-11-04-45-6bd776aa06887f38ebfbaa105cbaab9b.png"},8433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2022-07-22-11-29-22-b10798abf0b4162323ecb5977a007356.png"},1277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2022-07-22-11-40-52-e763b25ed8159fb5a6ee24e881aee935.png"}}]);