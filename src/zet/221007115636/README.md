# Static Cast

```cpp
int	main(void)
{
	Child1 a;

	Parent *b = &a;                              /* Implicit upcast -> Ok */
	Child1 *c = b;                               /* Implicit downcast -> Hell no */
	Child2 *d = static_cast<Child2 *>(b);        /* Explicit downcast -> You are in charge */

	Unrelated *e = static_cast<Unrelated *>(&a); /* Explicit conversion -> No ! */

	return (0);
}
```

Credit : Thor from 42 intranet

    #cpp #cast
