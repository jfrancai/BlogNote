# Cast Operators

```cpp
class Foo
{
	public:
		Foo(float const v) : _v(v) { }
		float getV(void)	{return (this->_v);}
		operator float(void)	{return (this->_v);}
		operator int(void)	{return (static_cast<int> (this->_v);}
	private:
		float	_v;
};

int	main(void)
{
	Foo	a(420.024f);
	// Implicit cast
	float	b = a;
	int	c = a;

	std::cout << a.getV() << std::endl;
	std::cout << b << std::endl;
	std::cout << c << std::enld;
}
```

Credit : Thor from 42 intranet

    #cpp #cast
