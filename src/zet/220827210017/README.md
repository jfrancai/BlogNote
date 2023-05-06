# CPP0 Static members

Static members are meat to be use at the class level.

Because they are like non-member functions, they cannot access non-static members of the class (neither member variables nor member functions). They neither can use the keyword this.

```cpp
// static members in classes
#include <iostream>
using namespace std;

class Dummy {
  public:
    static int n;
    Dummy () { n++; };
};

int Dummy::n=0;

int main () {
  Dummy a;
  Dummy b[5];
  cout << a.n << '\n';
  Dummy * c = new Dummy;
  cout << Dummy::n << '\n';
  delete c;
  return 0;
}
```

More details: [Static members](https://cplusplus.com/doc/tutorial/templates/), [Static for Classes and Structs in C++](https://www.youtube.com/watch?v=V-BFlMrBtqQ)

    #cpp #static #classes
