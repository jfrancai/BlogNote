# Upcast and Downcast

```cpp
#include <iostream>

class Parent {};
class Child1: public Parent {};
class Child2: public Parent {};

int	main(void)
{
	Child1 a;

	Parent *b = &a;             /* Implicit 'reinterpretation' cast */
	Parent *c = (Parent *) &a;  /* Explicit 'reinterpretation' cast */

	Parent *d = &a;             /* Implicit upcast -> Ok */
	Child1 *e = d;              /* Implicit downcast -> Hell no ! */
	Child2 *f = (Child2 *)d;    /* Explicit downcast -> Ok you are in charge */
}
```

> You should not be using this syntax in cpp.

Credit : Thor from 42 intranet

    #cpp #cast
