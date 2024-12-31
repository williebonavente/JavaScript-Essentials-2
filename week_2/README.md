# Week 2: Object-Oriente Programming
---

### **1. Understanding Classes, Objects, and Constructors**

#### **1.1 Classes**
Classes in JavaScript are templates for creating objects. They encapsulate data with code to work on that data.

**Syntax:**
```javascript
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return `${this.name} says ${this.sound}`;
    }
}

const dog = new Animal("Dog", "Woof");
console.log(dog.speak()); // Outputs: Dog says Woof
```

**Key Points:**
- Classes are syntactic sugar over JavaScript’s prototype-based inheritance.
- Use `constructor` to initialize object properties.
- Define methods inside the class without the `function` keyword.

#### **1.2 Objects**
Objects are instances of classes or standalone data structures created using `{}`.

**Creating Objects:**
- **Literal Syntax:**
  ```javascript
  const car = {
      make: "Toyota",
      model: "Corolla",
      drive() {
          return `${this.make} ${this.model} is driving.`;
      }
  };
  console.log(car.drive());
  ```

- **Using Classes:**
  ```javascript
  const cat = new Animal("Cat", "Meow");
  ```

#### **1.3 Constructors**
A constructor is a special method for creating and initializing objects.

**Custom Constructors:**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person = new Person("Alice", 30);
console.log(person.name); // Outputs: Alice
```

**ES6 Class Constructor:**
```javascript
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
const book = new Book("1984", "George Orwell");
console.log(book.title); // Outputs: 1984
```

Reference:  
[Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)  
[Classes](https://javascript.info/class)  
[Constructors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#introducing_constructors)

---

### **2. Inheritance and Prototypes**

#### **2.1 Inheritance**
Inheritance allows one class to derive properties and methods from another.

**Using `extends`:**
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Outputs: Buddy barks
```

**Overriding Methods:**  
Child classes can override parent class methods for specific behavior.

**Using Superclass Methods:**
```javascript
class Cat extends Animal {
    constructor(name, color) {
        super(name); // Calls the parent constructor
        this.color = color;
    }
    describe() {
        return `${this.name} is a ${this.color} cat.`;
    }
}

const cat = new Cat("Whiskers", "white");
console.log(cat.describe()); // Outputs: Whiskers is a white cat.
```

#### **2.2 Prototypes**
Every object in JavaScript has a prototype, enabling inheritance.

**Prototype Example:**
```javascript
function Vehicle(type) {
    this.type = type;
}
Vehicle.prototype.drive = function () {
    return `${this.type} is driving.`;
};

const car = new Vehicle("Car");
console.log(car.drive()); // Outputs: Car is driving
```

**Prototypes vs Classes:**
- Prototypes are lower-level constructs.
- Classes offer a cleaner, more readable syntax.

Reference:  
[Class Inheritance](https://javascript.info/class-inheritance)  
[Prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)

---

### **3. Encapsulation and Modular Programming**

#### **3.1 Encapsulation**
Encapsulation hides the internal state and behavior of an object from the outside.

**Private and Protected Properties:**
- Use `#` for private fields.
- Use `_` by convention for protected fields.

**Example:**
```javascript
class Counter {
    #count = 0; // Private field

    increment() {
        this.#count++;
    }

    get value() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.value); // Outputs: 1
```

**Benefits:**
- Protects object integrity.
- Reduces coupling by exposing only necessary details.

#### **3.2 Modular Programming**
Modular programming organizes co    de into reusable, independent modules.

**Using ES6 Modules:**
- **Export:**
  ```javascript
  // math.js
  export function add(a, b) {
      return a + b;
  }
  ```
- **Import:**
  ```javascript
  // main.js
  import { add } from './math.js';
  console.log(add(2, 3)); // Outputs: 5
  ```

**Best Practices:**
- Keep each module focused on a single responsibility.
- Use descriptive filenames and function names.
- Encapsulate implementation details and expose a clean API.

Reference:  
[Encapsulation](https://javascript.info/private-protected-properties-methods)  
[Modular Programming](https://daily.dev/blog/what-is-modular-programming)

---

### **Object-Oriented Programming in JavaScript**

1. **Classes and Objects:**
   - Classes encapsulate data and methods.
   - Objects are created from classes or literal syntax.

2. **Constructors:**
   - Initialize objects with specific properties.

3. **Inheritance:**
   - Use `extends` to derive properties and methods.
   - Override or call superclass methods using `super`.

4. **Prototypes:**
   - Enable inheritance for objects created without classes.

5. **Encapsulation:**
   - Hide internal details using private fields (`#`) or conventions.

6. **Modular Programming:**
   - Organize code into small, reusable modules.

