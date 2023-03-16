---
id: Section 21. PLSQL
sidebar_position: 21
description: PLSQL
---

## Procedure Oriented vs Object Oriented

| On the basis of  | Procedure Oriented                                                           | Object Oriented                                                   |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Definition       | It is a programming paradigm that is based on subroutines or procedure calls | It is a programming paradigm that is based on concept of objects  |
| Security         | It is less secure than OOPS                                                  | Data hiding is possible in OOPs; hence it is more secure than POP |
| Approach         | It follows top-down approach                                                 | It follows bottom-up approach                                     |
| Access Modifiers | No access modifiers                                                          | Access modifiers in OOPs are PRIVATE, PUBLIC and PROTECTED        |
| Features         | Modularity Predefined functions                                              | - Inheritance                                                     |

## What is PL/SQL?

- Procedural Language/ Standard Query Language.
- It is a procedural server side programming language
- Used to bridge the gap of SQL being non-procedural.
- Case-insensitive programming language.

## Advantages of PL\SQL

- Tight integration with SQL
- Business logic can be directly implemented at database level hence reduce network latency
- High performance, High productivity
- Support object oriented programming

```sql
DECLARE
    --Declaration statements
BEGIN
    --Executable statements
EXCEPTION
    --Exception handling statements
END;
```

## PL/SQL Blocks

- Blocks are basic programming units in PL/SQL programming language

### Anonymous Block

- As this block is created without a name, this block does not create any object in the database. Thus, the scope for reusability is zero. It compiles every time you execute.

### Named Block

- It creates a database object. Complied for one time and stored for reuse.

## Early vs. Late Binding

- Late binding means code is compiled at execution. Early binding means code is compiled prior to execution.

## PL/SQL data types

PL/SQL data types are divided into 4 types:

- Scalar
- Reference
- Large Objects
- Composite

PL/SQL divides the scalar data types into four families:

- Number
- Boolean
- Character
- Datetime

### Scalar data type

- A scalar data type may have subtypes.
- A subtype is a data type that is a subset of another data type, which is its base type.
- A subtype further defines a base type by restricting the value or size of the base data type.

Note that PL/SQL scalar data types include SQL data types and its own data type such as Boolean.

### Numeric data types

- The numeric data types represent real numbers, integers, and floating-point numbers. They are stored as `NUMBER`, IEEE floating-point storage types (`BINARY_FLOAT` and `BINARY_DOUBLE`), and `PLS_INTEGER`.
- The data types `NUMBER`, `BINARY_FLOAT`, and `BINARY_DOUBLE` are SQL data types.
- The `PLS_INTEGER` datatype is specific to PL/SQL. It represents signed 32 bits integers that range from -2,147,483,648 to 2,147,483,647.
- Because `PLS_INTEGER` datatype uses hardware arithmetic, they are faster than `NUMBER` operations, which uses software arithmetic.
- In addition, `PLS_INTEGER` values require less storage than `NUMBER`. Hence, you should always use `PLS_INTEGER` values for all calculation in its range to increase the efficiency of programs.
- `PLS_INTEGER` and `BINARY_INTEGER` data types are identical.

The `PLS_INTEGER` datatype has the following predefined subtypes:

| PLS_INTEGER subtypes | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| NATURAL              | Represents nonnegative PLS_INTEGER values                                             |
| NATURALN             | Represents nonnegative PLS_INTEGER values with NOT NULL constraint                    |
| POSITIVE             | Represents positive PLS_INTEGER values                                                |
| POSITIVEN            | Represents positive PLS_INTEGER value with NOT NULL constraint                        |
| SIGNTYPE             | Represents three values -1, 0, or 1, which are useful for tri-state logic programming |
| SIMPLE_INTEGER       | Represents PLS_INTEGER values with NOT NULL constraint.                               |

### Boolean data type

- The `BOOLEAN` datatype has three data values: `TRUE`, `FALSE`, and `NULL`.
- Boolean values are typically used in control flow structure such as `IF-THEN`, `CASE`, and loop statements like `LOOP`, `FOR LOOP`, and `WHILE LOOP`.
- SQL does not have the `BOOLEAN` data type, therefore, you cannot:
  - Assign a `BOOLEAN` value to a table column.
  - Select the value from a table column into a `BOOLEAN` variable.
  - Use a `BOOLEAN` value in a SQL function.
  - Use a `BOOLEAN` expression in a SQL statement.
  - Use a `BOOLEAN` value in the `DBMS_OUTPUT.PUT_LINE` and `DBMS_OUTPUT.PUT` subprograms.

### Character data types

- The character data types represent alphanumeric text. PL/SQL uses the SQL character data types such as `CHAR`, `VARCHAR2`, `LONG`, `RAW`, `LONG RAW`, `ROWID`, and `UROWID`.
- `CHAR(n)` is a fixed-length character type whose length is from 1 to 32,767 bytes.
- `VARCHAR2(n)` is varying length character data from 1 to 32,767 bytes.

#### RAW Datatype

- In Oracle PL/SQL, RAW is a data type used to store binary data, or data which is byte oriented (for example, graphics or audio files). One of the most important things to note about RAW data is that it can only be queried or inserted; RAW data cannot be manipulated. RAW data is always returned as a hexadecimal character value

### Datetime data types

- The datetime data types represent dates, timestamp with or without time zone and intervals.
- PL/SQL datetime data types are `DATE`, `TIMESTAMP`, `TIMESTAMP WITH TIME ZONE`, `TIMESTAMP WITH LOCAL TIME ZONE`, `INTERVAL YEAR TO MONTH`, and `INTERVAL DAY TO SECOND`.

### Data type synonyms

Data types have synonyms for compartibility with non-Oracle data sources such as IBM Db2, SQL Server. And it is not a good practice to use data type synonym unless you are accessing a non-Oracle Database.

| Data Type | Synonyms                                                                     |
| --------- | ---------------------------------------------------------------------------- |
| NUMBER    | DEC, DECIMAL, DOUBLE PRECISION, FLOAT, INTEGER, INT, NUMERIC, REAL, SMALLINT |
| CHAR      | CHARACTER, STRING                                                            |
| VARCHAR2  | VARCHAR                                                                      |

### CONSTANT, DEFAULT, NOT NULL

```sql
SET SERVEROUTPUT ON;

DECLARE
    V_PI CONSTANT NUMBER(7,6):=3.14; --Assigning is mandatory
    V_NAME VARCHAR2(20) DEFAULT 'Unknown'; --Assigning is mandatory
    V_AGE NUMBER NOT NULL :=50; --Assigning is mandatory
BEGIN
    DBMS_OUTPUT.PUT_LINE('v_pi:' ||V_PI);
    DBMS_OUTPUT.PUT_LINE('v_name:'||V_NAME);
    DBMS_OUTPUT.PUT_LINE('v_age:'||V_AGE);
END;
```

## Host/Bind/Session Variable

- It is a variable of the interface. This variable can be bonded with SQL or PL\SQL anonymous block. The scope of these variables is till the end of the session. These variables always preceded with a colon (:).

```sql
VARIABLE v_bind1 VARCHAR2(25); --Not PL/SQL statement

DECLARE
BEGIN
    :v_bind1 := 'Binding 1';
    DBMS_OUTPUT.PUT_LINE(:v_bind1);
END;
--Not PL/SQL statements--
VARIABLE v_bind2 VARCHAR2(25);
VARIABLE v_bind3 VARCHAR2(25);
EXECUTE :v_bind2 := 'Binding 2'; --SQL*Plus command
EXECUTE :v_bind3 := 'Binding 3';
PRINT :v_bind2;
PRINT; --Displays all bind variable values in the session
----
SET AUTOPRINT ON --To turn on automatic printing of bind variable while assigning
```

## Anchored Data type/ Inheriting data type

- It is used to pick up data type and size from a previously declared object into a new variable. Advantage of this is, when you change the data type or size of the field in the table, it will also affect this variable. So there is less maintenance.

```sql
VNAME EMP.ENAME%TYPE;
VEMP EMP%ROWTYPE; -- Record datatype variable
```

## Naming Conventions

|                   |                        |
| ----------------- | ---------------------- |
| Package - PKG\_   | Local Variable - LV\_  |
| Procedure - PRC\_ | Global Variable - GV\_ |
| Function - FNC\_  | Cursor - C\_ or CUR\_  |
| Constants - C\_   | Bind variable - B\_    |
| Exception - E\_   | Object - \_OBJ         |
| Parameter - P\_   | Collections - \_TAB    |

## Execute Immediate (Native Dynamic)

- Using Execute Immediate, we can parse and execute any SQL statement or a PL/SQL block dynamically in Oracle database
- Use of bind variable: Security against SQL injections and performance enhancement by reducing hard parsing.
- Generally dynamic SQL is slower than static SQL so it should not be used unless absolutely necessary.
- It is faster than DBMS_SQL
- Why to use DBMS_SQL?
  - When the dynamic SQL statement has unknown number of bind variables or columns until runtime
  - When we need tp execute same SQL statement multiple times with different bind variables. (To avoid parsing)
- Main advantage of dynamic SQL is that it allows to perform DDL commands that are not supported directly within PL/SQL

```sql
BEGIN
    EXECUTE IMMEDIATE 'GRANT SELECT ON EMPLOYEES TO SYS';
END;
/
BEGIN
    EXECUTE IMMEDIATE 'GRANT SELECT ON EMPLOYEES TO SYS;';
END;
/
CREATE OR REPLACE PROCEDURE prc_create_table_dynamic
    (p_table_name IN VARCHAR2, p_col_specs IN VARCHAR2) IS
BEGIN
    EXECUTE IMMEDIATE 'CREATE TABLE '||p_table_name||' ('||p_col_specs||')';
END;
/
EXEC prc_create_table_dynamic('dynamic_temp_table', 'id NUMBER PRIMARY KEY, name VARCHAR2(100)');
/
SELECT * FROM dynamic_temp_table;
/
CREATE OR REPLACE PROCEDURE prc_generic (p_dynamic_sql IN VARCHAR2) IS
BEGIN
    EXECUTE IMMEDIATE p_dynamic_sql;
END;
/
EXEC prc_generic('drop table dynamic_temp_table');
/
EXEC prc_generic('drop procedure PRC_CREATE_TABLE_DYNAMIC');
/
DROP PROCEDURE prc_generic;

```

### Single Row Queries

```sql
DECLARE
    l_sql VARCHAR2(100);
    l_ename emp.ename%TYPE;
BEGIN
    l_sql:='SELECT ename FROM emp WHERE emp_no=1234';
    EXECUTE IMMEDIATE l_sql INTO l_ename;
END;

--------USING CLAUSE

REATE TABLE names (ID NUMBER PRIMARY KEY, NAME VARCHAR2(100));
/
CREATE OR REPLACE FUNCTION insert_values (ID IN VARCHAR2, NAME IN VARCHAR2) RETURN PLS_INTEGER IS
BEGIN
    EXECUTE IMMEDIATE 'INSERT INTO names VALUES(:a, :b)' USING ID,NAME;
    RETURN SQL%rowcount;
END;
/
SET SERVEROUTPUT ON;
DECLARE
    v_affected_rows PLS_INTEGER;
BEGIN
    v_affected_rows := insert_values(2,'John');
    dbms_output.put_line(v_affected_rows|| ' row inserted!');
END;
/
SELECT * FROM names;
/
ALTER TABLE names ADD (last_name VARCHAR2(100));
/
CREATE OR REPLACE FUNCTION update_names (ID IN VARCHAR2, last_name IN VARCHAR2) RETURN PLS_INTEGER IS
    v_dynamic_sql VARCHAR2(200);
BEGIN
    v_dynamic_sql := 'UPDATE names SET last_name = :1 WHERE id = :2' ;
    EXECUTE IMMEDIATE v_dynamic_sql USING last_name, ID;
    RETURN SQL%rowcount;
END;
/
DECLARE
    v_affected_rows PLS_INTEGER;
BEGIN
    v_affected_rows := update_names(2,'Brown');
    dbms_output.put_line(v_affected_rows|| ' row updated!');
END;
/
CREATE OR REPLACE FUNCTION update_names (ID IN VARCHAR2, last_name IN OUT VARCHAR2) RETURN PLS_INTEGER IS
    v_dynamic_sql VARCHAR2(200);
BEGIN
    v_dynamic_sql := 'UPDATE names SET last_name = :1 WHERE id = :2' ;
    EXECUTE IMMEDIATE v_dynamic_sql USING IN OUT last_name, ID;
    RETURN SQL%rowcount;
END;
/
CREATE OR REPLACE FUNCTION update_names (ID IN VARCHAR2, last_name IN VARCHAR2, first_name OUT VARCHAR2) RETURN PLS_INTEGER IS
    v_dynamic_sql VARCHAR2(200);
BEGIN
    v_dynamic_sql := 'UPDATE names SET last_name = :1 WHERE id = :2 :3' ;
    EXECUTE IMMEDIATE v_dynamic_sql USING last_name, ID, OUT first_name;
    RETURN SQL%rowcount;
END;
/
DECLARE
    v_affected_rows PLS_INTEGER;
    v_first_name VARCHAR2(100);
BEGIN
    v_affected_rows := update_names(2,'KING',v_first_name);
    dbms_output.put_line(v_affected_rows|| ' row updated!');
    dbms_output.put_line(v_first_name);
END;
/
CREATE OR REPLACE FUNCTION update_names (ID IN VARCHAR2, last_name IN VARCHAR2, first_name OUT VARCHAR2) RETURN PLS_INTEGER IS
    v_dynamic_sql VARCHAR2(200);
BEGIN
    v_dynamic_sql := 'UPDATE names SET last_name = :1 WHERE id = :2 RETURNING name INTO :3' ;
    EXECUTE IMMEDIATE v_dynamic_sql USING last_name, ID RETURNING INTO first_name;
    RETURN SQL%rowcount;
END;
/
DROP TABLE names;
DROP FUNCTION insert_values;
DROP FUNCTION update_names;

---------USING INTO CLAUSE
CREATE OR REPLACE FUNCTION get_count (table_name IN VARCHAR2) RETURN PLS_INTEGER IS
    v_count PLS_INTEGER;
BEGIN
    EXECUTE IMMEDIATE 'SELECT COUNT(*) FROM ' || table_name INTO v_count;
    RETURN v_count;
END;
/
SET SERVEROUTPUT ON;
BEGIN
    dbms_output.put_line('There are '||get_count('employees')||' rows in the employees table!');
END;
/
DECLARE
    v_table_name VARCHAR2(50);
BEGIN
    FOR r_table IN (SELECT table_name FROM user_tables) LOOP
        dbms_output.put_line('There are '||get_count(r_table.table_name)||' rows in the '||r_table.table_name||' table!');
    END LOOP;
END;
/
DECLARE
    v_table_name VARCHAR2(50);
BEGIN
    FOR r_table IN (SELECT table_name FROM user_tables) LOOP
        IF get_count(r_table.table_name) > 100 THEN
            dbms_output.put_line('There are '||get_count(r_table.table_name)||' rows in the '||r_table.table_name||' table!');
            dbms_output.put_line('It should be considered for partitioning');
        END IF;
    END LOOP;
END;
/

CREATE TABLE stock_managers AS SELECT * FROM employees WHERE job_id = 'ST_MAN';
/
CREATE TABLE stock_clerks AS SELECT * FROM employees WHERE job_id = 'ST_CLERK';
/
CREATE OR REPLACE FUNCTION get_avg_sals (p_table IN VARCHAR2, p_dept_id IN NUMBER) RETURN PLS_INTEGER IS
    v_average PLS_INTEGER;
BEGIN
    EXECUTE IMMEDIATE 'SELECT AVG(salary) FROM :1 WHERE department_id = :2' INTO v_average USING p_table, p_dept_id;
    RETURN v_average;
END;
/
SELECT get_avg_sals('stock_clerks','50') FROM dual;
/
CREATE OR REPLACE FUNCTION get_avg_sals (p_table IN VARCHAR2, p_dept_id IN NUMBER) RETURN PLS_INTEGER IS
    v_average PLS_INTEGER;
BEGIN
    EXECUTE IMMEDIATE 'SELECT AVG(salary) FROM '||p_table||' WHERE department_id = :2' INTO v_average USING p_dept_id;
    RETURN v_average;
END;
/
SELECT get_avg_sals('stock_managers','50') FROM dual;
/
DROP FUNCTION get_count;
DROP FUNCTION get_avg_sals;
DROP TABLE stock_clerks;
DROP TABLE stock_managers;

---------USING BULK COLLECT INTO

DECLARE
   TYPE t_name IS TABLE OF VARCHAR2(20);
   names   t_name;
BEGIN
    EXECUTE IMMEDIATE 'SELECT distinct first_name FROM employees'
        BULK COLLECT INTO names;
    FOR i IN 1..names.COUNT LOOP
        dbms_output.put_line(names(i));
    END LOOP;
END;
/
CREATE TABLE employees_copy AS SELECT * FROM employees;
/
DECLARE
   TYPE t_name IS TABLE OF VARCHAR2(20);
   names   t_name;
BEGIN
    EXECUTE IMMEDIATE 'UPDATE employees_copy SET salary = salary + 1000 WHERE department_id = 30 RETURNING first_name INTO :a'
        RETURNING BULK COLLECT INTO names;
    FOR i IN 1..names.COUNT LOOP
        dbms_output.put_line(names(i));
    END LOOP;
END;
/
DROP TABLE employees_copy;

```

### DDL Operations

```sql
BEGIN
    EXECUTE IMMEDIATE 'TRUNCATE TABLE my_table';
END;
```

### PL/SQL Block using EXECUTE IMMEDIATE

```sql
DECLARE
    plsql_blk VARCHAR2(400);
BEGIN
    plsql_blk := 'DECLARE
            var_user VARCHAR2(10);
        BEGIN
            SELECT user INTO var_user FROM DUAL;
            DBMS_OUTPUT.PUT_LINE(''User:'' || var_user);
        END;';
    EXECUTE IMMEDIATE plsql_blk;
END;
```

```sql
BEGIN
    FOR r_emp in (SELECT * FROM employees) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
END;
/
DECLARE
    v_dynamic_text varchar2(1000);
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employees) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text;
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    v_department_id PLS_INTEGER := 30;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employees WHERE department_id = v_department_id) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text;
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    --v_department_id pls_integer := 30;
BEGIN
    v_dynamic_text := q'[DECLARE
    v_department_id pls_integer := 30;
    BEGIN
    FOR r_emp in (SELECT * FROM employees WHERE department_id = v_department_id) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text;
END;
/
CREATE OR REPLACE PACKAGE pkg_temp AS
v_department_id_pkg PLS_INTEGER := 50;
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    --v_department_id pls_integer := 30;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employees WHERE department_id = pkg_temp.v_department_id_pkg) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text;
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    v_department_id PLS_INTEGER := 30;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employees WHERE department_id = :1) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text USING v_department_id;
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    v_department_id PLS_INTEGER := 30;
    v_max_salary PLS_INTEGER := 0;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employees WHERE department_id = :1) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
        if r_emp.salary > :sal then
            :sal := r_emp.salary;
        end if;
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text USING v_department_id, IN OUT v_max_salary;
    dbms_output.put_line('The maximum salary of this department is : '||v_max_salary);
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    v_department_id PLS_INTEGER := 30;
    v_max_salary PLS_INTEGER := 0;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employeese WHERE department_id = :1) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
        if r_emp.salary > :sal then
            :sal := r_emp.salary;
        end if;
    END LOOP;
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text USING v_department_id, IN OUT v_max_salary;
    dbms_output.put_line('The maximum salary of this department is : '||v_max_salary);
EXCEPTION
    WHEN OTHERS THEN
    dbms_output.put_line('The error is : '||sqlerrm);
END;
/
DECLARE
    v_dynamic_text VARCHAR2(1000);
    v_department_id PLS_INTEGER := 30;
    v_max_salary PLS_INTEGER := 0;
BEGIN
    v_dynamic_text := q'[BEGIN
    FOR r_emp in (SELECT * FROM employeese WHERE department_id = :1) LOOP
        dbms_output.put_line(r_emp.first_name||' '||r_emp.last_name);
        if r_emp.salary > :sal then
            :sal := r_emp.salary;
        end if;
    END LOOP;
    EXCEPTION
    WHEN OTHERS THEN
    dbms_output.put_line('The error is : '||SQLERRM);
    END;]';
    EXECUTE IMMEDIATE v_dynamic_text USING v_department_id, IN OUT v_max_salary;
    dbms_output.put_line('The maximum salary of this department is : '||v_max_salary);
END;
/
DROP PACKAGE pkg_temp;
```

### OPEN - FOR FETCH statement

```sql
DECLARE
  TYPE emp_cur_type  IS REF CURSOR;
  emp_cursor      emp_cur_type;
  emp_record      employees%rowtype;
BEGIN
  OPEN emp_cursor FOR 'SELECT * FROM employees WHERE job_id = ''IT_PROG'''; -- This performs poorly as it does not store the query in SGA as every query will be different
    FETCH emp_cursor INTO emp_record;
    dbms_output.put_line(emp_record.first_name||emp_record.last_name);
  CLOSE emp_cursor;
END;
/
DECLARE
  TYPE emp_cur_type  IS REF CURSOR;
  emp_cursor      emp_cur_type;
  emp_record      employees%rowtype;
BEGIN
  OPEN emp_cursor FOR 'SELECT * FROM employees WHERE job_id = :job' USING 'IT_PROG'; -- This performs better than before. So use USING keyword. Here, the query may be used for cursor sharing.
    FETCH emp_cursor INTO emp_record;
    dbms_output.put_line(emp_record.first_name||emp_record.last_name);
  CLOSE emp_cursor;
END;
/
DECLARE
  TYPE emp_cur_type  IS REF CURSOR;
  emp_cursor      emp_cur_type;
  emp_record      employees%rowtype;
BEGIN
  OPEN emp_cursor FOR 'SELECT * FROM employees WHERE job_id = :job' USING 'IT_PROG';
  LOOP
    FETCH emp_cursor INTO emp_record;
    EXIT WHEN emp_cursor%notfound;
    dbms_output.put_line(emp_record.first_name||emp_record.last_name);
  END LOOP;
  CLOSE emp_cursor;
END;
/
DECLARE
  TYPE emp_cur_type  IS REF CURSOR;
  emp_cursor      emp_cur_type;
  emp_record      employees%rowtype;
  v_table_name    VARCHAR(20);
BEGIN
  v_table_name := 'employees';
  OPEN emp_cursor FOR 'SELECT * FROM '||v_table_name||' WHERE job_id = :job' USING 'IT_PROG';
  LOOP
    FETCH emp_cursor INTO emp_record;
    EXIT WHEN emp_cursor%notfound;
    dbms_output.put_line(emp_record.first_name||emp_record.last_name);
  END LOOP;
  CLOSE emp_cursor;
END;
```

### Bind Variable

```sql
DECLARE
    l_sql VARCHAR2(100);
    l_ename employees.first_name%TYPE;
BEGIN
    l_sql := 'SELECT first_name FROM employees WHERE employee_id = :empno and department_id = :deptno'; --:empno is a bind variable
    EXECUTE IMMEDIATE l_sql INTO l_ename USING 100,90;--passing 100 into empno and 90 into deptno as bind variable
    DBMS_OUTPUT.PUT_LINE(l_ename);
END;
```

### BULK COLLECT INTO with EXECUTE IMMEDIATE

```sql
DECLARE
    TYPE nt_Fname IS TABLE OF VARCHAR2(60);
    fname nt_Fname;
    sql_qry VARCHAR2(150);
BEGIN
    sql_qry := 'SELECT first_name FROM employees';
    EXECUTE IMMEDIATE sql_qry BULK COLLECT INTO fname;
END;
```

## UTL_MAIL

- The `UTL_MAIL` package was introduced in Oracle 10g to provide a simple API to allow email to be sent from PL/SQL.
- The UTL_MAIL package is used to send emails that include commonly used email features.
- There are some other packages that can be used to send emails such as UTL_TCP, UTL_SMTP, APEX_MAIL...
- The UTL_MAIL package is very easy to use.
- To use UTL_MAIL, you need a SMTP server
- The UTL_MAIL package is not installed by default. You need to install it.
- Here are the steps to install & configure the UTL_MAIL package.

  - Execute below files that are available in oracle home directory
    - ? will try to automatically find oracle home directory
      @?\rdbms\admin\ut1_mail.sql
      @?\rdbms\admin\prvtmail.plb
    - or you can specify the path variable
      @ORACLE_HOME\rdbms\admin\utlmail.sq1
      @ORACLE_HOME\rdbms\admin\prvtmail.plb
    - or you can specify entire path
      @C:\OracleApp\WINDOWS.X64_193000_db_home\rdbms\admin\uti_mail.sql
      @C:\OracleApp\WINDOWS.X64_193000_db_home\rdbms\admin\prvtmail.plb
  - You can check for SMTP server name using below query or add IP/port of SMTP server
    ```sql
    SELECT * FROM v$parameter WHERE name = 'smtp_out_server';
    ALTER SYSTEM SET smtp_out_server = 'your_smtp_server';
    ```
  - Configuring Network Security: Creating ACL(Access Control List) and granting privilege to the user.

    ```sql
    BEGIN
        DBMS_NETWORK_ACL_ADMIN.CREATE_ACL (
            acl => 'mail-server.xml',
            description => 'Granting privs to required users for UTL_SMTP.xmI'
            principal => 'YOUR_USER',
            is_grant  => TRUE,
            privilege => 'connect');

        DBMS_NETWORK_ACL_ADMIN.ADD_PRIVILEGE (
            acl =› 'mail-server.xmI',
            principal => 'YOUR_USER',
            is_grant => TRUE,
            privilege =› 'resolve');

        DBMS_NETWORK_ACL_ADMIN.ASSIGN_ACL (
            acl =› 'mail-server.xm]',
            host =› 'the smtp server');
    END;
    COMMIT;
    ```

```sql
--Sending an email with the least number of parameters
BEGIN
    UTL_MAIL.send(
                  sender     => 'somebody@somedomain.com',
                  recipients => 'oraclemaster@outlook.com',
                  subject    => 'Example 1: Test Email Subject',
                  message    => 'This is a test email from someone.'
                 );
END;
/
--Sending an email with specific names to the sender and recipients
BEGIN
    UTL_MAIL.send(
                  sender     => 'Some Person <somebody@somedomain.com>',
                  recipients => 'Oracle Masters <oraclemaster@outlook.com>',
                  subject    => 'Example 2: Test Email Subject',
                  message    => 'This is a test email from someone.'
                 );
END;
/
--Sending an email with using all of the parameters
BEGIN
    UTL_MAIL.send(
                  sender     => 'somebody@somedomain.com',
                  recipients => 'oraclemaster@outlook.com',
                  cc         => 'somemanager@somedomain.something,someotherperson@somedomain.something',
                  bcc        => 'someothermanager@somedomain.com',
                  subject    => 'Example 3: Test Email Subject',
                  message    => 'This is a test email from someone.',
                  mime_type  => 'text/plain; charset=us-ascii',
                  priority   => 1, -- 1 to 5; 1 highest 5 lowest ; default -3
                  replyto    => 'somereplyaddress@somedomain.com'
                 );
END;
/
--Sending an email by dynamically filling the message body
DECLARE
    cursor cur_top_earning_emps is
                    select employee_id, first_name, last_name, salary
                    from hr.employees
                    where salary > 10000
                    order by salary desc;
    v_message varchar2(32767); -- If you need to send CLOB data, you can use UTL_SMTP package
BEGIN
    v_message := 'EMPLOYEE ID'||CHR(9)||'FIRST NAME'||CHR(9)||'LAST NAME'||CHR(9)||'EMPLOYEE ID'||CHR(13);
    for r_top in cur_top_earning_emps loop
        v_message := v_message||r_top.employee_id||CHR(9)||r_top.first_name||CHR(9)||r_top.last_name||CHR(9)||r_top.salary||CHR(13);
    end loop;

    UTL_MAIL.send(
                  sender     => 'topearnings@somedns.com',
                  recipients => 'oraclemaster@outlook.com',
                  subject    => 'Example 4: The Employees Earning More Than $10000',
                  message    => v_message
                 );
END;
/
--Sending an HTTP mail
DECLARE
    cursor cur_top_earning_emps is
                    select employee_id, first_name, last_name, salary
                    from hr.employees
                    where salary > 10000
                    order by salary desc;
    v_message varchar2(32767);
BEGIN
    v_message := '<!DOCTYPE html>
                    <html>
                       <head>
                          <meta charset=''Cp1252''>
                          <title>Top Earning Employees</title>
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <style>
                             * {
                             margin: 0;
                             padding: 0;
                             }
                             body {
                             font: 14px/1.4 Georgia, Serif;
                             }
                             /*
                             Generic Styling, for Desktops/Laptops
                             */
                             table {
                             width: 100%;
                             border-collapse: collapse;
                             }
                             /* Zebra striping */
                             tr:nth-of-type(odd) {
                             background: #eee;
                             }
                             th {
                             background: #333;
                             color: white;
                             font-weight: bold;
                             }
                             td, th {
                             padding: 6px;
                             border: 1px solid #9B9B9B;
                             text-align: left;
                             }
                             @media
                             only screen and (max-width: 760px),
                             (min-device-width: 768px) and (max-device-width: 1024px)  {
                             table, thead, tbody, th, td, tr { display: block; }
                             thead tr { position: absolute;top: -9999px;left: -9999px;}
                             tr { border: 1px solid #9B9B9B; }
                             td { border: none;border-bottom: 1px solid #9B9B9B; position: relative;padding-left: 50%; }
                             td:before { position: absolute;top: 6px;left: 6px;width: 45%; padding-right: 10px; white-space: nowrap;}
                             /*
                             Label the data
                             */
                             td:nth-of-type(0):before { content: "EMPLOYEE_ID"; }
                             td:nth-of-type(1):before { content: "FIRST_NAME"; }
                             td:nth-of-type(2):before { content: "LAST_NAME"; }
                             td:nth-of-type(3):before { content: "SALARY"; }
                             }
                             }
                          </style>
                          <!--<![endif]-->
                       </head>
                       <body>
                          <h1 style = ''text-align :center; color:green;''>Employees Earning more than $10.000 Per/month</h1>
                          <br>
                          <table>
                             <thead>
                                <tr>
                                   <th>EMPLOYEE_ID</th>
                                   <th>FIRST_NAME</th>
                                   <th>LAST_NAME</th>
                                   <th>SALARY</th>
                                </tr>
                             </thead>
                             <tbody id="data">';
    for r_top in cur_top_earning_emps loop
        v_message := v_message|| '<tr>'||
                                     '<td align="right">'||r_top.employee_id||'</td>'||
                                     '<td>'||r_top.first_name||'</td>'||
                                     '<td>'||r_top.last_name||'</td>'||
                                     '<td align="right">'||r_top.salary||'</td>'||
                                 '</tr>';

    end loop;
    v_message := v_message||'           </tbody>
                                      </table>
                                   </body>
                                </html>';
    UTL_MAIL.send(
                  sender     => 'topearnings@somedns.com',
                  recipients => 'oraclemaster@outlook.com',
                  subject    => 'Example 5: The Employees Earning More Than $10000 (HTML Formatted)',
                  message    => v_message,
                  mime_type  => 'text/html'
                 );
END;
/
------------------SEND ATTACH RAW------------

--Create a temp table
CREATE TABLE temp_table(
  id        NUMBER,
  blob_data BLOB
);
/
--2) Create a directory object
CREATE OR REPLACE DIRECTORY BLOB_DIR AS 'C:\blob_directory\';
/
--3)Write a PL/SQL Block to load your external file into a BLOB/CLOB column.
DECLARE
  v_bfile       BFILE;
  v_blob        BLOB;
  v_dest_offset INTEGER := 1;
  v_src_offset  INTEGER := 1;
BEGIN
  INSERT INTO temp_table (id, blob_data)
      VALUES (222,  empty_blob())
          RETURNING blob_data INTO v_blob;

  v_bfile := BFILENAME('BLOB_DIR', 'test_file.jpeg');
  DBMS_LOB.fileopen(v_bfile, DBMS_LOB.file_readonly);
  DBMS_LOB.loadblobfromfile (
             dest_lob    => v_blob,              -- Destination lob
             src_bfile   => v_bfile,             -- Source file path and name in the OS
             amount      => DBMS_LOB.lobmaxsize, -- Maximum LOB size.
             dest_offset => v_dest_offset,       -- Destination offset.
             src_offset  => v_src_offset);       -- Source offset.
  DBMS_LOB.fileclose(v_bfile);
  COMMIT;
END;
/
--4) Check the table to see if we could insert the blob file or not
SELECT * FROM temp_table;
/
--5) Send email with an attachment
DECLARE
    v_file BLOB;
    v_rawbuf RAW(32767);
BEGIN
    select blob_data into v_file from temp_table where rownum = 1;
    v_rawbuf := dbms_lob.substr(v_file);
    UTL_MAIL.send_attach_raw -- Can attach only 1 file. If you need to send multiple attachments, you can use UTL_SMTP or Apex mail package
    (
        sender => 'somebody@somedomain.com',
        recipients => 'oraclemaster@outlook.com',
        subject => 'Example 6: Attachment Test',
        message => 'This is a raw data',
        attachment => v_rawbuf,
        att_inline => TRUE,
        att_filename => 'testImage.jpeg'
    );
END;
/
DROP DIRECTORY blob_dir;
DROP TABLE temp_table;
/
--5) Send email with a text attachment
BEGIN
    UTL_MAIL.send_attach_varchar2
    (
        sender => 'somebody@somedomain.com',
        recipients => 'oraclemaster@outlook.com',
        subject => 'Example 7: Text Attachment Test',
        message => 'This is a text data',
        attachment => 'This is the text that will be written inside of the text file.',
        att_inline => TRUE,
        att_filename => 'testTextFile.txt'
    );
END;
```

## UTL_FILE

- In Oracle PL/SQL, `UTL_FILE` is an Oracle supplied package which is used for file operations (read and write) in conjunction with the underlying operating system.
- UTL_FILE_DIR is not used by anyone anymore. UTL_FILE_DIR lets you specify one or more directories that Oracle should use for PL/SQL file I/O. If you are specifying multiple directories, you must repeat the UTL_FILE_DIR parameter for each directory on separate lines of the initialization parameter file.

```sql
DECLARE
    tc_logfile UTL_FILE.FILE_TYPE;
    filedir VARCHAR2(10);
    v_dir VARCHAR2(100);
    read_line VARCHAR2(200);
BEGIN
    filedir := 'E:\';
    v_dir := 'CREATE OR REPLACE DIRECTORY TEMP_TEXT as '''|| filedir||'''';
    EXECUTE IMMEDIATE v_dir;
    tc_logfile := UTL_FILE.FOPEN('TEMP_TEXT','TestFile.txt','W'); --A to append; W to write; R to read; RB- Read Binary; WB - Write Binary;AB - Append Binary
    UTL_FILE.PUT_LINE(tc_logfile, 'STARTING..' || SYSTIMESTAMP);
    UTL_FILE.PUT_LINE(tc_logfile, 'This is a test file');

    IF UTL_FILE.IS_OPEN(tc_logfile) THEN
        UTL_FILE.FCLOSE(tc_logfile);
    END IF;
    tc_logfile := UTL_FILE.FOPEN('TEMP_TEXT','TestFile.txt','R');

    LOOP
        BEGIN
            UTL_FILE.GET_LINE(tc_logfile,read_line);
            DBMS_OUTPUT.PUT_LINE(read_line);
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            EXIT;
        END;
    END LOOP;

    UTL_FILE.FCLOSE(tc_logfile);
END;
```

```sql
--------------------CREATE DIRECTORY------------------------------------
CREATE DIRECTORY test_dir AS 'C:\My Folder'; -- Alias for the directory
/
-------------------GET ALL THE EXISTING DIRECTORIES--------------------
SELECT * FROM all_directories;
/
-------------------READ FROM A FILE------------------------------------
SET SERVEROUTPUT ON;
DECLARE
    v_file UTL_FILE.FILE_TYPE;
    v_line VARCHAR2(32767);
BEGIN
    v_file := UTL_FILE.FOPEN('TEST_DIR', 'temp file.txt', 'R', 32767); -- Directory name should be specified in UPPER case when using in UTL_FILE. Because it is stored in all_directories with upper case
    -- 32767 is the max line size
    LOOP
        UTL_FILE.GET_LINE(v_file, v_line); -- 3 parameters can be passed here. Ex: UTL_FILE.GET_LINE(v_file, v_line,10); -- 10 means read 10 characters per loop. So, if there are 20 characters in each line, it will read first 10 first then in second loop, reads the rest.
        dbms_output.put_line (v_line);
    END LOOP; -- After reading all lines, it raises no_data_found exception
    EXCEPTION
        WHEN no_data_found THEN
            dbms_output.put_line('The whole file is read!');
            UTL_FILE.FCLOSE(v_file); -- FCLOSE_ALL - Closes all open files that used in that session; Can use it in exception to close everything if error happens; If you close files with this procedure, IS_OPEN will return TRUE even if all the files are closed.
END;
/
-------------------GRANT OR REVOKE READ-WRITE PRIVILEGES---------------
GRANT READ, WRITE ON DIRECTORY test_dir TO hr;
REVOKE READ, WRITE ON DIRECTORY test_dir FROM hr;
/
-------------------WRITE TO A FILE USING PUT_LINE PROCEDURE-------------
DECLARE
    v_file UTL_FILE.FILE_TYPE;
BEGIN
    v_file := UTL_FILE.FOPEN('TEST_DIR', 'temp file.txt', 'w', 32767); -- Maximum number of file open simultaneously is 50
    FOR r_emp IN (select * from employees) LOOP
        UTL_FILE.PUT_LINE(v_file, r_emp.first_name||' '||r_emp.last_name); -- write with new line character. This takes 3 parameters. 3rd one is a boolean value for AUTOFLUSH(automatically flush data from memory into disk/file). Useful when debugging the code. Otherwise it will flush when the file is closed (FCLOSE) and AUTOFLUSH will enable to see realtime writing into the file.
    END LOOP;
    UTL_FILE.FCLOSE(v_file);
END;
/
-------------------WRITE TO A FILE USING PUT AND NEW_LINE---------------
DECLARE
    v_file UTL_FILE.FILE_TYPE;
BEGIN
    v_file := UTL_FILE.FOPEN('TEST_DIR', 'temp file.txt', 'w', 32767);
    FOR r_emp IN (select * from employees) LOOP
        UTL_FILE.PUT(v_file, r_emp.first_name||' '||r_emp.last_name); -- without new line character
        UTL_FILE.NEW_LINE(v_file); -- New line character; 2 parameters can be passed here. Ex: UTL_FILE.NEW_LINE(v_file,10); -- 10 means add 10 new line characters into the file. Default is 1
    END LOOP;
    UTL_FILE.FCLOSE(v_file);
END;
/
-------------------WRITE TO A FILE USING PUTF---------------------------
DECLARE
    v_file UTL_FILE.FILE_TYPE;
BEGIN
    v_file := UTL_FILE.FOPEN('TEST_DIR', 'temp file.txt', 'w', 32767);
    FOR r_emp IN (select * from employees) LOOP
        UTL_FILE.PUTF(v_file, '--> %s %s',r_emp.first_name,r_emp.last_name);--provides formatted put procedure
        --UTL_FILE.NEW_LINE(v_file);
        --UTL_FILE.PUTF(v_file, '--> %s %s\n',r_emp.first_name,r_emp.last_name);--\n for new line
    END LOOP;
    UTL_FILE.FCLOSE(v_file);
END;
/
-------------------USING FFLUSH TO WRITE IMMEDIATELY-------------------
DECLARE
    v_file UTL_FILE.FILE_TYPE;
BEGIN
    v_file := UTL_FILE.FOPEN('TEST_DIR', 'temp file.txt', 'w', 32767);
    FOR r_emp IN (select * from employees) LOOP
        UTL_FILE.PUT_LINE(v_file,r_emp.first_name||' '||r_emp.last_name);
        --UTL_FILE.FFLUSH(v_file); --Writes buffered data(data in memory) into disk/file
        --UTL_FILE.PUT_LINE(v_file,r_emp.first_name||' '||r_emp.last_name,true);
        DBMS_SESSION.SLEEP(1);
    END LOOP;
    UTL_FILE.FCLOSE(v_file);
END;
/
-------------------CHECK FILE ATTRIBUTES-----------------------------
DECLARE
    v_fexists       BOOLEAN;
    v_file_length   NUMBER;
    v_block_size    BINARY_INTEGER; -- Not the block size of the file. It is the block size of the file system. So not useful
BEGIN
    UTL_FILE.FGETATTR('TEST_DIR','temp file.txt',v_fexists,v_file_length,v_block_size);
    IF v_fexists THEN
        DBMS_OUTPUT.PUT_LINE('The file exists');
        DBMS_OUTPUT.PUT_LINE('Its length is     :'||v_file_length);
        DBMS_OUTPUT.PUT_LINE('Its block size is :'||v_block_size); -- In windows it shows 0 in Linux it shows the block size
    ELSE
        DBMS_OUTPUT.PUT_LINE('The file does not exist!');
    END IF;
END;
/
-------------------COPY THE FILE---------------------------------------
EXECUTE UTL_FILE.FCOPY('TEST_DIR','temp file.txt','TEST_DIR','temp file copy.txt'); -- "temp file" is the file name with space between
/
-------------------COPY THE FILE EX2-----------------------------------
EXECUTE UTL_FILE.FCOPY('TEST_DIR','temp file.txt','TEST_DIR','temp file copy2.txt',1,5);--Copy line 1 to 5
/
-------------------RENAME THE FILE-------------------------------------
EXECUTE UTL_FILE.FRENAME('TEST_DIR','temp file copy2.txt','TEST_DIR','temp file renamed.txt');
EXECUTE UTL_FILE.FRENAME('TEST_DIR','temp file copy2.txt','TEST_DIR','temp file renamed.txt',TRUE); -- TRUE means to replace existing file or not
/
-------------------REMOVE THE FILE-------------------------------------
EXECUTE UTL_FILE.FREMOVE('TEST_DIR','temp file renamed.txt');
EXECUTE UTL_FILE.FREMOVE('TEST_DIR','temp file copy.txt');
EXECUTE UTL_FILE.FREMOVE('TEST_DIR','temp file.txt');
/
-------------------DROP THE DIRECTORY-----------------------------------
DROP DIRECTORY test_dir;
```

- Other procedure in UTL_FILE
  - FOPEN_NCHAR: Opens a file in Unicode for input or output.
  - FGETPOS: Returns the current relative offset position within a file in bytes.
  - FSEEK: Adjusts the file pointer forward or backward within the file.
  - GET_LINE_NCHAR: Retrieves a line from the file in Unicode form.
  - GET_RAW: Reads a raw string value from a file.
  - PUT_LINE_NCHAR: Writes a Unicode string to a file with the newline character.
  - PUT_NCHAR: Writes a Unicode string to a file without the newline character.
  - PUTF_NCHAR: Provides formatted put nchar procedure.
  - PUT_RAW: Writes RAW data value to a file.

## External tables

```sql
CREATE OR REPLACE DIRECTORY directory_name AS 'C\Users'; --Directory object

CREATE TABLE students(name VARCHAR2(20),college VARCHAR2(20), major VARCHAR2(20))
ORGANIZATION EXTERNAL(
    TYPE ORACLE_LOADER
    --The ORACLE_LOADER access driver is the default. It can perform only data loads, and the data must come from text datafiles. Loads from external tables to internal tables are done by reading from the external tables' text-only datafiles.
    --The ORACLE_DATAPUMP access driver can perform both loads and unloads. The data must come from binary dump files. Loads to internal tables from external tables are done by fetching from the binary dump files. Unloads from internal tables to external tables are done by populating the external tables' binary dump files.
    DEFAULT DIRECTORY directory_name
    ACCESS PARAMETERS (
        RECORD DELIMITED BY NEWLINE
        FIELDS TERMINATED BY ',' --comma separated
        MISSING FIELD VALUE ARE NULL --if any data is missing, add them as NULL
            ( name CHAR(20),
            collage CHAR(20),
            major CHAR(20)
            )
        )
    LOCATION ('major.txt') --filename
)
REJECT LIMIT UNLIMITED; --stop the process if error comes more than specified value.
```

## Import data from Excel to Oracle using SQL Developer

- Right click the table you want to insert data -> select import data -> select excel file -> click open

## XMLELEMENT

The XMLELEMENT function is the basic unit for turning column data into XML fragments.

```sql
SQL> SELECT XMLELEMENT("name", e.first_name) AS employee FROM HR.employees e
WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<name>Louise</name>
----
SQL> SELECT XMLELEMENT("employee",
        XMLELEMENT("employee_no", e.employee_id),
        XMLELEMENT("name", e.first_name)
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee><employee_no>160</employee_no><name>Louise</name></employee>
----
SQL> SELECT XMLELEMENT("employee",
        XMLATTRIBUTES( --XMLATRIBUTES function converts column data into attributes of the parent element
            e.employee_id AS "employee_id",
            e.first_name AS "name")
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee employee_id="160" name="Louise"></employee>
----
SQL> SELECT XMLELEMENT("employee",
            XMLFOREST( --Like XMLATTRIBUTES, the XMLFOREST function allows you to process multiple columns at once.
            e.employee_id AS "employee_id",
            e.first_name AS "name")
        ) AS employee
    FROM employees e
    WHERE e.employee_id = 160;
--------------------------------------------------------------------------------
<employee><employee_id>160</employee_id><name>Louise</name></employee>
----
SQL> SELECT XMLAGG( --XMLAGG function allows to aggregate separate fragments(multiple rows of data) into a single fragment
        XMLELEMENT("emp",
            XMLFOREST(
            e.employee_id AS "empid",
            e.first_name AS "name")
        )
    ) AS employees
    FROM employees e
    WHERE e.department_id = 50;
-----------------------------------------------------------------
<emp><empid>120</empid><name>Matthew</name></emp><emp><empid>121</empid><name>Adam</name></emp><emp><empid>122</empid><name>Payam</name></emp><emp><empid>123</empid><name>Shanta</name></emp><emp><empid>123</empid><name>Kevin</name></emp>
```

## SQL Loader

SQL\*Loader is a bulk loader utility used for moving data from external files into the Oracle database.
SQL Loader Control File

```sql
LOAD DATA
INFILE 'C:\text_file.csv' --input file
BADFILE 'C:\textfile_bad.bad' --contains the records that are rejected by sql loader or oracle database becuase of invalid format. After a data is accepted by sql loader, it is sent to oracle database for insertion
DISCARDFILE 'C:\textfile_discard.dis' --records which are filtered out of the load because they don't meet the criteria specified in WHEN clause
TRUNCATE INTO TABLE table_name --TRUNCATE to delete previous data in table
--INSERT: Loads only if the target table is empty
--APPEND: Loads rows if the target table is empty or not
--REPLACE: First it delete the rows in the existing table and then loads the data
--TRUNCATE: First it truncate the table and then loads the data
WHEN OBJECT_TYPE <> 'INDEX' --i don't need any record with 'INDEX' in it
FIELDS TERMINATED BY "," OPTIONALLY ENCLOSED BY "#" --delimited by , or #
TRAILING NULL COLS --if the last column is empty, then treat this as NULL value; otherwise SQL Loader will treat this record as bad if the last column is empty
(deptno, --column names in table
dname,
jdate date'mm/dd/yyyy', --formating the date
loc"TRIM(:OBJECT_TYPE)") --TRIM the white space if any
or
(deptno position(1:3), dname position(4:8), jdate position(9:18), loc position(19:22))
or
(deptno "deptno+100", --add 100 to the deptno
dname "upper(:dname)", --upper case
jdate,
loc "decode(:loc,'Delhi','New Delhi',:loc)")
sqlldr control=C:\textfile_control.ctl log=C:\textfile_log.log --given the datafile in INFILE of control file
or
sqlldr datafile=C:\text_file.csv control=C:\textfile_control.ctl log=C:\textfile_log.log
```

## Local Screening

- If there are two variables with same name in the outer and inner block, and if we call the variable from inside the block, italways prefer the local (inner) variable. To refer to the outer variable, we need to use label.

```sql
<<out_label>>
DECLARE
    x NUMBER := 100;
BEGIN
    FOR x IN 1..10 LOOP
        DBMS_OUTPUT.PUT_LINE(out_label.x);
    END LOOP;
END;
```

## Wrapped

- Wrapping is the process of hiding PL/SQL source code.
- Wrapping helps to protect your source code from business competitors and others who might misuse it.
- Wrapped source files can be moved, backed up, and processed by SQL*Plus and the Import and Export utilities, but they are not visible through the static data dictionary views *\_SOURCE.
- You cannot edit PL/SQL source code inside wrapped files. Either wrap your code after it is ready to ship to users or include the wrapping operation as part of your build environment.
- To change wrapped PL/SQL code, edit the original source file and then wrap it again.
- Wrapping is not a secure method for hiding passwords or table names.
- To hide the workings of a trigger, write a one-line trigger that invokes a wrapped subprogram.
- Wrapping does not detect syntax or semantic errors.
- Wrapped PL/SQL units are not downward-compatible.

```sql
CMD> wrap iname="wrap_test.sql" --wrap_test.sql is the file name of a procedure (no space between the equal sign)
PL/SQL Wrapper: Release 18.0.0.0.0 -Production on Thu Aug 1 16:26:09 2019
Version 18.3.0.0.0
Copyright (c) 1982, 2018, Oracle and/or its affiliates. All rights reserved.
Processing wrap_test.sql to wrap_test.plb --output file
SQL> @wrap_test.plb
SQL> call wraptest();
----
DECLARE
    PACKAGE_TEXT VARCHAR2(32767) := 'CREATE PACKAGE emp_actions AS
    PROCEDURE raise_salary (emp_id NUMBER, amount NUMBER);
    PROCEDURE fire_employee (emp_id NUMBER);
END emp_actions;';

BEGIN
    DBMS_DDL.CREATE_WRAPPED(PACKAGE_TEXT);
END;
```

## DBMS Packages

- The DBMS_SQL(**The Method 4**) package provides an interface to use dynamic SQL to parse any data manipulation language (DML) or data definition language (DDL) statement using PL/SQL.
- Native Dynamic SQL(EXECUTE IMMEDIATE) is an alternative to DBMS_SQL that lets you place dynamic SQL statements directly into PL/SQL blocks.
- In most situations, Native Dynamic SQL is easier to use and performs better than `DBMS_SQL`.
- However, Native Dynamic SQL itself has certain limitations
- **DBMS_SQL.NATIVE** --Specifies normal behaviour for the database to which the program is connected. Can define behaviour as in Oracle version 6 and 7
- **DBMS_SQL.OPEN_CURSOR** -- Opens a new cursor and returns the cursor ID
- **DBMS_SQL.PARSE** --Parsing the statement checks the statement's syntax and associates it with the cursor in your program. You can parse any DML or DDL statement. DDL statements are run on the parse, which performs the implied commit.
  - DBMS_SQL.PARSE(cursor_id, statement, edition)
  - Edition: - 0 or V6 -> Database V6 ; 1 or NATIVE -> Default ; 2 or V7 -> Database V7 ; FOREIGN_SYNTAX -> Non oracle database syntax
- **DBMS_SQL.BIND_VARIABLE**
- **DBMS_SQL.DEFINE_COLUMN** --The columns of the row being selected in a `SELECT` statement are identified by their relative positions as they appear in the select list, from left to right
- **DBMS_SQL.EXECUTE** --Call the EXECUTE function to run your SQL statement and returns the number of rows processed
  - DBMS_SQL.EXECUTE(cursor_id)
- **DBMS_SQL.FETCH_ROWS** --The `FETCH_ROWS` function retrieves the rows that satisfy the query.
  - DBMS_SQL.FETCH_ROWS(cursor_id)
- **DBMS_SQL.COLUMN_VALUE** --call `COLUMN_VALUE` after fetching rows to actually retrieve the values of the columns in the rows into your program
- **DBMS_SQL.VARIABLE_VALUE** --call `VARIABLE_VALUE` to retrieve the value of an OUT parameter for an anonymous block
- **DBMS_SQL.CLOSE_CURSOR** --Closes the cursor; (Native dynamic SQL closes cursor itself)
  - DBMS_SQL.CLOSE_CURSOR(cursor_id)

```sql
CREATE TABLE employees_copy AS SELECT * FROM employees;

/
set serveroutput on;
DECLARE
    v_table_name VARCHAR2(20) := 'employees_copy';
    v_cursor_id PLS_INTEGER;
    v_affected_rows PLS_INTEGER;
BEGIN
    v_cursor_id := dbms_sql.open_cursor;
    dbms_sql.parse(v_cursor_id, 'update '||v_table_name||' set salary=salary+500',dbms_sql.NATIVE);
    v_affected_rows := dbms_sql.EXECUTE(v_cursor_id);
    dbms_output.put_line(v_affected_rows|| ' rows are updated by dbms_sql!');
    dbms_sql.close_cursor(v_cursor_id);
END;

/

select * from employees_copy;

/

DECLARE
    v_table_name varchar2(20) := 'employees_copy';
    v_cursor_id pls_integer;
    v_affected_rows pls_integer;
BEGIN
    v_cursor_id := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(v_cursor_id, 'update '||v_table_name||' set salary=salary+500 WHERE job_id = :jid',DBMS_SQL.NATIVE);
    DBMS_SQL.BIND_VARIABLE(v_cursor_id, ':jid','IT_PROG');
    v_affected_rows := DBMS_SQL.EXECUTE(v_cursor_id);
    dbms_output.put_line(v_affected_rows|| ' rows are updated by dbms_sql!');
    DBMS_SQL.CLOSE_CURSOR(v_cursor_id);
END;

/

DECLARE
    v_table_name varchar2(20) := 'employees_copy';
    v_cursor_id pls_integer;
    v_affected_rows pls_integer;
BEGIN
    v_cursor_id := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(v_cursor_id, 'update '||v_table_name||' set salary=salary+:inc WHERE job_id = :jid',DBMS_SQL.NATIVE);
    DBMS_SQL.BIND_VARIABLE(v_cursor_id, ':jid','IT_PROG');
    DBMS_SQL.BIND_VARIABLE(v_cursor_id, ':inc','5');
    v_affected_rows := DBMS_SQL.EXECUTE(v_cursor_id);
    dbms_output.put_line(v_affected_rows|| ' rows are updated by dbms_sql!');
    DBMS_SQL.CLOSE_CURSOR(v_cursor_id);
END;

/

SELECT * FROM user_tab_columns;
EXEC prc_method4_example('employees');
EXEC prc_method4_example('departments');
EXEC prc_method4_example('countries');
EXEC prc_method4_example('locations');
/

create or replace PROCEDURE prc_method4_example (p_table_name IN VARCHAR2) IS
    TYPE t_columns IS TABLE OF user_tab_columns%rowtype INDEX BY PLS_INTEGER;
    v_columns               t_columns;
    v_columns_with_commas   VARCHAR2(32767);
    v_number_value          NUMBER;
    v_string_value          VARCHAR2(32767);
    v_date_value            DATE;
    v_output_string         VARCHAR2(32767);
    cur_dynamic             INTEGER;
BEGIN
    SELECT * BULK COLLECT INTO v_columns FROM user_tab_columns WHERE table_name = upper(p_table_name);
    v_columns_with_commas:=v_columns(1).column_name;
    FOR i IN 2..v_columns.COUNT LOOP
        v_columns_with_commas:=v_columns_with_commas||','||v_columns(i).column_name;
    END LOOP;
    cur_dynamic := dbms_sql.open_cursor;
    dbms_sql.parse(cur_dynamic,'SELECT '||v_columns_with_commas||' FROM '||p_table_name,dbms_sql.NATIVE);
     FOR idx IN 1..v_columns.COUNT LOOP
        IF v_columns(idx).data_type = 'NUMBER' THEN
            dbms_sql.define_column(cur_dynamic,idx,1);
        ELSIF v_columns(idx).data_type IN ('VARCHAR2','VARCHAR','CHAR') THEN
            dbms_sql.define_column(cur_dynamic,idx,'dummy text',v_columns(idx).char_length);
        ELSIF v_columns(idx).data_type = 'DATE' THEN
            dbms_sql.define_column(cur_dynamic,idx,sysdate);
        END IF;
        v_output_string:=v_output_string||'  '||rpad(v_columns(idx).column_name,20);
     END LOOP;
     dbms_output.put_line(v_output_string);
     v_number_value:=dbms_sql.execute(cur_dynamic);
     WHILE dbms_sql.fetch_rows(cur_dynamic) > 0 LOOP
        v_output_string:=NULL;
        FOR t IN 1..v_columns.COUNT LOOP
            IF v_columns(T).data_type = 'NUMBER' THEN
                dbms_sql.column_value(cur_dynamic,t,v_number_value);
                v_output_string := v_output_string||'  '||rpad(nvl(to_char(v_number_value),' '),20);
            ELSIF v_columns(T).data_type IN ('VARCHAR2','VARCHAR','CHAR') THEN
                dbms_sql.column_value(cur_dynamic,t,v_string_value);
                v_output_string := v_output_string||'  '||rpad(nvl(to_char(v_string_value),' '),20);
            ELSIF v_columns(T).data_type = 'DATE' THEN
                dbms_sql.column_value(cur_dynamic,t,v_date_value);
                v_output_string := v_output_string||'  '||rpad(nvl(to_char(v_date_value),' '),20);
            END IF;
        END LOOP;
        dbms_output.put_line(v_output_string);
     END LOOP;
END;
```

- The `DBMS_RANDOM` package provides a built-in random number generator. DBMS_RANDOM is not intended for cryptography.
- **DBMS_RANDOM.VALUE**(low_value,high_value) --gets a random number with 38 digit decimal
- **DBMS_RANDOM.STRING**(single_character,length) --This function gets a random string.

- **DBMS_LOCK.SLEEP(120)** --This procedure suspends the session for a given period of time (seconds).

- **DBMS_UTILITY.FORMAT_ERROR_BACKTRACE** --This function displays the call stack at the point where an exception was raised, even if the subprogram is called from an exception handler in an outer scope
- **DBMS_UTILITY.FORMAT_ERROR_STACK** - This function formats the current error stack. This can be used in exception handlers to look at the full error stack. SQLERRM in principle gives the same info as FORMAT_ERROR_STACK. But SQLERRM is subject to some length limits, while FORMAT_ERROR_STACK is not.
- **DBMS_UTILITY.GET_TIME**
  -This function determines the current time in 100th's of a second.
  - This subprogram is primarily used for determining elapsed time.
  - The subprogram is called twice –at the beginning and end of some process –and then the first (earlier) number is subtracted from the second (later) number to determine the time elapsed.
- **DBMS_UTILITY.GET_CPU_TIME** --CPU time

- **DBMS_OUTPUT.PUT_LINE**
- **DBMS_OUTPUT.PUT_LINE($$PLSQL_LINE);** --Displays line number
- **DBMS_OUTPUT.DISABLE**

```sql
EXEC dbms_output.put_line('Test No:1');
/
SET SERVEROUTPUT ON; -- This also uses dbms_output.get_line procedure. So, if it does not have new line, it will not print
EXEC dbms_output.put_line('Test No:2');
/
EXEC dbms_output.put('Test No:3');
/
EXEC dbms_output.put_line('Test No:4');
/
SET SERVEROUTPUT OFF
/
CREATE TABLE temp_table(ID NUMBER GENERATED ALWAYS AS IDENTITY, text VARCHAR2(1000));
/
EXEC dbms_output.enable; -- Enables buffer
EXEC dbms_output.put_line('Hi');
/
DECLARE
    v_buffer VARCHAR2(1000);
    v_status INTEGER;
BEGIN
    dbms_output.put('...');
    dbms_output.put_line('Hello');
    dbms_output.put_line('How are you');
    FOR I IN 1..10 LOOP
        dbms_output.get_line(v_buffer,v_status); -- Read from buffer into v_buffer(data) and v_status(status)
        IF v_status = 0 THEN -- 0 means it read a line
            INSERT INTO temp_table(text) VALUES (v_buffer);
        END IF;
    END LOOP;
END;
/
SELECT * FROM temp_table;
/
SET SERVEROUTPUT ON;
DECLARE
    v_buffer VARCHAR2(1000);
    v_status INTEGER;
BEGIN
    dbms_output.put('...');
    dbms_output.put_line('Hello');
    dbms_output.put_line('How are you');
    dbms_output.get_line(v_buffer,v_status);
END;
/
SET SERVEROUTPUT OFF;
EXEC dbms_output.enable;
/
DECLARE
    v_buffer dbms_output.chararr; -- Inbuilt character array
    v_num_lines INTEGER:= 30;
BEGIN
    dbms_output.put('...');
    dbms_output.put_line('Hello');
    dbms_output.put_line('How are you');
    dbms_output.get_lines(v_buffer,v_num_lines);
    FOR i IN 1..v_num_lines LOOP
        INSERT INTO temp_table(text) VALUES (v_buffer(I));
    END LOOP;
END;
/
DROP TABLE temp_table;
```

- **DBMS_STATS.GATHER_TABLE_STATS** --This procedure gathers table and column (and index) statistics.

```sql
EXEC DBMS_STATS.GATHER_SCHEMA_STATS(USER, CASCADE => TRUE);
```

- **DBMS_XPLAN.DISPLAY** --to format and display the contents of a plan table.
- **DBMS_XPLAN.DISPLAY_AWR** --to format and display the contents of the execution plan of a stored SQL statement in the AWR.
- **DBMS_XPLAN.DISPLAY_CURSOR** --to format and display the contents of the execution plan of any loaded cursor.

- **DBMS_METADATA.GET_DDL**

```sql
SELECT DBMS_METADATA.GET_DDL ('TABLE', 'EMPLOYEES', 'HR') FROM DUAL;
--to get DDL for a view just replace first argument with ‘VIEW’ and second with your view name and so.
```

- **DBMS_REFRESH.ADD** --Adds materialized views to a refresh group.
- **DBMS_REFRESH.MAKE** --To make materialized view refresh group
- **DBMS_REFRESH.CHANGE** --Changes the refresh interval for a refresh group.
- **DBMS_REFRESH.DESTROY** --Removes all of the materialized views from a refresh group and deletes the refresh group.
- **DBMS_REFRESH.REFRESH** --Manually refreshes a refresh group.
- **DBMS_REFRESH.SUBTRACT** --Removes materialized views from a refresh group.

- **DBMS_MVIEW.REFRESH** --Refreshes one or more materialized views that are not members of the same refresh group
- **DBMS_MVIEW.REFRESH_ALL_MVIEWS** --Refreshes all materialized views

## Table Clusters

- A table cluster is a group of tables that share common columns and store related data in the same blocks.
- When tables are clustered, a single data block can contain rows from multiple tables. For example, a block can store rows from both the employees and departments tables rather than from only a single table.
- The cluster key is the column or columns that the clustered tables have in common. For example, the employees and departments tables share the department_id column. You specify the cluster key when creating the table cluster and when creating every table added to the table cluster.
- The cluster key value is the value of the cluster key columns for a particular set of rows. All data that contains the same cluster key value, such as department_id=20, is physically stored together.
- Consider clustering tables when they are primarily queried (but not modified) and records from the tables are frequently queried together or joined. This benefits reduced Disk I/O for joins, improves access time for joins.
- Flashback Table operation is not supported on clustered tables

```sql
/*For example to create a cluster of EMP and DEPT tables in which the DEPTNO will be cluster key, first create the cluster by typing the following command.*/
CREATE CLUSTER emp_dept (deptno NUMBER(2));

/*Then create index on it.*/
CREATE INDEX idx_empdept ON CLUSTER emp_dept;

/*Now create table in the cluster like this*/
CREATE TABLE dept (deptno NUMBER(2),
    name VARCHAR2(20),
    loc VARCHAR2(20))
    CLUSTER emp_dept (deptno);
    CREATE TABLE emp (empno NUMBER(5),
    name VARCHAR2(20),
    sal NUMBER(10,2),
    deptno NUMBER(2))

CLUSTER emp_dept (deptno);
```

## Debugging

- SQL developer uses DBMS_DEBUG package or JDWP(Java Debug Wire Protocol) is used to debug PLSQL blocks. Need to grant execution permission inorder to do that.
- To debug an object, we need to compile it for debug.
- "Compile for debug" will add significant overhead to the object. Database collects so much information and stores in memory. You need to recompile with normal "Compile" after debugging the code.
- Do not use "Compile for debug" in production environment. There will be significant performance loss. Object will be locked and no one can use it.

```sql
GRANT DEBUG CONNECT SESSION TO hr;
GRANT DEBUG ANY PROCEDURE TO hr;

BEGIN
    dbms_network_acl_admin.append_host_ace
         (host=>'127.0.0.1',
          ace => sys.xs$ace_type(privilege_list => sys.xs$name_list('JDWP'),
                                 principal_name => 'HR',
                                 principal_type => sys.xs_acl.ptype_db) );
END;
```
