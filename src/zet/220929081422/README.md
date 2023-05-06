# Sub-typing polymorphism

> What is the difference between a member function and a method ?

In cpp, a method is a dynamically linked member function or virtual member function.

```cpp
class Character
{
	// Virtual declaration /!\ Resolution will happen at execution time.
	public:
		virtual void	sayHello(std::string const &target);
};

// Overiding sayHello function
class Warrior : public Character
{
	// Virtual declaration /!\ Resolution will happen at execution time.
	public:
		virtual void	sayHello(std::string const &target);
};

void	Character::sayHello(std::string const &target)
{
	std::cout << "Hello " << target << std::endl;
}

void	Warrior::sayHello(std::string const &target)
{
	std::cout << "F*** off " << target << std::endl;
}

int main()
{
	Warrior	*a = new Warrior();
	// here we instantiate a Warrior as a Charater (legit)
	Character	*b = new Warrior();
	// This is forbidden
	//Warrior	*b = new Character();

	a->sayHello("toto");
	b->sayHello("toto");
}
```

More details : [Virtual members](https://cplusplus.com/doc/tutorial/polymorphism/)

    #cpp #virtual #inheritance #polymorphism
