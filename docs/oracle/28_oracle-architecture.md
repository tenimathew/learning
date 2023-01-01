---
id: Section 28. Oracle Architecture
sidebar_position: 28
description: Basics
---

## Database and Instance

## Architecture

![](img/2022-11-12-21-40-04.png)

### 1. User Process

- User who executes the query

### 2. PGA

- Program global area/ Process global area/ Private global area.
- It is a memory that is dedicated to a single user.
- It is not a shared memory area
  ![](img/2022-11-12-22-44-56.png)
- Less memory for PGA will decrease the performance and large memory area will increase the performance
- Oracle can automatically maintain it or you can assign the memory for PGA

#### 2.1 Session Area

- Stores session information of each user
- Stores session variables, login information, session status
- They all use memory in database. So need to close all connection when you are done with the tranasction(when using java/.net also).

#### 2.2 Private SQL Area

- Persistent Area
  - Stores bind variables
  - Each query is converted into a cursor in database
- Runtime Area
  - Execution state information. Ex:How much did we read from DB, Did it complete etc.

#### 2.3 Cursor Area

- Stores information of cursors

#### 2.4 SQL Work Area

- Sort, Group, Merge etc is done in this area.

- Sort Area => Order by, Group by, Rollup, Windowing etc.
- Hash Join Area
- Bitmap Merge Area
- Bitmap Create Area

### 3. SGA

- Shared global area/System global area. It is an area that is shared among the users.

### 3.1 Shared Pool

#### 3.1.1 Data Dictionary Cache

- When you execute a query, oracle has to check whether you have right privilage to access that table, whether the provided column names are valid etc.
- So to make it faster, those table definitions are stored in this memory area.

#### 3.1.2 Result Cache

- If the same statement is executed again and again it will store the result in this memory area.
- Stores commonly used function results also
- DB automatically stores it or you can define store or not to store our data.

#### 3.1.3 Library Cache

- Library cache is the container and organiser of shared SQL area memory space.
- Stores procedures, packages control structures also

- **Shared SQL Area: ** SQL query execution plans are stored here. It will be shared among different users.

### 3.2 Buffer Cache

- Largest memory area in SGA
- Memory area that stores data blocks read from the disc for short period of time.
- If some data is not available in Buffer Cache, it will read absent data blocks from disk
- Buffer cache stores index data too.

#### 3.2.1 DBWR (Database Writer) -- Need more information

- When Buffer Cache gets filled or when you do commit, it will write them (**Dirty Blocks**) into the disk.

### 3.3 Redo Log Buffer

- Oracle guarantees not to lose data
- Keeps initial value of the changed value.
- Used for recovery operations
- Redo Log buffer is a circular buffer. It overwrites when it is full.
- Rollback is not done with Redo log data.

#### 3.3.1 LGWR (Log Writer) -- Need more information

- When Redo Log buffer gets filled (1/3 is full) or when you do commit, LGWR generates a **SCN (System Change Number)** to those log entries and write them to Redo Log Files in disk

### 3.4 Archived Redo Log Buffer

#### 3.4.1 AGWR

## Oracle Automatic Memory Management (AMM)

- It can manage both SGA and PGA memories
- It is recommended to leave it enabled

## Oracle Automatic Storage Management (ASM)
