# Default Type

* naming convention for templates : MyTemp.class.tpp

```cpp
template<typename T = float>
MyClass
{
	/* ... */
}

int main(void)
{
	MyClass<> // We can instantiate MyClass, float type will be the default type
}
```

> Implicit cast will happen if the type you pass in is not the same as the default type of the template.

Credit : Thor from 42 intranet

    #cpp #template
