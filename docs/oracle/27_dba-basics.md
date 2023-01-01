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

### Version 12c

- 'c' stands for cloud computing.
- Introduced Multitenant architecture. The multitenant architecture enables an Oracle database to function as a multitenant container database (CDB). A CDB includes zero, one, or many pluggable databases (PDBs).
- A PDB is a portable collection of schemas, schema objects, and non-schema objects. You can unplug a PDB from a CDB and plug it into a different CDB.
- All Oracle databases before Oracle Database 12c were non-CDBs.

## Modes of Database Shutdown

- **SHUTDOWN IMMEDIATE**: Terminates any executing SQL, uncommitted changes are rolled back and disconnects the users; performs a check point then close the online datafiles
- **SHUTDOWN TRANSACTIONAL**:Prevents users from starting new transactions but wait till all current transactions to complete before shutting down; performs a check point then close the online datafiles
- **SHUTDOWN NORMAL**: Waits for all connected users to disconnect before shutting down; performs a check point then close the online datafiles
- **SHUTDOWN ABORT**: Closes the datafiles without checkpoint, Instance recovery is required in the next startup.
