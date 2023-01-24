---
id: Variable & Datatype
sidebar_position: 1
description: Variable & Datatype
---

## J Shell

- The Java Shell tool (JShell) is an interactive tool for learning the Java programming language and prototyping Java code.
- JShell is a Read-Evaluate-Print Loop (REPL), which evaluates declarations, statements, and expressions as they are entered and immediately shows the results.

## How java works

- Compiles a .java file into a byte code(.class file) by compiler(javac)
- This byte code will be executed by JVM(Java Virtual Machine)
- JVM is not OS independent but java program is OS independent
- JRE (Java Runtime Environment) is responsible to run JVM. JVM is part of JRE
- JRE is part of JDK (Java Development Kit). JRE can exists without JDK. But when we install JDK, JRE is also installed along with that.
- The first file that need to be executed should be named as "main"

```java
javac HelloWorld.java //Compiling
java HelloWorld //here no need of .java extension
```

## Naming Convention

camelCase

PascalCase

- .java File
- class name - class name should match the file name

snake_case

### Integer Datatype

- Preferred to use int instead of others
- Int occupy 32 bit in memory

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World");
        int intMax =  2147483647;
        int intMin = -2147483648;
        short shortMax =  32767;
        short shortMin = -32768;
        long longMax =  9223372036854775807L;
        long longMin = -9223372036854775808L;
        byte byteMax =  127;
        byte byteMin = -128;
    }
}
```

### Floating Point Datatype

- Preferred to use double instead of float.
- Float occupy 32bit in memory and 8 places in decimal part
- Double is a floating point number with double precision
- Double occupy 64bit in memory and 16 places in decimal part
- If you need more precision than double, you can make use of `BigDecimal`

```java
import java.math.BigDecimal;

public class Main{
    public static void main(String[] args){
        float fValue = 9.52f;
        double dValue = 9.52d;
        double d1 = 1.05;
        double d2 = 2.55;
        double dSum = d1 + d2;
        BigDecimal bd1 = new BigDecimal(1.05);
        BigDecimal bd2 = new BigDecimal(2.55);
        BigDecimal bdSum = bd1.add(bd2);
        BigDecimal bdString1 = new BigDecimal("1.05");
        BigDecimal bdString2 = new BigDecimal("2.55");
        BigDecimal bdStringSum = bdString1.add(bdString2);
        System.out.println("Double:" + dSum + " BigDecimal:" + bdSum + " bdStringSum:" + bdStringSum);
    }
}
```

### Boolean Datatype

- true or false

### Char Datatype

```java
public class Main{
    public static main(String[] args){
        char cValue = '\u00A7'; //Can print unicode characters in Java
        System.out.println(cValue);
    }
}
```
