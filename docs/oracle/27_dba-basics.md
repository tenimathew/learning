---
id: Section 27. Database Administration
sidebar_position: 27
description: Basics
---

## What is a schema?

- Schemas are collections of objects for each user in Oracle database

## Database and Instance

## Architecture

![](img/2022-11-12-21-40-04.png)

### User Process

- User who executes the query

### PGA

- Program global area/ Process global area/ Private global area.
- It is a memory that is dedicated to a single user.
- It is not a shared memory area
  ![](img/2022-11-12-22-44-56.png)
- Less memory for PGA will decrease the performance and large memory area will increase the performance
- Oracle can automatically maintain it or you can assign the memory for PGA

#### Session Area

- Stores session information of each user
- Stores session variables, login information, session status
- They all use memory in database. So need to close all connection when you are done with the tranasction(when using java/.net also).

#### Private SQL Area

- Persistent Area
  - Stores bind variables
  - Each query is converted into a cursor in database
- Runtime Area
  - Execution state information. Ex:How much did we read from DB, Did it complete etc.

#### Cursor Area

- Stores information of cursors

#### SQL Work Area

- Sort, Group, Merge etc is done in this area.

- Sort Area => Order by, Group by etc.
- Hash Join Area
- Bitmap Merge Area
- Bitmap Create Area

### SGA

- Shared global area/System global area. It is an area that is shared among the users.

### Shared Pool

#### Data Dictionary Cache

- When you execute a query, oracle has to check whether you have right privilage to access that table, whether the provided column names are valid etc.
- So to make it faster, those table definitions are stored in this memory area.

#### Result Cache

- If the same statement is executed again and again it will store the result in this memory area.
- Stores commonly used function results also
- DB automatically stores it or you can define store or not to store our data.

#### Library Cache

- Library cache is the container and organiser of shared SQL area memory space.
- Stores procedures, packages control structures also

- Shared SQL Area
  - SQL query execution plans are stored here. It will be shared among different users.

### Buffer Cache

- Largest memory area in SGA
- Memory area that stores data blocks read from the disc for short period of time.
- If some data is not available in Buffer Cache, it will read absent data blocks from disk
-

### Redo Log Buffer

- Keeps initial value of the change. Used to for rollback.

## Logical Storage Structures

### Data blocks

- All the data is stored in blocks.
- Data blocks are the smallest units of storage that oracle can use or allocate.
- A block and have 2KB to 32KB size(8KB default)
- One logical data block corresponds to a specific number of bytes of physical disk space.
- Each operating system has what is called a block size. Oracle requests data in multiples of Oracle blocks, not operating system blocks. Therefore, you should set the Oracle block size to a multiple of the operating system block size to avoid unnecessary I/O. Usually 8 kb
- A Block has block header and rows
- Block header includes:
  - Block type information(row data or index data)
  - Table information
  - Row directory (Address of each row) => ROWID
    ![](img/2022-11-12-22-36-47.png)
- Oracle leaves some space after each row to accomodate any updates or length increase on that row.
- If the updated row is not able to occupy in the free space oracle allocated for each row, it will delete from that place and keep in other free space in same block.
- If that block doesnt have free space, it will be written into another block
- We can use **PCTFREE** or **PCTUSE** paramters to specify the space size in blocks while creating a table.
- If we dont leave space after the row, each update will probably cause it to move to different place in same block or move to different block. This will cause performance issues. I/O operations will increase.
- If this row moved from its original place, address will change and indexes will also has to be updated.
- If two tables are clustered, another table's rows can come in the same block. Otherwise a block will contain only a single table's rows. Free spaces in that block will be used for new inserts.
- Reading a tables row from single block will be faster than reading from multiple blocks
- Row contains:
  - Row Overhead
  - Number of columns
  - Cluster Key ID(if clustered)
  - ROWID of Chained Row Pieces(if any)
  - Column length
  - Column value
    ![](img/2022-11-12-22-40-39.png)
- Before each column value, column length is defined. Reader process need to know where to start and where to end.

### Extents

- Extents are the logical unit of database which is made of contiguous multiple numbers of the oracle data blocks.
- Default is 1 MB

### Segments

- A segment is a set of extents which has been allocated for a specific data structure and all of which are stored in the same tablespace.
- For example, each table's data is stored in its own data segment, while each index's data is stored in its own index segment. If the table or index is partitioned, each partition is stored in its own segment.
- Whenever the existing space in a segment is completely used or full, oracle allocates a new extent for the segment.
- So the extents of a segment may or may not be contiguous on disk.
- The segments also can span datafiles, but the individual extents cannot.

### Tablespaces

- Tablespaces are the bridge between physical and logical components of the Oracle database.
- A tablespace is made up of one or more database datafiles.
- The datafiles are created automatically when the tablespace is defined.
- When you create a tablespace, you define the initial size of the associated datafile.

```sql
SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES
WHERE PROPERTY_NAME = 'DEFAULT_PERMANENT_TABLESPACE';
----
SELECT PROPERTY_VALUE FROM DATABASE_PROPERTIES
WHERE PROPERTY_NAME = 'DEFAULT_TEMP_TABLESPACE';
----
ALTER DATABASE DEFAULT TABLESPACE tbs_perm_01;
ALTER DATABASE DEFAULT TEMPORARY TABLESPACE tbs_temp_01;
----
CREATE TABLE tbl_tblspace (value1 NUMBER(2))
TABLESPACE SYSTEM;
```

## Types of Tablespaces

- `SYSTEM` and `SYSAUX` tablespaces are always created when the database is created.
- The `SYSTEM` tablespace always contains the data dictionary tables for the entire database.
- The `SYSAUX` tablespace is an auxiliary tablespace to the `SYSTEM` tablespace.

### Permanent Tablespace

- Contains persistent schema object. Data persist beyond the duration of a session or transaction.
- Objects in permanent tablespaces are stored in data files.

#### Small-file Tablespace

- Default type of tablespace in Oracle database. Can have multiple data files. Maximum of 1022 data files are allowed.

#### Big-file Tablespace

- Suited for storing large amount of data. Allows maximum 1 data file

### Temporary Tablespace

- Temporary tablespaces are used for special operations, particularly for sorting data results on disk and for hash joins in SQL.
- For SQL with millions of rows returned, the sort operation is too large for the RAM area and must occur on disk.
- The temporary tablespace is where this takes place.

### Undo Tablespace

Oracle Database keeps records of actions of transactions, before they are committed. These information are used to rollback or undo the changes to the database. These records are called rollback or undo records.

- When the instance starts up, the database automatically selects for use the first available undo tablespace. If there is no undo tablespace available, the instance starts, but uses the `SYSTEM` rollback segment for undo. This is not recommended, and an alert message is written to the alert log file to warn that the system is running without an undo tablespace.
- Committed undo information normally is lost when its undo space is overwritten by a newer transaction.
- Space occupied by unexpired undo data in undo segments can be consumed if necessary by ongoing transactions. This is the default.
- You can create more than one undo tablespace but only one of them can be active at any given time.

## High Water Mark

- This is a term used with table segments stored in the database.
- If you envision a table, for example, as a 'flat' structure or as a series of blocks laid one after the other in a line from left to right, the high-water mark (HWM) would be the rightmost block that ever contained data.
- HWM starts at the first block of a newly created table. As data is placed into the table over time and more blocks get used, the HWM rises.
- If we delete some (or even all) of the rows in the table, we might have many blocks that no longer contain data, but they are still under the HWM, and they will remain under the HWM until the object is rebuilt, truncated, or shrunk.

![](img/2022-07-11-14-31-40.png)

## Physical Storage Structures

### Data files

- Every Oracle database has one or more physical data files, which contain all the database data. The data of logical database structures, such as tables and indexes, is physically stored in the data files.

### Control files

- Control file is a binary file which contains metadata specifying the physical structure of the database, including the database name and the names and locations of the database files.

### Online redo log files

- It is a set of two(minimum) or more log files. Oracle will write every change made in the database into the first log file, and when the first log file is full, Oracle will switch to the second log file and write. We can have multiple group of redo log files to keep mirrored copies.

### Archived redo log files

- An Oracle database can run in one of two modes. By default, the database is created in NOARCHIVELOG mode. In this mode, it will overwrite the redo log file once they are filled. In ARCHIVELOG mode, database archive all redo log files once they are filled instead of overwriting them.

```sql
SQL> ARCHIVE LOG LIST; --To check whether Archive Log Mode is enabled or not
SQL> SELECT log_mode FROM v$database
SQL> SHUTDOWN IMMEDIATE; --To enable Archive Log Mode
SQL> STARTUP MOUNT;
SQL> ALTER DATABASE ARCHIVELOG;
SQL> ALTER DATABASE OPEN;
```

### Parameter files

- To start a database instance, Oracle Database must read either a server parameter file (SPFILE - %ORACLE_HOME%\dbs\spfile%ORACLE_SID%.ora), which is recommended,
- or a text initialization parameter file (PFILE - %ORACLE_HOME%\database\init%ORACLE_SID%.ora).
- These files contain a list of configuration parameters like SGA size, name of database, name and location of database control files for that instance and database.
- `SPFILE` is binary file and only Oracle database can read or write into that file.
- You can modify the parameter's values with the `ALTER SYSTEM SET` command.
- `MAXDATAFILES` specifies the maximum number of datafiles that can be open in the database.
- `MAXINSTANCES` specifies that only one instance can have this database mounted and open.

```sql
SQL> STARTUP PFILE = 'C:\ora\pfile\init.ora'
SQL> CREATE SPFILE FROM PFILE = 'C:\ora\pfile\init.ora'
SQL> CREATE PFILE = 'C:\ora\pfile\init.ora' FROM SPFILE
SQL> CREATE SPFILE FROM MEMORY
```

### Password file

- Stores passwords for users with administrative privileges.
- Location: %ORACLE_HOME%\database\PWD%ORACLE_SID%.ora

### Networking files

- These files are used to configure the different network components of the Oracle database.
- These include files such as tnsnames.ora and listener.ora.
- The "listener.ora" file contains server side network configuration parameters.
- The "tnsnames.ora" file contains client side network configuration parameters.
- Location: %ORACLE_HOME%\network\ADMIN
- IO Error : The Network Adapter could not establish connection

```sql
CMD> lsnrctl status --to check the status of listener
CMD> lsnrctl start --to start listener
```

### Trace file (.trc)

- Trace File are trace (or dump) file that Oracle Database creates to help you diagnose and resolve operating problems.
- Each server and background process writes to a trace file.
- When a process detects an internal error, it writes information about the error to its trace file.

### Alert log

- The alert log file is a chronological log of messages and errors written out by an Oracle Database.
- Typical messages found in this file is: database startup, shutdown, log switches, space errors, etc.
- This file should constantly be monitored to detect unexpected messages and corruptions.
- Location:%ORACLE_BASE%\diag\rdbms\%ORACLE_SID%\%ORACLE_SID%\trace

```sql
SQL> SHOW PARAMETER background
```

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
