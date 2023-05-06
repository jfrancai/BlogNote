# TypeScript: Syntax de base

Available types :

* string

* number

* boolean

* null

* <TYPE>[]

* any

* { custom: <TYPE> }

* <TYPE1> | <TYPE2> : union types

* { firstname: string, [key: string]: string } : Infinite number of
key inside the object

* never

Note: the symbold '?' is used to indicate optional property inside of an object
{ optionalField?: string, mandatoryField: number }

Examples:
```js
const a: string = "Hello world";
const n: number  = 42;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["qew", "qew"];
const s: any = 42;
const user:{firstname?: string, lastname: string} = {firstname: "toto", lastname: "from42"}
const date: Date = new Date();
const cb: Function = (e: MouseEvent): void => {
	console.log("hello");
}

cb();

function printId(id: number):void {
	console.log(id);
}

printId(42);
```
