# CPP0 Access specifier: public/private/protected members

An access specifier is one of the following three keywords: private, public or protected. These specifiers modify the access rights for the members that follow them:

> By default, all members of a class declared with the class keyword have private access for all its members. Therefore, any member that is declared before any other access specifier has private access automatically. 

* ``private`` members of a class are accessible only from within other members of the same class
* ``protected`` members are accessible from other members of the same class, but also from members of their derived classes.
* ``public`` members are accessible from anywhere where the object is visible.

> A good code convention is to prefix private members with an underscore

More details: [Classes (I)](https://cplusplus.com/doc/tutorial/classes/)

    #cpp #private #public #protected #access #convention
