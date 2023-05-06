# Exceptions

* handlers
* try-block

```cpp
//Form.hpp
class Form
{
	/*...*/
	public:
		void beSigned(Bureaucrat const &bureaucrat);
		class GradeTooLowException : public std::exception
		{
			virtual const char *what() const throw();
		};
	private:
		bool _isSigned;
}

//Form.cpp
void	Form::beSigned(Bureaucrat const &bureaucrat)
{
	if (bureaucrat.getGrade() <= this->_gradeToSign)
		this->_isSigned = true;
	else
		throw Form::GradeTooLowException();
}

const char *Form::GradeTooLowException::what() const throw()
{
	return ("Grade too low Exception");
}

//main.cpp
int	main(void)
{
	Bureaucrat bob("bob", 120);
	Form form("form");

	try
	{
		form.beSigned(bob);
	}
	catch (std::exception &e)
	{
		std::cout << e.what() << std::endl;
	}
}

```

> The type of the thrown variable must be the same as the type captured in the catch block. If an ellipsis (...) is used as the parameter of catch, that handler will catch any exception no matter what the type of the exception thrown.

More details : [exceptions](https://cplusplus.com/doc/tutorial/exceptions/), [std::exception](https://en.cppreference.com/w/cpp/error/exception)

    #cpp #try #catch #throw
