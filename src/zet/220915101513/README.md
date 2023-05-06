# About Floating Point Numbers

> Accuracy and precision are two concepts in measurement that nicely capture the different properties of ints and floats (on any system, independent of the particular floating point representation used). "Accuracy" refers to how close a measurement is to the true value, whereas "precision" has to do with how much information you have about a quantity, how uniquely you have it pinned down.

Integers are accurate but imprecise, while floating point numbers are precise but inaccurate.

Property | Value for float | Value for double
---|---|---
Largest representable number | 3.402823466e+38 | 1.7976931348623157e+308
Smallest number without losing precision | 1.175494351e-38 | 2.2250738585072014e-308
Smallest representable number(*) | 1.401298464e-45 | 5e-324
Mantissa bits | 23 | 52
Exponent bits | 8 | 11
Epsilon(**) | 1.1929093e-7 | 2.220446049250313e-16

More details : [Understanding and Using Floating Point Numbers](https://www.cprogramming.com/tutorial/floating_point/understanding_floating_point.html), [Floating point number representation](https://www.cprogramming.com/tutorial/floating_point/understanding_floating_point_representation.html), [Printing floating point numbers](https://www.cprogramming.com/tutorial/floating_point/understanding_floating_point_printing.html)

    #float #int #cpp
