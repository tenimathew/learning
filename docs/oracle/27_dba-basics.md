---
id: Section 27. Database Administration
sidebar_position: 27
description: Basics
---

## System Change Number (SCN)

- SCN (System Change Number) is a primary mechanism to maintain data consistency in Oracle database.
- Every time a user commits a transaction, Oracle records a new SCN.
- The `SCN_TO_TIMESTAMP` function can be used to map between the SCN to a point in time.
- `ORA_ROWSCN` pseudo column is useful for determining approximately when a row was last updated.

```sql
SQL> SELECT CURRENT_SCN FROM V$database;
SQL> SELECT SCN_TO_TIMESTAMP(ORA_ROWSCN) FROM employees;
SQL> SELECT ORA_ROWSCN, last_name FROM employees WHERE employee_id = 188;
```

## Background Processes

- **SMON**: System Monitor recovers after instance failure and monitors temporary segments and extents.
- **PMON**: Process Monitor recovers failed process resources.
- **DBWR**:Database Writer or Dirty Buffer Writer process is responsible for writing dirty buffers from the database buffer cache to the database data files. Generally, DBWR only writes blocks back to the data files on commit, or when the cache is full and space has to be made for more blocks.
- **LGWR**: Log Writer process is responsible for writing the log buffers out to the redo logs.
- **ARCn**: The optional Archive process writes filled redo logs to the archive log location(s).

## Oracle Versions Milestones

### Version 6

PL/SQL language introduced

### Version 7

PL/SQL stored program units introduced

### Version 8

Support for table partitioning

### Version 8i

'i' stands for internet computing. Provided native support for internet protocols and server-side support for Java enabling the database to be deployed in a multitier environment.

### Version 9i

Introduced Oracle RAC enabling multiple instances to access a single database simultaneously.
The benefits of Real Application Clusters are:

- Ability to spread CPU load across multiple servers
- Continuous Availability / High Availability (HA)
  - Protection from single instance failures
  - Protection from single server failures
- Scalability

### Version10g

- g' stands for grid computing (A computing architecture that coordinates large numbers of servers and storage to act as a single large computer).
- This release enabled organizations to virtualize computing resources by building a grid infrastructure based on low-cost commodity servers. A key goal was to make the database self-managing and self-tuning.
- Oracle Automatic Storage Management (Oracle ASM) helped achieve this goal by virtualizing and simplifying database storage management.
- Introduction of Real Application Clusters (RAC) for high availability and scalability
- Automated Storage Management (ASM) for simplified storage management
- Self-Managing Database capabilities through the Automated Maintenance Tasks feature
- Improved performance and scalability with the introduction of the Automatic Shared Memory Management feature
- The introduction of the Oracle Data Pump, a high-speed data movement utility
- Introduction of the `ROWNUM` keyword for limiting result sets
- Introduction of the `RANK`, `DENSE_RANK`, and `ROW_NUMBER` analytic functions
- Introduction of the `PIVOT` and `UNPIVOT` clauses for transforming data
- Introduction of the Oracle Regular Expressions support for pattern matching
- Introduction of the Flashback Query feature for querying historical data

### Version 11g

- Introduction of the Automatic Database Diagnostics Monitor (ADDM) for real-time problem detection and resolution
- Improved compression and data warehousing capabilities with the introduction of the Advanced Compression Option
- Introduction of the Oracle Real Application Testing option for testing and validation of system changes
- Improved security features, such as transparent data encryption and fine-grained access control
- Introduction of the Oracle Total Recall feature for temporal data management
- Introduction of the `LISTAGG` function for concatenating rows of data
- Introduction of the `WITH` clause for defining subquery factoring
- Introduction of the `SELECT FOR UPDATE SKIP LOCKED` clause for concurrent access control
- Introduction of the Oracle Data Type `FAMILY` for collections of user-defined types
- Introduction of the Oracle Database Vault feature for controlling privileged access

### Version 12c

- 'c' stands for cloud computing.
- Introduced Multitenant architecture. The multitenant architecture enables an Oracle database to function as a multitenant container database (CDB). A CDB includes zero, one, or many pluggable databases (PDBs).
- A PDB is a portable collection of schemas, schema objects, and non-schema objects. You can unplug a PDB from a CDB and plug it into a different CDB.
- All Oracle databases before Oracle Database 12c were non-CDBs.
- Introduction of the Multitenant Architecture for consolidation and cloud computing
- Improved performance and scalability with the introduction of the In-Memory Option
- Introduction of the Oracle Database In-Memory Advisor for identifying and optimizing In-Memory workloads
- Introduction of the JSON data type for storing and querying semi-structured data
- Improved security features, such as the Oracle Data Redaction feature for masking sensitive data
- Introduction of the `IDENTITY` column for generating unique values
- Introduction of the `SEQUENCE` object for generating unique values
- Introduction of the `LAG` and `LEAD` analytic functions for querying data
- Introduction of the `FOR ALL ENTRIES` clause for bulk operations
- Introduction of the JSON data type for storing and querying semi-structured data

### Oracle Database 18c:

- Introduction of the Oracle Autonomous Database, a fully-managed, self-driving, self-securing, and self-repairing database service
- Improved performance and scalability with the introduction of the Adaptive Query Optimization feature
- Introduction of the Oracle Machine Learning feature for data mining and predictive analytics
- Improved security features, such as the Oracle Database Vault feature for controlling privileged access
- Introduction of the Oracle Live SQL feature for online SQL development and collaboration
- Introduction of the Oracle Autonomous Database, a fully-managed, self-driving, self-securing, and self-repairing database service
- Introduction of the Oracle Machine Learning feature for data mining and predictive analytics
- Introduction of the Oracle Live SQL feature for online SQL development and collaboration
- Introduction of the Oracle Analytics Cloud, a fully-managed

### Oracle Database 19c:

- Introduction of the Oracle Database Cloud Service, a fully-managed, high-performance, and highly-available service
- Improved performance and scalability with the introduction of the Automatic Indexing feature
- Introduction of the Oracle Database Backup Service, a fully-managed, secure, and scalable backup service
- Improved security features, such as the Oracle Advanced Security feature for data encryption and key management
- Introduction of the Oracle Performance Hub, a centralized performance management and tuning solution

## Modes of Database Shutdown

- **SHUTDOWN IMMEDIATE**: Terminates any executing SQL, uncommitted changes are rolled back and disconnects the users; performs a check point then close the online datafiles
- **SHUTDOWN TRANSACTIONAL**:Prevents users from starting new transactions but wait till all current transactions to complete before shutting down; performs a check point then close the online datafiles
- **SHUTDOWN NORMAL**: Waits for all connected users to disconnect before shutting down; performs a check point then close the online datafiles
- **SHUTDOWN ABORT**: Closes the datafiles without checkpoint, Instance recovery is required in the next startup.
