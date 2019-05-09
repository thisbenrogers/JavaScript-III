/* The for principles of "this";


* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - 
*    In code at the global level, this referes to the global object. In the browser, that's the window.
*    GOTCHA: this rule also applys to the value of this in a function, unless the function is a method 
*            or if we explicitly change the value of this with .call() or .apply()
*
* 2. Implicit Binding -
*    When you call an object method, the value of this is the object whose method you called.
*    This applys to event-handler on element objects too.
*
* 3. New Binding - 
*    When you refer to this in a constructor function, you're refering to the unique object that the new keyword created.
*
* 4. Explicit Binding - 
*    When you call a function with .call() or .apply(), this is assigned to the value of 
*    the first argument passed to .call() or .apply() in the function that was called.
*
* write out a code example of each explanation above
*/

"use strict";

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  greeting: "Hello",
  speak: function() {
    console.log("implicit this: === ", this);
    return `${this.greeting}, world!`;
  }
};

myObj.speak();

// Principle 3

// code example for New Binding
function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.speak = function() {
    console.log(`This new binding`, this);
    return `Hello, my name is ${this.name}, and I am ${this.age} years old`;
  };
}

const ryan = new Person({ name: "Ryan", age: 32 });
ryan.speak();

// Principle 4

// code example for Explicit Binding
const haynes = new Person({ name: "Haynes", age: "8months" });

ryan.speak.call(haynes);
