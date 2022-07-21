"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[12],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(a),p=l,N=c["".concat(o,".").concat(p)]||c[p]||u[p]||r;return a?n.createElement(N,s(s({ref:t},m),{},{components:a})):n.createElement(N,s({ref:t},m))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},431:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={id:"Section 25. Collections",sidebar_position:25,description:"Collections"},s=void 0,i={unversionedId:"oracle/Section 25. Collections",id:"oracle/Section 25. Collections",title:"Section 25. Collections",description:"Collections",source:"@site/docs/oracle/25_collections.md",sourceDirName:"oracle",slug:"/oracle/Section 25. Collections",permalink:"/learning/docs/oracle/Section 25. Collections",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracle/25_collections.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{id:"Section 25. Collections",sidebar_position:25,description:"Collections"},sidebar:"tutorialSidebar",previous:{title:"Section 24. Stored Objects",permalink:"/learning/docs/oracle/Section 24. Stored Objects"},next:{title:"Section 26. Cursors",permalink:"/learning/docs/oracle/Section 26. Cursors"}},o={},d=[{value:"Nested Tables",id:"nested-tables",level:2},{value:"Nested Table type as block member",id:"nested-table-type-as-block-member",level:3},{value:"Nested table type as Database Object",id:"nested-table-type-as-database-object",level:3},{value:"Nested table using user defined datatype",id:"nested-table-using-user-defined-datatype",level:3},{value:"VARRAYs",id:"varrays",level:2},{value:"VARRAYs as block member",id:"varrays-as-block-member",level:3},{value:"To modify VARRAY size limit",id:"to-modify-varray-size-limit",level:3},{value:"VARRAY as Database Object",id:"varray-as-database-object",level:3},{value:"Associative Arrays/ Index by table",id:"associative-arrays-index-by-table",level:2},{value:"NLS_SORT and NLS_COMP",id:"nls_sort-and-nls_comp",level:2},{value:"Collection Methods (3 Procedures + 7 Functions)",id:"collection-methods-3-procedures--7-functions",level:2},{value:"EXTEND Procedure with 1 argument",id:"extend-procedure-with-1-argument",level:3},{value:"EXTEND Procedure without argument",id:"extend-procedure-without-argument",level:3}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"nested-tables"},"Nested Tables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Persistent collection -Stores data and structure physically into the database as database object"),(0,l.kt)("li",{parentName:"ul"},"No upper limits on rows (Unbounded)"),(0,l.kt)("li",{parentName:"ul"},"Need external table for its storage (STORE AS clause --while creating table)"),(0,l.kt)("li",{parentName:"ul"},"Initialization needed before assigning values to elements")),(0,l.kt)("h3",{id:"nested-table-type-as-block-member"},"Nested Table type as block member"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE names_table IS TABLE OF VARCHAR2(10);\n    TYPE grades IS TABLE OF INTEGER(2);\n    names names_table;\n    marks grades;\n    total INTEGER(3);\nBEGIN\n    names := names_table('Kavita','Pritam','Ayan','Rishav','Aziz'); --Initialization\n    names(1) := 'Gaurav'; --Assigning\n    marks := grades(98,97,78,87,92);\n    total := names.COUNT;\n    FOR i IN 1 .. total LOOP\n        DBMS_OUTPUT.PUT_LINE('Student:' || names(i) || ' Marks:' || marks(i));\n    END LOOP;\nEND;\n")),(0,l.kt)("h3",{id:"nested-table-type-as-database-object"},"Nested table type as Database Object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE my_nested_table IS TABLE OF VARCHAR2(10);\n----\nCREATE TABLE my_subject(\n    sub_id NUMBER(3),\n    sub_name VARCHAR2(20),\n    sub_schedule_day my_nested_table --nested table type\n    ) NESTED TABLE sub_schedule_day --name of the column you want to use as nested table column\nSTORE AS nested_tab_space; --storage table for your nested table type (user-defined name)\n----\nINSERT INTO my_subject VALUES(101,'Maths',my_nested_table('Monday','Friday'));\n----\nSELECT sub.sub_id, sub.sub_name,ss_day.COLUMN_VALUE\nFROM my_subject sub,\nTABLE(sub.sub_schedule_day) ss_day --Table expression\n")),(0,l.kt)("h3",{id:"nested-table-using-user-defined-datatype"},"Nested table using user defined datatype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE object_type AS OBJECT( --type object_type now can be used as any other built-in datatype like VARCHAR or NUMBER\n    obj_id NUMBER,\n    obj_name VARCHAR2(10)\n);\n----\nCREATE OR REPLACE TYPE my_nesd_tbl IS TABLE OF object_type; --It is not possible to add size limit to user defined datatype like object_type(5) as we do with VARCHAR2(5)\n----\nCREATE TABLE base_table(\n    tab_id NUMBER,\n    tab_ele my_nesd_tbl\n) NESTED TABLE tab_ele STORE AS store_tab_1;\n")),(0,l.kt)("h2",{id:"varrays"},"VARRAYs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Persistent collection -Stores data and structure physically into the database as database object"),(0,l.kt)("li",{parentName:"ul"},"Can hold fixed number of elements(Bounded)"),(0,l.kt)("li",{parentName:"ul"},"Modified version of Nested tables"),(0,l.kt)("li",{parentName:"ul"},"Stored in-line with their parent record as raw value in the parent table (No need of STORE AS clause)"),(0,l.kt)("li",{parentName:"ul"},"Initialization needed before assigning values to elements")),(0,l.kt)("h3",{id:"varrays-as-block-member"},"VARRAYs as block member"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);\n    team team_four;\nBEGIN\n    team := team_four('John','Mary','Alberto','Juanita'); --Initialization\n    team(3) := 'Pierre'; --Assigning\n    team(4) := 'Yvonne';\n    FOR i IN 1..team.LIMIT LOOP\n        DBMS_OUTPUT.PUT_LINE(i || team(i));\n    END LOOP;\nEND;\n")),(0,l.kt)("h3",{id:"to-modify-varray-size-limit"},"To modify VARRAY size limit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TYPE type_name MODIFY LIMIT new_size_limit [INVALIDATE | CASCADE]\n--INVALIDATE: Marks all dependent TYPES and TABLES as INVALID\n--CASCADE: Cascades(propagate) the change to all dependent TYPES and TABLES\n")),(0,l.kt)("h3",{id:"varray-as-database-object"},"VARRAY as Database Object"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE TYPE dbObj_vry IS VARRAY(5) OF NUMBER;\n----\nCREATE TABLE calendar(\n    day_name VARCHAR2(25),\n    day_date dbObj_vry); --No STORE AS clause is needed\n----\nINSERT INTO calendar VALUES('Sunday',dbObj_vry(7,14,21,28));\n----\nSELECT tab1.day_name, tab1.day_date\nFROM calendar tab1; --Without Table expression\n----\nSELECT tab1.day_name, vry.COLUMN_VALUE\nFROM calendar tab1,\nTABLE (tab1.day_date) vry; --Table expression\n")),(0,l.kt)("p",null,"without table expression"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"DAY_NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"COLUMN_VALUE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,l.kt)("td",{parentName:"tr",align:null},"HR.DBOBJ_VRY(7,14,21,28")))),(0,l.kt)("p",null,"with table expression"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"DAY_NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"COLUMN_VALUE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,l.kt)("td",{parentName:"tr",align:null},"7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,l.kt)("td",{parentName:"tr",align:null},"14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,l.kt)("td",{parentName:"tr",align:null},"21")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,l.kt)("td",{parentName:"tr",align:null},"28")))),(0,l.kt)("h2",{id:"associative-arrays-index-by-table"},"Associative Arrays/ Index by table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Non-Persistent collection -Stores data and structure just for one session. No database object can be created."),(0,l.kt)("li",{parentName:"ul"},"Unbounded collection"),(0,l.kt)("li",{parentName:"ul"},"Hold similar data type in key-value pair"),(0,l.kt)("li",{parentName:"ul"},"Can access elements using numbers and strings as subscript values."),(0,l.kt)("li",{parentName:"ul"},"Similar to hash table in other languages."),(0,l.kt)("li",{parentName:"ul"},"Not need of initialization before assigning values to elements")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE salary IS TABLE OF NUMBER(5) INDEX BY VARCHAR2(20);\n    salary_list salary;\n    name VARCHAR2(20);\nBEGIN\n    salary_list('Ranjish') := 6200; --No initialization needed before assigning\n    salary_list('Minakshi') := 75000;\n    salary_list('Martin') := 10000;\n    name := salary_list.FIRST;\n    WHILE name IS NOT NULL LOOP\n        DBMS_OUTPUT.PUT_LINE('Salary of ' || name || 'is ' || salary_list(name));\n        name := salary_list.NEXT(name);\n    END LOOP;\nEND;\n")),(0,l.kt)("h2",{id:"nls_sort-and-nls_comp"},"NLS_SORT and NLS_COMP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In associative arrays, string index's sort order is determined by the initialization parameters ",(0,l.kt)("inlineCode",{parentName:"li"},"NLS_SORT")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NLS_COMP")," parameter"),(0,l.kt)("li",{parentName:"ul"},"If you change the value of either parameter after populating an associative array indexed by string, then the collection methods ",(0,l.kt)("inlineCode",{parentName:"li"},"FIRST"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"LAST"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"NEXT"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"PRIOR")," might return unexpected values or raise exceptions."),(0,l.kt)("li",{parentName:"ul"},"If you have changed these parameter values during your session, restore their original values before operating on associative arrays indexed by string."),(0,l.kt)("li",{parentName:"ul"},"Default value for both parameter is ",(0,l.kt)("inlineCode",{parentName:"li"},"BINARY"))),(0,l.kt)("h2",{id:"collection-methods-3-procedures--7-functions"},"Collection Methods (3 Procedures + 7 Functions)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DELETE"),"-Deletes elements from collection using index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"names.DELETE; --delete all\nnames.DELETE(1); --delete index 1\nnames.DELETE(3,6) --delete index from 3 to 6\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TRIM"),"-Deletes elements from end of varray or nested table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"names.TRIM; --removes one element from the end of the collection\nnames.TRIM(5); --removes 5 elements from the end of the collection\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXTEND"),"-Memory for storing data has to be allocated before assigning value to the individual elements in the collection. It adds elements to end of varray or nested table. Cannot be used with Associative array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"names.EXTEND; --occupy one element with NULL\nnames.EXTEND(5); --occupy 5 elements with NULL\nnames.EXTEND(5,1); --5 elements in the collection will be initialized with the value in the index 1 that is 28.\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EXISTS"),"-Returns TRUE if and only if specified element (index) of varray or nested table exists."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"IF names.EXISTS(1) THEN\n    DBMS_OUTPUT.PUT_LINE(names.COUNT);\nEND IF;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"FIRST"),",",(0,l.kt)("strong",{parentName:"p"},"LAST"),"-Returns first and last index (subscript) in collection."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DBMS_OUTPUT.PUT_LINE (names.FIRST); --prints the index of first element\nDBMS_OUTPUT.PUT_LINE (names(names.LAST)); --prints the value of last element\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"COUNT"),"-Returns number of elements in collection. No empty indexes are counted."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DBMS_OUTPUT.PUT_LINE(names.COUNT);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"LIMIT"),"-Returns maximum number of elements that collection (varray only) can have whether it is empty or not. For nested tables and associative arrays, which have no limit in size, LIMIT will return NULL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DBMS_OUTPUT.PUT_LINE(names.LIMIT);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PRIOR"),", ",(0,l.kt)("strong",{parentName:"p"},"NEXT"),"-Returns index that precedes and succeeds specified index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DBMS_OUTPUT.PUT_LINE (names.PRIOR(3)); --prints the index of previous element\nDBMS_OUTPUT.PUT_LINE (names(names.NEXT(3))); to print the value of next element\n")),(0,l.kt)("h3",{id:"extend-procedure-with-1-argument"},"EXTEND Procedure with 1 argument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);\n    team team_four := team_four();\nBEGIN\n    --if we do not want to initialize like\n    team := team_four('John','Mary','Al','Ju');\n    EXTEND will help to initialize those memory with NULL values\n    team.EXTEND(4); --will occupy 4 elements\n    team(3) := 'Pierre';\n    team(4) := 'Yvonne';\n    FOR i IN 1..team.LIMIT LOOP\n        DBMS_OUTPUT.PUT_LINE(i || team(i));\n    END LOOP;\nEND;\n")),(0,l.kt)("h3",{id:"extend-procedure-without-argument"},"EXTEND Procedure without argument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE\n    TYPE team_four IS VARRAY(4) OF VARCHAR2(15);\n    team team_four := team_four();--have to initialize without any values though. Cannot keep it as -team team_four;\nBEGIN\n    FOR i IN 1..team.LIMIT LOOP\n        team.EXTEND;--Only one element will be occupied with NULL. If we try to assign next element, we will get error; because the memory for the next element is not initialized.\n        team(i) := 'Pierre' || i;\n        DBMS_OUTPUT.PUT_LINE(i || team(i));\n    END LOOP;\nEND;\n")))}u.isMDXComponent=!0}}]);