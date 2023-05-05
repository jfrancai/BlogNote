# Abstract classes and interfaces

Abstract classes :

```cpp
virtual int area() = 0; // pure virtual function
```

> Classes that contain at least one pure virtual function are known as abstract base classes.

```cpp
MyClass myclass;   // not working if MyClass is abstract base class 
```

Interfaces :


```cpp
class ICoffeeMaker
{
	public:
		virtual void	filWaterTank(IWatersource *src) = 0;
		virtual ICoffee	*makecoffee(std::string const &type) = 0;
}
```

> An interface defines a class behavior. Do not use attributes inside interfaces and prefixe the interface name with an ``I``.

More details : [Abstract base classes](https://cplusplus.com/doc/tutorial/polymorphism/)

    #cpp #polymorphism #class #virtual #interfaces

