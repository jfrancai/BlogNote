# Dynamic memory allocation in CPP

* ``new`` keyword - to allocate space dynamically on the heap.

```
pointer = new <type>
pointer = new <type> [number_of_elements]
```
* ``delete`` keyword - to deallocate memory on the heap. 
```
delete pointer;
delete[] pointer;
```

```cpp
int	*p = new int(10); // new returns the address of the allocated memory
*p = 5; // we can access p value with dereference operator
delete p; // p is now free to be reasigned
p = 0; // Good practice

int	*tab;
tab = new int[5]; // if allocation fails, an exception is thrown
delete[] tab;
tab = 0;

int * foo;
foo = new (nothrow) int [5];
if (foo == nullptr) {
  // error assigning memory. Take measures.
}
delete[] foo;
foo = 0;
```
> ``(nothrow)`` prevent ``bad_alloc`` exeption and ``new`` return a null pointer

> dangling pointer - a pointer that no longer points to something valid on the heap.

More details: [Dynamic memory](https://cplusplus.com/doc/tutorial/dynamic/), [Pointers and Dynamic Memory in C++](https://www.youtube.com/watch?v=CSVRA4_xOkw)

    #cpp #new #delete #heap
