"use strict";(self.webpackChunklearning=self.webpackChunklearning||[]).push([[1241],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var l=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),c=function(e){var a=l.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=c(e.components);return l.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?l.createElement(h,n(n({ref:a},d),{},{components:t})):l.createElement(h,n({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,n=new Array(i);n[0]=p;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=t[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9633:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var l=t(7462),r=(t(7294),t(3905));const i={id:"Section 29. Oracle Storage",sidebar_position:29,description:"Basics"},n=void 0,s={unversionedId:"oracle/Section 29. Oracle Storage",id:"oracle/Section 29. Oracle Storage",title:"Section 29. Oracle Storage",description:"Basics",source:"@site/docs/oracle/29_oracle-storage.md",sourceDirName:"oracle",slug:"/oracle/Section 29. Oracle Storage",permalink:"/learning/docs/oracle/Section 29. Oracle Storage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/oracle/29_oracle-storage.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{id:"Section 29. Oracle Storage",sidebar_position:29,description:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Section 28. Oracle Architecture",permalink:"/learning/docs/oracle/Section 28. Oracle Architecture"},next:{title:"Section 30. Query Tuning",permalink:"/learning/docs/oracle/Section 30. Query Tuning"}},o={},c=[{value:"What is a schema?",id:"what-is-a-schema",level:2},{value:"Logical Storage Structures",id:"logical-storage-structures",level:2},{value:"1. Data blocks",id:"1-data-blocks",level:3},{value:"2. Extents",id:"2-extents",level:3},{value:"3. Segments",id:"3-segments",level:3},{value:"4. Tablespaces",id:"4-tablespaces",level:3},{value:"Types of Tablespaces",id:"types-of-tablespaces",level:2},{value:"1. Permanent Tablespace",id:"1-permanent-tablespace",level:3},{value:"1.1 Small-file Tablespace",id:"11-small-file-tablespace",level:4},{value:"1.2 Big-file Tablespace",id:"12-big-file-tablespace",level:4},{value:"2. Temporary Tablespace",id:"2-temporary-tablespace",level:3},{value:"3. Undo Tablespace",id:"3-undo-tablespace",level:3},{value:"High Water Mark",id:"high-water-mark",level:2},{value:"Physical Storage Structures",id:"physical-storage-structures",level:2},{value:"Data files",id:"data-files",level:3},{value:"Control files",id:"control-files",level:3},{value:"Online redo log files",id:"online-redo-log-files",level:3},{value:"Archived redo log files",id:"archived-redo-log-files",level:3},{value:"Backup files",id:"backup-files",level:3},{value:"Parameter files",id:"parameter-files",level:3},{value:"Password file",id:"password-file",level:3},{value:"Networking files",id:"networking-files",level:3},{value:"Trace file (.trc)",id:"trace-file-trc",level:3},{value:"Alert log",id:"alert-log",level:3}],d={toc:c};function u(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-schema"},"What is a schema?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas are collections of objects for each user in Oracle database")),(0,r.kt)("h2",{id:"logical-storage-structures"},"Logical Storage Structures"),(0,r.kt)("h3",{id:"1-data-blocks"},"1. Data blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the data is stored in blocks."),(0,r.kt)("li",{parentName:"ul"},"Data blocks are the smallest units of storage that oracle can use or allocate."),(0,r.kt)("li",{parentName:"ul"},"A block and have 2KB to 32KB size(8KB default). This 8KB can contain 100 to 1000 of rows"),(0,r.kt)("li",{parentName:"ul"},"A block can store row data and index data"),(0,r.kt)("li",{parentName:"ul"},"One logical data block corresponds to a specific number of bytes of physical disk space."),(0,r.kt)("li",{parentName:"ul"},"Each operating system has what is called a block size. Oracle requests data in multiples of Oracle blocks, not operating system blocks. Therefore, you should set the Oracle block size to a multiple of the operating system block size to avoid unnecessary I/O. Usually 8 kb"),(0,r.kt)("li",{parentName:"ul"},"A Block has block header and rows"),(0,r.kt)("li",{parentName:"ul"},"Block header includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Block type information(row data or index data)"),(0,r.kt)("li",{parentName:"ul"},"Table information"),(0,r.kt)("li",{parentName:"ul"},"Row directory (Address of each row) => ROWID\n",(0,r.kt)("img",{src:t(2165).Z,width:"364",height:"648"})))),(0,r.kt)("li",{parentName:"ul"},"Oracle leaves some space after each row to accomodate any updates or length increase on that row."),(0,r.kt)("li",{parentName:"ul"},"If the updated row is not able to occupy in the free space oracle allocated for each row, it will delete from that place and keep in other free space in same block."),(0,r.kt)("li",{parentName:"ul"},"If that block doesnt have free space, it will be written into another block"),(0,r.kt)("li",{parentName:"ul"},"We can use ",(0,r.kt)("strong",{parentName:"li"},"PCTFREE")," or ",(0,r.kt)("strong",{parentName:"li"},"PCTUSE")," paramters to specify the space size in blocks while creating a table."),(0,r.kt)("li",{parentName:"ul"},"If we dont leave space after the row, each update will probably cause it to move to different place in same block or move to different block. This will cause performance issues. I/O operations will increase."),(0,r.kt)("li",{parentName:"ul"},"If this row moved from its original place, address will change and indexes will also has to be updated."),(0,r.kt)("li",{parentName:"ul"},"If two tables are clustered, another table's rows can come in the same block. Otherwise a block will contain only a single table's rows."),(0,r.kt)("li",{parentName:"ul"},"Free spaces at the bottom in a block, will be used to accomodate new rows inserts."),(0,r.kt)("li",{parentName:"ul"},"Reading a table's row from single block will be faster than reading from multiple blocks"),(0,r.kt)("li",{parentName:"ul"},"Row contains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Row Overhead"),(0,r.kt)("li",{parentName:"ul"},"Number of columns"),(0,r.kt)("li",{parentName:"ul"},"Cluster Key ID(if clustered)"),(0,r.kt)("li",{parentName:"ul"},"ROWID of Chained Row Pieces(if any)"),(0,r.kt)("li",{parentName:"ul"},"Column length"),(0,r.kt)("li",{parentName:"ul"},"Column value\n",(0,r.kt)("img",{src:t(9838).Z,width:"826",height:"582"})))),(0,r.kt)("li",{parentName:"ul"},"Before each column value, column length is defined. Reader process need to know where to start and where to end.")),(0,r.kt)("h3",{id:"2-extents"},"2. Extents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extents are the logical unit of database which is made of contiguous multiple numbers of the oracle data blocks."),(0,r.kt)("li",{parentName:"ul"},"Default is 1 MB")),(0,r.kt)("h3",{id:"3-segments"},"3. Segments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A segment is a set of extents which has been allocated for a specific data structure and all of which are stored in the same tablespace."),(0,r.kt)("li",{parentName:"ul"},"For example, each table's data is stored in its own data segment, while each index's data is stored in its own index segment. If the table or index is partitioned, each partition is stored in its own segment."),(0,r.kt)("li",{parentName:"ul"},"Whenever the existing space in a segment is completely used or full, oracle allocates a new extent for the segment."),(0,r.kt)("li",{parentName:"ul"},"So the extents of a segment may or may not be contiguous on disk."),(0,r.kt)("li",{parentName:"ul"},"The segments also can span datafiles, but the individual extents cannot."),(0,r.kt)("li",{parentName:"ul"},"Types of segments: Data segments, Index segments, Undo segments, Temporary segments")),(0,r.kt)("h3",{id:"4-tablespaces"},"4. Tablespaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tablespaces are the bridge between physical and logical components of the Oracle database."),(0,r.kt)("li",{parentName:"ul"},"A tablespace is made up of one or more database datafiles."),(0,r.kt)("li",{parentName:"ul"},"You can make an individual tablespace online or offline and take backups individually. So it is better to create multiple tablespaces."),(0,r.kt)("li",{parentName:"ul"},"The datafiles are created automatically when the tablespace is defined."),(0,r.kt)("li",{parentName:"ul"},"When you create a tablespace, you define the initial size of the associated datafile.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES\nWHERE PROPERTY_NAME = 'DEFAULT_PERMANENT_TABLESPACE';\n----\nSELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES\nWHERE PROPERTY_NAME = 'DEFAULT_TEMP_TABLESPACE';\n----\nALTER DATABASE DEFAULT TABLESPACE tbs_perm_01;\nALTER DATABASE DEFAULT TEMPORARY TABLESPACE tbs_temp_01;\n----\nCREATE TABLE tbl_tblspace (value1 NUMBER(2))\nTABLESPACE SYSTEM;\n")),(0,r.kt)("h2",{id:"types-of-tablespaces"},"Types of Tablespaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSAUX")," tablespaces are always created when the database is created."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM")," tablespace always contains the data dictionary tables for the entire database."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSAUX")," tablespace is an auxiliary tablespace to the ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM")," tablespace.")),(0,r.kt)("h3",{id:"1-permanent-tablespace"},"1. Permanent Tablespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contains persistent schema object. Data persist beyond the duration of a session or transaction."),(0,r.kt)("li",{parentName:"ul"},"Objects in permanent tablespaces are stored in data files.")),(0,r.kt)("h4",{id:"11-small-file-tablespace"},"1.1 Small-file Tablespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default type of tablespace in Oracle database. Can have multiple data files. Maximum of 1022 data files are allowed.")),(0,r.kt)("h4",{id:"12-big-file-tablespace"},"1.2 Big-file Tablespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suited for storing large amount of data. Allows maximum 1 data file")),(0,r.kt)("h3",{id:"2-temporary-tablespace"},"2. Temporary Tablespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporary tablespaces are used for special operations, particularly for sorting data results on disk and for hash joins in SQL."),(0,r.kt)("li",{parentName:"ul"},"For SQL with millions of rows returned, the sort operation is too large for the RAM area and must occur on disk."),(0,r.kt)("li",{parentName:"ul"},"The temporary tablespace is where this takes place.")),(0,r.kt)("h3",{id:"3-undo-tablespace"},"3. Undo Tablespace"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle Database keeps records of actions of transactions, before they are committed. These information are used to rollback or undo the changes to the database. These records are called rollback or undo records."),(0,r.kt)("li",{parentName:"ul"},"Undo data is not modified. Only data that is copied into buffer cache is modified."),(0,r.kt)("li",{parentName:"ul"},"Undo tablespace can provide ",(0,r.kt)("strong",{parentName:"li"},"flashback")," feature"),(0,r.kt)("li",{parentName:"ul"},"When the instance starts up, the database automatically selects for use the first available undo tablespace. If there is no undo tablespace available, the instance starts, but uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM")," rollback segment for undo. This is not recommended, and an alert message is written to the alert log file to warn that the system is running without an undo tablespace."),(0,r.kt)("li",{parentName:"ul"},"Committed undo information normally is lost when its undo space is overwritten by a newer transaction."),(0,r.kt)("li",{parentName:"ul"},"Space occupied by unexpired undo data in undo segments can be consumed if necessary by ongoing transactions. This is the default."),(0,r.kt)("li",{parentName:"ul"},"You can create more than one undo tablespace but only one of them can be active at any given time.")),(0,r.kt)("h2",{id:"high-water-mark"},"High Water Mark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a term used with table segments stored in the database."),(0,r.kt)("li",{parentName:"ul"},"If you envision a table, for example, as a 'flat' structure or as a series of blocks laid one after the other in a line from left to right, the high-water mark (HWM) would be the rightmost block that ever contained data."),(0,r.kt)("li",{parentName:"ul"},"HWM starts at the first block of a newly created table. As data is placed into the table over time and more blocks get used, the HWM rises."),(0,r.kt)("li",{parentName:"ul"},"If we delete some (or even all) of the rows in the table, we might have many blocks that no longer contain data, but they are still under the HWM, and they will remain under the HWM until the object is rebuilt, truncated, or shrunk.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6861).Z,width:"614",height:"837"})),(0,r.kt)("h2",{id:"physical-storage-structures"},"Physical Storage Structures"),(0,r.kt)("h3",{id:"data-files"},"Data files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every Oracle database has one or more physical data files, which contain all the database data. The data of logical database structures, such as tables and indexes, is physically stored in the data files.")),(0,r.kt)("h3",{id:"control-files"},"Control files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control file is a binary file which contains metadata specifying the physical structure of the database, including the database name and the names and locations of the database files.")),(0,r.kt)("h3",{id:"online-redo-log-files"},"Online redo log files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is a set of two(minimum) or more log files. Oracle will write every change made in the database into the first log file, and when the first log file is full, Oracle will switch to the second log file and write. We can have multiple group of redo log files to keep mirrored copies.")),(0,r.kt)("h3",{id:"archived-redo-log-files"},"Archived redo log files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An Oracle database can run in one of two modes. By default, the database is created in NOARCHIVELOG mode. In this mode, it will overwrite the redo log file once they are filled. In ARCHIVELOG mode, database archive all redo log files once they are filled instead of overwriting them.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> ARCHIVE LOG LIST; --To check whether Archive Log Mode is enabled or not\nSQL> SELECT log_mode FROM v$database\nSQL> SHUTDOWN IMMEDIATE; --To enable Archive Log Mode\nSQL> STARTUP MOUNT;\nSQL> ALTER DATABASE ARCHIVELOG;\nSQL> ALTER DATABASE OPEN;\n")),(0,r.kt)("h3",{id:"backup-files"},"Backup files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exact copy of Data files which will be stored in different place than Data files."),(0,r.kt)("li",{parentName:"ul"},"Used for disaster recovery")),(0,r.kt)("h3",{id:"parameter-files"},"Parameter files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To start a database instance, Oracle Database must read either a server parameter file (SPFILE - %ORACLE_HOME%\\dbs\\spfile%ORACLE_SID%.ora), which is recommended,"),(0,r.kt)("li",{parentName:"ul"},"or a text initialization parameter file (PFILE - %ORACLE_HOME%\\database\\init%ORACLE_SID%.ora)."),(0,r.kt)("li",{parentName:"ul"},"These files contain a list of configuration parameters like SGA size, name of database, name and location of database control files for that instance and database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPFILE")," is binary file and only Oracle database can read or write into that file."),(0,r.kt)("li",{parentName:"ul"},"You can modify the parameter's values with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER SYSTEM SET")," command."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAXDATAFILES")," specifies the maximum number of datafiles that can be open in the database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MAXINSTANCES")," specifies that only one instance can have this database mounted and open.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> STARTUP PFILE = 'C:\\ora\\pfile\\init.ora'\nSQL> CREATE SPFILE FROM PFILE = 'C:\\ora\\pfile\\init.ora'\nSQL> CREATE PFILE = 'C:\\ora\\pfile\\init.ora' FROM SPFILE\nSQL> CREATE SPFILE FROM MEMORY\n")),(0,r.kt)("h3",{id:"password-file"},"Password file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stores passwords for users with administrative privileges (SYSDBA, SYSOPER, SYSASM)."),(0,r.kt)("li",{parentName:"ul"},"Location: %ORACLE_HOME%\\database\\PWD%ORACLE_SID%.ora")),(0,r.kt)("h3",{id:"networking-files"},"Networking files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These files are used to configure the different network components of the Oracle database."),(0,r.kt)("li",{parentName:"ul"},"These include files such as tnsnames.ora and listener.ora."),(0,r.kt)("li",{parentName:"ul"},'The "listener.ora" file contains server side network configuration parameters.'),(0,r.kt)("li",{parentName:"ul"},'The "tnsnames.ora" file contains client side network configuration parameters.'),(0,r.kt)("li",{parentName:"ul"},"Location: %ORACLE_HOME%\\network\\ADMIN"),(0,r.kt)("li",{parentName:"ul"},"IO Error : The Network Adapter could not establish connection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CMD> lsnrctl status --to check the status of listener\nCMD> lsnrctl start --to start listener\n")),(0,r.kt)("h3",{id:"trace-file-trc"},"Trace file (.trc)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trace File are trace (or dump) file that Oracle Database creates to help you diagnose and resolve operating problems."),(0,r.kt)("li",{parentName:"ul"},"Each server and background process writes to a trace file."),(0,r.kt)("li",{parentName:"ul"},"When a process detects an internal error, it writes information about the error to its trace file.")),(0,r.kt)("h3",{id:"alert-log"},"Alert log"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The alert log file is a chronological log of messages and errors written out by an Oracle Database."),(0,r.kt)("li",{parentName:"ul"},"Typical messages found in this file is: database startup, shutdown, log switches, space errors, etc."),(0,r.kt)("li",{parentName:"ul"},"This file should constantly be monitored to detect unexpected messages and corruptions."),(0,r.kt)("li",{parentName:"ul"},"Location:%ORACLE_BASE%\\diag\\rdbms\\%ORACLE_SID%\\%ORACLE_SID%\\trace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SQL> SHOW PARAMETER background\n")))}u.isMDXComponent=!0},6861:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/2022-07-11-14-31-40-703874f091a5ab148a3540df5024b3e1.png"},2165:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/2022-11-12-22-36-47-5cbd1515d9828df9b7d99b562023ed2d.png"},9838:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/2022-11-12-22-40-39-d4c805f77960f0b32c4fb081d83818b9.png"}}]);