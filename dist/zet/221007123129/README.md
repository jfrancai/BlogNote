# Reinterpret Cast

```cpp
int	main(void)
{
	float a = 420.042f;

	void *b = &a;                         /* Implicit promotion -> Ok */
	int  *c = reinterpret_cast<int *>(b); /* Explicit demotion -> Ok you are in charge */
	int  &d = reinterpret_cast<int &>(b); /* explicit demotion -> Ok you are in charge */

	return (0);
}
```

Credit : Thor from 42 intranet

    #cpp #cast

