# Notes JS-III

## TK Videos

Four Principles of the `this` keyword with examples

1. Global Binding
2. Implicit Binding
3. New Binding
4. Explicit Binding

`this` behaves differently in JS than it does in other languages. It's essentially a pronoun to use in place of an object. It also gives us the object's context. It has nothing to do with where the function is written, but where an when the function is called. These four principles help determine what gets `this`.

Each of these principles uses binding. `this` is going to bind to specific objects in certain instances.

---

### Global Binding

When in the global scope, the value of `this` is the window/console Object

---

### Implicit Binding

 Whenever a function or method is called by a preceding dot, the object left of the dot is the value of `this`.

---

### New Binding

Uses constructor functions. 

Whenever a constructor function is used ( `new` ), `this` refers to the specific instance of the object that is created and returned by the constructor function.

---

### Explicit Binding

Similar to using the `new` keyword in constructor functions, this uses the spcific keywords `.call()` and `.apply()` to explicitly assign the preceding object to `this`. 

Whenever JS's `.call()` or `.apply()` methods are used, `this` is explicitly defined.

---

## `code` - JS-III TK videos
---
*__Global Scope__*

We can check out the Global Scope (and see the entirety of JavaScript in dev tools) by calling `this` on the log method.

``` javascript
console.log(this);
```
---
*__Implicit Binding:__*

JS:
``` javascript
const myObj = {
  greeting: 'Hello',
  speak: function() {
    console.log('implicit this: === ', this);
    return `${this.greeting}, world!`;
  }
};

myObj.speak();
```
Console output:
``` bash
"implicit this: === " Object {
  greeting: "Hello",
  speak: fnction () {  }
}
```

---

*__New Binding:__*

JS:
``` javascript
const myObj = {
  greeting: 'Hello',
  speak: function() {
    console.log('implicit this: === ', this);
    return `${this.greeting}, world!`;
  }
};

myObj.speak();

function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    console.log(`This new binding`,this);
    return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
  }
}

const ryan = new Person({name: 'Ryan', age: 32});
ryan.speak();
```

Console output:
``` bash
"implicit this: === " Object {}

"implicit this: === " Object {}

"This new binding" Object {
  age: 32,
  name: "Ryan",
  speak: function () {}
}
```

---

*__Explicit Binding:__*

JS:
``` javascript
const myObj = {
  greeting: 'Hello',
  speak: function() {
    console.log('implicit this: === ', this);
    return `${this.greeting}, world!`;
  }
};

myObj.speak();

function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    console.log(`This new binding`,this);
    return `Hello, my name is ${ths.name}, and I am ${this.age} years old`;
  }
}

const ryan = new Person({name: 'Ryan', age: 32});
const haynes = new Person({name: 'Haynes', age: '8months'});

ryan.speak.call(haynes);
haynes.speak.call(ryan);

ryan.speak();
haynes.speak();
```

Console output:
``` bash
"implicit this: === " Object {}

"This new binding" Object {
  age: "8months",
  name: "Haynes",
  speak: function () {}
}

"This new binding" Object {
  age: 32,
  name: "Ryan",
  speak: function () {}
}

"This new binding" Object {
  age: 32,
  name: "Ryan",
  speak: function () {}
}

"This new binding" Object {
  age: "8months",
  name: "Haynes",
  speak: function () {}
}
```