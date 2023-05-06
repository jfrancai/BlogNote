# Templates

* Template : function, class, struct
* Once we have our template, it needs to be instanciated.

```cpp
#include <iostream>

// Function template
template<typename T> // We can use multiple param type : template<typename T, typename U>
T const & max( T const &x, T const &y)
{
	return (x >= y ? x : y);
}

int	main(void)
{
	int	a = 21;
	int	b = 42;

	max<int>(a, b)
}
```

```cpp
// Class template
template<typename T>
class List {
	public:
		List<T>(T const &content)
		{
			/* ... */
		}

		List<T>(List<T> const & list)
		{
			/* ... */
		}
		~List<T>(void)
		{
			/* ... */
		}

		/* ... */
	private:
		T	*_content;
		List<T>	*_next;
};

int	main(void)
{
	List<int>	a(42);
	List<float>	b(3.14f);
	List<List <int>> c(a);
	/* ... */
	return (0);
}
```
> It makes no difference whether the generic type is specified with keyword class or keyword typename in the template argument list (they are 100% synonyms in template declarations).

Credit : Thor from 42 intranet

More details : [Function templates](https://cplusplus.com/doc/tutorial/functions2/), [Dependent names](https://en.cppreference.com/w/cpp/language/dependent_name), [Where and why do I have to put the "template" and "typename" keywords?](https://stackoverflow.com/questions/610245/where-and-why-do-i-have-to-put-the-template-and-typename-keywords)

    #cpp #template
