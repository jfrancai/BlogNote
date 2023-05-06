# CPP0 Namespaces

Namespace is a declarative region that provides a scope to the identifiers inside it.
It is use inside large code base to avoid name collisions.

The scope resolution operator ``::`` helps to identify and specify the context to which an identifier refers, particularly by specifying a namespace.

```cpp
namespace Foo {
	int gl_var = 42;
	int	f( void ) { return 24; }
}
```
More details : [Namespaces and Scope resolution operator](https://cplusplus.com/doc/tutorial/namespaces/)

    #cpp #namespaces #scopeoperator
