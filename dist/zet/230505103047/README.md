# Grammar and types

## Basics

*  Case sensitive language and uses Unicode character set.

* In javaScript, instructions are called statements and are separated by semicolons (;).

## Comments

* Same comments rules as C++ // a one line comment /* multi-line comment */

## Declarations

JS has three kinds of variables declarations.

* var : Declares a variable, optionally initializing it to a value.

* let : Declares a block-scoped, local variable, optionally init it to a value.

* const : Decalres a block-scoped, read-only named constant.

## Declaring variables

* var x = 42. Can be used to declare both local and global variables, depending on the
execution context.

* const or let. Can be used to declare a block-scope loval variable

* const { bar } = foo. This will create a variable named bar and assign to it the
value corresponding to the key of the same name from our object foo.

## Variable scope

* Global scope: The default scope for all code running in script mode.

* Module scope: The scope for coe running in module mode.

* Function scope: The scope created with a function.

* Block scope: The scope created with a pair of curly braces (a block).

## Variable hoisting

* Don't use var declaration type because of variable hoisting

* use only let and const

## Constants

* const only prevents re-assignments, but doesn't prevent mutations. This will 
work fine :

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Also :

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Data structures and types

Data types:

	* Boolean : true and false

	* null : null value (it is not the same as NULL of Null since js is case sensitive)

	* undefined : A top-level property whoe value is no defined.

	* Number : An integer OR floating point number. 

	* BigInt : An integer with arbitrary precision

	* String : A sequence of characters that represent a text value.

	* Symbol : A data type whose instances are unique an immutable.

	* Object.

JS is dynamically typed language. So :

```js
let answer = 42;
answer = "Hello";
```

is fine.

## Numbers and the '+' operator

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

With all other operators, JS does not convert numeric values to strings. For examples :

```js
"37" - 7; // 30
"37" * 7; // 259
```

## Converting strings to numbers

* parseInt() 
* parseFloat()

## Literals

Literals  represent values in JavaScript. These are fixed values -no variables- that you literally provide in our script.

* Array literals

* Boolean literals

* Numeric literals

* Object literals

* RegExp literals

* String literals 
