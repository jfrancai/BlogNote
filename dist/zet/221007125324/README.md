# Explicit Keyword

```cpp
#include <iostream>

class A {};
class B {};

class C {
		C(A const & _) { return ; }
	explicit C(B const & _) { return ; }
};

void	f( C const & _)
{
	reutrn ;
}

int	main(void)
{
	f(A()); /* Implicit conversion Ok */
	f(B()); /* Implicit conversion not Ok, constructor is explicit */

	return (0);
}
```

Credit : Thor from 42 intranet

    #cpp #cast #explicit
