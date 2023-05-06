# Dynamic cast

```cpp
#include <iostream>
#include <typeinfo>
#include <exception>

class Parent	{ public: virtual ~Parent(void) {} };
class Child1: public Parent {};
class Child2: public Parent {};

int	main(void)
{
	Child1	a;
	Parent	b = &a; /* Implicit upcast -> Ok */

	/* Explicit downcast -> Suspens...*/
	Child1	*c = dynamic_cast<Child1 *>(b);
	if (c == NULL)
	{
		std::cout << "Conversion is not Ok" << std::endl;
	}
	else
	{
		std::cout << "Conversion is Ok" << std::endl;
	}

	/* Explicit downcast -> Suspens... */
	try {
		Child2 &d = dynamic_cast<Child2 &>(*b);
		std::cout << "Conversion is Ok" << std::endl;
	}
	catch (std::bad_cast &bc)
	{
		std::cout << "Conversion is not Ok" << bc.what() << std::enld;
		return (0);
	}

	return (0);
}
```

Credit : Thor from 42 intranet

    #cpp #cast

