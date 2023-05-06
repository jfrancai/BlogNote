# Diamond inheritance problem

This problem occurs when there is ambiguity about a function call. For example, when your class is derived from two classes that have the same function of another base class.

In C++ we can solve this problem using virtual inheritance.

```cpp
class storable //this is the our base class inherited by transmitter and receiver classes
{
        public:
        storable(const char*);
        virtual void read();
        virtual void write(); 
        virtual ~storable();
        private:
        ....
}

class transmitter: public virtual storable
{
        public:
        void read();
        ...
}

class receiver: public virtual storable
{
        public:
        void read();
        ...
}

class radio: public transmitter, public receiver
{
        public:
        void read();
        ....
}
```

> When we use virtual inheritance, we are guaranteed to get only a single instance of the common base class. 

> Take a look at ``man gcc`` -Wshadow and -Wno-shadow

More details : [Solving the Diamond Problem with Virtual Inheritance](https://www.cprogramming.com/tutorial/virtual_inheritance.html)

    #cpp #inheritance #class #gcc
