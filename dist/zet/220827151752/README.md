# CPP0 Iniatialization list

When a constructor is used to initialize other members, these other members can be initialized directly, without resorting to statements in its body. This is done by inserting, before the constructor's body, a colon (:) and a list of initializations for class members. 
```cpp
class Sample {
public:
	char	a1;
	int		a2;
	float	a3;
	Sample(char p1, int p2, float p3);
	~Sample(void);
};

Sample::Sample(char p1, int p2, float p3) : a1(p1), a2(p2), a3(p3) {
	return ;
}

Sample::~Sample(void){
	return ;
}
```

More details : [Member initialization in constructors](https://cplusplus.com/doc/tutorial/classes/), [Why should I prefer to use member initialization lists?](https://stackoverflow.com/questions/926752/why-should-i-prefer-to-use-member-initialization-lists)

    #cpp #initlists #constructor #classes
