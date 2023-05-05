## Effective C++: 55 Specific Ways to Improve Your Programs and Designs

### Intro

"Effective C++: 55 Specific Ways to Improve Your Programs and Designs" is a book written by Scott Meyers that provides guidance and best practices for writing effective, efficient, and maintainable C++ code. The book is organized into 55 specific items, each of which covers a specific technique or concept that can help programmers write better C++ code. The book covers a wide range of topics, including the proper use of C++ features such as templates, exceptions, and inheritance, strategies for debugging and optimizing code, tips for designing and implementing classes and interfaces, and best practices for managing resources and minimizing resource leaks. "Effective C++" is a valuable resource for C++ programmers of all levels, and can help them write code that is more reliable, efficient, and maintainable.

### Chapter 1: Accustoming Yourself to C++

---

**Item 1: View C++ as a federation of languages.**

 This item suggests that C++ is not a single monolithic language, but rather a federation of several smaller languages that work together. These languages include:

* C: The C language is a procedural language that is used for low-level tasks such as memory management and system programming.

* Object-Oriented C++: This is the object-oriented part of C++, which includes features such as classes, inheritance, and polymorphism.

* Template C++: This is the template part of C++, which includes features such as template classes and functions.

* The Standard C++ Library: This is a collection of classes and functions that are provided as part of the C++ Standard Library, including containers, algorithms, and other utility classes.

The idea behind this item is that C++ programmers should be aware of the different languages that make up C++, and should choose the right language or tool for the task at hand. For example, when writing low-level code, it may be appropriate to use C-style techniques such as pointers and manual memory management. However, when writing higher-level code, it may be more appropriate to use object-oriented techniques such as classes and inheritance, or template-based techniques such as STL containers and algorithms.

Overall, this item emphasizes the importance of understanding the different tools and techniques that are available in C++, and using them effectively to write high-quality code.

> **Things to Remember** 
> * Rules for effective C++ programming vary, depending on the part of C++ you are using.

---

**Item 2: Prefer consts, enums, and inlines to #defines.**

This item suggests that C++ programmers should prefer using const variables, enumerated types (enums), and inline functions to using the preprocessor #define directive.

The #define directive allows programmers to define macros, which are short pieces of code that are replaced by the preprocessor before the program is compiled. While macros can be useful in some situations, they can also cause problems if used improperly. For example, macros do not respect scope, which means that they can affect code in unexpected ways. In addition, macros do not provide any type checking, which can lead to errors that are difficult to detect.

In contrast, const variables, enums, and inline functions offer many of the same benefits as macros, but without some of the drawbacks. Const variables and enums provide type checking and respect scope, making them safer and easier to use. Inline functions are similar to macros, but are expanded by the compiler rather than the preprocessor, which allows them to respect scope and provide type checking.

Overall, this item suggests that C++ programmers should use const variables, enums, and inline functions whenever possible, and reserve the use of #define for situations where these options are not sufficient. This can help to improve the readability and maintainability of C++ code.

> **Things to Remember** 
> * For simple constants, prefer const objects or enums to #defines.
> * For function-like macros, prefer inline functions to #defines.

---

**Item 3: Use const whenever possible.**

This item suggests that C++ programmers should use the const keyword to specify that a variable or function should not be modified.

The const keyword can be used in several different ways in C++. For example, it can be used to specify that a variable is a constant, which means that its value cannot be changed after it is initialized. It can also be used to specify that a function does not modify any of the objects it is passed as arguments, or that it does not modify any of the global variables in the program.

Using const can help to improve the reliability and maintainability of C++ code in several ways. For example, it can help to prevent unintended modifications of variables or objects, which can reduce the risk of bugs and other issues. It can also make it easier to understand the behavior of a program, since it clearly specifies which variables and functions are expected to be modified and which are not.

Overall, this item suggests that C++ programmers should use the const keyword as much as possible, in order to help ensure that their code is correct and easy to understand.

```cpp
class TextBlock {
	public:
		...
		const char& operator[](std::size_t position) const
		{
			...
			...
			...
			return text[position];
		}

		char& operator[](std::size_t position) // now just calls const op[]
		{
			return (
				const_cast<char&>( // cast away const on op[]’s return type;
					static_cast<const TextBlock&>(*this) // add const to *this’s type;
					[position] // call const version of op[]
				)
			);
		}
	...
};
```

> **Things to Remember**
> * Declaring something const helps compilers detect usage errors. const can be applied to objects at any scope, to function parameters and return types, and to member functions as a whole.
> * Compilers enforce bitwise constness, but you should program using logical constness (see mutable specifier).
> * When const and non-const member functions have essentially identical implementations, code duplication can be avoided by having the non-const version call the const version.

---

**Item 4: Make sure that objects are initialized before they’re used.**

This item suggests that C++ programmers should ensure that objects are properly initialized before they are used, in order to prevent errors and undefined behavior.

In C++, objects are typically initialized using constructors. A constructor is a special member function that is called when an object is created, and is responsible for initializing the object's data members. If an object is not properly initialized, it may contain undefined or random values, which can lead to errors or unexpected behavior.

One way to ensure that objects are properly initialized is to use the "resource acquisition is initialization" (RAII) idiom. This involves using objects to manage resources, such as memory or file handles, and ensuring that these resources are properly released when they are no longer needed. RAII is based on the idea that the lifetime of a resource should be tied to the lifetime of an object, and that the object's destructor should be responsible for releasing the resource.

Overall, this item suggests that C++ programmers should pay careful attention to object initialization, and use techniques such as RAII to ensure that objects are properly initialized and that resources are properly managed. This can help to improve the reliability and maintainability of C++ code.

> **Things to Remember**
> * Manually initialize objects of built-in type, because C++ only sometimes initializes them itself.
> * In a constructor, prefer use of the member initialization list to assignment inside the body of the constructor. List data members in the initialization list in the same order they’re declared in the class.
> * Avoid initialization order problems across translation units by replacing non-local static objects with local static objects.

---

### Chapter 2: Construtors, Destructors, and Assignment Operators

---

**Item 5: Know what functions C++ silently writes and calls.**

This item suggests that C++ programmers should be aware of the functions that C++ automatically generates and calls in certain situations, in order to prevent unexpected behavior or errors.

In C++, certain member functions are automatically generated by the compiler if they are not explicitly defined by the programmer. These functions are known as "special member functions," and include the default constructor, copy constructor, copy assignment operator, and destructor.

The default constructor is a constructor that takes no arguments and is used to default-initialize an object. The copy constructor is a constructor that takes a const reference to an object of the same type, and is used to initialize a new object using the values of the existing object. The copy assignment operator is an operator that takes a const reference to an object of the same type, and is used to assign the values of the existing object to the current object. The destructor is a member function that is called when an object is destroyed, and is used to release any resources that are held by the object.

It is important for C++ programmers to be aware of these special member functions, and to understand when they are generated and called by the compiler. This can help to prevent unexpected behavior or errors, and can also help to improve the performance of C++ programs.

> **Things to Remember**
> * Compilers may implicitly generate a class’s default constructor, copy constructor, copy assignment operator, and destructor.

---

**Item 6: Explicitly disallow the use of compiler generated functions you do not want.**

This item suggests that C++ programmers should explicitly disallow the use of certain compiler-generated functions if they are not needed, in order to prevent errors or unintended behavior.

In C++, the compiler will automatically generate certain functions if they are not explicitly defined by the programmer. These functions are known as "special member functions," and include the default constructor, copy constructor, copy assignment operator, and destructor.

Sometimes, it may be necessary to prevent the use of certain special member functions, either because they are not needed or because they would cause problems if they were used. For example, if a class contains a pointer to a dynamically-allocated resource, the copy constructor and copy assignment operator would need to be defined in order to properly manage the resource. If these functions are not defined, the compiler will generate default versions that do not handle the resource properly, which can lead to errors or resource leaks.

To prevent the use of a particular special member function in C++98, C++ programmers can declare the function as private and do not provide an implementation for it. This will prevent the function from being used by other code, but will not prevent the compiler from generating a default version of the function.

> **Things to Remember**
> * To disallow functionality automatically provided by compilers, declare the corresponding member functions private and give no implementations. Using a base class like Uncopyable is one way to do this

---

**Item 7: Declare destructors virtual in polymorphic base classes.**

In this item, Meyers discusses the importance of declaring destructors virtual in polymorphic base classes in C++. Polymorphism refers to the ability of a class to have multiple forms, and a base class is a class that is inherited from by one or more derived classes.

When a polymorphic base class has a non-virtual destructor, and an object of a derived class is deleted through a pointer to the base class, the derived class's destructor will not be called. This can lead to resource leaks or other problems, since the derived class's resources will not be properly cleaned up.

To avoid this problem, Meyers advises programmers to declare the destructor of any polymorphic base class as virtual. This ensures that the correct destructor is called, regardless of whether the object is deleted through a pointer to the base class or a pointer to the derived class.

In summary, declaring destructors virtual in polymorphic base classes is important in C++ to ensure that objects are properly destroyed and resources are correctly cleaned up.

> **Things to Remember**
> * Polymorphic base classes should declare virtual destructors. If a class has any virtual functions, it should have a virtual destructor.
> * Classes not designed to be base classes or not designed to be used polymorphically should not declare virtual destructors.

---

**Item 8: Prevent exceptions from leaving destructors.**

In this item, Scott Meyers discusses the potential problems that can arise when exceptions are thrown from within destructors in C++.

Destructors are special functions that are called automatically when an object is destroyed, either when it goes out of scope or when it is deleted explicitly. Throwing an exception from within a destructor can cause problems because the exception will not be caught until the stack is unwound, which may not happen until after other objects have already been destroyed. This can lead to resource leaks or other issues.

To avoid this problem, Meyers advises programmers to take steps to prevent exceptions from being thrown from within destructors. One option is to catch any exceptions that might be thrown and handle them appropriately, such as by logging an error or setting a flag. Another option is to use techniques such as RAII (Resource Acquisition Is Initialization) to ensure that resources are properly cleaned up before an exception has a chance to be thrown.

In summary, preventing exceptions from being thrown from within destructors is important in C++ to avoid potential problems and ensure that resources are properly managed.

> **Things to Remember**
> * Destructors should never emit exceptions. If functions called in a destructor may throw, the destructor should catch any exceptions, then swallow them or terminate the program.
> * If class clients need to be able to react to exceptions thrown during an operation, the class should provide a regular (i.e., non-destructor) function that performs the operation.

---

**Item 9: Never call virtual functions during construction or destruction.**

In this item, the author advises programmers to avoid calling virtual functions during the construction or destruction of an object in C++.

Virtual functions are functions that can be overridden by derived classes, and are called using dynamic dispatch based on the type of the object at runtime. During the construction or destruction of an object, the object's vtable (virtual table) may not have been fully set up or may have been partially or fully destroyed. As a result, calling a virtual function during this time can lead to undefined behavior or other problems.

To avoid this issue, Meyers advises programmers to avoid calling virtual functions during the construction or destruction of an object. He suggests that if it is necessary to call a virtual function at these times, it should be done indirectly through a non-virtual function or by using a function pointer.

In summary, calling virtual functions during the construction or destruction of an object in C++ can lead to undefined behavior or other problems, and should be avoided whenever possible. Instead, programmers should use alternative techniques to indirectly call virtual functions at these times, if necessary.

> **Things to Remember**
> * Don’t call virtual functions during construction or destruction, because such calls will never go to a more derived class than that of the currently executing constructor or destructor.

---

**Item 10: Have assignment operators return a reference to \*this**

In this item, Meyers advises to have assignment operators return a reference to the object being assigned to. This allows for chained assignment statements, such as:

```cpp
MyClass obj1, obj2, obj3;
obj1 = obj2 = obj3;
```

Without returning a reference, the above code would result in a temporary object being created and then immediately destroyed, which is inefficient. By returning a reference, the assignments are done directly to the target objects, obj1, obj2, and obj3, which is more efficient.

Returning a reference to \*this also allows the assignment operator to be used in the initialization of reference variables. For example:

```cpp
MyClass &obj1 = obj2 = obj3;
``` 

Here, obj1 is a reference to obj2, which is assigned the value of obj3. If the assignment operator did not return a reference, this initialization would not be possible.

It is generally good practice to have assignment operators return a reference to \*this, as it allows for more efficient and versatile code.

> **Things to Remember**
> * Have assignment operators return a reference to \*this.

---

**Item 11: Handle assignment to self in operator=**

 In this item, Meyers advises to handle the case of assignment to self in assignment operators. This means that the assignment operator should check if the object being assigned to is the same as the object being assigned from, and if so, do nothing.

For example, consider the following code:

```cpp
MyClass &MyClass::operator=(const MyClass &rhs) {
  // Check for assignment to self
  if (this == &rhs) return *this;
  
  // Perform assignment
  // ...
  
  return *this;
}
```

If the object being assigned to (this) and the object being assigned from (rhs) are the same, the operator does nothing and simply returns. This is important because if the operator did not handle this case, it could potentially modify the object in a way that could lead to undefined behavior.

It is good practice to handle assignment to self in assignment operators to ensure the correctness and stability of the code.

> **Things to Remember**
> * Make sure operator= is well-behaved when an object is assigned to itself. Techniques include comparing addresses of source and target objects, careful statement ordering, and copy-and-swap.
> * Make sure that any function operating on more than one object behaves correctly if two or more of the objects are the same.

---

**Item 12: Copy all parts of an object**

This item advises to copy all parts of an object when implementing the copy constructor and assignment operator. This includes not only the data members of the object, but also any pointers or resources that the object may hold.

For example, consider the following class:

```cpp
class MyClass {
 public:
  MyClass(const MyClass &rhs);  // Copy constructor
  MyClass& operator=(const MyClass &rhs);  // Assignment operator
  
 private:
  int \*ptr_;
};
```

If the copy constructor and assignment operator simply copied the value of ptr_, the resulting object would hold a pointer to the same memory as the original object. This could lead to problems if the original object is modified or destroyed, as the copy would then be pointing to invalid memory.

To avoid this issue, the copy constructor and assignment operator should allocate new memory for the copy, and copy the contents of the original object into that memory. For example:

```cpp
MyClass::MyClass(const MyClass &rhs) {
  ptr_ = new int(\*rhs.ptr_);  // Allocate new memory and copy the value
}

MyClass& MyClass::operator=(const MyClass &rhs) {
  if (this == &rhs) return \*this;  // Handle assignment to self
  
  delete ptr_;  // Deallocate old memory
  ptr_ = new int(*rhs.ptr_);  // Allocate new memory and copy the value
  
  return \*this;
}
```
By copying all parts of the object, including pointers and resources, the copy constructor and assignment operator create a true copy of the object that is independent of the original. This is important for maintaining the correctness and stability of the code.

> **Things to Remember**
> * Copying functions should be sure to copy all of an object’s data members and all of its base class parts.
> * Don’t try to implement one of the copying functions in terms of the other. Instead, put common functionality in a third function that both call.

---

### Chapter 3: Ressource Management

---

**Item 13: Use objects to manage resources.**

Item 13 of Scott Meyers' "Effective C++" advises to use objects to manage resources, such as memory, file handles, and network sockets. This means that the object should be responsible for allocating and deallocating the resource, and the resource should be released when the object is destroyed.

This helps to ensure that resources are properly managed and released, and helps to prevent resource leaks. It also makes it easier to write exception-safe code, as the object's destructor will be called when an exception is thrown, releasing the resource even if the code is not able to do so explicitly.

For example, consider the following class:

```cpp
class MyClass {
 public:
  MyClass();  // Constructor
  ~MyClass();  // Destructor

 private:
  int \*ptr_;
};
```

If MyClass is responsible for managing a resource, such as a block of dynamically-allocated memory, the constructor should allocate the memory and the destructor should deallocate it. For example:

```cpp
MyClass::MyClass() {
  ptr_ = new int;  // Allocate the resource
}

MyClass::~MyClass() {
  delete ptr_;  // Deallocate the resource
}
```

By using objects to manage resources, the resource is automatically released when the object is destroyed, which helps to prevent resource leaks and makes it easier to write exception-safe code.

> **Things to Remember**
> * To prevent resource leaks, use Resource Acquisition Is Initialization (RAII) objects that acquire resources in their constructors and release them in their destructors.
> * Two commonly useful RAII classes are tr1::shared_ptr and auto_ptr. tr1::shared_ptr is usually the better choice, because its behavior when copied is intuitive. Copying an auto_ptr sets it to null.

---

**Item 14: Think carefully about copying behavior in resource-managing classes.**

Item 14 of "Effective C++" advises developers to be careful when implementing copy behavior in resource-managing classes, as it can have unintended consequences and can be difficult to get right. Resource-managing classes are classes that manage resources such as memory, file handles, or network sockets, and are responsible for properly acquiring, releasing, and cleaning up these resources.

One issue to consider is the ownership of the resources being managed. When a resource-managing object is copied, it is not always clear who should be responsible for the resources it manages. The original object may want to retain ownership and continue managing the resources, while the copy may also want to manage them. This can lead to problems such as double-deletion or resource leaks.

To avoid these issues, developers should carefully consider the intended behavior of their resource-managing classes when copying is involved. One option is to disable copying entirely by declaring the copy constructor and assignment operator as private. Another option is to use reference counting or some other form of shared ownership to ensure that resources are properly managed and released when no longer needed.

In summary, when implementing resource-managing classes, it is important to carefully consider the implications of copying and to design the copy behavior in a way that is safe and easy to understand.

> **Things to Remember**
> * Copying an RAII object entails copying the resource it manages, so the copying behavior of the resource determines the copying behavior of the RAII object.
> * Common RAII class copying behaviors are disallowing copying and performing reference counting, but other behaviors are possible.

---

**Item 20: Prefer pass-by-reference-to-const to pass-byvalue.**

```cpp
bool validateStudent(Student s); // function taking a Student by value

bool validateStudent(const Student& s); // function taking a Student by reference
```

```cpp
class Window {
	public:
		...
		std::string name() const; // return name of window
		virtual void display() const; // draw window and contents
};

class WindowWithScrollBars: public Window {
	public:
		...
		virtual void display() const;
};

void printNameAndDisplay(Window w) // incorrect! parameter may be sliced!
{
	std::cout << w.name();
	w.display();
}

WindowWithScrollBars wwsb;
printNameAndDisplay(wwsb); //will behave as a Window inside printNameAndDisplay : slicing
```

> **Things to Remember**
> * Prefer pass-by-reference-to-const over pass-by-value. It’s typically more efficient and it avoids the slicing problem.
> * The rule doesn’t apply to built-in types and STL iterator and function object types. For them, pass-by-value is usually appropriate.

---

**Item 30: Understand the ins and outs of inlining.**

Item 30 of Scott Meyers' "Effective C++" advises to understand the ins and outs of inlining, which is the process of expanding a function's code directly at the point of the function call. This can improve the performance of the code by reducing the overhead of function calls, but it also has some potential drawbacks.

One of the main benefits of inlining is that it can improve the performance of the code by reducing the overhead of function calls. This is especially true for small, simple functions that are called frequently. By expanding the code directly at the point of the call, the function does not need to be invoked, which can save time and reduce the number of instructions executed.

However, there are also some potential drawbacks to inlining. One is that it can increase the size of the compiled code, as the function's code is replicated at each point of the call. This can lead to larger executable files and increased memory usage. Inlining can also make it more difficult to debug the code, as the debugger may not be able to step through the inlined function as it would a normal function.

In general, inlining can be a useful optimization technique, but it is important to understand its trade-offs and use it wisely. Inlining should be considered for small, simple functions that are called frequently, but it may not be appropriate for larger or more complex functions. It is also important to consider the size of the compiled code and the potential impact on debugging when deciding whether to inline a function.

> **Things to Remember** 
> * Limit most inlining to small, frequently called functions. This facilitates debugging and binary upgradability, minimizes potential code bloat, and maximizes the chances of greater program speed. 
> * Don’t declare function templates inline just because they appear in header files.

---

### Chapter 7: Templates and Generic Programming

Template programming allows developers to write code that is flexible and reusable, as it allows for the creation of generic functions and classes that can be customized to work with a variety of different data types. This chapter will provide an overview of the syntax and usage of templates in C++, as well as some best practices for designing and implementing templates in your code. It will also discuss some of the advanced features of template programming, such as specialization and overloading, and how they can be used to tailor the behavior of your templates to specific data types or scenarios. Overall, this chapter will help you understand the power and capabilities of template programming in C++, and how you can use it to write more efficient and effective code.

---

**Item 41: Understand implicit interfaces and compiletime polymorphism.**

Item 41 of Effective C++ discusses the concept of implicit interfaces and compile-time polymorphism in C++. An implicit interface is a set of functions that a class must define in order to be used in a certain way. For example, a class that defines a begin and end function can be used with the range-based for loop in C++.

Compile-time polymorphism, also known as static polymorphism or template-based polymorphism, is a technique in C++ that allows you to write code that is generic and reusable, but that is compiled specifically for the data types it is used with. This is achieved through the use of templates, which allow you to define functions and classes that can be customized to work with different data types.

One benefit of implicit interfaces and compile-time polymorphism is that they allow you to write code that is more flexible and adaptable to different situations. They also enable you to write code that is more efficient, as it can be optimized specifically for the data types it is used with at compile time. However, it is important to understand the limitations of these techniques and how they differ from dynamic polymorphism, which is achieved through inheritance and virtual functions.

> **Things to Remember** 
> * Both classes and templates support interfaces and polymorphism.
> * For classes, interfaces are explicit and centered on function signatures. Polymorphism occurs at runtime through virtual functions.
> * For template parameters, interfaces are implicit and based on valid expressions. Polymorphism occurs during compilation through template instantiation and function overloading resolution.

---

**Item 42: Understand the two meanings of typename**

This item covers the concept of the typename keyword in C++, which has two distinct meanings depending on context.

The first use of typename is to specify that a dependent name is a type, rather than a value or a function. This is necessary when a type depends on a template parameter, as the compiler cannot determine whether the name is a type or something else without additional information. For example:

```cpp
template <typename T>
void func(T t) {
  typename T::type value;  // Specify that T::type is a type
  // ...
}
```

The second use of typename is to specify that a name is a template, rather than a type or a value. This is necessary when a template is nested within another template, as the compiler cannot determine whether the name refers to a type or a template without additional information. For example:

```cpp
template <typename T>
class Outer {
 public:
  template <typename U>
  class Inner {
    // ...
  };
};

template <typename T>
void func() {
  typename Outer<T>::template Inner<int> inner;  // Specify that Inner is a template
  // ...
}
```

It is important to understand the difference between these two uses of typename, as using the wrong one can result in compile errors. Using typename correctly can help you write more flexible and generic code, as it allows you to specify that certain names are types or templates when they depend on template parameters.

> **Things to Remember** 
> * When declaring template parameters, class and typename are interchangeable.
> * Use typename to identify nested dependent type names, except in base class lists or as a base class identifier in a member initialization list.

---

**Item 43: Know how to access names in templatized base classes.**

This item is about how to access names in templatized base classes. When you derive from a templatized base class, you need to specify the type arguments for the base class in the derived class' definition. This allows the derived class to access the names in the base class using the "::" scope resolution operator. For example:

```cpp
template <typename T>
class Base {
 public:
  void doSomething() {
    // ...
  }
};

template <typename T>
class Derived : public Base<T> {
 public:
  void doSomethingElse() {
    // Access doSomething() from the base class
    Base<T>::doSomething();
  }
};
```

In this example, the Derived class is derived from the Base class, and the type argument T is specified in the derived class definition. The Derived class can then access the doSomething() function in the Base class using the scope resolution operator.

It's also possible to use a type alias or typedef to simplify the syntax for accessing names in templatized base classes. For example:

```cpp
template <typename T>
class Derived : public Base<T> {
 public:
  typedef Base<T> BaseType;

  void doSomethingElse() {
    // Access doSomething() from the base class using the type alias
    BaseType::doSomething();
  }
};
```

Using a type alias or typedef can make the code more readable and easier to maintain, especially in cases where the base class has a long or complex template argument list.

> **Things to Remember** 
> * In derived class templates, refer to names in base class templates via a “this->” prefix, via using declarations, or via an explicit base class qualification.

---

**Item 44: Factor parameter-independent code out of templates.**

---

**Item 53: Pay attention to compiler warnings.**

> **Things to Remember** 
> * Take compiler warnings seriously, and strive to compile warningfree at the maximum warning level supported by your compilers. 
> * Don’t become dependent on compiler warnings, because different compilers warn about different things. Porting to a new compiler may eliminate warning messages you’ve come to rely on.

---

```cpp
Widget w1; // invoke default constructor
Widget w2(w1); // invoke copy constructor
w1 = w2; // invoke copy assignment operator
Widget w3 = w2; // invoke copy constructor!
```

---

*This article was written with ChatGPT*

---

More details : [What Books to Read to Get Better In C++](https://www.fluentcpp.com/2017/07/28/what-books-to-read-to-get-better-at-c/)


    #c++ #readings
