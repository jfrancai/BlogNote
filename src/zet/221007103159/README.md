# Type Qualifier Reinterpretation

```cpp
int	main(void)
{
	int a = 42;

	int const *b = &a;               /* Implicit type qualifier cast */
	int const *c = (int const *) &a; /* Explicit type qualifier cast */

	int const *d = &a;               /* Implicit promotion -> Ok */
	int       *e = d;                /* Implicit demotion -> Hell no ! */
	int       *f = (int *)d;         /* Explicit demotion -> Ok you are in charge */
}
```

Credit : Thor from 42 intranet

    #c #cpp #cast
