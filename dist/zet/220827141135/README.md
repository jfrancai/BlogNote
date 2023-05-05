# CPP0 Classes and instance

keywords :
* instantiation of a class => object instance
* constructor
* destructor
* member function
* data member

Class declaration :
```cpp
class Sample {
public:
	int foo;
	Sample(void);
	~Sample(void);
	void bar(void);
};
```
> Don't forget semi-colon at the end of class declaration :)

Class definition :
```cpp
Sample::Sample(void){
	return ;
}

Sample::~Sample(void){
	return ;
}

void Sample::bar(void){
	return ;
}
```
> Constructor and Destructor don't have return type

More details : [Classes](https://cplusplus.com/doc/tutorial/classes/)

    #cpp #classes #oop
