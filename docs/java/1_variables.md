---
id: Variable & Datatype
sidebar_position: 1
description: Variable & Datatype
---

## Types of Java Applications

There are mainly 4 types of applications that can be created using Java programming:

- **Standalone Application**
  Standalone applications are also known as desktop applications or window-based applications. These are traditional software that we need to install on every machine. Examples of standalone application are Media player, antivirus, etc. AWT and Swing are used in Java for creating standalone applications.
- **Web Application**
  An application that runs on the server side and creates a dynamic page is called a web application. Currently, Servlet, JSP, Struts, Spring, Hibernate, JSF, etc. technologies are used for creating web applications in Java.
- **Enterprise Application**
  An application that is distributed in nature, such as banking applications, etc. is called an enterprise application. It has advantages like high-level security, load balancing, and clustering. In Java, EJB is used for creating enterprise applications.
- **Mobile Application**
  An application which is created for mobile devices is called a mobile application. Currently, Android and Java ME are used for creating mobile applications.

## Java Platforms / Editions

There are 4 platforms or editions of Java:

- **Java SE (Java Standard Edition)**
  It is a Java programming platform. It includes Java programming APIs such as java.lang, java.io, java.net, java.util, java.sql, java.math etc. It includes core topics like OOPs, String, Regex, Exception, Inner classes, Multithreading, I/O Stream, Networking, AWT, Swing, Reflection, Collection, etc.
- **Java EE (Java Enterprise Edition)**
  It is an enterprise platform that is mainly used to develop web and enterprise applications. It is built on top of the Java SE platform. It includes topics like Servlet, JSP, Web Services, EJB, JPA, etc.
- **Java ME (Java Micro Edition)**
  It is a micro platform that is dedicated to mobile applications.
- **JavaFX**
  It is used to develop rich internet applications. It uses a lightweight user interface API.

## Features of Java

- Tagline of Java is WORA (Write Once, Run Anywhere)
- **Simple**
  - Java syntax is based on C++.
  - Java has removed many complicated and rarely-used features, for example, explicit pointers, operator overloading, etc.
  - There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.
- **Object-Oriented**
- **Portable**
  - Java is portable because it facilitates you to carry the Java bytecode to any platform.
  - It doesn't require any implementation.
- **Platform independent**
- **Secured**
  - No explicit pointer.
  - Java Programs run inside a virtual machine sandbox.
  - **Classloader**: Classloader in Java is a part of the Java Runtime Environment (JRE) which is used to load Java classes into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of the local file system from those that are imported from network sources.
  - **Bytecode Verifier**: It checks the code fragments for illegal code that can violate access rights to objects.
  - **Security Manager**: It determines what resources a class can access such as reading and writing to the local disk.
  - Java language provides these securities by default. Some security can also be provided by an application developer explicitly through SSL, JAAS, Cryptography, etc.
- **Robust**
  - It uses strong memory management.
  - There is a lack of pointers that avoids security problems.
  - Java provides automatic garbage collection which runs on the Java Virtual Machine to get rid of objects which are not being used by a Java application anymore.
  - There are exception handling and the type checking mechanism in Java. All these points make Java robust.
- **Architecture neutral**
  - Java is architecture neutral because there are no implementation dependent features, for example, the size of primitive types is fixed.
  - In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for 64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java.
- **Interpreted**
  - Interpreter in Java is a computer program that converts high-level program statement into Assembly Level Language.
  - It is designed to read the input source program and then translate the source program instruction by instruction.
- **High Performance**
  - Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native code.
  - It is still a little bit slower than a compiled language (e.g., C++).
  - Java is an interpreted language that is why it is slower than compiled languages, e.g., C, C++, etc.
- **Multithreaded**
  - A thread is like a separate program, executing concurrently.
  - We can write Java programs that deal with many tasks at once by defining multiple threads.
  - The main advantage of multi-threading is that it doesn't occupy memory for each thread.
  - It shares a common memory area. Threads are important for multi-media, Web applications, etc.
- **Distributed**
  - Java is distributed because it facilitates users to create distributed applications in Java.
  - RMI and EJB are used for creating distributed applications.
    - The **RMI** (Remote Method Invocation) is an API that provides a mechanism to create distributed application in java.
    - The RMI allows an object to invoke methods on an object running in another JVM.
    - The RMI provides remote communication between the applications using two objects stub and skeleton.
    - **EJB** is an acronym for enterprise java bean.
    - It is a specification provided by Sun Microsystems to develop secured, robust and scalable distributed applications.
    - To run EJB application, you need an application server (EJB Container) such as Jboss, Glassfish, Weblogic, Websphere etc.
    - EJB is like COM (Component Object Model) provided by Microsoft. But, it is different from Java Bean, RMI and Web Services.
  - This feature of Java makes us able to access files by calling the methods from any machine on the internet.
- **Dynamic**
  - Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on demand. It also supports functions from its native languages, i.e., C and C++.
  - Java supports dynamic compilation and automatic memory management (garbage collection).

## Basic concepts of OOPs are:

- **Object**
  - Any entity that has state and behavior is known as an object.
  - An Object can be defined as an instance of a class.
  - An object contains an address and takes up some space in memory.
- **Class**
  - Collection of objects is called class. It is a logical entity.
  - Class doesn't consume any space.
- **Inheritance**
  - When one object acquires all the properties and behaviors of a parent object, it is known as inheritance. It provides code reusability.
  - It is used to achieve runtime polymorphism.
- **Polymorphism**
  - If one task is performed in different ways, it is known as polymorphism.
  - In Java, we use method overloading and method overriding to achieve polymorphism.
  - for example, to speak something, a cat speaks meow, dog barks woof, etc.
- **Abstraction**
  - Hiding internal details and showing functionality is known as abstraction.
  - For example phone call, we don't know the internal processing.
  - In Java, we use abstract class and interface to achieve abstraction.
- **Encapsulation**
  - Binding (or wrapping) code and data together into a single unit are known as encapsulation.
  - For example, a capsule, it is wrapped with different medicines.
  - A java class is the example of encapsulation.
- **Coupling**
  - Coupling refers to the knowledge or information or dependency of another class.
  - If a class has the information of another class, there is **strong coupling**.
  - In Java, we use private, protected, and public modifiers to display the visibility level of a class, method, and field.
  - You can use interfaces for the **weaker coupling** because there is no concrete implementation.
- **Cohesion**
  - Cohesion refers to the level of a component which performs a single well-defined task.
  - A single well-defined task is done by a **highly cohesive** method.
  - The **weakly cohesive** method will split the task into separate parts.
  - **java.io** package is a highly cohesive package because it has I/O related classes and interface.
  - **java.util** package is a weakly cohesive package because it has unrelated classes and interfaces.
- **Association**
  - Association represents the relationship between the objects.
  - There can be four types of association between the objects:
    - One to One (Ex:One country can have one prime minister)
    - One to Many (Ex:a prime minister can have many ministers)
    - Many to One (Ex:many MP's can have one prime minister )
    - Many to Many (Ex:many ministers can have many departments)
  - Association can be undirectional or bidirectional.
- **Aggregation**
  - Aggregation is a way to achieve Association.
  - Aggregation represents the relationship where one object contains other objects as a part of its state.
  - It represents the weak relationship between objects.
  - It is also termed as a **has-a relationship** in Java.
  - Inheritance represents the **is-a relationship**. It is another way to reuse objects.
- **Composition**
  - The composition is also a way to achieve Association.
  - The composition represents the relationship where one object contains other objects as a part of its state.
  - There is a strong relationship between the containing object and the dependent object.
  - It is the state where containing objects do not have an independent existence.
  - If you delete the parent object, all the child objects will be deleted automatically.

## List of Java Keywords

- **abstract**: Java abstract keyword is used to declare an abstract class. An abstract class can provide the implementation of the interface. It can have abstract and non-abstract methods.
- **boolean**: Java boolean keyword is used to declare a variable as a boolean type. It can hold True and False values only.
- **break**: Java break keyword is used to break the loop or switch statement. It breaks the current flow of the program at specified conditions.
- **byte**: Java byte keyword is used to declare a variable that can hold 8-bit data values.
- **case**: Java case keyword is used with the switch statements to mark blocks of text.
- **catch**: Java catch keyword is used to catch the exceptions generated by try statements. It must be used after the try block only.
- **char**: Java char keyword is used to declare a variable that can hold unsigned 16-bit Unicode characters
- **class**: Java class keyword is used to declare a class.
- **continue**: Java continue keyword is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition.
- **default**: Java default keyword is used to specify the default block of code in a switch statement.
- **do**: Java do keyword is used in the control statement to declare a loop. It can iterate a part of the program several times.
- **double**: Java double keyword is used to declare a variable that can hold 64-bit floating-point number.
- **else**: Java else keyword is used to indicate the alternative branches in an if statement.
- **enum**: Java enum keyword is used to define a fixed set of constants. Enum constructors are always private or default.
- **extends**: Java extends keyword is used to indicate that a class is derived from another class or interface.
- **final**: Java final keyword is used to indicate that a variable holds a constant value. It is used with a variable. It is used to restrict the user from updating the value of the variable.
- **finally**: Java finally keyword indicates a block of code in a try-catch structure. This block is always executed whether an exception is handled or not.
- **float**: Java float keyword is used to declare a variable that can hold a 32-bit floating-point number.
- **for**: Java for keyword is used to start a for loop. It is used to execute a set of instructions/functions repeatedly when some condition becomes true. If the number of iteration is fixed, it is recommended to use for loop.
- **if**: Java if keyword tests the condition. It executes the if block if the condition is true.
- **implements**: Java implements keyword is used to implement an interface.
- **import**: Java import keyword makes classes and interfaces available and accessible to the current source code.
- **instanceof**: Java instanceof keyword is used to test whether the object is an instance of the specified class or implements an interface.
- **int**: Java int keyword is used to declare a variable that can hold a 32-bit signed integer.
- **interface**: Java interface keyword is used to declare an interface. It can have only abstract methods.
- **long**: Java long keyword is used to declare a variable that can hold a 64-bit integer.
- **native**: Java native keyword is used to specify that a method is implemented in native code using JNI (Java Native Interface).
- **new**: Java new keyword is used to create new objects.
- **null**: Java null keyword is used to indicate that a reference does not refer to anything. It removes the garbage value.
- **package**: Java package keyword is used to declare a Java package that includes the classes.
- **private**: Java private keyword is an access modifier. It is used to indicate that a method or variable may be accessed only in the class in which it is declared.
- **protected**: Java protected keyword is an access modifier. It can be accessible within the package and outside the package but through inheritance only. It can't be applied with the class.
- **public**: Java public keyword is an access modifier. It is used to indicate that an item is accessible anywhere. It has the widest scope among all other modifiers.
- **return**: Java return keyword is used to return from a method when its execution is complete.
- **short**: Java short keyword is used to declare a variable that can hold a 16-bit integer.
- **static**: Java static keyword is used to indicate that a variable or method is a class method. The static keyword in Java is mainly used for memory management.
- **strictfp**: Java strictfp is used to restrict the floating-point calculations to ensure portability.
- **super**: Java super keyword is a reference variable that is used to refer to parent class objects. It can be used to invoke the immediate parent class method.
- **switch**: The Java switch keyword contains a switch statement that executes code based on test value. The switch statement tests the equality of a variable against multiple values.
- **synchronized**: Java synchronized keyword is used to specify the critical sections or methods in multithreaded code.
- **this**: Java this keyword can be used to refer the current object in a method or constructor.
- **throw**: The Java throw keyword is used to explicitly throw an exception. The throw keyword is mainly used to throw custom exceptions. It is followed by an instance.
- **throws**: The Java throws keyword is used to declare an exception. Checked exceptions can be propagated with throws.
- **transient**: Java transient keyword is used in serialization. If you define any data member as transient, it will not be serialized.
- **try**: Java try keyword is used to start a block of code that will be tested for exceptions. The try block must be followed by either catch or finally block.
- **void**: Java void keyword is used to specify that a method does not have a return value.
- **volatile**: Java volatile keyword is used to indicate that a variable may change asynchronously.
- **while**: Java while keyword is used to start a while loop. This loop iterates a part of the program several times. If the number of iteration is not fixed, it is recommended to use the while loop.

## J Shell

- The Java Shell tool (JShell) is an interactive tool for learning the Java programming language and prototyping Java code.
- JShell is a Read-Evaluate-Print Loop (REPL), which evaluates declarations, statements, and expressions as they are entered and immediately shows the results.

```shell
jshell

Last login: Tue Jan 17 07:12:43 on ttys000
tenimathew@TENIMBP ~ % jshell
|  Welcome to JShell -- Version 17.0.5
|  For an introduction type: /help intro

jshell> 2+3
jshell> System.out.print("Hello World");
```

## How java works

- Compiles a .java file into a byte code(.class file) by compiler(javac)
- This byte code will be executed by JVM(Java Virtual Machine)
- JVM is not OS independent but java program is OS independent
- JRE (Java Runtime Environment) is responsible to run JVM. JVM is part of JRE
- JRE is part of JDK (Java Development Kit). JRE can exists without JDK. But when we install JDK, JRE is also installed along with that.
- The first file that need to be executed should be named as "main"

```shell
javac HelloWorld.java #Compiling
java HelloWorld #here no need of .java extension
```

## Naming Convention

camelCase

PascalCase

- .java File
- class name - class name should match the file name

snake_case

## Primitive Data Types

### Integer Datatype

- Preferred to use `int` instead of others
- `byte` occupy 1 byte (8 bits)
- `short` occupy 2 bytes (16bits)
- `int` occupy 4 bytes (32 bits) in memory
- `long` occupy 8 bytes (64 bits)
- `Range` of each datatype is calculated with -2<sup>7</sup> to 2<sup>7</sup> - 1 ie; -128 to 127
- Base 2 means binary and Base 10 means normal numbering 1 to 10
- Can add underscore in literals for readability, and java won't consider that underscore

```java
public class Main{
    public static void main(String[] args){
        System.out.println("Hello World");
        int intMax =  2147483647;
        int intMin = -2147483648;
        int intBinary = 0b101; // Binary number
        int intHexa = 0x7E; // Hexadecimal number
        int intMoreZero = 10_00_000_0000; // Result will be 10000000000;
        short shortMax =  32767;
        short shortMin = -32768;
        long longMax =  9223372036854775807L; // "L" is needed
        long longMin = -9223372036854775808L; // "L" is needed
        byte byteMax =  127;
        byte byteMin = -128;
    }
}
```

### Floating Point Datatype

- Preferred to use `double` instead of `float`.
- `float` occupy 4 bytes(32 bits) in memory and 8 places in decimal part
- `double` is a floating point number with double precision
- `double` occupy 8 bytes(64 bits) in memory and 16 places in decimal part
- If you need more precision than `double`, you can make use of `BigDecimal`

```java
import java.math.BigDecimal;

public class Main{
    public static void main(String[] args){
        float fValue = 9.52f; // "f" is needed
        double dValue = 9.52d; // "d" is not necessary
        double d1 = 1.05;
        double d2 = 2.55;
        double dEpsilon = 12e10; // Epsilon value; 12 x 10^10
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

```java
public class Main{
    public static main(String[] args){
        boolean b = true;
    }
}
```

### Char Datatype

- `char` occupy 2 bytes (16 bits) because java support unicode characters (not only ASCII unlike other languages).
- Need to use single quotes.
- Calculations are possible in char.
- For calculations, it will take the ASCII value of that character and do the operations.

```java
public class Main{
    public static main(String[] args){
        char cValue = '\u00A7'; //Can print unicode characters in Java
        System.out.println(cValue);
        char cIncrement = 'a';
        cIncrement++; // calculations are possible
        System.out.println(cIncrement); // Will print b
        char num1 = 'a';
        char num2 = '2';
        int num3 = num1 + num2; // ASCII values will get added; result: 50 + 97 = 147
        System.out.println(num3);
    }
}
```

## String Data Type

- String is a class and it is a sequence of `char` datatype. So this also support unicode characters.
- Need to use double quotes.
- Cannot use calculations.
- If one operand is `String` and other is `int`, and we try to add them, it will typecast the `int` into `String` and shows the concatenated value.

```java
public class Main{
    public static void main(String[] args){
        String sVariable = new String("Hello World"); //Can be declared like this also.
        System.out.println("Hello World \u00A7"); // Can print unicode in string also
        System.out.println()
        String num1 = "1";
        String num2 = 3;
        System.out.println(num1 + num2); // This will print concatenation of two values. Result: 13
    }
}
```

## Type Conversion and Type Casting

![](img/2023-01-26-15-59-41.png)

- If two types are compatible and if the datatype length is widening (target type is larger than the source type), implicit type casting will be performed
- If the value in source type is larger than the destination and we are doing explicit type casting, it might result in wrong results or it may truncate the rest.
- Cannot type cast String into int. Because they are not compatible.

```java
public class Main{
    public static void main(String[] args){
        int y = 10;
        short x = (short)y; // Explicit type casting
        short z = (byte)y; // byte type is smaller than short datatype. So, it will allow that also.
        System.out.println(x);
        String num1 = "1";
        int num2 = (int)num1; // This will result an error "incompatible types"
    }
}
```

## Increment/Decrement Pre and Post

```java
public class Main{
    public static void main(String[] args){
        int x = 10;
        System.out.println(x++); // Result = 10
        System.out.println(x); //Result = 11
        System.out.println(++x); // Result = 12
        System.out.println(x); //Result = 12
    }
}
```

## Control Statements | Control Flow

Java provides three types of control flow statements.

### Decision Making statements

#### if statements

- **Simple if statement**
  ```java
  if(condition) {  //Curly bracket is not necessary if only one statement is there
      statement 1; //executes when condition is true
  }
  ```
- **if-else statement**
  ```java
  if(condition) {
      statement 1; //executes when condition is true
  }
  else{
      statement 2; //executes when condition is false
  }
  ```
- **if-else-if ladder**

  ```java
  if(condition 1) {
      statement 1; //executes when condition 1 is true
  }
  else if(condition 2) {
      statement 2; //executes when condition 2 is true
  }
  else {
      statement 2; //executes when all the conditions are false
  }
  ```

- **Nested if-statement**

  ```java
  if(condition 1) {
      statement 1; //executes when condition 1 is true

      if(condition 2) {
          statement 2; //executes when condition 2 is true
      }
      else{
          statement 2; //executes when condition 2 is false
      }
  }
  ```

#### switch statement

- The case variables can be int, short, byte, char, or enumeration. String type is also supported since version 7 of Java.
- `Break` statement terminates the switch block when the condition is satisfied. It is optional, if not used, next case is executed.

```java
switch (expression){
    case value1:
        statement1;
        break;
    .
    .
    .
    case valueN:
        statementN;
        break;
    default:
        default statement;
}
```

### Loop statements

#### do while loop

```java
do
{
    //statements
} while (condition);
```

```java
public class Calculation {
    public static void main(String[] args) {
        int i = 0;
        System.out.println("Printing the list of first 10 even numbers \n");
        do {
            System.out.println(i);
            i = i + 2;
        }while(i<=10);
    }
}
```

#### while loop

```java
while(condition){
    //looping statements
}
```

```java
public class Calculation {
    public static void main(String[] args) {
        int i = 0;
        System.out.println("Printing the list of first 10 even numbers \n");
        while(i<=10) {
            System.out.println(i);
            i = i + 2;
        }
    }
}
```

#### for loop

```java
for(initialization, condition, increment/decrement) {
    //block of statements
}
```

```java
public class Calculattion {
    public static void main(String[] args) {
        int sum = 0;
        for(int j = 1; j<=10; j++) {
            sum = sum + j;
        }
        System.out.println("The sum of first 10 natural numbers is " + sum);
    }
}
```

#### for-each loop

```java
for(data_type var : array_name/collection_name){
    //statements
}
```

```java
public class Calculation {
    public static void main(String[] args) {
        String[] names = {"Java","C","C++","Python","JavaScript"};
        System.out.println("Printing the content of the array names:\n");
        for(String name:names) {
            System.out.println(name);
        }
    }
}
```

### Jump statements

#### break statement

- the break statement is used to break the current flow of the program and transfer the control to the next statement outside a loop or switch statement.
- It breaks only the inner loop in the case of the nested loop.
- The break statement cannot be used independently in the Java program, i.e., it can only be written inside the loop or switch statement.

```java
public class BreakExample {
    public static void main(String[] args) {
        for(int i = 0; i<= 10; i++) {
            System.out.println(i);
            if(i==6) {
                break;
            }
        }
    }
}
```

#### continue statement

- Unlike break statement, the continue statement doesn't break the loop, whereas, it skips the specific part of the loop and jumps to the next iteration of the loop immediately.

```java
public class ContinueExample {
    public static void main(String[] args) {
        for(int i = 0; i<= 2; i++) {
            for (int j = i; j<=5; j++) {
                if(j == 4) {
                    continue;
                }
                System.out.println(j);
            }
        }
    }
}
```

## Operators

### Unary Operator

- incrementing/decrementing a value by one (++/--)
- negating an expression (~)
- inverting the value of a boolean (!)

```java
public class OperatorExample{
    public static void main(String args[]){
        int a=10;
        int b=10;
        System.out.println(a++ + ++a);//10+12=22
        System.out.println(b++ + b++);//10+11=21
        int c=10;
        int d=-10;
        boolean e=true;
        boolean f=false;
        System.out.println(~c);//-11 (minus of total positive value which starts from 0)
        System.out.println(~d);//9 (positive of total minus, positive starts from 0)
        System.out.println(!e);//false (opposite of boolean value)
        System.out.println(!f);//true
    }
}
```

### Arithmetic Operator

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/)
- Modulus (%)

```java
public class OperatorExample{
    public static void main(String args[]){
        int a=10;
        int b=5;
        System.out.println(a+b);//15
        System.out.println(a-b);//5
        System.out.println(a*b);//50
        System.out.println(a/b);//2
        System.out.println(a%b);//0
    }
}
```

### Shift Operator

- **Left shift** operator << is used to shift all of the bits in a value to the left side of a specified number of times.
- **Right shift** operator >> is used to move the value of the left operand to right by the number of bits specified by the right operand.

```java
public class OperatorExample{
    public static void main(String args[]){
        System.out.println(10<<2);//10*2^2=10*4=40
        System.out.println(10<<3);//10*2^3=10*8=80
        System.out.println(20<<2);//20*2^2=20*4=80
        System.out.println(15<<4);//15*2^4=15*16=240
        System.out.println(10>>2);//10/2^2=10/4=2
        System.out.println(20>>2);//20/2^2=20/4=5
        System.out.println(20>>3);//20/2^3=20/8=2
        //For positive number, >> and >>> works same
        System.out.println(20>>2);
        System.out.println(20>>>2);
        //For negative number, >>> changes parity bit (MSB) to 0
        System.out.println(-20>>2);
        System.out.println(-20>>>2);
    }
}
```

### Relational Operator

### Bitwise Operator and Logical Operator

- The logical **&&** operator doesn't check the second condition if the first condition is false. It checks the second condition only if the first one is true.
- The bitwise **&** operator always checks both conditions whether first condition is true or false.
- The logical **||** operator doesn't check the second condition if the first condition is true. It checks the second condition only if the first one is false.
- The bitwise **|** operator always checks both conditions whether first condition is true or false.

```java
public class OperatorExample{
    public static void main(String args[]){
        int a=10;
        int b=5;
        int c=20;
        //AND operator
        System.out.println(a<b&&a<c);//false && true = false
        System.out.println(a<b&a<c);//false & true = false
        System.out.println(a<b&&a++<c);//false && true = false
        System.out.println(a);//10 because second condition is not checked
        System.out.println(a<b&a++<c);//false && true = false
        System.out.println(a);//11 because second condition is checked
        //OR operator
        System.out.println(a>b||a<c);//true || true = true
        System.out.println(a>b|a<c);//true | true = true
        //|| vs |
        System.out.println(a>b||a++<c);//true || true = true
        System.out.println(a);//10 because second condition is not checked
        System.out.println(a>b|a++<c);//true | true = true
        System.out.println(a);//11 because second condition is checked
    }
}
```

### Ternary Operator

- Java Ternary operator is used as one line replacement for if-then-else statement and used a lot in Java programming. It is the only conditional operator which takes three operands.

```java
public class OperatorExample{
    public static void main(String args[]){
        int a=2;
        int b=5;
        int min=(a<b)?a:b;
        System.out.println(min);
    }
}
```

### Assignment Operator

- Java assignment operator is one of the most common operators. It is used to assign the value on its right to the operand on its left.

```java
public class OperatorExample{
    public static void main(String args[]){
        int a=10;
        int b=20;
        a+=4;//a=a+4 (a=10+4)
        b-=4;//b=b-4 (b=20-4)
        System.out.println(a);
        System.out.println(b);

        a=10;
        a+=3;//10+3
        System.out.println(a);
        a-=4;//13-4
        System.out.println(a);
        a*=2;//9*2
        System.out.println(a);
        a/=2;//18/2
        System.out.println(a);

        short c=10;
        short d=10;
        //a+=b;//a=a+b internally so fine
        c=c+d;//Compile time error because 10+10=20 now int
        System.out.println(c);

        c=(short)(c+d);//20 which is int now converted to short
        System.out.println(a);
    }
}
```

### Operator Precedence

| Operator Type | Category             | Precedence                               |
| ------------- | -------------------- | ---------------------------------------- |
| Unary         | postfix              | expr++ expr--                            |
|               | prefix               | ++expr --expr +expr -expr ~ !            |
| Arithmetic    | multiplicative       | \* / %                                   |
|               | additive             | + -                                      |
| Shift         | shift                | << >> >>>                                |
| Relational    | comparison           | < > <= >= instanceof                     |
|               | equality             | == !=                                    |
| Bitwise       | bitwise AND          | &                                        |
|               | bitwise exclusive OR | ^                                        |
|               | bitwise inclusive OR | \|                                       |
| Logical       | logical AND          | &&                                       |
|               | logical OR           | \|\|                                     |
| Ternary       | ternary              | ? :                                      |
| Assignment    | assignment           | = += -= \*= /= %= &= ^= \|= <<= >>= >>>= |
