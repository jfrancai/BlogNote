# CPP0 Pointers-to-members

They are access pointers to class members.

```cpp
Sample	inst; // instance of class Sample
Sample	*inst_p; // pointer to an instance of class Sample

int	Sample::*p = NULL; // pointer to a data member of class Sample
void	(Sample::*f)(void) const; // pointer to a member function of class Sample and don't forget to specify if your function is const

p = &Sample::foo; // Here we are not refering to any instance yet

inst.*p = 21; // ...so we need to specify which instance we want p to refer to with .* operator
inst_p->*p = 42; // or ->*

(inst.*f)(); // Same here.
(inst_p->*f)(); // Same here.
```

``.*`` and ``->*`` are called pointers-to-members

Related: [Operators](https://cplusplus.com/doc/tutorial/operators/)

    #cpp #pointers #operators #precedence
