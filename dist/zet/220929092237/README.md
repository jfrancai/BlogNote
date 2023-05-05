# Polymorphism : Pointers to base class

> One of the key features of class inheritance is that a pointer to a derived class is type-compatible with a pointer to its base class. Polymorphism is the art of taking advantage of this simple but powerful and versatile feature.

```cpp
class Polygon {
	//...
};

class Rectangle: public Polygon {
	//...
};

class Triangle: public Polygon {
	//...
};
int main () {
  Rectangle rect;
  Triangle trgl;
  Polygon * ppoly1 = &rect;
  Polygon * ppoly2 = &trgl;
  return 0;
}
```

> Just read more details for more details.

More details : [Pointers to base class](https://cplusplus.com/doc/tutorial/polymorphism/)

    #cpp #polymorphism #inheritance
