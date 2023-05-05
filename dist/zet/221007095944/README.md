# Type Conversion

* The same values have different binary representations depending on their type.

```cpp
int	main(void)
{
	int    a = 42;        /* bin representation 1010 */
	double aa = 42.0;     /* bin rep 010000100010100... */

	double b = a;         /* Implicit convertion cast */
	double c = (double)a; /* Explicit convertion cast */

	double d = a;         /* Implicit promotion -> Ok */
	int    e = d;         /* Implicit demotion -> Hazardous */
	int    f = (int)d;    /* Explicit demotion -> Ok, you are in charge */
}
```

Credit : Thor from 42 intranet

    #c #cpp #cast
