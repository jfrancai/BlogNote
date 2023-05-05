# CPP0 This pointer

The keyword ``this`` represents a pointer to the object whose member function is being executed. It is used within a class's member function to refer to the object itself.

Example :
```cpp
Sample::Sample(void) {
	this->foo = 42;
	this->bar();
	return ;
}
```
> Even though we didn't specify any arguments in the constructor method declaration, it's still a default parameter that refers to the class instance

More details : [The keyword this](https://cplusplus.com/doc/tutorial/templates/)

    #cpp #this
