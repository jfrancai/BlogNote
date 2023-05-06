# What is inherited from the base class ?

Derived class inherits access to every member of a base class except:
- constructors/destructor
- assignment operator members
- friends
- private members

It is possible to call a different constructor that the one from the base class :
```cpp
derived_constructor_name (parameters) : base_constructor_name (parameters) {...}
```
> More details in more details.

More details : [topic](https://cplusplus.com/doc/tutorial/inheritance/)

    #cpp #inheritance #private #public #protected #friends #assignment #constructor #destructor

