
#  **Notes Curso POO**

## **What does Object Oriented Programming solve?**

<br>

 Mainly those problems and gaps that structured programming leaves us such as:

1. Code too long:
 
    Helps to read, debug and maintain code that can be very long.

3. If something fails everything breaks

    -Prevents everything from breaking if something goes wrong.


4. Spaghetti code: Many nested control statements and loss of control over the code. 
   
   -Makes code maintenance easier.

### **Where does it come from?**

Surfaces from the problems that we need to translate into code to help give us a start method to go from idea to code.

<br>

## **What are the main Elements and Pillars of POO?**

<br>

### **Elements**

* Classes
* Properties
* Methods
* Objects

### **Pilars**

* Encapsulation
* Abstraction
* Inheritance
* Polimorfism

## **What are some languages that we can use to use POO?**

* Java
* PHP
* Python
* JavaScript
* C#
* Ruby
* Kotlin


## **What are objects?**

<br>

### **Objects will always have**
* Properties/Attributes <- nouns
* Behaviours <- verbs

### **Objects will always be**
* Nouns
* Tangible or conceptual

### **Examples**

* Users and User Sessions
* Credit Card and Bank account

<br>

## **What are classes?**

<br>

They are the building blocks, model, or blueprint for objects

Abstraction concept comes into play here. This means when we take an object and by abstraction we create a model that can create other similar objects with variations we can decide.

<br>

### **Class syntax in some languages**

<br>

* Java
  
        class Person {}

* Python
  
        class Person:

* Javascript
  
        function Person() {}

        or

        class person {}
* PHP

        class Person{}

### **Examples** 
<br>

* **Java** 

        class Person {
            String name="";
            void walk() {}
        }

* **Python**

        class Person:
        name ="";
        def walk():

* **Javascript**
  
        Person.prototype.walk = function() {

        }

        or

        class Person {

        }

* **PHP**
  
        class Person {
            $name = "";
            function walk() {}
        }

<br>

### **Using the in-class constructor in some languages**

<br>

* **Java** 

        public Person(String name) {
                this.name = name;
        }

* **Python**

        def_init_(self,name):
          self.name = name

* **Javascript**
  
        function Person(name) {
                this.name = name;
        }

* **PHP**
  
        public function_construc($name) {
               $this->name = name; 
        }

<br>       

### **Object Declaration and setting custom values in some languages**

<br>

* **Java** 

        Person person = new Person("Muchisx");

* **Python**

        person = Person("Muchisx");

* **Javascript**
  
        var person = new Person("Muchisx");

* **PHP**
  
        $person = new Person("Muchisx");

<br>


## **What is Modular Design?**

<br>

It means to subdivide a complex system in small parts called modules. Modularity helps with reusability, optimization and speed, avoid total collapses, legibility.

* Thanks to classes, modularity will be possible!

## **Inheritance**

Thanks to inheritance we will be able to re-use a lot of our code and remove any unnecessary duplication.

### **Hierarchy**

Inheritance is based on Hierarchy, where a parent class called a "superClass" has one or multiple children called "subClass".

### **Inheritance syntax in some languages**

<br>

* **Java** 

        class Student extends Person

* **Python**

        class Student(Person):

* **Javascript**
  
        student.prototype = new Person();

        or

        class Student extends Person

* **PHP**
  
        class Student extends Person

<br>

