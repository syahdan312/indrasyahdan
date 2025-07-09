The union() Method
The union() method returns the union of two sets.

The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

Union

Example
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);