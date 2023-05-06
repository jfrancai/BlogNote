# Type Reinterpretation

* Same binary representation but different types.

```cpp
int	main(void)
{
	float a = 42.042f;

	void *b = &a;         /* Implicit reinterpretation cast */
	void *c = (void *)&a; /* Explicit reinterpretation cast */

	void *d = &a;         /* Implicit promotion -> Ok */
	int  *e = d;          /* Implicit demotion -> Hazardous */
	int  *f = (int *) d;  /* Explicit demotion -> Ok you are in charge */
}
```

Credit : Thor from 42 intranet

    #c #cpp #cast
