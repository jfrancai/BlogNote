# What are the differences between a pointer variable and a reference variable ?

```cpp
int x = 5;
int &p; // error
int &q = x;
```

```cpp
void	Increment(int &i)
{
	i++; // since i is a reference to a, it increments a;
}

int	main(void)
{
	int a;
	Increment(a);
	return (0);
}
```
More details: [references](https://stackoverflow.com/a/57492), [REFERENCES in C++](https://www.youtube.com/watch?v=IzoFn3dfsPA)

    #cpp #reference #pointer #operator
