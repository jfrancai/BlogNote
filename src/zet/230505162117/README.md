# Typescript : Alias & Generics


About type definition:

```ts
type User = {firstname: string, lastname: string}
type DateString = string
type Id = string | number

const user: User = {firstname: "toto", lastname: "lst"} 
```

About Generics (~templating):

```ts
function identity<ArgType>(arg: ArgType): ArgType {
    return arg;
}

const a = identity<number>(42);
```
