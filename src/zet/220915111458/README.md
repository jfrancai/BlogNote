# Function Overloading

> In C++, two different functions can have the same name if their parameters are different; either because they have a different number of parameters, or because any of their parameters are of a different type.

```cpp
void	bar(char const c) const;
void	bar(int const n) const;
void	bar(float const z) const;
void	bar(Sample const &i) const;
```

More details : [Overloaded functions](https://cplusplus.com/doc/tutorial/functions2/)

    #cpp #overloads
