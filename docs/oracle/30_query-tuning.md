---
id: Section 30. Query Tuning
sidebar_position: 30
description: Basics
---

## Reason for performance loss

- Structural changes of table
- Changes in data volume
- Datatype change in application. (Ex: number changed to character) Implicit casting cause performance loss
- Aged statistics (stale)
- Database upgrades
- Database prameter changes (PGA, SGA sizes)
- OS and hardware changes

## Characteristics of Bad SQL

- Unnecessary parse time
- Unnecessary I/O operations. How many blocks read to get how many rows
- Unnecessary CPU time. Join, Sort will use CPU
- Unnecessary waits
- Time on Wait (CPU) + Time on Execution = DB Time

## Effective Schema Design

- Select the datatypes carefully
- Select exactly the same data type between parent-child keys
- Enforce data integrity using foreign key or triggers
- Use normalization. This will result in smaller table.
- Select right table type
- Create clusters with commonly joined tables
- Use indexes often and select index type carefully
- Create index-organized tables (IOT). Table that is stored in index. Useful for small tables and that is used frequently.
