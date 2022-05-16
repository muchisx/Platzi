# **27-curso-POO-javascript-intermediate**

## **Static attributes and methods**

<br>

Static attributes and methods are object properties that we can have acces to without the need of creating an instance of that said object.
In this example, the reserved JS word **static** will define a static attribute **sound** and a static method **doCuak()**.

        class duck {
          static sound = "cuak!";
          static doCuak() {
              return console.log(this.sound, '    <- sound');
          }
        }

        console.log(duck.sound, '    <- duck.sound');    // <- cuak!
        duck.doCuak();   // <- cuak!

See in this example how we had access to attribute **sound** and the method **doCuak()** without creating an instance of the class duck.

<br>

### **Static methods of the *Object* Prototype**

<br>

The superClass *Object* from where all objects are prototyped from includes a bunch of static methods for us to use with other objects.

<br>

We will use this sample object for our following examples:

        const anObject = {
            name: "muchis",
            username: "muchisx",
            age: 25,
        };

<br>

**List of Static Methods of the *Object* Prototype**

* Object.keys(obj)
 
        const anObjectKeys = Object.keys(anObject);
        console.log(anObjectKeys);      //   [ 'name', 'username', 'age' ]

        // This method returns ennumaerable keys from the argument object.

* Object.getOwnPropertyNames(obj)

        const anObjectOwnPropertiesNames = Object.getOwnPropertyNames(anObject);
        console.log(anObjectOwnPropertiesNames);   //   [ 'name', 'username', 'age' ]

        // This method returns all property names ("keys"), ennumerable and non ennumerable of the argument object.

* Object.entries(obj)

        const anObjectEntries = Object.entries(anObject);
        console.log(anObjectEntries);   // [ [ 'name', 'muchis' ],
                                             [ 'username', 'muchisx' ],
                                             [ 'age', 25 ] ]

        // This method returns an array that contains arrays containing key/value pairs of all object entries

* Object.getOwnPropertyDescriptors(obj)

        const anObjectgetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(anObject);
        console.log(anObjectgetOwnPropertyDescriptors);   //  { name: 
                                                              { value: 'muchis',
                                                                writable: true,
                                                                enumerable: true,
                                                                configurable: true },
                                                              username: 
                                                              { value: 'muchisx',
                                                                writable: true,
                                                                enumerable: true,
                                                                configurable: true },
                                                              age: 
                                                              { value: 25,
                                                                writable: true,
                                                                enumerable: true,
                                                                configurable: true } }

        // This method returns an object that within contains other objects containing key value pairs and their respective internal permission properties

* Object.defineProperty(obj, properties, attributes)

        Object.defineProperty(anObject, "name", {
            value: "hey",
            writable: false,
        });

        console.log(Object.getOwnPropertyDescriptors(anObject)) //    { name: 
                                                                      { value: 'hey',
                                                             ->>>>      writable: false,
                                                                        enumerable: true,
                                                                        configurable: true },
                                                                      username: 
                                                                      { value: 'muchisx',
                                                                        writable: true,
                                                                        enumerable: true,
                                                                        configurable: true },
                                                                      age: 
                                                                      { value: 25,
                                                                        writable: true,
                                                                        enumerable: true,
                                                                        configurable: true } }



        // This method adds one or more properties to an object, and/or modifies attributes of existing properties.

        // ennumaerable 
        // false <- means cannot be listed in the object as an ennumerable indexable property, but it will still exist within the object prototype.

        // writable
        // false <- means the property cannot be modified 

        // configurable 
        // false <- means the propertie cannot be deleted

<br>

## **Javascript Memory - Variables and Objects**

### **Stack**

In this memory, since its fast, but without much space, JS assigns primitive values such as booleans, strings, numbers..
Most of our variables will live in this memory

### **Heap**

Heap memory is a bit slower but has more storage, JS assigns more structured data here, like objects.

<br>

**Important notice**

Variables assigments such as

         const myvar1 = 1
         const myvar2 = var1

will each have a different place in the stack memory and will live independtly.

**BUT** object assigments such as

        const myobj1 = {
          name: "obj"
          value: "1"
        }
        const myobj2 = myobj1

will only assign a **POINTER** in memory to the **SAME** spot in memory as the original object.
hich means changes to eachother will affect the other since they are essentially the same space in memory.

***see scratchboard.js for more info.***

<br>


## **Shallow copies vs Deep Copies**

<br>

### **Shallow Copies**

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

For shallow copies, it's important to understand that selectively changing the value of a shared property of an existing element in an object is different from assigning a completely new value to an existing element.

Some of the following methods vary in the result of the copy but none acheive a perfect Deep Copy of the object so they remain shallow copies.

***see scratchboard.js for examples***

<br>

### **Deep Copies**

A deep copy is the copying of an object by allocating the new object in a different space in memory. Meaning that the new object is totally independant from the original object.

The deep copy must replicate all the attributes and methods of the original.

***see scratchboard.js for examples***

<br>


> At the time of writing, all browsers have implemented this API in their nightly releases, Firefox has shipped it to stable in Firefox 94. Additionally, Node 17 and Deno 1.14 have implemented this API. You can start using this function right now and not feel bad about it. 
> 
> Deep-copying in JavaScript using structuredClone

<br>

## **Duck Typing**

<br>

> Duck Typing is a type system used in dynamic languages. For example, Python, Perl, Ruby, PHP, Javascript, etc. where the type or the class of an object is less important than the method it defines. Using Duck Typing, we do not check types at all. Instead, we check for the presence of a given method or attribute.


