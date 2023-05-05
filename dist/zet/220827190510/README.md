# CPP0 Accessors and Mutators

* Accessor : Member function used to retrieve the data of protected members (usually private members)
* Mutator : Member function used to edit the data of protected members

These are APIs for private members of a class

```cpp
class Sample {
public:
	Sample(void);
	~Sample(void);

	int	getFoo(void) const;
	void	setFoo(int v);
private:
	int _foo;
};

int	Sample::getFoo(void) const {
	return (this->_foo);
}

void Sample::setFoo(int v) {
	this->_foo = v;
	return ;
}
```

    #cpp #accessor #mutator #public #private
