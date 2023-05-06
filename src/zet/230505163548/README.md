# Typescript : Classes

We can specify a class param as readonly : 

```ts
function reverse<T>(arr: readonly T[]): readonly T[] {
    return [...arr].reverse();
}
```

Like for C++ there are public, private and protected
keyword for classes elements :

```ts
class A {
    private a = 3;
    protected b = 42;
    public c = 21; //default
}

class B extends A {
    log () {
        console.log(this.a) // Impossible
        console.log(this.b) // OK
        console.log(this.c) // OK
    }
}

const aInstance = new A();
console.log(aInstance.a); // Impossible
console.log(aInstance.b); // Impossible
console.log(aInstance.c); // OK
```
