# Operator Overloading

From [sbi](https://stackoverflow.com/users/140719/sbi):

1. Whenever the meaning of an operator is not obviously clear and undisputed, it should not be overloaded.
2. Always stick to the operator’s well-known semantics.
3. Always provide all out of a set of related operations.

Do not use operator overloading.

Example:
```cpp
// Integer.hpp
class Integer {
	public:
		Integer	&operator=(Integer const &rhs);
	private:
		int	_n;
}

//Integer.cpp
Integer	&Integer::operator=(Integer const &rhs)
{
	this->_n;
	return (*this);
}
```

> rhs stands for "right hand side".

More details : [The Three Basic Rules of Operator Overloading in C++](https://stackoverflow.com/a/4421708/13916430), [Overloading operators](https://cplusplus.com/doc/tutorial/templates/)

    #cpp #overload #operator
