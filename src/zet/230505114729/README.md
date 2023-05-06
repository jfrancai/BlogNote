# Control flow and error handling

## if ... else statement

```js
if (condition1) {
  statement1;
} else if (condition2) {
	statement2;
} else if (conditionN) {
	statementN;
} else {
	statementLast;
}
```

## switch statement

```js
switch (expression) {
	case label1:
		statement1;
		break;
	case label2:
		statement2;
		break;
	//...
	default:
		statementsDefault;
}
```

## Falsy values

* false

* undefined

* null

* 0

* NaN

* the empty string ("")

## Exception handling statements

Like in C++ you can throw exceptions using the throw statement and handle them using the try...catch statements.

## Exception types 

Just about any object can be thrown in JavaScript.
Nevertheless, not all thrown objects are created equal.

While it is common to throw numbers or strings as errors,
it is frequently more effective to use one of the exception types specifically created for this purpose:

* ECMAScript exceptions
* DOMException and DOMError

## The finally block

```js
openMyFile();
try {
	writeMyFile(theData); // This may throw an error
} catch (e) {
	handleError(e); // If an error occurred, handle it
} finally {
	closeMyFile(); // Always close the resource
}
```

Note : If the finally block returns a value,
this value becomes the return value of the entire try…catch…finally production,
regardless of any return statements in the try and catch blocks
