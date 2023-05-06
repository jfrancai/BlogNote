# Const Cast

```cpp
int	maint(void)
{
	int	a = 42;

	int const *b = &a; /* Implicit promotion -> Ok */
	int	*c = b; /* Implicit demotion -> Hell no ! */
	int	*d = const_cast<int *>(b); /* Explicit demotion -> Ok you are in charge */

	return (0);
}
```

Credit : Thor from 42 intranet

    #cpp #cast

