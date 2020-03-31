---
title: "Object cloning and spread operator"
date: "2020-03-31"
---

_In this aritcle I will be explaining or copy pasting to expalin what an object.assign() and spread operator is in javascript._

First of all, what is a copy?

A copy just looks like the old thing, but isn’t. When you change the copy, you expect the original thing to stay the same, whereas the copy changes.
 ###Deep copying vs. Shallow copying
 A **deep copy** means that all of the values of the new variable are copied and disconnected from the original variable. A **shallow copy** means that certain (sub-)values are still connected to the original variable.

###Composite data types — Objects and Arrays
 If we make a copy b = a , and change some nested value in b, it actually changes a’s nested value as well, since a and b actually point to the same thing. Example:

<pre><code>
const a = {
  en: 'Hello', de: 'Hallo', es: 'Hola', pt: 'Olà'
}
let b = a
b.pt = 'Oi'
console.log(b.pt) // Oi
console.log(a.pt) // Oi
</code></pre>

In the example above, we actually made a shallow copy. 

###Let’s have a look at how we can make copies of objects and arrays.
####Objects
There are multiple ways to make copies of objects, especially with the new expanding and improving JavaScript specification.

Spread operator
Introduced with ES2015, this operator is just great, because it is so short and simple. It ‘spreads’ out all of the values into a new object. You can use it as follows:
<pre><code>
const a = {
  en: 'Bye',
  de: 'Tschüss'
}
let b = {...a}
b.de = 'Ciao'
console.log(b.de) // Ciao
console.log(a.de) // Tschüss
</code></pre>

You can also use it to merge two objects together, for example const c = {...a, ...b} .

####Object.assign
This was mostly used before the spread operator was around, and it basically does the same thing. You have to be careful though, as the first argument in the Object.assign() method actually gets modified and returned. So make sure that you pass the object to copy at least as the second argument. Normally, you would just pass an empty object as the first argument to prevent modifying any existing data.
The **Object.assign()** method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

**It modifies the target object.**

<pre><code>
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
</code></pre>

Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

###Cloning an object
<pre><code>
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
</code></pre>
When you have a nested object (or array) and you copy it, nested objects inside that object will not be copied, since they are only pointers / references. Therefore, if you change the nested object, you will change it for both instances, meaning you would end up doing a shallow copy again.
To make a deep copy of nested objects, you would have to consider that. Here's one way of creating it.

<pre><code>
// Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
</code></pre>

This is a compiled article/note created from following sources :

https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
